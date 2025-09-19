import { HStack } from '@gezit-native/ui/hstack';
import { Box } from '@gezit-native/ui/box';

export function HStackReversed() {
  return (
    <HStack space="md" reversed>
      <Box className="w-20 h-20 bg-primary-300" />
      <Box className="w-20 h-20 bg-primary-400" />
      <Box className="w-20 h-20 bg-primary-500" />
    </HStack>
  );
}
