import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "STEM Website",
  description: "STEM Learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}