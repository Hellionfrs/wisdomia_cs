
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getSchoolGrades, getSectionsGrades } from "./actions";

type Grade = {
    id: string;
    description: string;
  };
export default async function GradesAccordion({ level }: { level: Grade, }) {  
    console.log(level.id)
    {/* get grades by level id */}
    const grades = await getSchoolGrades(level.id);
    console.log(grades);
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>{level.description}</AccordionTrigger>
        {grades.map((grade) => (
          <GradeContent data={grade} key={grade.id} />
        ))}
      </AccordionItem>
    </Accordion>
  );
}

export async function GradeContent({ data }: { data: Grade }) {
    {/* get grades by level id */}
    // const grades = await getSectionsGrades(data.id);
    console.log(data);
    return (
      <AccordionContent>
        <p>{data.description}</p>
      </AccordionContent>
    );
  }     