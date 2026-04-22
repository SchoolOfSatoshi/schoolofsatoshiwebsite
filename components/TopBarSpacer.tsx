"use client";

import { useEffect, useState } from "react";

export default function TopBarSpacer() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const topBar = document.getElementById("top-bar");
    if (!topBar) return;

    const update = () => setHeight(topBar.offsetHeight);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(topBar);
    return () => observer.disconnect();
  }, []);

  return <div style={{ height }} aria-hidden="true" />;
}
