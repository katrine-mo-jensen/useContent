import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const UserPostsPage = () => {
  //lav et fetch ,ed brugerens id for at få de posts som deres brugere har lavet

  const { user } = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [userPosts, setUserPosts] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    //tjek først om user findes
    if (user) {
      const id = user.id;
      const token = user.token;

      const url = `https://dummyjson.com/users/${id}/posts`;
      console.log("user er logget ind");

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((data) => setUserPosts(data))
        .catch((err) => console.error(err));
    } else {
      console.log("user er ikke logget ind!");
      setErrorMsg(
        "Du skal være logget ind for at se posts. Du vil blive sendt tilbage til login"
      );

      const timeout = setTimeout(() => {
        navigate("/login");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, []);

  console.log("UserPosts", userPosts);

  return (
    <section>
      <h3>posts</h3>
      <h4>{errorMsg}</h4>
      {userPosts?.posts.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        );
      })}
    </section>
  );
};
