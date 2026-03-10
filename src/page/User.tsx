import { Table } from "antd";


const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  { title: "Role", dataIndex: "role" },
];
const data = [
  { key: 1, name: "dung", email:"123@gmail.com", role:"user" },
  { key: 2, name: "Anh", email:"1234@gmail.com", role:"admin" },
];
function User() {
  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default User
