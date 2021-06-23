import Image from "next/image";
import { useContext } from "react";
import { TokenSetContext } from "../../contexts/TokenSetContext";


const Header = () => {

    const fund = useContext(TokenSetContext)[0];

    return (
        <div className="text-start">
            <img src={fund.image} class="img-fluid d-inline me-2" alt={fund.name}></img>
            <h3 className="d-inline align-middle me-2" >{fund.symbol}</h3>
            <h3>{fund.name}</h3>
            <h3>{fund.price_usd}</h3>
        </div>
    )
}

export default Header
