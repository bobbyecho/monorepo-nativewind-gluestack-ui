import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogBackdrop,
} from '@repo/ui/alert-dialog';
import { Button, ButtonText } from '@repo/ui/button';
import { Text } from '@repo/ui/text';
import { Heading } from '@repo/ui/heading';
import React from 'react';
import { Box } from '@repo/ui/box';
import { VStack } from '@repo/ui/vstack';
import { Image } from '@repo/ui/image';

export function AlertDialogWithImage() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(false);
  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Pay</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent className="p-0 max-w-[590px] sm:flex-row border-primary-800 rounded-xl">
          <Box className="bg-primary-600 min-w-[123px] items-center justify-center native:max-h-[95px]">
            <Image
              source={{
                uri: 'https://gluestack.github.io/public-blog-video-assets/Image%20Container.png',
              }}
              alt="image"
              className="min-h-[95px] min-w-[95px] h-full w-full"
              size="none"
            />
          </Box>
          <AlertDialogBody
            className=""
            contentContainerClassName="p-6 flex-row justify-between gap-6 md:gap-9 items-center"
          >
            <VStack>
              <Heading
                size="md"
                className="text-typography-950 font-semibold leading-6"
              >
                Get Additional Discount
              </Heading>
              <Text className="pt-2 text-typography-950" size="sm">
                Upgrade your plan before your trial ends yo get 5% discount. Use
                code{' '}
                <Text className="font-bold" size="md">
                  #PRO005
                </Text>
              </Text>
            </VStack>
            <Button size="sm" className="hidden sm:flex" onPress={handleClose}>
              <ButtonText>Upgrade</ButtonText>
            </Button>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
