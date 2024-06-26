export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="bg-card p-4 md:p-6 shadow rounded-lg">
        <h1 className="text-2xl font-bold">Welcome to your school dashboard</h1>
      </header>
      {children}
    </div>
  );
}
