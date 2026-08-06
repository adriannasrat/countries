import PageContainer from "./PageContainer";
import ThemeToggle from "../ui/ThemeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md dark:bg-slate-800">
      <PageContainer
        as="nav"
        aria-label="Primary navigation"
        className="flex min-h-16 items-center justify-between gap-4 py-4 sm:min-h-20"
      >
        <Link
          to="/"
          className="rounded-sm text-lg font-bold tracking-tight text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4 dark:text-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-800 sm:text-xl md:text-2xl"
        >
          Where in the world?
        </Link>
        <ThemeToggle />
      </PageContainer>
    </header>
  );
}
