import DropTargetComponent from "./DropTargetComponent"
import DraggableBox from './DraggableBox';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
interface IProps {
  name?: string;
}
const Demo = (props:IProps) => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
      <DraggableBox />
      <DropTargetComponent/>
    </DndProvider>
    </div>
  )
}

export default Demo