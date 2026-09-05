import { useEffect, useState } from "react";

export default function useScrollSpy(ids, offset = 140) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      const pos = window.scrollY + offset;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      });
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
