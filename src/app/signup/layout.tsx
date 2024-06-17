import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 sm:grid-cols-2">
        <div className="flex flex-col items-start justify-center space-y-4 rounded-lg bg-gradient-to-br from-gray-500 to-black p-8 text-white">
          <h2 className="text-3xl font-bold">Welcome to Wisdomia!</h2>
          <p className="text-lg">
            Gracias por registrarte. En breve podrás acceder a todas las
            funcionalidades de Wisdomia.
          </p>
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}
