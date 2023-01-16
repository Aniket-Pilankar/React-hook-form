import { ChangeEvent, useState } from "react";
import CheckboxComp from "../NormalComponent/Checkbox";

const Three = () => {
  const [checkboxData, setCheckboxData] = useState({
    onion: false,
    tomato: false,
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("checkboxData:", checkboxData);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    console.log("checked:", checked);
    console.log("value:", value);

    setCheckboxData({
      ...checkboxData,
      [name]: checked,
    });
  };

  return (
    <div>
      <hr />
      <form onSubmit={handleSubmit}>
        <CheckboxComp
          label="Onions Present"
          onChange={handleChange}
          value={checkboxData.onion}
          name="onion"
          formControlLabelProps={{
            disabled: true,
          }}
        />
        <CheckboxComp
          label="Tomato Present"
          onChange={handleChange}
          value={checkboxData.tomato}
          name="tomato"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default Three;
