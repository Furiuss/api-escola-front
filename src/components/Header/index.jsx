import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export function Header() {
  return (
    <Nav>
      <Link to="/home">
        <FaHome size={24} />
      </Link>
      <Link to="/user">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/test">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
