import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext(null);
const fetchIndustries = async () => {
  const response = await fetch("/api/global/industries/getIndustries");
  const data = await response.json();
return data;
};
const fetchTools = async () => {
  const response = await fetch("/api/global/tools/toolsoftware");
  const data = await response.json();
   return data;
};

const fetchTopics = async () => {
    const response = await fetch("/api/global/topic/gettopic");
      const result = await response.json();
      return result;   
};



const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const [topic,setTopic]=useState([]);
  const [tool,setTool]=useState([]);
  const [industries,setIndustries]=useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/user/user");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
    
    fetchTopics().then(res=>{setTopic(res?.result||[])});

    fetchTools().then(res=>{setTool(res?.data||[])});

    fetchIndustries().then(res=>{setIndustries(res?.data||[])});

  }, []);

  const filterGlobalData={tool,industries,topic};

  const contextFun = { users, setUsers,filterGlobalData };

  return <Context.Provider value={contextFun}>{children}</Context.Provider>;
};
export default AppProvider;

export const useAppContext = () => {
  return useContext(Context);
};
