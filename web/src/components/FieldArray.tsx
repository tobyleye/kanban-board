import {
  Input,
  Box,
  CloseButton,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import * as React from "react";

function FieldArray({ children }: { children: React.ReactNode }) {
  return (
    <Box display="grid" gap={2}>
      {children}
    </Box>
  );
}

const FieldArrayItem = React.forwardRef<
  HTMLInputElement,
  {
    value?: string;
    error?: string | boolean;
    onDelete: () => void;
    [x: string]: any;
    deletable?: boolean;
  }
>(({ value, error, onDelete, deletable= true, ...props }, forwardedRef) => {
  let isInvalid = !!error;
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <FormControl isInvalid={isInvalid} flex="1" position="relative">
        <Input isInvalid={isInvalid} ref={forwardedRef} {...props} />

        <Box
          position="absolute"
          right="0"
          top="0"
          bottom="0"
          display="grid"
          mr={2}
          placeItems="center"
        >
          {error ? (
            <FormErrorMessage margin="0">{error}</FormErrorMessage>
          ) : null}
        </Box>
      </FormControl>
      <CloseButton css={{
        color: isInvalid ? 'red' :  'inherit'
      }} flexShrink="0" onClick={onDelete} />
    </Box>
  );
});

FieldArrayItem.displayName = "FieldArrayItem";

export { FieldArrayItem, FieldArray };
