import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@repo/ui/avatar';
import { Heading } from '@repo/ui/heading';
import { HStack } from '@repo/ui/hstack';
import { VStack } from '@repo/ui/vstack';
import { Text } from '@repo/ui/text';

export function AvatarWithImage() {
  return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </Avatar>
        <VStack>
          <Heading size="sm">Ronald Richards</Heading>
          <Text size="sm">Nursing Assistant</Text>
        </VStack>
      </HStack>
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
          <AvatarBadge />
        </Avatar>
        <VStack>
          <Heading size="sm">Arlene McCoy</Heading>
          <Text size="sm">Marketing Coordinator</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
