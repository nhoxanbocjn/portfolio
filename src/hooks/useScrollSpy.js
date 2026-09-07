import { useEffect, useState } from "react";

export default function useScrollSpy(ids, offset = 140) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const pos = scrollY + offset;
      let current = ids[0];

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= pos) current = id;
      });

      // Guarantee the last section activates near the bottom of the page.
      const lastEl = document.getElementById(ids[ids.length - 1]);
      if (lastEl) {
        const doc = document.documentElement;
        const maxScroll = doc.scrollHeight - doc.clientHeight;
        if (maxScroll - scrollY < 220) current = ids[ids.length - 1];
      }

      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, offset]);

  return active;
}
