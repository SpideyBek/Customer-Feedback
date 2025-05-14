//this a button component which is used to log in and with components it's reusable in other pages too. For example, such as login page

import Link from "next/link";

const ButtonLogin = ({ isLoggedIn }) => {
  //jsx file - which helps us to write both html and javascript but code is a bit different.
  if (isLoggedIn) {
    return (
      <Link href="/dashboard">
        <button className="btn btn-primary"> Login </button>
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};
export default ButtonLogin;
