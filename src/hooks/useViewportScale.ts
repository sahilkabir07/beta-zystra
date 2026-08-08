import { useEffect } from "react";

/**
 * useViewportScale
 *
 * Locks the entire site to a fixed design width (DESIGN_WIDTH = 1440px).
 * On any laptop/desktop screen, the layout is scaled uniformly so it always
 * looks IDENTICAL — no reflow, no responsive breakpoints changing layout.
 *
 * The root element is transformed with:
 *   transform: scale(viewportWidth / DESIGN_WIDTH)
 *   transform-origin: top left
 *   width: DESIGN_WIDTH (always)
 *
 * Vertical scroll is compensated by wrapping the root with a sized div,
 * so the browser scrolls the correct amount.
 */

const DESIGN_WIDTH = 1440;

export function useViewportScale() {
  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout> | null = null;
    let isUpdating = false;

    function ensureWrapper() {
      let wrapper = document.getElementById("__scale_wrapper__");
      if (!wrapper) {
        wrapper = document.createElement("div");
        wrapper.id = "__scale_wrapper__";
        wrapper.style.position = "relative";
        wrapper.style.width = "100%";
        const root = document.getElementById("root");
        if (root && root.parentNode) {
          root.parentNode.insertBefore(wrapper, root);
          wrapper.appendChild(root);
        }
      }
      return wrapper;
    }

    function applyScale() {
      if (isUpdating) return;
      isUpdating = true;

      const vw = window.innerWidth;
      const scale = vw / DESIGN_WIDTH;
      const root = document.getElementById("root");
      if (!root) { isUpdating = false; return; }

      // Lock root width and scale
      root.style.width = `${DESIGN_WIDTH}px`;
      root.style.transformOrigin = "top left";
      root.style.transform = `scale(${scale})`;
      root.style.position = "relative";
      root.style.overflowX = "hidden";

      // Compensate wrapper height so page scrolls correctly
      const wrapper = ensureWrapper();
      const scaledHeight = root.scrollHeight * scale;
      wrapper.style.height = `${scaledHeight}px`;
      wrapper.style.overflow = "hidden";

      // No horizontal scroll on html/body
      document.documentElement.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
      document.body.style.margin = "0";
      document.body.style.padding = "0";

      isUpdating = false;
    }

    function scheduleUpdate() {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(applyScale, 50);
    }

    // Initial setup
    ensureWrapper();
    applyScale();

    // Resize listener
    window.addEventListener("resize", scheduleUpdate);

    // Watch for route/content changes (only direct children, no subtree style watching)
    const root = document.getElementById("root");
    const observer = new MutationObserver((mutations) => {
      // Only trigger on structural changes, not attribute/style changes
      const isStructural = mutations.some(
        (m) => m.type === "childList" && m.addedNodes.length > 0
      );
      if (isStructural) scheduleUpdate();
    });

    if (root) {
      observer.observe(root, { childList: true, subtree: false });
    }

    return () => {
      window.removeEventListener("resize", scheduleUpdate);
      observer.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);
}


