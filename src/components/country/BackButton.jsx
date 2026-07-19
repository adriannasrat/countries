import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
      className="inline-flex items-center gap-3 rounded-md bg-white px-6 py-2.5 text-sm font-medium text-slate-900 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-4 dark:bg-slate-800 dark:text-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-slate-900"
    >
      <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
      <span>Back</span>
    </button>
  );
}
