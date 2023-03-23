import ButtonsGroup from "@/components/editor/ButtonsGroup";
import IconEditorButton from "@/components/editor/IconEditorButton";
import { Editor } from "@tiptap/react";
import { FC } from "react";
import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight
} from "react-icons/md";

const TextAlignTools: FC<{ editor: Editor }> = ({ editor }) => {
  return (
    <ButtonsGroup>
      <IconEditorButton
        icon={MdFormatAlignLeft}
        ariaLabel={"align left"}
        isActive={editor.isActive({ textAlign: "left" })}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
      />
      <IconEditorButton
        icon={MdFormatAlignCenter}
        ariaLabel={"align left"}
        isActive={editor.isActive({ textAlign: "center" })}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      />
      <IconEditorButton
        icon={MdFormatAlignRight}
        ariaLabel={"align left"}
        isActive={editor.isActive({ textAlign: "right" })}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
      />
    </ButtonsGroup>
  );
};

export default TextAlignTools;
