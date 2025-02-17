// components/HeaderWrapper.tsx
'use client'

import { usePathname } from 'next/navigation';
import Header from './header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  
  // Determine active page based on pathname
  let activePage: 'home' | 'page1' | 'page2' = 'home';
  if (pathname === '/page1') activePage = 'page1';
  if (pathname === '/page2') activePage = 'page2';
  
  return <Header activePage={activePage} />;
}