import { Box, List, ListItem, Text } from "@chakra-ui/react";

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
    <Box>
      <Box>
        {column.name} ({column.tasks.length})
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
