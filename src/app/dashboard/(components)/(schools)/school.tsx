import { Card, CardFooter } from "@/components/ui/card";
import { School as S} from "../../(user)/profile/[id]/school/definitions";
import { Button } from "@/components/ui/button";


export default function School({data}: { data: S }) {
    return (
        <Card className="bg-card shadow">
          <div className="p-4 md:p-6 flex items-start gap-4">
            <SchoolIcon className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-lg font-semibold capitalize">{data.name}</h2>
              <p className="text-muted-foreground">{data.address}</p>
            </div>
          </div>
          <CardFooter>
            <Button>Request Access</Button>
          </CardFooter>
        </Card>

    )
}

function SchoolIcon(props: React.SVGAttributes<SVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )

}