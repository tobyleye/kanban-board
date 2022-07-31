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
import { useNavigate } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import { FormField } from "./FormField";
import { FieldArray, FieldArrayItem } from "./FieldArray";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("Can't be empty"),
  columns: yup.array().of(
    yup.object({
      name: yup.string().required("Can't be empty"),
    })
  ),
});

export const BoardForm = ({
  onSubmit,
}: {
  onSubmit: (values: any) => void;
}) => {
  const navigate = useNavigate();
  const close = () => navigate("/");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<{
    name: string;
    columns: { name: string }[];
  }>({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "columns",
    control
  });

  return (
    <Modal isOpen={true} onClose={close} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Board</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box pb={8} display="grid" gap={6}>

              <FormField
                label="Board Name"
                placeholder="e.g. Web Design"
                error={errors?.name?.message}
                {...register("name")}
              />

              <Box mb={2}>
                <FormLabel mb={1}>Board Columns</FormLabel>
                <FieldArray>
                  {fields.map((_, index) => (
                    <FieldArrayItem
                      error={errors?.columns?.[index]?.name?.message}
                      onDelete={() => remove(index)}
                      {...register(`columns.${index}.name`)}
                    />
                  ))}
                </FieldArray>

                <Button
                  mt={4}
                  width="full"
                  color="purple.dark"
                  onClick={() => append({ name: "" })}
                >
                  Add New Column
                </Button>
              </Box>
              <Button width="full" colorScheme="purple" type="submit">
                Create New Board
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
