import { createContext, useContext, useState } from "react";


let RoleContext = createContext(null);

const initialUsers = [
  { id: 1, name: 'Иван Иванов', role: 'admin' },
  { id: 2, name: 'Мария Смирнова', role: 'user' },
  { id: 3, name: 'Сергей Кузнецов', role: 'user' },//user -> admin
];


let RoleProvider = ({children}) => {

  let [users, setUsers] = useState(initialUsers);

  const onChangeRole = (id) => setUsers(prev => prev.map(user=> user.id === id 
      ? {...user, role: user.role === 'user' ? 'admin' : 'user'}
      : user
   ))
   /* 
    if(user.id === id){
      return {
        ...user,
        "role": user.role === 'admin' ? 'user' : 'admin'
      }
    }else{
    returm user
  }
   */
  // let [initRole, setInitRole] = useState(true);  
  // let toggleRole = () => setInitRole(prevRole=>!prevRole);

  let value={
    users,
    onChangeRole
  };

  return(
    <RoleContext.Provider value={value}>{children}</RoleContext.Provider>
  );
};

let useRole = () => {
  let context = useContext(RoleContext);
  if (!context) {
    throw new Error(
      "useRole должен использоваться внутри RoleProvider."
    );
  };
  return context;
};
export {useRole, RoleProvider};