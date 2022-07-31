import { Box } from "@chakra-ui/react";
import { BoardList } from "./BoardList";
import { Logo } from "./Logo";

export const SideMenu = () => {
  return (
    <Box height="100%" width="100%" bg="white" borderRight="1px solid" borderColor="grey.2xlight">
      <Box height="80px" display="flex" alignItems="center" px={4}>
        <Logo />
      </Box>
      <BoardList />
    </Box>
  );
};
