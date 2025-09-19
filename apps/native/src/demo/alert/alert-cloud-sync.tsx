import { Alert, AlertText } from '@gezit-native/ui/alert';
import { ButtonText, Button } from '@gezit-native/ui/button';
import { Icon, CloseIcon } from '@gezit-native/ui/icon';
import { VStack } from '@gezit-native/ui/vstack';

export function AlertCloudSync() {
  return (
    <Alert
      action="warning"
      className="gap-4 max-w-[585px] w-full self-center items-start min-[400px]:items-center"
    >
      <VStack className="gap-4 min-[400px]:flex-row justify-between flex-1 min-[400px]:items-center">
        <AlertText className="font-semibold text-typography-900" size="sm">
          Your data has been synced to the cloud
        </AlertText>
        <Button size="sm" className="hidden sm:flex">
          <ButtonText>View details</ButtonText>
        </Button>
      </VStack>
      <Icon as={CloseIcon} />
    </Alert>
  );
}
