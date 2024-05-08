import { useDrag } from "ahooks";
import { useRef, useState } from "react";

const DragItem = ({ data }: { data: any }) => {
  const dragRef = useRef(null);

  const [dragging, setDragging] = useState(false);

  useDrag(data, dragRef, {
    onDragStart: () => {
      setDragging(true);
    },
    onDragEnd: () => {
      setDragging(false);
    },
  });

  return (
    <div
      ref={dragRef}
      style={{
        border: "1px solid #e8e8e8",
        padding: 16,
        width: 80,
        textAlign: "center",
        marginRight: 16,
      }}
    >
      {dragging ? "dragging" : `box-${data.index}`}
    </div>
  );
};

export default DragItem;
