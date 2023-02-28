import React, {useState} from 'react';

import {Page, TextField} from '../src';

export function Playground() {
  return (
    <Page title="Playground">
      <div style={{height: 2000}}>
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
        <NumberInput />
      </div>
    </Page>
  );
}

function NumberInput() {
  const [value, setValue] = useState('');

  function handleOnChange(value: string) {
    setValue(value);
  }

  return (
    <TextField
      label="Number input"
      type="number"
      value={value}
      autoComplete="off"
      onChange={handleOnChange}
    />
  );
}
