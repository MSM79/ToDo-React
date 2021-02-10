import React, { useState }  from 'react';
import Menu from '../Menu';
import Todo from '../Todo';
import AddTodo from '../AddTodo';
import { Col, Row, Affix, Layout } from 'antd';
import './style.css';
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
                <Todo
                  title="Mesvak"
                  time="10:15 AM"
                  description="salam chetori"
                  status="success"
                 />
                <Todo
                title="Game"
                time="11:00 PM"
                description="salam chetori"
                status="processing"
                />
                <Todo
                  title="Coding"
                  time="7:07 PM"
                  description="salam chetori"
                  status="warning"
                />
                <Todo
                  title="Coding"
                  time="7:07 AM"
                  description="salam chetori"
                  status="error"
                />
              </Col>
            </Row>
          </Col>
        </Content>
      </Layout>
      <Footer style={{background:'transparent', width:200, right:0 ,bottom: 0, position:'absolute'}}>
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
