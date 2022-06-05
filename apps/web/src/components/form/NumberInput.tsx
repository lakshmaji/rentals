import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { Controller, Control } from "react-hook-form";

interface Props<T> {
  label: string;
  control: Control<T>;
  placeholder: string;
  name: string;
  step?: string;
}
const NumberInput: FC<Props<any>> = ({
  label,
  control,
  placeholder,
  name,
  step = "any",
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
              type="number"
              placeholder={placeholder}
              name={field.name}
              onChange={field.onChange}
              onBlur={field.onBlur}
              defaultValue={field.value || ""}
              step={step}
            />
          );
        }}
      />
    </Form.Group>
  );
};

export default NumberInput;
