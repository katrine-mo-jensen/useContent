import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const UserPostsPage = () => {
  const { user } = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const id = user.id;
      const token = user.token;
      const url = `https://dummyjson.com/users/${id}/posts`;
      console.log("User er logget ind");

      const options = {
        metode: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => setUserPosts(data))
        .catch((err) => console.log(err));
    } else {
      console.log("User er ikke logget ind");
      setErrorMsg(
        "Du skal være logget ind, for at kunne se posts. Du vil blive viderestillet til login"
      );

      let timeOut = setTimeout(() => {
        navigate("/login");
      }, 5000);
      return () => clearTimeout(timeOut);
    }
  }, []);

  return (
    <section>
      <h2>Posts</h2>
      <h4>{errorMsg}</h4>
    </section>
  );
};
