import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  function handleBack() {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate("/");
  }
  return (
    <button
      type="button"
      onClick={handleBack}
      className="inline-flex items-center gap-3 rounded-md bg-white px-6 py-2.5 text-sm font-medium text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg hover:cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4 dark:bg-slate-800 dark:text-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      <span>Back</span>
    </button>
  );
}
