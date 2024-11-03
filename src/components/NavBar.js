import React from 'react';

function NavBar(){
  const links = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'projects', href: '#projects' },
  ];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
