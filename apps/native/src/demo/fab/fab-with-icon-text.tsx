import { Fab, FabIcon, FabLabel } from '@gezit-native/ui/fab';
import { Box } from '@gezit-native/ui/box';
import { VStack } from '@gezit-native/ui/vstack';
import { HStack } from '@gezit-native/ui/hstack';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { Divider } from '@gezit-native/ui/divider';
import { SearchIcon } from '@gezit-native/ui/icon';

export function FabWithIconAndText() {
  return (
    <Box className="max-w-96 border rounded-lg border-outline-200 py-[56px] px-6 mx-5 bg-background-100">
      <Fab className="top-4 h-10 bg-primary-600 hover:bg-primary-700 active:bg-primary-900 py-2">
        <FabIcon as={SearchIcon} />
        <FabLabel>Search</FabLabel>
      </Fab>
      <VStack space="lg">
        <Box>
          <Text className="text-xs text-primary-600 font-bold">HEALTH</Text>
          <Heading size="sm">Benefits of Oranges</Heading>
          <Text size="xs" className="mt-1.5">
            Oranges are a great source of vitamin C, which is essential for a
            healthy immune system.
          </Text>
          <HStack space="sm" className="mt-3 h-5">
            <Text size="xs">Wade Warrem</Text>
            <Divider orientation="vertical" className="bg-background-300" />
            <Text size="xs">6th Oct, 2019</Text>
            <Divider orientation="vertical" className="bg-background-300" />
            <Text size="xs">5 mins read</Text>
          </HStack>
        </Box>
        <Divider />
        <Box>
          <Text className="text-xs text-primary-600 font-bold">TECHNOLOGY</Text>
          <Heading size="sm">How AI can benefit your business</Heading>
          <Text size="xs" className="mt-1.5">
            AI can automate tasks and processes, allowing for increasing
            efficiency and productivity.
          </Text>
          <HStack space="sm" className="mt-3 h-5">
            <Text size="xs">Wade Warrem</Text>
            <Divider orientation="vertical" className="bg-background-300" />
            <Text size="xs">6th Oct, 2019</Text>
            <Divider orientation="vertical" className="bg-background-300" />
            <Text size="xs">5 mins read</Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}
