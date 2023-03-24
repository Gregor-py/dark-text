import { IDocument } from "@/firebase/collections";
import { Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
interface TextDocument {
  textDocumentData: IDocument;
}
const TextDocument: FC<TextDocument> = ({ textDocumentData }) => {
  return (
    <Flex>
      <Heading>{textDocumentData.name}</Heading>
    </Flex>
  );
};

export default TextDocument;
