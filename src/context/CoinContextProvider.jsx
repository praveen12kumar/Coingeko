import { useState } from "react";
import CoinContext from "./CoinContext";    

const CoinContextProvider = ({children}) => {

    const [currency, setCurrency] = useState("usd");
    
    return (
        <CoinContext.Provider value={{currency, setCurrency}}>
            {children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider