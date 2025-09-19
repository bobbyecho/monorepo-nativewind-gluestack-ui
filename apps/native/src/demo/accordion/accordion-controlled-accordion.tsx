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
import React from 'react';

export function AccordionControlled() {
  const [selectedValues, setSelectedValues] = React.useState([
    'item-1',
    'item-2',
  ]);
  return (
    <Accordion
      variant="unfilled"
      type="multiple"
      value={selectedValues}
      onValueChange={(item) => setSelectedValues(item)}
      className="m-5 w-[95%]"
    >
      <AccordionItem
        value="item-1"
        className="border-t border-b border-outline-300"
      >
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    Exploring Nature's Wonders
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
            Embark on a journey through the breathtaking landscapes and diverse
            ecosystems of our planet. From majestic mountains to serene oceans,
            discover the beauty that nature has to offer.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    The Art of Culinary Delights
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
            Indulge your senses in a culinary adventure. Uncover the secrets
            behind delectable dishes, learn about unique flavor profiles, and
            ignite your passion for cooking.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className="border-t border-b border-outline-300"
      >
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    Mastering the Creative Process
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
            Immerse yourself in the world of creativity. Unleash your artistic
            potential, whether it's through writing, painting, or any other form
            of expression.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
