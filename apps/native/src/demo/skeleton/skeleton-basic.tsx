import { Skeleton, SkeletonText } from '@repo/ui/skeleton';
import { Box } from '@repo/ui/box';
import { HStack } from '@repo/ui/hstack';

export function SkeletonBasic() {
  return (
    <Box className="w-[300px] gap-4 p-3 rounded-md bg-background-100">
      <Skeleton variant="sharp" className="h-[100px]" />
      <SkeletonText _lines={3} className="h-2" />
      <HStack className="gap-1 align-middle">
        <Skeleton variant="circular" className="h-[24px] w-[28px] mr-2" />
        <SkeletonText _lines={2} gap={1} className="h-2 w-2/5" />
      </HStack>
    </Box>
  );
}
