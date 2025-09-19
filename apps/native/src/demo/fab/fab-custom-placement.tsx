import { Fab, FabIcon } from '@repo/ui/fab';
import { Box } from '@repo/ui/box';
import { VStack } from '@repo/ui/vstack';
import { Heading } from '@repo/ui/heading';
import { Text } from '@repo/ui/text';
import { Image } from '@repo/ui/image';
import { Link } from '@repo/ui/link';
import { ShoppingCartIcon } from 'lucide-react-native';

export function FabCustomPlacement() {
  return (
    <Box className="max-w-96 border rounded-lg border-outline-200 overflow-hidden mx-5 bg-background-100">
      <Box>
        <Image
          className="h-[185px] w-[416px]"
          source={{
            uri: 'https://images.unsplash.com/photo-1591206369811-4eeb2f03bc95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D',
          }}
          fallbackSource={{
            uri: 'https://drive.google.com/uc?export=view&id=1h1e89BtQCp6JdGiKo92dlf5bjHC8hLjt',
          }}
          alt="image"
        />
      </Box>
      <VStack className="px-6 pt-4 pb-6">
        <Heading size="sm">Fresh Orange - Imported (Loose)</Heading>
        <Text className="my-1.5 text-sm">Rs 146(Rs.24.33/pc)</Text>
        <Text className="text-xs">DETAILS</Text>
        <Text className="my-1.5 text-xs">
          Oranges are a great source of vitamin C, which is essential for a
          healthy immune system. Oranges are a great source of vitamin C, which
          is important for maintaining a healthy immune system. Vitamin C also
          helps with the absorption of iron and the production of collagen,
          which supports healthy skin, teeth, and bones.
        </Text>
        <Link href="https://gluestack.io/" isExternal>
          <Text className="text-xs text-primary-600">READ MORE</Text>
        </Link>
      </VStack>
      <Fab
        size="lg"
        className="bg-primary-600 right-4 bottom-16 hover:bg-primary-700 active:bg-primary-800"
      >
        <FabIcon as={ShoppingCartIcon} className="h-4 w-4" />
      </Fab>
    </Box>
  );
}
