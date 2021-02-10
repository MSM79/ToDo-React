import React from 'react';
import { Checkbox, Row, Col } from 'antd';
import { Popconfirm, message, Badge  } from 'antd';
import { PushpinFilled } from '@ant-design/icons'
import './style.css';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

function confirm(e) {
  console.log(e);
  message.success('Deleted');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

function Todo(props) {
const {
    title,
    status
  } = props;

  return (
    <Row align="middle" justify="center">

      <Col xl={1} xs={2}>
        <Checkbox onChange={onChange}></Checkbox>
      </Col>

        <Col xl={8} lg={8} md={9} sm={9} xs={18} style={{ marginTop: 16 }} id="cardTodo">
        <Row>
        <Col xl={22} md={22} sm={22} xs={22}>
          <Row align="middle">
            <Col xl={15} md={12} sm={12} xs={12}>
              <Badge status={status} />
              <span class="spantitle">{title}</span>
            </Col>
          </Row>
          <Row>
            <Col xl={8} xs={7} sm={8} className="todoIcon">
              <Row>
                  <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>130 calendar</title><path d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z"/><circle cx="12" cy="15" r="1.5"/><circle cx="7" cy="15" r="1.5"/><circle cx="17" cy="15" r="1.5"/></svg>
                  <p>Aug 18</p>
              </Row>
            </Col>
            <Col xl={7} xs={7} sm={7} className="todoIcon">
              <Row>
                <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>126 bell</title><path d="M22.555,13.662l-1.9-6.836A9.321,9.321,0,0,0,2.576,7.3L1.105,13.915A5,5,0,0,0,5.986,20H7.1a5,5,0,0,0,9.8,0h.838a5,5,0,0,0,4.818-6.338ZM12,22a3,3,0,0,1-2.816-2h5.632A3,3,0,0,1,12,22Zm8.126-5.185A2.977,2.977,0,0,1,17.737,18H5.986a3,3,0,0,1-2.928-3.651l1.47-6.616a7.321,7.321,0,0,1,14.2-.372l1.9,6.836A2.977,2.977,0,0,1,20.126,16.815Z"/></svg>
                <p>Today</p>
              </Row>
            </Col>

            <Col xl={2} xs={2} sm={2} className="todoIcon">
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
              <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>50 bin</title><path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/><path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/><path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/></svg>
              </Popconfirm>
            </Col>

            <Col xl={2} className="todoIcon">
              <svg id="Outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>29 pencil</title><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/></svg>
            </Col>
          </Row>
        </Col>

        <Col xl={2} sm={1} xs={1}>
          <PushpinFilled className="pinIcon"/>
        </Col>

      </Row>
    </Col>
  </Row>
  )
}

export default Todo;
