import React from 'react';
import logoPath from '../images/logo-header.svg';

function Header() {
  return (
    <header className="header page__header">
      <img className="header__logo" src={logoPath} alt="Логотип Mesto" />
    </header>
  )
}

export default Header;
