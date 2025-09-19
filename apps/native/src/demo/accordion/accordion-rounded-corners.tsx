import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
} from '@gezit-native/ui/accordion';
import { RemoveIcon, AddIcon } from '@gezit-native/ui/icon';

export function AccordionRoundedCorners() {
  return (
    <Accordion className="m-5 w-[80%] max-w-[640px] bg-transparent">
      <AccordionItem value="item-1" className="rounded-lg">
        <AccordionHeader>
          <AccordionTrigger className="focus:web:rounded-lg">
            {({ isExpanded }) => {
              return (
                <>
                  {isExpanded ? (
                    <AccordionIcon as={RemoveIcon} className="mr-3" />
                  ) : (
                    <AccordionIcon as={AddIcon} className="mr-3" />
                  )}
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="ml-9">
          <AccordionContentText>
            To place an order, simply select the products you want, proceed to
            checkout, provide shipping and payment information, and finalize
            your purchase.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="mt-5 rounded-lg">
        <AccordionHeader>
          <AccordionTrigger className="focus:web:rounded-lg">
            {({ isExpanded }) => {
              return (
                <>
                  {isExpanded ? (
                    <AccordionIcon as={RemoveIcon} className="mr-3" />
                  ) : (
                    <AccordionIcon as={AddIcon} className="mr-3" />
                  )}
                  <AccordionTitleText>
                    What payment methods do you accept?
                  </AccordionTitleText>
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="ml-9">
          <AccordionContentText>
            We accept all major credit cards, including Visa, Mastercard, and
            American Express. We also support payments through PayPal.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
