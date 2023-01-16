import {
  Switch as MuiSwitch,
  FormControlLabel,
  FormControlLabelProps,
  SwitchProps,
} from "@mui/material";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type Props<T extends FieldValues> = Omit<SwitchProps, "name"> &
  UseControllerProps<T> & {
    label?: string;
    // formControlLabelProps?: Omit<FormControlLabelProps, "label">;
    formControlLabelProps?: Omit<FormControlLabelProps, "control">;
  };

const Switch = <T extends FieldValues>({
  name,
  control,
  label,
  value,
  formControlLabelProps,
}: Props<T>) => {
  const {
    field: { ref, ...fields },
  } = useController({
    name,
    control,
  });

  console.log("vvv", fields.value);
  return label ? (
    <FormControlLabel
      {...formControlLabelProps} // **** remember this destructuirng props should be at at top so it can be overridabel otherwise irrespective of which prop you pass it will display the destructured value
      // {...fields}
      label={label}
      // value={value}
      control={<MuiSwitch {...fields} inputRef={ref} name={name} />}
    />
  ) : (
    <MuiSwitch {...fields} inputRef={ref} name={name} />
  );
};
export default Switch;
