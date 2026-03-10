import { Layout, Menu, Form, Input, Button, Modal } from "antd";
import { HomeOutlined, UserOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Header, Sider, Content, Footer } = Layout;

function Dashboard() {

  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <Sider>
        <div style={{ color: "white", padding: 16, fontSize: 18 }}>
          Dashboard
        </div>

        <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: <Link to="#">Trang chủ</Link>,
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: <Link to="/user">Danh sách user</Link>,
            },
            {
              key: "3",
              icon: <PlusOutlined />,
              label: "Thêm user",
            },
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ padding: 0 }}>Header</Header>

        <Content style={{ margin: "0 16px", padding: 20 }}>

          <Form>
            <Form.Item label="Name" name="name">
              <Input placeholder="Nhap ten" />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input placeholder="Nhap email" />
            </Form.Item>

            <Form.Item label="Password" name="password">
              <Input placeholder="Nhap mat khau" />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <Button onClick={() => setOpen(true)}>Add User</Button>
          <Modal
            open={open}
            onCancel={() => setOpen(false)}
            onOk={() => setOpen(false)}
          >
            <Form>
            <Form.Item label="Name" name="name">
              <Input placeholder="Nhap ten" />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input placeholder="Nhap email" />
            </Form.Item>

            <Form.Item label="Role" name="role">
              <Input placeholder="Nhap role" />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">
                Add
              </Button>
            </Form.Item>
          </Form>
          </Modal>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Dashboard;