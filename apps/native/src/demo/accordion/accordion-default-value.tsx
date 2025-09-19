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
import { Divider } from '@repo/ui/divider';

export function AccordionDefaultValue() {
  return (
    <Accordion
      variant="unfilled"
      type="single"
      defaultValue={['item-3']}
      className="w-[90%] m-5"
    >
      <AccordionItem value="item-1" className="rounded-lg">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    What is the defaultValue prop of the Accordion component?
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
            The defaultValue prop of the Accordion component is used to define
            the open item by default. It is used when the Accordion component is
            uncontrolled.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <Divider />
      <AccordionItem value="item-2" className="rounded-lg">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    How many size variants does the Accordion component have?
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
            The Accordion component has three size variants - sm, md and lg.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <Divider />
      <AccordionItem value="item-3" className="rounded-lg">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    Can I nest my accordions?
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
            Yes, you can nest your accordions. Refer to the nested accordion
            example in the docs.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
