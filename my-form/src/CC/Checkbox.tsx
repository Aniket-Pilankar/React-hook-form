import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import CheckboxCCComp, {
  Props as CheckboxCCCompProps,
} from "../NormalComponent/Checkbox";

type Props<T extends FieldValues> = CheckboxCCCompProps &
  UseControllerProps<T> & {};

const Checkbox = <T extends FieldValues>({
  name,
  control,
  ...props
}: Props<T>) => {
  const { field } = useController({
    name,
    control,
  });

  return <CheckboxCCComp {...field} {...props} />;
};
export default Checkbox;
