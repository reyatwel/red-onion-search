import SearchHeader from '../components/SearchHeader';
import './../globals.css';

export const metadata = {
  title: 'RedOnion Search',
  description: 'RedOnion Search App',
}

export default function SearchLayout({ children }) {
  return (
    <div>      
      <SearchHeader />
      {children}      
    </div>
  )
}
