import React from 'react';
import { PageHeader, Avatar } from 'antd';
import './style.css';
import AddTodo from '../AddTodo';

function Header() {
  return (
    <header>
      <PageHeader
      title="ToDo"
      className="site-page-header"
      />

      <AddTodo />

      <PageHeader
      className="avatar"
      title="Mohammad Marandi"
      avatar={
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      }/>
    </header>
  )
}

export default Header;
