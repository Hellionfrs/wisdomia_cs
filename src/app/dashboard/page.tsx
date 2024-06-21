import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="bg-card p-4 md:p-6 shadow rounded-lg">
        <h1 className="text-2xl font-bold">School Dashboard</h1>
      </header>
      <main className="pt-4 md:pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="bg-card shadow">
          <div className="p-4 md:p-6 flex items-start gap-4">
            <SchoolIcon className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-lg font-semibold">Acme Elementary</h2>
              <p className="text-muted-foreground">123 Main St, Anytown USA</p>
            </div>
          </div>
          <CardFooter>
            <Button>Request Access</Button>
          </CardFooter>
        </Card>
        <Card className="bg-card shadow">
          <div className="p-4 md:p-6 flex items-start gap-4">
            <SchoolIcon className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-lg font-semibold">Oakwood High School</h2>
              <p className="text-muted-foreground">456 Oak Rd, Somewhere CA</p>
            </div>
          </div>
          <CardFooter>
            <Button>Request Access</Button>
          </CardFooter>
        </Card>
        <Card className="bg-card shadow">
          <div className="p-4 md:p-6 flex items-start gap-4">
            <SchoolIcon className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-lg font-semibold">Willow Middle School</h2>
              <p className="text-muted-foreground">789 Willow Ln, Elsewhere NY</p>
            </div>
          </div>
          <CardFooter>
            <Button>Request Access</Button>
          </CardFooter>
        </Card>
        <Card className="bg-card shadow">
          <div className="p-4 md:p-6 flex items-start gap-4">
            <SchoolIcon className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-lg font-semibold">Maple Elementary</h2>
              <p className="text-muted-foreground">321 Maple Ave, Somewhere Else</p>
            </div>
          </div>
          <CardFooter>
            <Button>Request Access</Button>
          </CardFooter>
        </Card>
        <Card className="bg-card shadow">
          <div className="p-4 md:p-6 flex items-start gap-4">
            <SchoolIcon className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-lg font-semibold">Birch High School</h2>
              <p className="text-muted-foreground">654 Birch Rd, Anyplace USA</p>
            </div>
          </div>
          <CardFooter>
            <Button>Request Access</Button>
          </CardFooter>
        </Card>
        <Card className="bg-card shadow">
          <div className="p-4 md:p-6 flex items-start gap-4">
            <SchoolIcon className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-lg font-semibold">Cedar Middle School</h2>
              <p className="text-muted-foreground">987 Cedar St, Somewhere Else NY</p>
            </div>
          </div>
          <CardFooter>
            <Button>Request Access</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
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
