import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from '@repo/ui/form-control';
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
} from '@repo/ui/radio';
import { VStack } from '@repo/ui/vstack';
import { AlertCircleIcon, CircleIcon } from '@repo/ui/icon';

export function FormControlWithError() {
  return (
    <FormControl isInvalid>
      <FormControlLabel>
        <FormControlLabelText>
          Which time slot works best for you?
        </FormControlLabelText>
      </FormControlLabel>
      <RadioGroup className="my-2">
        <VStack space="sm">
          <Radio size="sm" value="Mango">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Monday</RadioLabel>
          </Radio>
          <Radio size="sm" value="Apple">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Tuesday</RadioLabel>
          </Radio>
          <Radio size="sm" value="Orange">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>Wednesday</RadioLabel>
          </Radio>
        </VStack>
      </RadioGroup>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
          Choose one time slot for the meeting
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
