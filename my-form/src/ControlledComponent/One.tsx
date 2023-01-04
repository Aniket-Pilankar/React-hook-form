import { SubmitHandler, useForm } from "react-hook-form";
import Text from "../CC/TextField";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

export interface FormValues {
  firstName: string;
  lastName: string;
  age: number;
}

const validatorSchema = Joi.object({
  firstName: Joi.string().min(5).required().messages({
    "string.min": "min letter should be greater than 5",
    "any.required": "This field is required",
  }),
  lastName: Joi.string().required(),
  age: Joi.number().min(5).required(),
});

function useOneVM() {
  const formMethod = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,
    },
    resolver: joiResolver(validatorSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("data:", data);
  };

  return {
    formMethod,
    onSubmit,
  };
}

const One = () => {
  const { formMethod, onSubmit } = useOneVM();
  const { control, handleSubmit } = formMethod;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* THIS WILL THROW AN ERROR */}
      {/* <Text adsdfa />  */}

      {/*  */}
      <Text name="firstName" control={control} label="firstName" />
      <Text name="lastName" control={control} label="lastName" />
      <Text name="age" control={control} label="age" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default One;
