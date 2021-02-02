import React from 'react';
import { PageHeader, Avatar } from 'antd';
import './style.css';

function Header() {
  return (
    <header>
      <PageHeader
      className="site-page-header"
      title="ToDo"
      />

      <PageHeader
      title="Mohammad Marandi"
      className="avatar"
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }/>
    </header>
  )
}

export default Header;
