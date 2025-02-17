// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import uwu from '../../public/logo.svg'

interface HeaderProps {
  activePage: 'home' | 'page1' | 'page2';
}

export default function Header({ activePage }: HeaderProps) {
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Page1', path: '/page1' },
    { name: 'Page2', path: '/page2' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-10">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={uwu} //
            alt="Logo"
            width={100}
            height={32}
            className="mr-8"
          />
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activePage === item.name.toLowerCase()
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
      </div>
    </header>
  );
}