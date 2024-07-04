import School from "@/components/school/school";
import { getSchoolsToAccess } from "./actions";
import SchoolWithParams from "@/components/school/schoolWithParams";

export default async function SchoolsToAccess() {
  const schools = await getSchoolsToAccess();
  console.log(schools);

  return (
    <>
      {schools.map((school) => (
        <SchoolWithParams key={school.id} data={school} />
      ))}
    </>
  );
}
