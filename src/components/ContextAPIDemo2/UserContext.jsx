import { createContext,useState,useContext} from "react";



//create a context
const UserContext = createContext();

//create a wrapper provider component on created context which will hold all the state variables and methods

export const UserProvider = ({children})=>{
    const [user, setUser] = useState(null);
    return (
        <>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        </>

        
    );
}

//create and export a custom hook to access the context from any component
export const useUserContext = () => useContext(UserContext);
    
   

