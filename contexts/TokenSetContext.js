
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TokenSetContext = createContext();

const dataInit = {
    data: 'Null'
}

export const TokenSetProvider = ({children}) => {

    const tokenSetFundURL = 'https://api.tokensets.com/v2/funds/dpi?beta=true'
    const [fund, setFund] = useState([])

    async function makeRequest() {
        const config = {
          method: "get",
          url: "/v2/funds/dpi",
        };
    
        const res = await axios(config);
        setFund(res.data.fund.components);
      }

    // const getFund = async () => {
    //     try {
    //         const res = await axios.get(tokenSetFundURL);
    //         const data = await res.data.fund;
    //         setFund(data);
    //         setComponents(data.components);
    //         setOperator(data.operator);
    //     } catch (error) {
    //         console.log("error", error);
    //         // appropriately handle the error
    //   }
    // };

    useEffect(() => {
        makeRequest();
    }, [])

    return (
        <TokenSetContext.Provider
            value={[fund]}
        >
            {children}
        </TokenSetContext.Provider>
    )
}

