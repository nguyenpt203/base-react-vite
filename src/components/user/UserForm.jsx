import { Button, Input } from "antd";
import React, { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickBtnCreateUser = () => {};
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>Full Name</span>
          <Input
            onChange={(event) => {
              setFullName(event.target.value);
            }}
            value={fullName}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
        </div>
        <div>
          <span>Phone</span>
          <Input
            onChange={(event) => {
              event.target.value;
            }}
            value={phone}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              handleClickBtnCreateUser();
            }}
            type="primary"
          >
            Create User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
