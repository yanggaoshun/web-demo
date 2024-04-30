import { useDrop } from "react-dnd";

const DropTargetComponent = () => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ["box"], // 定义可以接收的拖放类型
    drop: (item, monitor) => {
      // 在拖放完成时执行的操作
      // 可以在这里处理拖放的逻辑
      console.log(item, "item");
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{ backgroundColor: isOver && canDrop ? "green" : "white" }}
    >
      {/* 这个区域可以接收拖放元素 */}
      <div style={{ width: 500, height: 500 }}>测试</div>
    </div>
  );
};

export default DropTargetComponent;
