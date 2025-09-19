import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@repo/ui/popover';
import { Button, ButtonText } from '@repo/ui/button';
import { Text } from '@repo/ui/text';
import {
  Avatar,
  AvatarGroup,
  AvatarFallbackText,
  AvatarImage,
} from '@repo/ui/avatar';
import React from 'react';

export function PopoverWithAvatars() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps} size="sm">
            <ButtonText>Open Popover</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent className="w-full max-w-[420px] p-4">
        <PopoverArrow />
        <PopoverBody
          className=""
          contentContainerClassName="flex flex-row gap-4"
        >
          <AvatarGroup className="flex-row items-center">
            <Avatar className="w-9 h-9 border-[1.5px] border-outline-0">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://i.ibb.co/PF4vFQk/a130347c432c7b83615044cec215d824.jpg',
                }}
                alt="imageAltText"
              />
            </Avatar>
            <Avatar className="w-9 h-9 border-[1.5px] border-outline-0">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://i.ibb.co/MgrMrRc/Avatar-2.png',
                }}
                alt="imageAltText"
              />
            </Avatar>
            <Avatar className="w-9 h-9 border-[1.5px] border-outline-0">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://i.ibb.co/BLRZt0p/Avatar-6.jpg',
                }}
                alt="imageAltText"
              />
            </Avatar>
            <Avatar className="w-9 h-9 border-[1.5px] border-outline-0 group-[.avatar-group]/avatar-group:ml-0">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://i.ibb.co/4VVsQ0K/Avatar-7.png',
                }}
                alt="imageAltText"
              />
            </Avatar>
          </AvatarGroup>
          <Text className="text-typography-900" size="sm">
            Alex, Annie and many others are already enjoying the Pro features,
            don't miss out on the fun!
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
