import { useContext, useState } from "react";
import { User } from "../contexts/User";

const Header = () => {
  const { user, setUser } = useContext(User);

  const [name, setName] = useState("");

  return (
    <div>
      <p>
        {user.isConnected ? `Welcome ${user.name}` : `Sign up first, please`}
      </p>
      <input
        type="text"
        placeholder="Fill your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          setUser({ ...user, isConnected: !user.isConnected, name: name });
        }}
      >
        {user.isConnected ? `Logout` : `Sign up`}
      </button>
    </div>
  );
};

export default Header;
