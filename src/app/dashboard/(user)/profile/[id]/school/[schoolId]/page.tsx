import SchoolById from "./schoolById";

type Params = {
  id: string;
  schoolId: string;
};
export default function SchoolPage({ params }: { params: Params }) {
  const { schoolId } = params;
  console.log(schoolId)
  return (
    <div>
      <SchoolById schoolId={schoolId} />
    </div>
  );
}
