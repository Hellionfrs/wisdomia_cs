import School from "@/components/school/school";
import { getSchoolsOwned } from "./actions";
import { CardDescription, CardFooter } from "@/components/ui/card";
import SchoolWithParams from "@/components/school/schoolWithParams";

export default async function SchoolsOwned({ id }: { id: string }) {
  const schools = await getSchoolsOwned(id);
  console.log(schools);

  if (schools.length === 0) {
    return <div className="text-center">{"You don't have any schools yet."}</div>;
  }
  return (
    <>
      {schools.map((school) => (
        <SchoolWithParams key={school.id} data={school} />
      ))}
    </>
  );
}
