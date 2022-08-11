import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Nav } from './styled';

export function Header() {
  toast.success('Deu certo cria!');
  toast.error('ih, erro na matrix!');
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/user">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
}
