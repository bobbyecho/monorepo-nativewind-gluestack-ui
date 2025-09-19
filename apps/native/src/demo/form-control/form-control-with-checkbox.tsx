import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from '@gezit-native/ui/form-control';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@gezit-native/ui/checkbox';
import { VStack } from '@gezit-native/ui/vstack';
import { CheckIcon } from '@gezit-native/ui/icon';
import React from 'react';

export function FormControlWithCheckbox() {
  const [values, setValues] = React.useState(['bits']);
  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>Sign up for newsletters</FormControlLabelText>
      </FormControlLabel>
      <CheckboxGroup
        className="my-2"
        value={values}
        onChange={(keys) => {
          setValues(keys);
        }}
      >
        <VStack space="sm">
          <Checkbox size="sm" value="bits">
            <CheckboxIndicator className="mr-2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Daily Bits</CheckboxLabel>
          </Checkbox>
          <Checkbox size="sm" value="event">
            <CheckboxIndicator className="mr-2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Event Updates</CheckboxLabel>
          </Checkbox>
          <Checkbox size="sm" value="sponsorship">
            <CheckboxIndicator className="mr-2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>Sponsorship</CheckboxLabel>
          </Checkbox>
        </VStack>
      </CheckboxGroup>
      <FormControlHelper>
        <FormControlHelperText>
          Subscribe to newsletters for updates
        </FormControlHelperText>
      </FormControlHelper>
    </FormControl>
  );
}
