import Navigation from "@/components/Navigation/Navigation";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full px-10">
      <Navigation />
      {children}
    </div>
  );
}
