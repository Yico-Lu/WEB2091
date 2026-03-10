import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import { Form, Input, Button,Layout, List } from "antd";
import Dashboard from "./layout/dashboard";
import User from "./page/User";

const { Header, Content, Footer } = Layout;

 const onFinish = (values: any) => {
    console.log(values);
  };
function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        {/* <Button type="primary">Click me</Button>
        <Button type="default">Click me</Button>
        <Button type="dashed">Click me</Button>
        <Button type="link">Click me</Button>
        <Button type="text">Click me</Button>

        <Layout>
          <Header style={{ color: "white" }}>Header</Header>
          <Content style={{ padding: 20 }}>
           <Form onFinish={onFinish}>
              <Form.Item label="Username" name="username">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Content>
          <Footer>Footer</Footer>
        </Layout> */}
        <Dashboard/>
      </div>
      <Routes>
        <Route>
         <Route path="/" element={<Dashboard/>} />
         <Route path="/user" element={<User/>}/>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
