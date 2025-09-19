import { Button, ButtonIcon, ButtonText } from '@repo/ui/button';
import { Input, InputField } from '@repo/ui/input';
import { VStack } from '@repo/ui/vstack';
import { Box, ArrowLeftIcon } from 'lucide-react-native';
import { Heading } from '@repo/ui/heading';
import { Center } from '@repo/ui/center';
import { Text } from '@repo/ui/text';

export function ButtonFullWidth() {
  return (
    <Center>
      <Box className="p-5 max-w-96 border border-background-300 rounded-lg">
        <VStack className="pb-4" space="xs">
          <Heading className="leading-[30px]">Set new password</Heading>
          <Text className="text-sm">
            Almost done. Enter your new password and you are all set.
          </Text>
        </VStack>
        <VStack space="xl" className="py-2">
          <Input>
            <InputField className="py-2" placeholder="New password" />
          </Input>
          <Input>
            <InputField className="py-2" placeholder="Confirm new password" />
          </Input>
        </VStack>
        <VStack space="lg" className="pt-4">
          <Button size="sm">
            <ButtonText>Submit</ButtonText>
          </Button>
          <Box className="flex flex-row">
            <Button variant="link" size="sm" className="p-0">
              <ButtonIcon className="mr-1" size="md" as={ArrowLeftIcon} />
              <ButtonText>Back to login</ButtonText>
            </Button>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
}
