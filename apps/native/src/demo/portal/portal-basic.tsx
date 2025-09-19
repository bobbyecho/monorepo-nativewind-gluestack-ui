import { Portal } from '@repo/ui/portal';
import { HStack } from '@repo/ui/hstack';
import { Text } from '@repo/ui/text';
import { Button, ButtonText, ButtonIcon } from '@repo/ui/button';
import { CloseIcon } from '@repo/ui/icon';
import React from 'react';

export function PortalBasic() {
  const [visible, setVisible] = React.useState(false);
  const handleClose = () => setVisible(false);
  return (
    <>
      <Portal isOpen={visible} className="justify-center items-center">
        <HStack className="border-2 w-1/3 py-10 gap-4 rounded-lg flex-row justify-center items-center bg-background-0">
          <Text className="text-typography-950">Portal Content</Text>
          <Button
            size="xs"
            className="h-6 px-1 absolute top-2 right-2"
            variant="outline"
            onPress={handleClose}
          >
            <ButtonIcon as={CloseIcon} />
          </Button>
        </HStack>
      </Portal>
      <Button onPress={() => setVisible(!visible)}>
        <ButtonText>Toggle Portal</ButtonText>
      </Button>
    </>
  );
}
