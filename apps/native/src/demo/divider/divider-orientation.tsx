import { Divider } from '@repo/ui/divider';
import { VStack } from '@repo/ui/vstack';
import { HStack } from '@repo/ui/hstack';
import { Text } from '@repo/ui/text';
import { Box } from '@repo/ui/box';
import { Heading } from '@repo/ui/heading';

export function DividerOrientation() {
  return (
    <VStack
      space="lg"
      className="p-12 border border-outline-300 rounded-lg mx-5"
    >
      <Box>
        <Text size="xs" className="font-bold text-blue-600">
          HEALTH
        </Text>
        <Heading>Benefits of Oranges</Heading>
        <Text size="sm" className="mt-1.5">
          Oranges are a great source of vitamin C, which is essential for a
          healthy immune system.
        </Text>
        <HStack space="sm" className="mt-3 h-5">
          <Text size="xs">Wade Warrem</Text>
          <Divider orientation="vertical" className="bg-gray-300" />
          <Text size="xs">6th Oct, 2019</Text>
          <Divider orientation="vertical" className="bg-gray-300" />
          <Text size="xs">5 mins read</Text>
        </HStack>
      </Box>
      <Divider className="bg-gray-300" />
      <Box>
        <Text size="xs" className="font-bold text-blue-600">
          TECHNOLOGY
        </Text>
        <Heading>How AI can benefit your business</Heading>
        <Text size="sm" className="mt-1.5">
          AI can automate tasks and processes, allowing for increasing
          efficiency and productivity.
        </Text>
        <HStack space="sm" className="mt-3 h-5">
          <Text size="xs">Wade Warrem</Text>
          <Divider orientation="vertical" className="bg-gray-300" />
          <Text size="xs">6th Oct, 2019</Text>
          <Divider orientation="vertical" className="bg-gray-300" />
          <Text size="xs">5 mins read</Text>
        </HStack>
      </Box>
    </VStack>
  );
}
