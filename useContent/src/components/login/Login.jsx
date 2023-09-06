import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { LoginForm } from "../login/LoginForm";

/** TEST USER
     *"username": "rshawe2",
      "password": "OWsTbMUgFc",
     */

export const Login = () => {
  const { setUser, user } = useContext(UserContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username !== "" && password !== "") {
      const url = "https://dummyjson.com/auth/login";
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error(err));
    } else {
      alert("Du skal udfylde felterne før du sender");
    }

    "username:", event.target.username.value;
  };

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  if (user?.firstName)
    return (
      <>
        <h3>Velkommen {user?.firstName}</h3>
        <button onClick={() => logout()}>Log Ud</button>
      </>
    );
  else return <LoginForm submitHandler={submitHandler} />;
};