```jsx static
{
  oscillatorTypes.map(({ abbr, id, type }) => (
    <OscillatorBtn
      abbr={abbr}
      key={`${id}-${type}`}
      toggleOscillator={toggleOscillator}
      synthParams={synthParams}
      type={type}
    />
  ));
}
```
