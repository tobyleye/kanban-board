import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormField } from "./FormField";
import { FieldArray, FieldArrayItem } from "./FieldArray";

const schema = yup.object({
  title: yup.string().required("Can't be empty"),
  description: yup.string().required("Can't be empty"),
  subtasks: yup.array().of(
    yup.object({
      task: yup.string().required("Can't be empty"),
    })
  ),
  status: yup.string().required("Can't be empty"),
});

export const TaskForm = ({ onSubmit, onClose }: { onSubmit?: (values: any) => void; onClose: () => void; }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<{
    title: string;
    description: string;
    status: string;
    subtasks: { task: string }[];
  }>({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "subtasks",
    control,
  });

  const submit = (values: any) => {
    onSubmit?.(values)
  };


  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(submit)}>
            <Box display="grid" gap={4} pb={6}>
              <FormField
                error={errors?.title?.message}
                label="Title"
                placeholder="e.g. Web Design"
                {...register("title")}
              />

              <FormField
                type="textarea"
                label="Description"
                placeholder="e.g. It’s always good to take a break. This 15 minute break will 
                recharge the batteries a little."
                error={errors?.description?.message}
                {...register("description")}
              />

              <Box>
                <FormLabel mb={1}>Sub tasks</FormLabel>
                <FieldArray>
                  {fields.map((_, index) => (
                    <FieldArrayItem
                      error={errors?.subtasks?.[index]?.task?.message}
                      onDelete={() => remove(index)}
                      {...register(`subtasks.${index}.task`)}
                    />
                  ))}
                </FieldArray>
                <Button
                  mt={2}
                  width="full"
                  color="purple.dark"
                  onClick={() => {
                    append({ task: "" });
                  }}
                >
                  Add New Subtask
                </Button>
              </Box>

              <FormField
                type="select"
                error={errors?.status?.message}
                label="Status"
                {...register("status")}
              >
                <option value="" disabled>
                  Select an option
                </option>
                {["Todo", "Doing", "Done"].map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </FormField>

              <Button width="full" colorScheme="purple" type="submit">
                Create Task
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
