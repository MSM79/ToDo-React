import React, { useState } from 'react';
import './style.css';
import shortId from 'shortid';
import { Drawer, Form, Button, Col, Row, Input, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../features/todoslice';

const DrawerForm = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [form] = Form.useForm();
  const inputRef = React.useRef(null);
  const [date, setDate] = useState('');

  function onChange(date, dateString) {
    setDate(dateString);
  }

  let handleSubmit = (e) => {
    const newTodo = {
      name: e.todo,
      description: e.description,
      date,
    };
    dispatch(addTodo(newTodo));
    form.resetFields();
  };

  return (
    <>
      <Row>
        <Button type="primary" onClick={showDrawer} className="task">
          <PlusOutlined />
        </Button>
      </Row>
      <Drawer
        title="New Task"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          ></div>
        }
      >
        <Form onFinish={handleSubmit} layout="vertical" hideRequiredMark form={form}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="todo"
                label="Title"
                rules={[{ required: true, message: 'Please enter user name' }]}
              >
                <Input placeholder="Title" ref={inputRef} />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[{ required: true, message: 'Please choose the dateTime' }]}
              >
                <DatePicker
                  onChange={onChange}
                  style={{ width: '100%' }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}></Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default DrawerForm;
