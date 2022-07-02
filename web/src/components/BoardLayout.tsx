import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Logo } from "./Logo";
import { SideMenu } from "./SideMenu";

export function BoardLayout() {
  return (
    <Box
      display="grid"
      gridTemplateColumns="250px 1fr"
      gridTemplateRows="auto 1fr"
      height="100vh"
      width="100%"
      gridTemplateAreas={`
        "logo header"
        "sidemenu main-content"
    `}
    >
      <Box
        gridArea="logo"
        display="flex"
        alignItems="center"
        px={4}
        bg="grey.dark"
      >
        <Logo />
      </Box>
      <Box gridArea="sidemenu">
        <SideMenu />
      </Box>
      <Box
        as="header"
        gridArea="header"
        minHeight="80px"
      >
        <Header />
      </Box>
      <Box gridArea="main-content" bg="grey.4xdark">
        <Outlet />
      </Box>
    </Box>
  );
}
