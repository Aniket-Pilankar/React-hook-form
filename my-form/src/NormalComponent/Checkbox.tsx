import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from "@mui/material";

export interface Props extends CheckboxProps {
  label: string;
  // we have put control in omit as we dont want to pass control (in normal component not React hook form component case) and then we are passing the control atlast after destructing
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
}

const Checkbox = ({
  label,
  formControlLabelProps,
  value,
  onChange,
  ...props
}: Props) => {
  return (
    <FormControlLabel
      {...formControlLabelProps}
      value={value}
      control={
        <MuiCheckbox checked={Boolean(value)} onChange={onChange} {...props} />
      }
      label={label}
    />
  );
};

export default Checkbox;
