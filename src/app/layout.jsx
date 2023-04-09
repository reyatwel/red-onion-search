import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'RedOnion Search',
  description: 'RedOnion Search App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}        
        <Footer />
      </body>
    </html>
  )
}
