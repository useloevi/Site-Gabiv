import "./globals.css";
import { fontVariables } from "./fonts";

export const metadata = {
  title: "Gabriela Viana",
  description: "Branding, direção de arte e identidade visual",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={fontVariables}>{children}</body>
    </html>
  );
}
