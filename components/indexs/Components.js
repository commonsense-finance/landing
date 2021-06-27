import Image from "next/image";
import { useContext } from "react";
import { TokenSetContext } from "../../contexts/TokenSetContext";

const Components = () => {

    const components = useContext(TokenSetContext);

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
                {components.map((item, index) =>
                    <tr>
                        <td><img src={item.image}
                            width="20"
                            className="rounded-circle me-2"
                            alt={item.name}>
                        </img> {item.symbol}</td>
                        
                        <td>{item.quantity}</td>
                        <td>{item.total_price_usd}</td>
                        <td>{item.percent_of_set}</td>

                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Components
