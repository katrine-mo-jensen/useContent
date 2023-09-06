export const Login = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("username:", event.target.username.value);
    console.log("password:", event.target.password.value);
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <label>
        Brugernavn:
        <input name="username" placeholder="indtast brugernavn" />
      </label>
      <label>
        Password:
        <input name="password" placeholder="indtast password" />
      </label>
      <input type="submit" value="send" />
    </form>
  );
};
