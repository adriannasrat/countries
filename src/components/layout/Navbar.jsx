import PageContainer from "./PageContainer";
import ThemeToggle from "../ui/ThemeToggle";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md dark:bg-slate-800">
      <PageContainer
        as="nav"
        className="flex min-h-16 items-center justify-between gap-4 py-4 sm:min-h-20"
      >
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-slate-950 dark:text-white sm:text-xl md:text-2xl"
        >
          Where in the world?
        </Link>
        <ThemeToggle />
      </PageContainer>
    </header>
  );
}
