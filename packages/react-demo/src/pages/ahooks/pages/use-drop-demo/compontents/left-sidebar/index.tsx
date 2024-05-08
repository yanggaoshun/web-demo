import React from "react";
import DragItem from "../drag-item";

export default function LeftSidebar() {
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {["1", "2", "3", "4", "5"].map((e) => (
        <DragItem key={e} data={{index: e}} />
      ))}
    </div>
  );
}
