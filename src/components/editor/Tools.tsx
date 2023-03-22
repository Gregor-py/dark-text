import IconEditorButton from "@/components/editor/IconEditorButton";
import { Flex } from "@chakra-ui/react";
import { Editor } from "@tiptap/react";
import { FC } from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS
} from "react-icons/md";

const ToolsBar: FC<{ editor: Editor | null }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <Flex gap={2} alignItems={"center"} bg={"bg.100"} p={3} borderRadius={10}>
      <IconEditorButton
        icon={MdFormatBold}
        ariaLabel={"Bold"}
        isActive={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <IconEditorButton
        icon={MdFormatItalic}
        ariaLabel={"Italic"}
        isActive={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <IconEditorButton
        icon={MdStrikethroughS}
        ariaLabel={"strike"}
        isActive={editor.isActive("strike")}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />
      <IconEditorButton
        icon={MdFormatUnderlined}
        ariaLabel={"underline"}
        isActive={editor.isActive("underline")}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />
    </Flex>
  );
};

export default ToolsBar;
