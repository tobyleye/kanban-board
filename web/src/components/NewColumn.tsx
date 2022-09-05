import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldArray, FieldArrayItem } from "./FieldArray";
import { useNavigate } from "react-router-dom";
import { HiPlus } from "react-icons/hi"

const schema = yup.object({
  columns: yup.array().of(
    yup.object({
      name: yup.string().required("Can't be empty"),
    })
  ),
});

export const NewColumn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{
    columns: { name: string }[];
  }>({
    resolver: yupResolver(schema),
    defaultValues: {
        columns: [{name: ""}]
    }
  });

  const { fields, remove, append } = useFieldArray({
    name: "columns",
    control,
  });

  const navigate = useNavigate()

  let onClose = () => {
    navigate('../')
  };

  let submit = () => {};

  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Columns</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={8}>
          <form onSubmit={handleSubmit(submit)}>
            <Box display="grid" gap={4} pb={6}>
              <FieldArray>
                {fields.map((_, index) => (
                  <FieldArrayItem
                    deletable={fields.length > 1}
                    error={errors?.columns?.[index]?.name?.message}
                    onDelete={() => remove(index)}
                    {...register(`columns.${index}.name`)}
                  />
                ))}
              </FieldArray>
              <Button
                mt={2}
                width="full"
                color="purple.dark"
                onClick={() => {
                  append({ name: "" });
                }}
              >
                Add Columns
              </Button>
            </Box>

            <Button width="full" colorScheme="purple" type="submit">
              Create {fields.length > 1 ? "Columns" : "Column"}
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
