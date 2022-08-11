import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export function Header() {
  return (
    <Nav>
      <a href="/home">
        <FaHome size={24} />
      </a>
      <a href="/user">
        <FaUserAlt size={24} />
      </a>
      <a href="/test">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
