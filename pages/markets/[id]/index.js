import Link from 'next/link'

const index = ( {data} ) => {
    return (
        <div>
            <h1>{data.symbol.toUpperCase()}</h1>
            <h3>{data.categories[0]}</h3>
            <h3>${data.market_data.current_price['usd']}</h3>
            
            <Link href='/markets'>
                <a>go back</a>
            </Link>
        </div>
    )
}

export default index

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${context.params.id}?localization=en&tickers=true&market_data=true&community_data=true&sparkline=true`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
  }
