import React, {createContext , useContext , useRef} from 'react'

const SocketRefContext = createContext()

export const useSocketRef = ()=> useContext(SocketRefContext);

// eslint-disable-next-line react/prop-types
export const SocketRefProvider = ({children})=>{
    const socketRef = useRef(null); 
    
    return (<SocketRefContext.Provider value={socket}>
        {children}
    </SocketRefContext.Provider>)
};
