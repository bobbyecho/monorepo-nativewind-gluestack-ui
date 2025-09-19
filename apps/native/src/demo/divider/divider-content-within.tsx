import { Divider } from '@gezit-native/ui/divider';
import { Box } from '@gezit-native/ui/box';
import { HStack } from '@gezit-native/ui/hstack';
import { Text } from '@gezit-native/ui/text';
import { Heading } from '@gezit-native/ui/heading';

export function DividerContentWithin() {
  return (
    <Box className="py-9 px-20 m-5 rounded-lg border border-outline-300">
      <Heading size="3xl">Search Results</Heading>
      <Divider className="mt-4 mb-6" />
      <Box>
        <Text size="xs" className="font-bold text-amber-700">
          TECHNOLOGY
        </Text>
        <Heading>How AI can benefit your business</Heading>
        <Text size="sm" className="mt-1.5">
          AI can automate tasks and processes, allowing for increasing
          efficiency and productivity.
        </Text>
        <HStack space="sm" className="mt-3 items-center">
          <Divider className="w-[18px] bg-amber-700" />
          <Text size="xs" className="text-amber-700">
            5 mins read
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}
