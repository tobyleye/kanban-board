import { Box } from "@chakra-ui/react";
import { BoardList } from "./BoadList";


export const SideMenu = () => {
  return (
    <Box height="100%" width="100%" bg="grey.dark">
      <BoardList />
    </Box>
  );
};
