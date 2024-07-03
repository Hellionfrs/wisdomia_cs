import School from "@/components/school/school";
import { getSchools } from "./actions";

export default async function Schools({ id }: { id: string }) {
  const schools = await getSchools(id);
  console.log(schools);
  return (
    <>
      {schools.map((school) => (
        <School key={school.id} data={school} />
      ))}
    </>
  );
}
