import { UseFormRegister, Path } from "react-hook-form";
import { IFormValues } from "../UncontrolledComponents/One";

interface SelectProps {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}

const Select = ({ label, register }: SelectProps) => {
  return (
    <div>
      <select {...register(label)}>
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={1000}>1000</option>
      </select>
    </div>
  );
};
export default Select;
