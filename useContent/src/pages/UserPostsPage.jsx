import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export const UserPostsPage = () => {
  const { user } = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (user) {
      const id = user.id;
      const url = `https://dummyjson.com/users/${id}/posts`;
      console.log("User er logget ind");
    } else {
      console.log("User er ikke logget ind");
      setErrorMsg("Du skal være logget ind, for at kunne se posts");
    }
  }, []);

  return (
    <section>
      <h2>Posts</h2>
      <h4>{errorMsg}</h4>
    </section>
  );
};
