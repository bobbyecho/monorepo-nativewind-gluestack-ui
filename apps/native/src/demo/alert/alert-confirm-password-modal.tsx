import { Alert, AlertIcon, AlertText } from '@repo/ui/alert';
import { Button, ButtonText } from '@repo/ui/button';
import {
  Input,
  InputField,
  InputSlot,
  InputIcon,
} from '@repo/ui/input';
import { VStack } from '@repo/ui/vstack';
import { Heading } from '@repo/ui/heading';
import { EyeIcon, EyeOffIcon, InfoIcon } from 'lucide-react-native';
import React from 'react';
import { Text } from '@repo/ui/text';

export function AlertConfirmPasswordModal() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <VStack className="gap-5 sm:gap-8 p-6 sm:p-9 border border-outline-200 bg-background-0 rounded-xl shadow-hard-5 w-full max-w-[423px]">
      <VStack className="items-center gap-1">
        <Heading size="xl">Confirm our password?</Heading>
        <Text>johnsmith@gmail.com</Text>
      </VStack>
      <VStack className="gap-3 sm:gap-5">
        <Input className="rounded-md" size="sm">
          <InputField
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputSlot className="mr-3" onPress={handleState}>
            <InputIcon
              size="xs"
              as={showPassword ? EyeIcon : EyeOffIcon}
              className="stroke-background-600"
            />
          </InputSlot>
        </Input>
        <Button className="w-full rounded-md" size="sm">
          <ButtonText>Confirm</ButtonText>
        </Button>
      </VStack>
      <Alert className="items-start" action="info">
        <AlertIcon as={InfoIcon} size="xs" className="stroke-background-500" />
        <AlertText className="text-typography-600" size="xs">
          Minimum 8 characters, with at least 1 uppercase, 1 lowercase, and 1
          number required.
        </AlertText>
      </Alert>
    </VStack>
  );
}
