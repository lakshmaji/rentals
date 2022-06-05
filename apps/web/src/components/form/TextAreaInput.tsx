import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { Controller, Control } from "react-hook-form";

interface Props<T> {
  label: string;
  control: Control<T>;
  placeholder: string;
  name: string;
  rows?: number;
}
const TextAreaInput: FC<Props<any>> = ({
  label,
  control,
  placeholder,
  name,
  rows,
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
              as="textarea"
              type="text"
              placeholder={placeholder}
              name={field.name}
              onChange={field.onChange}
              onBlur={field.onBlur}
              defaultValue={field.value || ""}
              rows={rows}
            />
          );
        }}
      />
    </Form.Group>
  );
};

export default TextAreaInput;
