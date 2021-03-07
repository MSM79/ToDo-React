import React, { useState }  from 'react';
import { Col, Row, Affix, Layout } from 'antd';

import './style.css';
import Todo from '../Todo';
import Menu from '../Menu';
import AddTodo from '../AddTodo';

const { Sider, Content, Footer } = Layout;

function MyLayout() {
  const [top, setTop] = useState(50);

  return (
    <Layout>
      <Layout>
        <Sider style={{ height:'auto', background:'transparent' }} breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
        console.log(broken);
        }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}>
        <Menu />
        </Sider>
        <Content className="content">
          <Col className="contentRadius">
            <Row align="middle" justify="center">
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Todo/>
              </Col>
            </Row>
          </Col>
        </Content>
      </Layout>
      <Footer style={{ background:'transparent', width:200, right:0 ,bottom: 0, position:'absolute' }}>
      <Row style={{height: 75, padding:10}} justify="end" align="middle">
        <Col>
          <Affix offsetTop={top}>
            <AddTodo onClick={() => setTop(top + 10)}/>
          </Affix>
        </Col>
      </Row>
      </Footer>
    </Layout>
  )
}

export default MyLayout;
