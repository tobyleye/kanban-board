import { Box, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Column } from "./Column";

export function SingleBoard() {
  const columns = [
    {
      id: "column-1",
      name: "Todo",
      tasks: [
        {
          id: "task-1",
          title: "Build UI for onboarding flow",
          description: "",
          subtasks: [
            {
              task: "Build UI for onboarding flow",
              completed: false,
            },
            {
              task: "Build UI for search",
              completed: false,
            },
          ],
        },
        {
          id: "task-2",
          title: "Build UI for onboarding flow",
          description: "",
          subtasks: [
            {
              task: "Build UI for onboarding flow",
              completed: false,
            },
            {
              task: "Build UI for search",
              completed: false,
            },
          ],
        },
      ],
    },
  ];

  let content;
  if (columns.length === 0)
    content = (
      <Box w="full" h="full" display="grid" placeItems="center">
        <Text>Single board</Text>
      </Box>
    );
  else
    content = (
      <Box p={4}>
        <Box display="flex" overflow="auto">
          {columns.map((col) => (
            <Column key={col.id} column={col} />
          ))}
        </Box>
      </Box>
    );

  return (
    <Box>
      {content}
      <Outlet />
    </Box>
  );
}
