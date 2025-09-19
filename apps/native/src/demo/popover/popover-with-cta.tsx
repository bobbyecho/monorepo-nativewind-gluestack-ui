import { Pressable } from '@repo/ui/pressable';
import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
} from '@repo/ui/popover';
import { Button, ButtonText, ButtonIcon } from '@repo/ui/button';
import { Heading } from '@repo/ui/heading';
import { Text } from '@repo/ui/text';
import { VStack } from '@repo/ui/vstack';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@repo/ui/checkbox';
import {
  CheckIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from '@repo/ui/icon';
import React from 'react';

export function PopoverWithCta() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [values, setValues] = React.useState(['work']);
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
          <Button {...triggerProps} className="gap-2">
            <ButtonText>Purchase Plan</ButtonText>
            <ButtonIcon as={ChevronRightIcon} />
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent className="w-full max-w-[420px] p-5 gap-6 pl-4 shadow-hard-5">
        <PopoverBody>
          <Heading className="pl-1">
            Are you interested in using Pro for work or personal use?
          </Heading>
          <Text className="pt-2 pb-6 pl-1" size="sm">
            We can recommend plans that are right for you. With our personalized
            approach, you can trust that the plans we recommend will align
            perfectly with your goals.
          </Text>
          <CheckboxGroup
            value={values}
            onChange={(keys) => {
              setValues(keys);
            }}
            className="pl-1"
          >
            <VStack space="sm">
              <Checkbox value="projects">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>For personal projects</CheckboxLabel>
              </Checkbox>
              <Checkbox value="work">
                <CheckboxIndicator>
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>For work</CheckboxLabel>
              </Checkbox>
            </VStack>
          </CheckboxGroup>
        </PopoverBody>
        <PopoverFooter>
          <Pressable
            className="px-4 bg-primary-500 rounded w-full"
            onPress={handleClose}
          >
            <Button onPress={handleClose} size="sm" className="gap-2">
              <ButtonText>Next</ButtonText>
              <ButtonIcon as={ArrowRightIcon} />
            </Button>
          </Pressable>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
