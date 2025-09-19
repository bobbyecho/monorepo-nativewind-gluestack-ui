import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
} from '@repo/ui/actionsheet';
import { Button, ButtonText } from '@repo/ui/button';
import { HStack } from '@repo/ui/hstack';
import { VStack } from '@repo/ui/vstack';
import { Box, CreditCardIcon } from 'lucide-react-native';
import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@repo/ui/form-control';
import {
  Input,
  InputSlot,
  InputIcon,
  InputField,
} from '@repo/ui/input';
import { Text } from '@repo/ui/text';
import { Image } from '@repo/ui/image';

export function ActionsheetWithSnappoints() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);

  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        snapPoints={[36]}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent className="">
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <VStack className="w-full pt-5">
            <HStack space="md" className="justify-center items-center">
              <Box className="w-[50px] h-full px-2 border border-solid border-outline-300 rounded-sm">
                <Image
                  source={{ uri: 'https://i.imgur.com/UwTLr26.png' }}
                  resizeMode="contain"
                  className="flex-1"
                />
              </Box>
              <VStack className="flex-1">
                <Text className="font-bold">Mastercard</Text>
                <Text>Card ending in 2345</Text>
              </VStack>
            </HStack>
            <FormControl className="mt-9">
              <FormControlLabel>
                <FormControlLabelText>
                  Confirm security code
                </FormControlLabelText>
              </FormControlLabel>
              <Input className="w-full">
                <InputSlot>
                  <InputIcon as={CreditCardIcon} className="ml-2" />
                </InputSlot>
                <InputField placeholder="CVC/CVV" />
              </Input>
              <Button onPress={handleClose} className="mt-3">
                <ButtonText className="flex-1">Pay $1000</ButtonText>
              </Button>
            </FormControl>
          </VStack>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
