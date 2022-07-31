import { Box, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const BoardListItem = ({
  label,
  color = "grey.light",
  href = "#",
}: {
  label: string;
  href?: string;
  color?: string;
}) => {
  return (
    <ListItem>
      <Box
        as={Link}
        color={color}
        _hover={{
            bg: "purple.dark",
            color: "white",
        }}
        display="flex"
        alignItems="center"
        borderRightRadius="99px"
        fontWeight="semibold"
        py={3}
        px={5}
        fontSize="md"
        to={href}
      >
        <ListIcon fontSize="lg" as={MdOutlineSpaceDashboard} />
        {label}
      </Box>
    </ListItem>
  );
};

export const BoardList = () => {
  return (
    <Box color="grey.light" pt={8}>
      <Text
        textTransform="capitalize"
        fontSize="md"
        px={5}
        letterSpacing="2px"
        mb={3}
      >
        All boards (8)
      </Text>
      <List spacing={0} mr={2}>
        <BoardListItem label="Platform Launch" href="/boards/1" />
        <BoardListItem label="Marketing Plan" href="/boards/2" />
        <BoardListItem
          color="purple.dark"
          label="Create new Board"
          href="/new-board"
        />
      </List>
    </Box>
  );
};
