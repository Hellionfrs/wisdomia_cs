import { useParams } from "next/navigation";
import { getSchoolById } from "../actions";
import School from "@/components/school/school";
import Image from "next/image";
import { Accordion } from "@radix-ui/react-accordion";
import AccordionFilter from "./levelsAccordion";
import { getSchoolLevels } from "./actions";
import SchoolLevel from "./schoolLevel";
import SchoolAccordion from "./levelsAccordion";
import LevelAccordion from "./levelsAccordion";

export default async function SchoolById({ schoolId }: { schoolId: string }) {
  const { id, name, address, logo } = await getSchoolById(schoolId);
  const schoolLevels = await getSchoolLevels(schoolId);
  console.log(schoolLevels);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 rounded-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-sm">{address}</p>
            </div>
          </div>
        </div>
      </header>
      {/* <main className="container mx-auto px-6 py-4"> */}
      <main className="container mx-auto px-6 py-4">
        <LevelAccordion data={schoolLevels} />
      </main>
    </div>
  );
}

function SchoolLevels() {}
