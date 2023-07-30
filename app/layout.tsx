import "./global.css";
import { Navbar, Footer } from "@/components/index";
export const metadata = {
  title: "Flexicode",
  description: "Market your productivity to the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
