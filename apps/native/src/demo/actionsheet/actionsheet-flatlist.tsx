import {
  ActionsheetItem,
  ActionsheetItemText,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  ActionsheetFlatList,
} from '@gezit-native/ui/actionsheet';
import { ButtonText } from '@gezit-native/ui/button';
import React from 'react';
import { Button } from '@gezit-native/ui/button';

export function ActionsheetFlatlist() {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(false);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const Item = React.useCallback(
    ({ title }) => (
      <ActionsheetItem onPress={handleClose}>
        <ActionsheetItemText>{title}</ActionsheetItemText>
      </ActionsheetItem>
    ),
    [handleClose]
  );
  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetFlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
          />
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
