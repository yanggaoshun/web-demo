import { useRef, useState } from "react";
import { useDrop } from "ahooks";
import Layout from "./compontents/layout";
import { useAtom } from "jotai";
import { editorListAtom } from "./atom/drop";
import DragItem from "./compontents/drag-item";

export default function Drop() {
  const [isHovering, setIsHovering] = useState(false);

  const [editorList, setEditorList] = useAtom(editorListAtom);

  const dropRef = useRef(null);

  useDrop(dropRef, {
    onText: (text, e) => {
      console.log(e);
      alert(`'text: ${text}' dropped`);
    },
    onFiles: (files, e) => {
      console.log(e, files);
      alert(`${files.length} file dropped`);
    },
    onUri: (uri, e) => {
      console.log(e);
      alert(`uri: ${uri} dropped`);
    },
    onDom: (content: any, e) => {
        if(content.type === 'rr') {
            return
        }
      //   alert(`custom: ${content} dropped`);
      setEditorList([
        ...editorList,
        <DragItem key={content.index} data={{index: content.index, type: 'rr'}} />
      ]);
    },
    onDragEnter: () => setIsHovering(true),
    onDragLeave: () => setIsHovering(false),
  });

  return (
    <Layout>
      <div
        ref={dropRef}
        style={{
          border: "1px dashed #e8e8e8",
          padding: 16,
          textAlign: "center",
          minHeight: 600,
          width: 375,
        }}
      >
        {editorList}
      </div>
    </Layout>
  );
}
