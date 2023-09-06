import { useEffect, useContext } from "react";
import { CountButton } from "../components/CountButton/CountButton";
import { ContentSection } from "../components/contentSection/ContentSection";
import { UserContext } from "../context/UserContext";

export const UserPage = (props) => {
  // Eksempel der viser Mount / unmount logik
  const { user } = useContext(UserContext);

  return (
    <ContentSection title={props.title}>
      {user ? (
        <div>
          <h3>
            Hej {user?.firstName} {user?.lastname}
          </h3>
          <p>Din email: {user?.email}</p>
          <p>Dit brugernavn: {user?.username}</p>
        </div>
      ) : (
        <h3>Du skal være logget ind</h3>
      )}
      <CountButton />
    </ContentSection>
  );
};
