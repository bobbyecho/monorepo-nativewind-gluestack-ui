import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
} from '@repo/ui/accordion';
import { RemoveIcon, AddIcon } from '@repo/ui/icon';

export function AccordionDisabledItem() {
  return (
    <Accordion variant="unfilled" className="m-5 w-[90%]">
      <AccordionItem
        value="item-1"
        isDisabled={true}
        className="border-b border-outline-300"
      >
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>Disabled Item</AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={RemoveIcon} />
                  ) : (
                    <AccordionIcon as={AddIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>This is a Disabled Item.</AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    Is this accordion accessible?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={RemoveIcon} />
                  ) : (
                    <AccordionIcon as={AddIcon} />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            Yes, the accordion is accessible. It adheres to the WAI-ARIA design
            pattern. You can read more about it in the accessibility section of
            the docs.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
