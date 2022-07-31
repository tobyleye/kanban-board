import { Box, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom"

function TaskCard({
  title,
  subtasks,
}: {
  title: string;
  subtasks: { task: string; completed: boolean }[];
}) {
  let completed = subtasks.filter((task) => task.completed === true).length;
  return (
    <Box
      boxShadow="0px 4px 6px rgba(54, 78, 126, 0.101545)"
      bg="white"
      rounded="md"
      px={4}
      py={6}
    >
      <Text fontWeight="bold" mb={2} color="grey.4xdark">
        {title}
      </Text>
      <Text color="grey.light">
        {completed} of {subtasks.length} substasks
      </Text>
    </Box>
  );
}

const COL_WIDTH = 300;

export const Column = ({
  column,
}: {
  column: {
    id: string;
    name: string;
    tasks: {
      id: string;
      title: string;
      description: string;
      subtasks: { task: string; completed: boolean }[];
    }[];
  };
}) => {
  return (
    <Box as="section" w={COL_WIDTH}>
      <Box as="header" display="flex" alignItems="center" gap={2} mb={4}>
        <Box w={3} h={3} rounded="full" bg="black"></Box>
        <Text
          color="grey.light"
          letterSpacing="2.4px"
          fontWeight="bold"
          size="sm"
          textTransform="uppercase"
        >
          {column.name} ({column.tasks.length})
        </Text>
      </Box>
      <List display="grid" gap={4}>
        {column.tasks.map((task) => (
          <ListItem key={task.id}>
            <TaskCard title={task.title} subtasks={task.subtasks} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export const NewColumnButton = () => (
  <Box
    to="./columns/new"
    as={Link}
    w={COL_WIDTH}
    cursor="pointer"
    h="full"
    display="grid"
    placeItems="center"
    px={10}
    rounded="md"
    background=" linear-gradient(180deg, #E9EFFA 0%, rgba(233, 239, 250, 0.5) 100%)"
  >
    <Box
      display="flex"
      alignItems="center"
      fontWeight="bold"
      color="grey.light"
      fontSize="2xl"
    >
      <Text>New Column</Text>
    </Box>
  </Box>
);
