import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@gezit-native/ui/drawer';
import { Button, ButtonText, ButtonIcon } from '@gezit-native/ui/button';
import { Text } from '@gezit-native/ui/text';
import { VStack } from '@gezit-native/ui/vstack';
import { Pressable } from '@gezit-native/ui/pressable';
import { Divider } from '@gezit-native/ui/divider';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@gezit-native/ui/avatar';
import { Icon } from '@gezit-native/ui/icon';
import { User, Home, ShoppingCart, Wallet, LogOut } from 'lucide-react-native';
import React from 'react';

export function DrawerSidebarMenu() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <>
      <Button
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonText>Open Menu</ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
      >
        <DrawerBackdrop />
        <DrawerContent className="w-[270px] md:w-[300px]">
          <DrawerHeader className="justify-center flex-col gap-2">
            <Avatar size="2xl">
              <AvatarFallbackText>User Image</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}
              />
            </Avatar>
            <VStack className="justify-center items-center">
              <Text size="lg">User Name</Text>
              <Text size="sm" className="text-typography-600">
                abc@gmail.com
              </Text>
            </VStack>
          </DrawerHeader>
          <Divider className="my-4" />
          <DrawerBody contentContainerClassName="gap-2">
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={User} size="lg" className="text-typography-600" />
              <Text>My Profile</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={Home} size="lg" className="text-typography-600" />
              <Text>Saved Address</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon
                as={ShoppingCart}
                size="lg"
                className="text-typography-600"
              />
              <Text>Orders</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={Wallet} size="lg" className="text-typography-600" />
              <Text>Saved Cards</Text>
            </Pressable>
          </DrawerBody>
          <DrawerFooter>
            <Button
              className="w-full gap-2"
              variant="outline"
              action="secondary"
            >
              <ButtonText>Logout</ButtonText>
              <ButtonIcon as={LogOut} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
