import { useDrag } from 'react-dnd';

const DraggableBox = () => {
  const [{ isDragging }, drag] = useDrag({
    type: 'box',
    item: { data: 'box' }, // 定义拖动的类型和其他相关信息
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1; // 根据拖动状态设置元素透明度

  return (
    <div
      ref={drag}
      style={{ opacity, cursor: 'move' }}
    >
      <div style={{background:'red', width: 50, height: 50}}></div>
    </div>
  );
};

export default DraggableBox;