import { auth, firestore } from "@/firebase/clientApp";
import { DOCUMENTS_COLLECTION, IDocument } from "@/firebase/collections";
import { Center, Icon, Tooltip, useToast } from "@chakra-ui/react";
import { collection, doc, setDoc } from "@firebase/firestore";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdAddCircleOutline } from "react-icons/md";

interface CreateDocumentButton {}

const CreateDocumentButton: FC<CreateDocumentButton> = () => {
  const { push } = useRouter();
  const toast = useToast();
  const [user, loading] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(loading);
  const handleCreateDocument = async () => {
    if (!user?.uid || !user) {
      toast({
        title: "First you need to register",
        status: "error",
        duration: 3000,
        isClosable: true
      });
      return;
    }

    setIsLoading(true);
    const newDocumentRef = doc(collection(firestore, DOCUMENTS_COLLECTION));
    const newDocumentData: IDocument = {
      name: "New document",
      creator: user.uid,
      text: ""
    };
    await setDoc(newDocumentRef, newDocumentData);

    await push(`/document/${newDocumentRef.id}`);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [user]);

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
