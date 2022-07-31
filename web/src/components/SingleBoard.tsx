import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Column,  NewColumnButton } from "./Column";

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

  let content = (
    <Box p={4} h="full">
      <Box display="flex" overflow="auto" h="full" gap={8}>
        {columns.map((col) => (
          <Column key={col.id} column={col} />
        ))}
        <NewColumnButton />
      </Box>
    </Box>
  );

  return (
    <>
      {content}
      <Outlet />
    </>
  );
}
