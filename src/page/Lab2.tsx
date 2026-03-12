import { Table } from "antd"
//1
const columns1 = [
    {
    title: "ID",
    dataIndex: "id",
    },
    {
    title: "Name",
    dataIndex: "name",
    },
    {
    title: "Age",
    dataIndex: "age",
    },
    {
    title: "Major",
    dataIndex: "major",
    },
]
const data1 = [
    {
        key: 1,
        id: 1,
        name: "nam",
        age: 20,
        major: "IT"
    },
    {
        key: 2,
        id: 2,
        name: "linh",
        age: 21,
        major: "businees"
    },
    {
        key: 3,
        id: 3,
        name: "ha",
        age: 19,
        major: "design"
    },
]
//2
const columns2 = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
]

const data2 = [
 { key: 1, id: 1, name: "Laptop", price: 20000, category: "dien tu" },
  { key: 2, id: 2, name: "Dien thoai", price: 15000, category: "dien tu" },
  { key: 3, id: 3, name: "giay", price: 2000, category: "thoi trang" },
  { key: 4, id: 4, name: "tui", price: 1000, category: "thoi trang" },
  { key: 5, id: 5, name: "dong ho", price: 5000, category: "cong nghe" },
]
//3
const columns3 = [
    {title: "ID", dataIndex: "id"},
    {title: "Name", dataIndex: "name"},
    {title: "Email", dataIndex: "email"},
    {title: "Status",
     dataIndex: "status",
     render: (status:string) => (
    <span style={{ color: status === "active" ? "green" : "red" }}>
    {status}
    </span>
    )
    },
    {title: "Action",
     render: (_, record) => (
      <>
        <button>Edit</button>
        <button>Delete</button>
      </>
    ),
     
    },
]

const data3 = [
    {id: 1, name: "dungtx", email: "xuandungg2601@gmail.com",status: "active" },
    {id: 2, name: "anhtx", email: "manhanh2601@gmail.com",status: "inactive" }
]

function Lab2() {
  return (
    <div>
      <Table columns={columns1} dataSource={data1} pagination={false}/>
      <Table columns={columns2} dataSource={data2} pagination={{ pageSize: 3 }}/>
      <Table columns={columns3} dataSource={data3} pagination={false}/>
    </div>
  )
}

export default Lab2
