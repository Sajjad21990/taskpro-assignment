import React from "react";
import { Table, Rate, message } from "antd";

const TableData = (props) => {
  const { data, updateRating, loading } = props;

  const columns = [
    {
      title: "NAME",
      dataIndex: "user_name",
      key: "user_name",
      align: "center",
    },
    {
      title: "ACCOUNT NUMBER",
      dataIndex: "acc_number",
      key: "acc_name",
      align: "center",
    },
    {
      title: "APP NAME",
      dataIndex: "app_name",
      key: "app_name",
      align: "center",
    },
    {
      title: "APP DESCRIPTION",
      dataIndex: "app_title",
      key: "app_title",
      align: "center",
    },
    {
      title: "RATINGS",
      dataIndex: "",
      key: "x",
      align: "center",
      render: (key) => (
        <>
          <Rate
            allowHalf
            defaultValue={2.5}
            onChange={(value) => {
              updateRating(key.acc_number, key.app_name, value);
              message.success(`Thank you for Rating ${key.app_name}`);
            }}
            value={key.app_rating}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        loading={loading}
        style={{ cursor: "pointer" }}
      />
      ,
    </div>
  );
};

export default TableData;
