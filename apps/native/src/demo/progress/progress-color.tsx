import { Progress, ProgressFilledTrack } from '@repo/ui/progress';
import { VStack } from '@repo/ui/vstack';

export function ProgressColor() {
  return (
    <VStack space="3xl" className="max-w-96 w-full">
      <Progress value={46} className="w-full h-2" size="sm">
        <ProgressFilledTrack className="bg-emerald-600" />
      </Progress>
      <Progress value={46} className="w-full h-2" size="sm">
        <ProgressFilledTrack className="bg-amber-600" />
      </Progress>
      <Progress value={46} className="w-full h-2" size="sm">
        <ProgressFilledTrack className="bg-fuchsia-600" />
      </Progress>
      <Progress value={46} className="w-full h-2" size="sm">
        <ProgressFilledTrack className="bg-cyan-600" />
      </Progress>
    </VStack>
  );
}
