import Navigation from "@/components/Navigation/Navigation";

export default function AnalyticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#111111]">
      <div className="w-full h-full px-10 max-w-[1700px] m-auto">
        <Navigation />
        {children}
      </div>
    </div>
  );
}
