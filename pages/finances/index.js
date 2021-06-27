import Finance from '../../components/finances/Index'

const index = ({data}) => {
    return (
        <div>
            <h1>Finance</h1>
            <Finance data={data}/>
        </div>
    )
}

export default index

export async function getStaticProps(context) {
    const res = await fetch(`https://api.coingecko.com/api/v3/finance_platforms?per_page=200`)
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