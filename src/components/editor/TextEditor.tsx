import { Color } from "@tiptap/extension-color";
import { Heading } from "@tiptap/extension-heading";
import { Link } from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC } from "react";
import ToolsBar from "./Tools";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

const TextEditor: FC = () => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      Link,
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3]
      })
    ],
    content: "<p>Hello World! 🌎️</p>",
    injectCSS: true
  });

  return (
    <>
      <ToolsBar editor={editor} />
      <EditorContent style={{ marginTop: 20 }} editor={editor} />
    </>
  );
};

export default TextEditor;
