import { forwardRef, Ref } from "react";
import {
  Path,
  UseFormRegister,
  FieldValues,
  ChangeHandler,
} from "react-hook-form";
import { IFormValues } from "../UncontrolledComponents/One";

interface ISelectTwo {
  label: Path<IFormValues>;
  name?: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  //   register: ReturnType<UseFormRegister<IFormValues>>;
}

const SelectTwo = (
  { label, name, onBlur, onChange }: ISelectTwo,
  ref: Ref<HTMLSelectElement>
) => {
  return (
    <div>
      <select name={name} ref={ref} onBlur={onBlur} onChange={onChange}>
        <option value="Kia">Kia</option>
        <option value="Nano">Nano</option>
      </select>
    </div>
  );
};
export default forwardRef(SelectTwo);
