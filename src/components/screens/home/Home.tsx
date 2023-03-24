import CreateDocumentButton from "@/components/screens/home/CreateDocumentButton";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Box>
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <GridItem>
            <CreateDocumentButton />
          </GridItem>
          {[1, 2, 3, 4, 5, 6].map((el) => (
            <GridItem
              borderRadius={10}
              key={el}
              w="100%"
              h="300"
              bg="blue.500"
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
