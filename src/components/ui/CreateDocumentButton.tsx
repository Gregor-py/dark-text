import { Center, Icon, Tooltip } from "@chakra-ui/react";
import { FC } from "react";
import { MdAddCircleOutline } from "react-icons/md";

interface CreateDocumentButton {
  onClick: () => void;
}

const CreateDocumentButton: FC<CreateDocumentButton> = ({ onClick }) => {
  return (
    <Tooltip label="Create document">
      <Center
        w={"full"}
        h={"full"}
        borderRadius={10}
        onClick={onClick}
        bg={"green.400"}
        cursor={"pointer"}
        transition={"all ease 0.3s"}
        _hover={{
          bg: "green.600"
        }}
        _active={{
          transform: "scale(0.98)"
        }}
      >
        <Icon color={"white"} w={20} h={20} as={MdAddCircleOutline} />
      </Center>
    </Tooltip>
  );
};

export default CreateDocumentButton;
