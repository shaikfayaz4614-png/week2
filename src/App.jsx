import UserCard from "./components/UserCard.jsx";
import { InfoPanel } from "./components/InfoPanel.jsx";

const App = () => {
  const user = {
    name: "Shaik Fayaz",
    email: "shaikfayaz4614@example.com",
    role: "Designer",
    status: "Active",
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <UserCard name={user.name} email={user.email} />
      <InfoPanel role={user.role} status={user.status} />
    </div>
  );
};

export default App;
