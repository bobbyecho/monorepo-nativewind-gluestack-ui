import {
  FormControl,
  FormControlLabel,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabelText,
} from '@gezit-native/ui/form-control';
import { AlertCircleIcon } from '@gezit-native/ui/icon';
import { Input, InputField } from '@gezit-native/ui/input';
import { Button, ButtonText } from '@gezit-native/ui/button';
import { VStack } from '@gezit-native/ui/vstack';
import React from 'react';

export function FormControlBasic() {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('12345');

  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <VStack>
      <FormControl
        isInvalid={isInvalid}
        size="md"
        isDisabled={false}
        isReadOnly={false}
        isRequired={false}
      >
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="md">
          <InputField
            type="password"
            placeholder="password"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Must be at least 6 characters.
          </FormControlHelperText>
        </FormControlHelper>
        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} className="text-red-500" />
          <FormControlErrorText className="text-red-500">
            At least 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button
        className="w-fit self-end mt-4"
        size="sm"
        variant="outline"
        onPress={handleSubmit}
      >
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
  );
}
