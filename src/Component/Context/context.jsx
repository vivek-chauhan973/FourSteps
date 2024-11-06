import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext(null);

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/user/user");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);
  const contextFun = { users, setUsers };

  return <Context.Provider value={contextFun}>{children}</Context.Provider>;
};
export default AppProvider;

export const useAppContext = () => {
  return useContext(Context);
};
