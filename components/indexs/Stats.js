import React, { useContext } from 'react'
import { TokenSetContext } from '../../contexts/TokenSetContext';

const Stats = () => {

    const fund = useContext(TokenSetContext)[0];

    return (
        <div className="row">
            <div className="col">
                <p>Market Cap</p>
                <h2>{fund.market_cap}</h2>
            </div>
            <div className="col">
                <p>Streaming Fee</p>
                <h2>{fund.streaming_fee}</h2>
            </div>
            <div className="col">
                <p>Net Asset Value</p>
                <h2>{fund.price_usd}</h2>
            </div>
            <div className="col">
                <p>Holders</p>
                <h2>{fund.holder_count}</h2>
            </div>
        </div>
    )
}

export default Stats
