// arrow func: () => {}
// JSX
// fragment

import "./style.css";
const MyComponent = () => {
  const name = "NguyenPT";
  const objUser = {
    name: "NguyenPT",
    age: 25,
  };
  return (
    <>
      <div>{JSON.stringify(objUser)}</div>
      <div> {name} NguyenPT</div>
      <div className="child" style={{ fontSize: "20px" }}>
        child
      </div>
    </>
  );
};

export default MyComponent;
