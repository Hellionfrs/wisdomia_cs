import School from "@/app/dashboard/(components)/(schools)/school";
import { getSchools } from "./actions";

export default async function Schools({id}: { id: string }) {
    const schools = await getSchools(id);
    console.log(schools);
    return (
        <div>
            {schools.map((school) => (
                <School key={school.id} data={school} />
            ))}
        </div>  
    )
}