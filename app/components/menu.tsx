"use client";
import { createRef, useRef, useState } from "react";

export const Menu = ({ items }: any) => {
  const $items = useRef(items.map(createRef));
  const [active, setActive] = useState(0);

  return (
    <div style={{ float: "left", left: "50%", position: "absolute", top: 0 }}>
      <div className="menu" style={{ position: "absolute", top: 30, width: 800 }}>
        {items.map((item: any, index: number) => (
          <a
            key={item.name}
            style={{ padding: 20 }}
            ref={$items.current[index]}
            className={`item ${active === index ? "active" : ""}`}
            onMouseEnter={() => {
              setActive(index);
            }}
            href={item.href}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};
