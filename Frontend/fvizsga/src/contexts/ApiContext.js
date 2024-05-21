import axios from "../api/axios.js";
import {createContext, useContext, useState} from "react"

const ApiContext = createContext();

export const ApiProvider = ({children})=>{
    const [temak, setTemak] = useState([]);


    const getTemak = async ()=>{
        const {data} = await axios.get("/api/tema");
        setTemak(data)
    }

    return (
        <ApiContext.Provider value={{temak, getTemak}}>{children}</ApiContext.Provider>
    )};

export default function useApiContext(){
    return useContext(ApiContext);
}