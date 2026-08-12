import { useEffect, useState } from "react";

export default function FlagImage({
  alt,
  sources,
  className = "",
  fallbackClassName = "",
  loading,
  fetchPriority,
}) {
  const availableSources = [...new Set(sources.filter(Boolean))];
  const sourcesKey = availableSources.join("|");
  const [sourceIndex, setSourceIndex] = useState(0);

  useEffect(() => {
    setSourceIndex(0);
  }, [sourcesKey]);

  const source = availableSources[sourceIndex];

  if (!source) {
    return <span className={fallbackClassName}>Flag unavailable</span>;
  }

  return (
    <img
      src={source}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      onError={() => setSourceIndex((index) => index + 1)}
      className={className}
    />
  );
}
