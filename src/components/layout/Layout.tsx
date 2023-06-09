import Sidebar from "@/components/layout/Sidebar";
import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import Header from "./header/Header";

interface Layout {
  children: React.ReactNode;
}

const Layout: FC<Layout> = ({ children }) => {
  return (
    <Box>
      <Sidebar />
      <Box pr={8} pl={24}>
        <Header />
        <Box mt={3}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
