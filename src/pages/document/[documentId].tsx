import TextDocument from "@/components/screens/text-document/TextDocument";
import { firestore } from "@/firebase/clientApp";
import { DOCUMENTS_COLLECTION, IDocument } from "@/firebase/collections";
import { doc, getDoc } from "@firebase/firestore";
import { GetServerSidePropsContext, NextPage } from "next";
import Error404 from "pages/404";

interface TextDocumentPage {
  textDocumentData: IDocument;
}

const TextDocumentPage: NextPage<TextDocumentPage> = ({ textDocumentData }) => {
  return <TextDocument textDocumentData={textDocumentData} />;
};

export default TextDocumentPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const documentDocRef = doc(
      firestore,
      DOCUMENTS_COLLECTION,
      context.query.documentId as string
    );
    const documentDoc = await getDoc(documentDocRef);

    if (!documentDoc.exists()) {
      return <Error404 />;
    }

    return {
      props: {
        textDocumentData: documentDoc.data()
      }
    };
  } catch (error) {
    console.log("getServerSideProps error - [community]", error);
    return <Error404 />;
  }
}
