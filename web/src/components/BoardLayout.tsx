import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";

export function BoardLayout() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="250px 1fr"
      gridTemplateRows="80px 1fr"
      height="100vh"
      width="100%"
      gridTemplateAreas={`
        "sidemenu header"
        "sidemenu main-content"
    `}
    >
      <Box gridArea="sidemenu">
        <SideMenu />
      </Box>
      <Box as="header" gridArea="header" minHeight="80px">
        <Header />
      </Box>
      <Box gridArea="main-content" bg="grey.3xlight">
        <Outlet />
      </Box>
    </Box>
  );
}
