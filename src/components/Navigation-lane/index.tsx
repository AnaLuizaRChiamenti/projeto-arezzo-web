import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavigationLaneProps {
  productName?: string;
}

export default function NavigationLane({ productName }: NavigationLaneProps) {
  const router = useRouter();
  const currentPath = router.pathname;

  const routes = [
    { path: '/', label: 'home' },
    { path: '/novidades', label: 'novidades' },
  ];

  return (
    <div className="absolute w-full">
      <section className="px-8 py-4">
        <ul className="flex items-center tracking-widest text-xs">
          {routes.map((route, index) => (
            <li
              key={index}
              className={`uppercase ${currentPath === route.path ? 'font-sans' : ''}`}
            >
              <Link href={route.path}>{route.label}</Link>
              {index < routes.length - 1 && <span className="mx-1">|</span>}
            </li>
          ))}
          <li className="uppercase font-sans">
            <span className="mx-1">|</span>
            {productName}
          </li>
        </ul>
      </section>
    </div>
  );
}
