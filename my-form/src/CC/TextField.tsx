import { TextField as MuiTextField, TextFieldProps } from "@mui/material";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";

// UseControllerProps<FormValues> &
type Props<T extends FieldValues> = TextFieldProps & UseControllerProps<T> & {};

const Text = <T extends FieldValues>({ name, control, ...props }: Props<T>) => {
  const {
    field: { ref, ...fields },
    fieldState: { error },
    formState: { isValid },
  } = useController({
    name,
    control,
  });

  return (
    <div style={{ padding: "10px" }}>
      <MuiTextField
        {...props}
        {...fields}
        id={props.id || name}
        error={isValid}
        inputRef={ref} // ref is required for focus
        helperText={error?.message}
      />
    </div>
  );
};
export default Text;
