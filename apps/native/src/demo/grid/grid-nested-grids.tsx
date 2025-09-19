import { Grid, GridItem } from '@gezit-native/ui/grid';
import { Text } from '@gezit-native/ui/text';

export function GridNestedGrids() {
  return (
    <Grid
      className="gap-3"
      _extra={{
        className: 'grid-cols-8',
      }}
    >
      <GridItem
        className="bg-background-50 p-3 rounded-md text-center"
        _extra={{
          className: 'col-span-4',
        }}
      >
        <Text className="text-sm">01</Text>
      </GridItem>
      <GridItem
        className="bg-background-50 p-3 rounded-md text-center"
        _extra={{
          className: 'col-span-4',
        }}
      >
        <Text className="text-sm">02</Text>
      </GridItem>
      <GridItem
        className="bg-background-50 p-3 rounded-md text-center"
        _extra={{
          className: 'col-span-4',
        }}
      >
        <Grid
          className="gap-5"
          _extra={{
            className: 'grid-cols-2',
          }}
        >
          <GridItem
            className="bg-background-200 p-2 rounded-md"
            _extra={{
              className: 'col-span-1',
            }}
          >
            <Text className="text-sm">1</Text>
          </GridItem>
          <GridItem
            className="bg-background-200 p-2 rounded-md"
            _extra={{
              className: 'col-span-1',
            }}
          >
            <Text className="text-sm">2</Text>
          </GridItem>
          <GridItem
            className="bg-background-200 p-2 rounded-md"
            _extra={{
              className: 'col-span-1',
            }}
          >
            <Text className="text-sm">3</Text>
          </GridItem>
          <GridItem
            className="bg-background-200 p-2 rounded-md"
            _extra={{
              className: 'col-span-1',
            }}
          >
            <Text className="text-sm">4</Text>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem
        className="bg-background-50 p-3 rounded-md text-center"
        _extra={{
          className: 'col-span-4',
        }}
      >
        <Grid
          className="gap-5"
          _extra={{
            className: 'grid-cols-4',
          }}
        >
          <GridItem
            className="bg-background-200 p-2 rounded-md"
            _extra={{
              className: 'col-span-4',
            }}
          >
            <Text className="text-sm">1</Text>
          </GridItem>
          <GridItem
            className="bg-background-200 p-2 rounded-md"
            _extra={{
              className: 'col-span-4',
            }}
          >
            <Text className="text-sm">2</Text>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
