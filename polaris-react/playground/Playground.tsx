import React, {useState} from 'react';

import {
  AlphaStack,
  Columns,
  Page,
  Scrollable,
  TextField,
  Text,
  Card,
} from '../src';

export function Playground() {
  const height = 700;

  return (
    <Page title="Playground" fullWidth>
      <div style={{marginBottom: 12}}>
        <Card title="Current version" sectioned>
          <AlphaStack fullWidth>
            <Scrollable style={{height: 400}}>
              <div style={{margin: 12}}>
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
                <NumberInput onWheel={() => {}} />
              </div>
            </Scrollable>
          </AlphaStack>
        </Card>
      </div>
      <Card sectioned>
        <div style={{margin: 12}}>
          <Columns
            columns={{
              xs: '1fr 1fr 1fr',
              md: '1fr 1fr 1fr',
            }}
            gap={{
              xs: '4',
              md: '4',
            }}
          >
            <AlphaStack fullWidth>
              <Text variant="headingXl" as="h4">
                Scroll and blur
              </Text>
              <Scrollable style={{height}}>
                <div style={{margin: 12}}>
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                  <NumberInputBlur />
                </div>
              </Scrollable>
            </AlphaStack>
            <AlphaStack fullWidth>
              <Text variant="headingXl" as="h4">
                Scroll and re-focus
              </Text>
              <Scrollable style={{height}}>
                <div style={{margin: 12}}>
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                  <NumberInputFocus />
                </div>
              </Scrollable>
            </AlphaStack>
            <AlphaStack fullWidth>
              <Text variant="headingXl" as="h4">
                No scroll
              </Text>
              <Scrollable style={{height}}>
                <div style={{margin: 12}}>
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                  <NumberInputNoScroll />
                </div>
              </Scrollable>
            </AlphaStack>
          </Columns>
        </div>
      </Card>
    </Page>
  );
}

function NumberInputBlur() {
  // Approach 0
  // Blurs the input when scrolling over it, preventing the value from changing
  // However focus is lost
  function handleWheelBlurBasic(event: WheelEvent) {
    const {target} = event;
    if (target instanceof HTMLInputElement) {
      target.blur();
    }
  }

  return <NumberInput onWheel={handleWheelBlurBasic} />;
}

// moved this to the TextField to allow calling of setFocus
function NumberInputFocus() {
  // Approach 1
  // Prevents scrolling when hovering over an input, but does not allow the scroll to change the value.
  // 1. Blurs the target
  // 2. Restores focus on the input

  // const debounceFocus = debounce((target: HTMLInputElement) => {
  //   target.focus({preventScroll: true});
  // }, 60);

  // function handleWheelBlur(event: WheelEvent) {
  //   const {target} = event;
  //   if (target instanceof HTMLInputElement) {
  //     target.blur();

  //     debounceFocus(target);
  //   }
  // }
  return <NumberInput />;
}

function NumberInputNoScroll() {
  function handleNoScroll(event: WheelEvent) {
    event.stopPropagation();
  }

  return <NumberInput onWheel={handleNoScroll} />;
}

interface NumberInputProps {
  onWheel?: (event: WheelEvent) => void;
}

function NumberInput({onWheel}: NumberInputProps) {
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
      onWheel={onWheel}
    />
  );
}
