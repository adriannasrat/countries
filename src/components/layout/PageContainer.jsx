export default function PageContainer({
  children,
  as: Component = "div",
  className = "",
}) {
  return (
    <Component
      className={`mx-auto w-full max-w-screen-2xl px-5 sm:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </Component>
  );
}
