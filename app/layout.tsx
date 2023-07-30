import "./global.css";
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
        
        <main>{children}</main>
      </body>
    </html>
  );
}
