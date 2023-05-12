import "./globals.css";

export const metadata = {
  title: "Domagoj Satrapa",
  description: "I build digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
