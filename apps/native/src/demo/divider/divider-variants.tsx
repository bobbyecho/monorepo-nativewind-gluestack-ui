import { Divider } from '@repo/ui/divider';
import { VStack } from '@repo/ui/vstack';
import { HStack } from '@repo/ui/hstack';
import { Text } from '@repo/ui/text';
import { Heading } from '@repo/ui/heading';

export function DividerVariants() {
  return (
    <VStack>
      <Heading>gluestack-ui</Heading>
      <Text>Universal component library</Text>
      <Divider className="my-2 bg-indigo-500" />
      <HStack>
        <Text>Installation</Text>
        <Divider
          orientation="vertical"
          className="mx-2 h-[20px] bg-emerald-500"
        />
        <Text>API Reference</Text>
        <Divider
          orientation="vertical"
          className="mx-2 h-[20px] bg-emerald-500"
        />
        <Text>Examples</Text>
      </HStack>
    </VStack>
  );
}
