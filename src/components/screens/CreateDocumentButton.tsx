import { firestore } from "@/firebase/clientApp";
import { Center, Icon, Tooltip } from "@chakra-ui/react";
import { collection, doc, setDoc } from "@firebase/firestore";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

interface CreateDocumentButton {}

const CreateDocumentButton: FC<CreateDocumentButton> = () => {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleCreateDocument = async () => {
    setIsLoading(true);
    const newDocumentRef = doc(collection(firestore, "documents"));
    await setDoc(newDocumentRef, {
      name: "New document"
    });

    await push(`/document/${newDocumentRef.id}`);
    setIsLoading(false);
  };

  return (
    <Tooltip label="Create document">
      <Center
        w={"full"}
        h={"full"}
        borderRadius={10}
        onClick={handleCreateDocument}
        bg={isLoading ? "green.800" : "green.400"}
        cursor={"pointer"}
        transition={"all ease 0.3s"}
        _hover={{
          bg: "green.600"
        }}
        _active={{
          transform: "scale(0.98)"
        }}
        pointerEvents={isLoading ? "none" : "auto"}
      >
        <Icon
          color={isLoading ? "gray.500" : "white"}
          w={20}
          h={20}
          as={MdAddCircleOutline}
        />
      </Center>
    </Tooltip>
  );
};

export default CreateDocumentButton;
