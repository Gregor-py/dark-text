import IconEditorButton from "@/components/editor/IconEditorButton";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Button,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader
} from "@chakra-ui/react";
import { Editor } from "@tiptap/react";
import { ChangeEvent, FC, useState } from "react";
import { MdAddLink } from "react-icons/md";

const SetLink: FC<{ editor: Editor }> = ({ editor }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [linkHref, setLinkHref] = useState("");
  const handleClick = () => {
    onToggle();
  };
  const handleAdd = () => {
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: linkHref })
      .run();
    setLinkHref("");
  };
  return (
    <>
      <IconEditorButton
        icon={MdAddLink}
        ariaLabel={"link"}
        isActive={false}
        onClick={handleClick}
      />
      <Popover returnFocusOnClose={false} isOpen={isOpen} onClose={onClose}>
        <PopoverContent>
          <PopoverHeader fontWeight="bold">Set link</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Input
              value={linkHref}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setLinkHref(event.target.value)
              }
            />
          </PopoverBody>
          <PopoverFooter>
            <Button onClick={handleAdd} colorScheme={"green"}>
              Add link
            </Button>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default SetLink;
