import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Login = () => {

    const {setUser,user} = useContext(UserContext);


    const submitHandler = (event) => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value


if (username !== "" &&  password !== ""  ) {

    const url = 'https://dummyjson.com/auth/login';
    const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: username,
      password:  password,
    })}

    fetch (url, options)
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => setUser(data))

    // .then((err) => console.error(err));
}
else {
    alert('du skal udfylde felterne fær du sender!')
}

        console.log("username:", event.target.username.value)
        console.log("password:", event.target.password.value)
    };

    if (user?.firstName)

    return (
        <>
         <h3>Velkommen {user.username} </h3>
          <button onClick={() => setUser(null)}>Log ud</button>
        </>

    )
else 
    return (

        <form onSubmit={(event) => submitHandler(event)}>
            <label>
                Brugernavn:

            <input name="username" placeholder="indtast brugernavn"/>
            </label>
            <label>

             Password: 
<input name="password" placeholder="intast password"/>
            </label>
            <input type="submit" value="send"/>
        </form>
    )
}