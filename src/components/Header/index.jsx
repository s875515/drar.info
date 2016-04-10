import React from 'react';
import {Link} from 'react-router';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import AddVideo from '../AddVideo';
import style from './style';


const Header = () => (
  <Navbar className={style.test}>
    <Navbar.Header className={style.left}>
      <Navbar.Brand className={style.brand}>
        <Link to="/">行車紀錄器分享平台</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#"><AddVideo /></NavItem>
    </Nav>
  </Navbar>
);

export default Header;
