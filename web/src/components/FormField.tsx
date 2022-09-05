import {
  Input,
  Select,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import * as React from "react";

type FormFieldProps = {
  type?: "text" | "number" | "select" | "textarea";
  label: string;
  error?: string | boolean;
  children?: React.ReactNode;
  [prop: string]: any;
};

const FormField = React.forwardRef<any, FormFieldProps>(
  ({ type = "text", label, error, children, ...props }, forwardedRef) => {
    const renderInput = () => {
      if (type === "select") {
        return (
          <Select ref={forwardedRef} {...props}>
            {children}
          </Select>
        );
      } else if (type === "textarea") {
        return <Textarea ref={forwardedRef} {...props} />;
      } else {
        return <Input ref={forwardedRef} type={type} {...props} />;
      }
    };

    return (
      <FormControl isInvalid={!!error}>
        <FormLabel>{label}</FormLabel>
        {renderInput()}
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };
