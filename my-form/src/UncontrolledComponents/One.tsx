import Input from "../Components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import Select from "../Components/Select";
import SelectTwo from "../Components/SelectTwo";

export interface IFormValues {
  "First Name": string;
  Age: number;
  car: string;
}

const One = () => {
  const formMethod = useForm<IFormValues>({
    defaultValues: {
      "First Name": "",
      Age: 0,
      car: "",
    },
  });

  const { register, handleSubmit } = formMethod;

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log("data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} />
      <Select label="Age" register={register} />
      <SelectTwo label="car" {...register("car")} />
      <button type="submit">Submit</button>
    </form>
  );
};
export default One;
