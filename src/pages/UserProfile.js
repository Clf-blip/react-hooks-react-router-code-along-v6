// src/pages/UserProfile.js
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserProfile() {
  const { id } = useParams();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>User Profile</h1>
        <p>Showing details for user ID: {id}</p>
      </main>
    </>
  );
}

export default UserProfile;
