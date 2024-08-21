import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Loginpage = () => {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginJudgment = () => {
    console.log("login", userId, userPassword);
    userId === "song" && userPassword === "1234"
      ? console.log(true)
      : console.log(false);
    // userId === "song" && userPassword === "1234" ? (
    //   <Navigate to="/" />
    // ) : (
    //   <Navigate to="/login" />
    // );
  };
  return (
    <div>
      <form>
        <label>
          ID
          <input
            type="text"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              console.log("id", e.target.value);
            }}
          />
        </label>
        <label>
          PASSWORD
          <input
            type="text"
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
              console.log("password", e.target.value);
            }}
          />
        </label>
        <Button
          variant="warning"
          onClick={() => {
            loginJudgment();
          }}
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default Loginpage;
