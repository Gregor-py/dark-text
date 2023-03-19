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
      <Box pl={24}>
        <Header />
        <main>{children}</main>
      </Box>
    </Box>
  );
};

export default Layout;
