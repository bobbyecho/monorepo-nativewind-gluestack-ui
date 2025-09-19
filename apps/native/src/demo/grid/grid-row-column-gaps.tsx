import { Grid, GridItem } from '@gezit-native/ui/grid';
import { Text } from '@gezit-native/ui/text';

export function GridRowColumnGaps() {
  return (
    <Grid
      className="gap-y-2 gap-x-4"
      _extra={{
        className: 'grid-cols-6',
      }}
    >
      <GridItem
        className="bg-background-50 p-4 rounded-md text-center"
        _extra={{
          className: 'col-span-2',
        }}
      >
        <Text className="text-sm">01</Text>
      </GridItem>
      <GridItem
        className="bg-background-50 p-4 rounded-md text-center"
        _extra={{
          className: 'col-span-2',
        }}
      >
        <Text className="text-sm">02</Text>
      </GridItem>
      <GridItem
        className="bg-background-50 p-4 rounded-md text-center"
        _extra={{
          className: 'col-span-2',
        }}
      >
        <Text className="text-sm">03</Text>
      </GridItem>
      <GridItem
        className="bg-background-50 p-4 rounded-md text-center"
        _extra={{
          className: 'col-span-2',
        }}
      >
        <Text className="text-sm">04</Text>
      </GridItem>
      <GridItem
        className="bg-background-50 p-4 rounded-md text-center"
        _extra={{
          className: 'col-span-2',
        }}
      >
        <Text className="text-sm">05</Text>
      </GridItem>
      <GridItem
        className="bg-background-50 p-4 rounded-md text-center"
        _extra={{
          className: 'col-span-2',
        }}
      >
        <Text className="text-sm">06</Text>
      </GridItem>
    </Grid>
  );
}
