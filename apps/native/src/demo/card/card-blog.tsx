import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@gezit-native/ui/avatar';
import { Box } from '@gezit-native/ui/box';
import { Card } from '@gezit-native/ui/card';
import { Heading } from '@gezit-native/ui/heading';
import { Text } from '@gezit-native/ui/text';
import { VStack } from '@gezit-native/ui/vstack';

export function CardBlog() {
  return (
    <Card className="p-5 rounded-lg max-w-[360px] m-3">
      <Text className="text-sm font-normal mb-2 text-typography-700">
        May 15, 2023
      </Text>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
          The Power of Positive Thinking
        </Heading>
        <Text size="sm">
          Discover how the power of positive thinking can transform your life,
          boost your confidence, and help you overcome challenges. Explore
          practical tips and techniques to cultivate a positive mindset for
          greater happiness and success.
        </Text>
      </VStack>
      <Box className="flex-row">
        <Avatar className="mr-3">
          <AvatarFallbackText>RR</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://gluestack.github.io/public-blog-video-assets/john.png',
            }}
            alt="image"
          />
        </Avatar>
        <VStack>
          <Heading size="sm" className="mb-1">
            John Smith
          </Heading>
          <Text size="sm">Motivational Speaker</Text>
        </VStack>
      </Box>
    </Card>
  );
}
