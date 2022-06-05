import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { Controller, Control } from "react-hook-form";

interface Props<T> {
  label: string;
  control: Control<T>;
  placeholder: string;
  name: string;
  type?: "text" | "email" | "password";
}
const TextInput: FC<Props<any>> = ({
  label,
  control,
  placeholder,
  name,
  type = "text",
}) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Controller
        name={name}
        control={control}
        render={({ field, ...rest }) => {
          return (
            <Form.Control
              type={type}
              placeholder={placeholder}
              name={field.name}
              onChange={field.onChange}
              onBlur={field.onBlur}
              defaultValue={field.value || ""}
            />
          );
        }}
      />
    </Form.Group>
  );
};

export default TextInput;
