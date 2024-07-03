import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function ChangePasswordLayout({children}: {children: React.ReactNode}) {
    return (
        <Card className="w-full max-w-lg">
            <CardHeader>
                <CardTitle>Update password</CardTitle>
                <CardDescription>Fill the form below to update your password.</CardDescription>
            </CardHeader>
            {children}
        </Card>
    )
}