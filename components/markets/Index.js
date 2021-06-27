import Link from "next/link";

const Index = ({ data = null}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Symbol</th>
            <th scope="col">Coin</th>
            <th scope="col">Price</th>
            <th scope="col">1hs</th>
            <th scope="col">24hs</th>
            <th scope="col">7d</th>
            <th scope="col">24hs Volume</th>
            <th scope="col">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.market_cap_rank}>
              <td scope="row">{d.market_cap_rank}</td>
              <th>
                <img
                  src={d.image}
                  className="me-2"
                  width="20px"
                  alt={d.name}
                ></img>
                <Link href="/markets/[id]" as={`/markets/${d.id}`}>
                  <a>{d.symbol.toUpperCase()}</a>
                </Link>
              </th>
              <td>{d.name}</td>
              <td className="text-end">{d.current_price.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
              <td></td>
              <td>{d.price_change_percentage_24h}</td>
              <td></td>
              <td>{d.total_volume}</td>
              <td>{d.market_cap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
