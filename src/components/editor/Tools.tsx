import IconEditorButton from "@/components/editor/IconEditorButton";
import { Flex } from "@chakra-ui/react";
import { Editor } from "@tiptap/react";
import { FC } from "react";
import { MdFormatBold } from "react-icons/md";

const ToolsBar: FC<{ editor: Editor | null }> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <Flex alignItems={"center"} bg={"bg.100"} p={3} borderRadius={10}>
      <IconEditorButton
        icon={MdFormatBold}
        ariaLabel={"Bold"}
        isActive={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
    </Flex>
  );
};

export default ToolsBar;
