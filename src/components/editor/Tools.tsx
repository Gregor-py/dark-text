import ButtonsGroup from "@/components/editor/ButtonsGroup";
import IconEditorButton from "@/components/editor/IconEditorButton";
import TextAlignTools from "@/components/editor/TextAlignToold";
import { Flex } from "@chakra-ui/react";
import { Editor } from "@tiptap/react";
import { FC } from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS
} from "react-icons/md";
import SetLink from "./SetLink";

const ToolsBar: FC<{ editor: Editor | null }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <Flex gap={2} alignItems={"center"} bg={"bg.100"} p={3} borderRadius={10}>
      <ButtonsGroup separatorRight={true}>
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
      </ButtonsGroup>
      <ButtonsGroup separatorRight={true}>
        <SetLink editor={editor} />
      </ButtonsGroup>
      <TextAlignTools editor={editor} />
    </Flex>
  );
};

export default ToolsBar;
