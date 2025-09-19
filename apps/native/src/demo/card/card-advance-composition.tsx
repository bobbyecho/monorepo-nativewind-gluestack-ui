import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@gezit-native/ui/avatar';
import { Box } from '@gezit-native/ui/box';
import { Button, ButtonText } from '@gezit-native/ui/button';
import { Card } from '@gezit-native/ui/card';
import { Divider } from '@gezit-native/ui/divider';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { Image } from '@gezit-native/ui/image';
import { VStack } from '@gezit-native/ui/vstack';

export function CardAdvanceComposition() {
  return (
    <Card className="p-6 rounded-lg max-w-[360px] m-3">
      <Box className="flex-row">
        <Avatar className="mr-4">
          <AvatarFallbackText>JD</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://gluestack.github.io/public-blog-video-assets/camera.png',
            }}
          />
        </Avatar>
        <VStack>
          <Heading size="md" className="mb-1">
            Jane Doe
          </Heading>
          <Text size="sm">janedoe@sample.com</Text>
        </VStack>
      </Box>
      <Box className="my-5 flex-col sm:flex-row">
        <VStack className="items-center pb-2 sm:flex-1 sm:pb-0 sm:border-r sm:border-outline-300">
          <Heading size="xs">81</Heading>
          <Text size="xs">posts</Text>
        </VStack>
        <Divider
          orientation="horizontal"
          className="w-[40%] self-center bg-background-300 flex sm:hidden"
        />
        <VStack className="items-center py-2 sm:flex-1 sm:py-0 sm:border-r sm:border-outline-300">
          <Heading size="xs">5,281</Heading>
          <Text size="xs">followers</Text>
        </VStack>
        <Divider
          orientation="horizontal"
          className="w-[40%] self-center bg-background-300 flex sm:hidden"
        />
        <VStack className="items-center pt-2 sm:flex-1 sm:pt-0">
          <Heading size="xs">281</Heading>
          <Text size="xs">following</Text>
        </VStack>
      </Box>
      <Box className="mb-5 flex-col sm:mb-6 sm:flex-row">
        <Image
          source={{
            uri: 'https://gluestack.github.io/public-blog-video-assets/parrot.png',
          }}
          className="mb-3 rounded-md w-full h-[140px] sm:mb-0 sm:mr-3 sm:w-[150px] sm:h-[154px]"
          alt="image"
        />
        <Image
          source={{
            uri: 'https://gluestack.github.io/public-blog-video-assets/dear.png',
          }}
          className="rounded-md w-full h-[140px] sm:w-[150px] sm:h-[154px]"
          alt="image"
        />
      </Box>
      <Button className="py-2 px-4">
        <ButtonText size="sm">Follow</ButtonText>
      </Button>
    </Card>
  );
}
