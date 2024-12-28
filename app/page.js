import NewUser from "./components/NewUserFrom";
import UserList from "./components/UserList";

export default async function Home() {
  
  return (
    <div className="">
      <NewUser/>
      <UserList/>
    </div>
  );
}
