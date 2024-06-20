import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Update your profile information.</CardDescription>
      </CardHeader>
      {children}
    </Card>
  );
}
