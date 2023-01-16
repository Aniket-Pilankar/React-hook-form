import { SubmitHandler, useForm } from "react-hook-form";
import Switch from "../CC/Switch";

interface FormValues {
  shouldLearnTypescript: boolean;
}

const Two = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      shouldLearnTypescript: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("data:", data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Switch
          name="shouldLearnTypescript"
          control={control}
          label="Learn Typescript"
          formControlLabelProps={{
            label: "asfdfassd",
            labelPlacement: "start",
          }}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Two;
