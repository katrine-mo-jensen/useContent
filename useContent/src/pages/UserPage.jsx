import { useEffect } from "react";
import { CountButton } from "../components/CountButton/CountButton";
import { ContentSection } from "../components/contentSection/ContentSection";

export const UserPage = () => {
  // Eksempel der viser Mount / unmount logik
  useEffect(() => {
    console.log("Blog Page Component has Mounted");
    return () => {
      console.log("Blog Page Component has Un-Mounted");
    };
  }, []);

  return (
    <ContentSection title="User page">
      <h3>Here is the Blog page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        numquam, assumenda eveniet autem accusamus at, adipisci officia
        repellendus sapiente ipsa aperiam cumque similique! Tenetur, quis odit
        repellendus voluptatem qui ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        numquam, assumenda eveniet autem accusamus at, adipisci officia
        repellendus sapiente ipsa aperiam cumque similique! Tenetur, quis odit
        repellendus voluptatem qui ipsa.
      </p>

      <CountButton />
    </ContentSection>
  );
};