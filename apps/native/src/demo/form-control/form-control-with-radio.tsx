import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from '@repo/ui/form-control';
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
} from '@repo/ui/radio';
import { VStack } from '@repo/ui/vstack';
import { CircleIcon } from '@repo/ui/icon';
import React from 'react';

export function FormControlWithRadio() {
  const [values, setValues] = React.useState('Mango');
  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>Favourite fruit</FormControlLabelText>
      </FormControlLabel>
      <RadioGroup className="my-2" value={values} onChange={setValues}>
        <VStack space="sm">
          <Radio size="sm" value="Mango">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Mango</RadioLabel>
          </Radio>
          <Radio size="sm" value="Apple">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Apple</RadioLabel>
          </Radio>
          <Radio size="sm" value="Orange">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Orange</RadioLabel>
          </Radio>
        </VStack>
      </RadioGroup>
      <FormControlHelper>
        <FormControlHelperText>
          Choose the fruit you like the most
        </FormControlHelperText>
      </FormControlHelper>
    </FormControl>
  );
}
