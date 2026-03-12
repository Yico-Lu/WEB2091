import { Table } from "antd"

const colums = [
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
const data = [
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

function Lab2() {
  return (
    <div>
      <Table columns={colums} dataSource={data}/>
    </div>
  )
}

export default Lab2
