import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getSchoolGrades } from "./actions";
import GradesAccordion from "./gradesAccordion";

type Level = {
  id: string;
  description: string;
};
type Props = Array<Level>;

export default async function LevelAccordion({ data }: { data: Props }) {
  console.log(data);
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Levels</AccordionTrigger>
        {/* maps the levels -> levels */}
        {data.map((level) => (
          <AccordionContent key={level.id}>
            {/* another accordion with grades o grados with parent trigger*/}
            <GradesAccordion level={level} />
          </AccordionContent>
        ))}
      </AccordionItem>
    </Accordion>
  );
}
