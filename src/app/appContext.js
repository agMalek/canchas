import axios from "axios";
import { createContext, useState } from "react";



export const Context = createContext(null)

const CanchasProvider = ({children}) => {

    const [deportes, setDeportes] = useState([])
    const [deporte, setDeporte] = useState([])

    const getDeportes = async(endpoint) => {
        const response = await axios.get(`https://apipdtc.herokuapp.com/${endpoint}`)
        setDeportes(response.data)
    }


    const getDeporte = async(endpoint) => {
        const response = await axios.get(`https://apipdtc.herokuapp.com/${endpoint}`)
        setDeporte(response.data)
    }


    return (
        <Context.Provider value={{deportes, getDeportes, deporte, getDeporte}}>
            {children}
        </Context.Provider>
    )
}

export default CanchasProvider