import './globals.css'

export const metadata = {
  title: "Bem Vindo | Loovi",
  description: "Está seguro, está na Loovi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}

