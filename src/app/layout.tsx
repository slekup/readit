import "../styles/app.css";

import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar />
      <Sidebar />
      <body>{children}</body>
    </html>
  );
}
