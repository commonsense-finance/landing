
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TokenSetContext = createContext();

const dataInit = {
    data: 'Null'
}

export const TokenSetProvider = ({children}) => {

    const tokenSetFundURL = 'https://api.tokensets.com/v2/funds/dpi?beta=true'
    const [fund, setFund] = useState(dataInit)
    const [componentes, setComponents] = useState(dataInit)
    const [operator, setOperator] = useState(dataInit)

    const getFund = async () => {
        try {
            const res = await axios.get(tokenSetFundURL);
            setFund(res.data.fund);
            setComponents(res.data.fund.components);
            setOperator(res.data.fund.operator);
        } catch (error) {
            console.log("error", error);
            // appropriately handle the error
      }
    };

    useEffect(() => {
        getFund();
    }, [])

    return (
        <TokenSetContext.Provider
            value={[fund, componentes, operator]}
        >
            {children}
        </TokenSetContext.Provider>
    )
}

