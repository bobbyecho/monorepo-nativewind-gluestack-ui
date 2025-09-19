import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverBody,
} from '@repo/ui/popover';
import { Button, ButtonText } from '@repo/ui/button';
import { Heading } from '@repo/ui/heading';
import { Text } from '@repo/ui/text';
import { VStack } from '@repo/ui/vstack';
import { Input, InputField } from '@repo/ui/input';
import { Image } from '@repo/ui/image';
import React from 'react';

export function PopoverWithImage() {
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
      offset={8}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps} size="sm">
            <ButtonText>Claim Offer</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent className="shadow-soft-1 h-full max-w-full p-0">
        <PopoverBody
          className=""
          contentContainerClassName="flex flex-col sm:flex-row w-full h-full"
        >
          <Image
            source={{
              uri: 'https://i.ibb.co/TqD9vBY/popover-image-1-11zon.jpg',
            }}
            alt="image"
            className="sm:h-[270px] sm:w-[211px] h-[150px] w-full"
          />
          <VStack className="items-center justify-center w-full max-w-[344px] sm:mx-8 p-4 sm:p-0">
            <Text size="sm" className="text-typography-950">
              Sign up to the newsletter and get
            </Text>
            <Heading size="3xl" className="text-typography-950 my-1">
              25% Off
            </Heading>
            <Input variant="outline" size="sm" className="my-4 w-full">
              <InputField placeholder="youremail@address.com" />
            </Input>
            <Button size="xs" isDisabled className="w-full">
              <ButtonText>Subscribe</ButtonText>
            </Button>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
