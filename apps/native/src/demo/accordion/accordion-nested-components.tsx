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

export function AccordionNestedComponents() {
  return (
    <Accordion
      variant="unfilled"
      size="sm"
      className="m-5 border border-outline-300 w-[80%] max-w-[640px]"
    >
      <AccordionItem value="a">
        <AccordionHeader className="bg-background-0">
          <AccordionTrigger>
            {({ isExpanded }) => (
              <>
                {isExpanded ? (
                  <AccordionIcon as={RemoveIcon} size="sm" />
                ) : (
                  <AccordionIcon as={AddIcon} size="sm" />
                )}
                <AccordionTitleText className="ml-3 text-sm">
                  USA
                </AccordionTitleText>
              </>
            )}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="pb-0">
          <Accordion className="w-full border border-outline-300">
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => (
                    <>
                      {isExpanded ? (
                        <AccordionIcon as={RemoveIcon} />
                      ) : (
                        <AccordionIcon as={AddIcon} />
                      )}
                      <AccordionTitleText className="ml-3">
                        California
                      </AccordionTitleText>
                    </>
                  )}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>
                  Capital city of California is Sacramento. California has a GDP
                  of 2.89 trillion dollars and follows Pacific Standard Time
                  zone.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion className="w-full mt-5 bg-background-0">
            <AccordionItem value="c">
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => (
                    <>
                      {isExpanded ? (
                        <AccordionIcon as={RemoveIcon} />
                      ) : (
                        <AccordionIcon as={AddIcon} />
                      )}
                      <AccordionTitleText className="ml-3">
                        Nevada
                      </AccordionTitleText>
                    </>
                  )}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>
                  Nevada is located in a mountainous region that includes vast
                  semiarid grasslands and sandy alkali deserts. It is the most
                  arid state of the country.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
