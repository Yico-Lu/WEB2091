import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios"
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Icategory } from "../interface/Story";
import { useEffect, useState } from "react";



export default function StoryForm() {
   const { mutate, isPending } = useMutation({
    mutationFn: async (values: Icategory) => {
      await axios.post("http://localhost:3000/categories", values);
    },
     onSuccess: () => {
      toast.success("thêm thành công");
    },
    onError: () => {
      toast.error("thêm thất bại");
    },
  });
   
  const [categories, setCategories] = useState<Icategory[]>([]);
  useEffect(()=>{
    const getAllCategories = async () =>{
      try {
        
      } catch (error) {
        
      }
    }
  },[])


  const onFinish = (values: Icategory) => {
    mutate(values);
  };
  return (
    <div>
    <h1 className="text-3xl font-bold">Thêm danh mục truyện</h1>
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Tên danh mục" name={"title"}>
        <Input placeholder="nhập tên danh mục truyện" />
      </Form.Item>
      <Form.Item label="Mô tả" name={"description"}>
        <Input placeholder="nhập mô tả" />
      </Form.Item>
      <Form.Item label="Hoạt động" name={"active"} valuePropName="checked">
        <Checkbox>Active</Checkbox>
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
      
    </Form>
    </div>
  );
}