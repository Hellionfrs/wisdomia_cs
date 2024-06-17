import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <WisdomiaLogo />
          <span className="sr-only">Crew Scheduler</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to Wisdomia
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    repellendus error natus omnis tenetur maxime, nemo, cumque
                    aut commodi quo corrupti accusantium facere facilis
                    assumenda voluptates aspernatur in hic! Eligendi!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="login"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Login
                  </Link>
                  <Link
                    href="register"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Register
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our crew scheduling software offers a comprehensive set of
                  features to streamline your operations.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Shift Scheduling</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Easily create and manage employee schedules with
                        advanced features like shift swapping, time-off
                        requests, and more.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <ClockIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Time Tracking</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Accurately track employee hours and overtime to ensure
                        compliance and improve payroll accuracy.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <UsersIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold">Team Management</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Manage your crew with advanced features like
                        availability tracking, skill sets, and team
                        communication tools.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from our satisfied customers about how Crew Scheduler has
                  transformed their business.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg"
                      width="48"
                      height="48"
                      alt="Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Jane Doe</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        CEO, Acme Corp
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {"Crew Scheduler has been a game-changer for our\n business.It has helped us streamline our scheduling\n process, reduceovertime, and improve overall\n productivity."}
                  </p>
                </div>
                <div className="flex flex-col justify-center space-y-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="/placeholder.svg"
                      width="48"
                      height="48"
                      alt="Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-bold">John Smith</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Operations Manager, Widgets Inc
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {"I highly recommend Crew Scheduler to any business\n looking to streamline their crew scheduling process.\n It's\nuser-friendly, powerful, and has saved us a\n significantamount of time and money."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Pricing
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that best fits your business needs.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col justify-between space-y-4 bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md">
                  <div>
                    <h3 className="text-2xl font-bold">Starter</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Perfect for small teams
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">$19</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      per month
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Up to 10 employees</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Basic scheduling tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Time tracking</span>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
                <div className="flex flex-col justify-between space-y-4 bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md">
                  <div>
                    <h3 className="text-2xl font-bold">Pro</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      For growing teams
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">$49</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      per month
                    </p>
                  </div>
                  <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Up to 50 employees</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Advanced scheduling tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Time tracking and reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      <span>Team management features</span>
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function WisdomiaLogo(props: any) {
  return (
    <Image
      {...props}
      src={logo}
      width="50"
      height="50"
      alt="Wisdomia Logo"
      className="h-6 w-6"
    />  
  );
}

function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
