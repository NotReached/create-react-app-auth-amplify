import { useAuthenticator } from "@aws-amplify/ui-react";
import  Profile  from "./components/Profile";

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <main>
      <h1>Hello {user.username}</h1>
      <Profile />
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
