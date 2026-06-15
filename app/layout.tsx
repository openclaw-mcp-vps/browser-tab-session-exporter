import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabFlow — Export Browser Sessions as Shareable Workflows",
  description: "Capture browser tab sequences and form inputs to create reproducible automation workflows. Perfect for QA engineers and product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4675fefd-c9bb-4f0c-b89b-ae58a0129741"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
