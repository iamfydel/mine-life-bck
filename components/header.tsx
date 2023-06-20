import Navbar from './Main-Menu/navbar';
import Image from 'next/image';
import Nav from './Main-Menu/nav';
export default function Header() {
  return (
    <>
      <header className='header'>
        <div className="shadow-normal">          
          <Nav/>
        </div>
      </header>
    </>
  )
}
