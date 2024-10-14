import React from "react";
import UserTable from "../components/user/UserTable";
import UserForm from "../components/user/UserForm";

const UsersPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <UserForm />
      <UserTable />
    </div>
  );
};

export default UsersPage;
