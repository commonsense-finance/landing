import Markets from '../../components/markets/Index'

const index = ({data}) => {
    return (
        <div>
            <h1>Markets</h1>
            <Markets data={data}/>
        </div>
    )
}

export default index

export async function getStaticProps(context) {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }