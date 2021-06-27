import Image from "next/image";
import { useContext } from "react";
import { TokenSetContext } from "../../contexts/TokenSetContext";

const Components = () => {

    const components = useContext(TokenSetContext)[1];

    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Asset</th>
                    <th scope="col">Quantity per token</th>
                    <th scope="col">Value per token</th>
                    <th scope="col">Allocation</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(components).map((item, index) =>
                    <tr>
                        <td><img src={components[item].image}
                            width="20"
                            class="rounded-circle me-2"
                            alt={components[item].name}>
                        </img> {components[item].symbol}</td>
                        
                        <td>{components[item].quantity}</td>
                        <td>{components[item].total_price_usd}</td>
                        <td>{components[item].percent_of_set}</td>

                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Components
