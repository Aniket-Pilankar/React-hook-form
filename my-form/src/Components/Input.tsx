import { UseFormRegister, Path } from "react-hook-form";
import { IFormValues } from "../UncontrolledComponents/One";

interface InputProps {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
}

const Input = ({ label, register }: InputProps) => {
  return (
    <div>
      <input {...register(label)} />
    </div>
  );
};
export default Input;
