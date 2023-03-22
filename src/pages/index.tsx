import TextEditor from "@/components/editor/TextEditor";
import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Box>
        <TextEditor />
      </Box>
    </>
  );
};
export default Home;
