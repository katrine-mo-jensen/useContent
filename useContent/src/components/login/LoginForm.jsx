

export const LoginForm = ({ submitHandler }) => {
  return (
    <form
      onSubmit={(event) => submitHandler(event)}
    >
      <label>
        Brugernavn:
        <input name="username" placeholder="indtast dit brugernavn" />
      </label>
      <label>
        Password:
        <input name="password" type="password" placeholder="indtast password" />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
};