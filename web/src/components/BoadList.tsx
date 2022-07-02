import { Box, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const BoardListItem = ({
  label,
  color='grey.light',
  href = "#",
}: {
  label: string;
  href?: string;
  color?: string;
}) => {
  return (
    <ListItem
      color={color}
      _hover={{
        bg: "purple.dark",
        color: "white",
      }}
      borderRightRadius="99px"
      fontWeight="semibold"
      py={2}
      px={5}
      fontSize="14px"
    >
      <ListIcon as={MdOutlineSpaceDashboard} />
      <Link to={href}>{label}</Link>
    </ListItem>
  );
};

export const BoardList = () => {
  return (
    <Box color="grey.light" pt={8}>
      <Text textTransform="capitalize" fontSize="sm" px={5} letterSpacing="2px" mb={2}>
        All boards (8)
      </Text>
      <List spacing={0} mr={2}>
        <BoardListItem label="Platform Launch" />
        <BoardListItem label="Marketing Plan" />
        <BoardListItem color="purple.dark" label="Create new Board" href="/new-board" />
      </List>
    </Box>
  );
};
