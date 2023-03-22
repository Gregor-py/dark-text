import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC } from "react";
import ToolsBar from "./Tools";

const TextEditor: FC = () => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle,
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false
        }
      })
    ],
    content: "<p>Hello World! 🌎️</p>",
    injectCSS: true
  });

  return (
    <>
      <ToolsBar editor={editor} />
      <EditorContent
        style={{ border: "2px solid #fff", padding: 10 }}
        editor={editor}
      />
    </>
  );
};

export default TextEditor;
