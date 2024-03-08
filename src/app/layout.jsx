import './globals.css'
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';


export const metadata = {
  title: "Bem Vindo | Loovi",
  description: "Está seguro, está na Loovi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

