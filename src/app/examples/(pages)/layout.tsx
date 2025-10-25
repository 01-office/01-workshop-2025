export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 overflow-y-auto bg-white z-10">
      {children}
    </div>
  );
}
