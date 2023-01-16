1. You can call `handleSubmit(onSubmit)` from any place

R: /Users/apple/acadly-web-frontend/web-app/src/announcement/AnnouncementPage/vm.ts

```tsx
const onPublish = async () => {
  await handleSubmit(onSubmit)();
};
```

2. Three cases

```tsx

      <button onClick={handleSubmit(onSubmit)}>asdf</button>
      <form>
        <ToggleButtonGroup
          name="day"
          control={control}
          selectionMode={SelectionMode.SINGLE}
          options={Object.values(WeekDay).map((day) => ({ label: day, value: day }))}
        />
        <TextField name="venue" control={control} />
        <input type="submit" />
      </form>

      1. If onSumnit is not on form the after clicking the input-submit button the page is loaded as it default behaviour and the onSubmit functin is not called

      2. I think handleSubmit handle event.preventDefault so after submitting the form the page is not loaded.

      3. Even if we remove form tag and direct press button we still get the data in output .EX:

            <button onClick={handleSubmit(onSubmit)}>asdf</button>
    //   <form> REMOVED
        <ToggleButtonGroup
          name="day"
          control={control}
          selectionMode={SelectionMode.SINGLE}
          options={Object.values(WeekDay).map((day) => ({ label: day, value: day }))}
        />
        <TextField name="venue" control={control} />
        <input type="submit" /> // This will not work because [input type submit required form]
    //   </form>





```
