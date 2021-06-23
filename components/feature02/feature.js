import Image from 'next/image'

const strong = "Less Work";
const title = "Just sit back and watch your savings grow";
const description = "Leave the selection of cryptocurrencies and tokens in our hands. Our Index Tokens are created following objective selection criteria and are periodically rebalanced.";

export default function Feature() {
  return (
    <div className="container-flex py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-6">
            <b>
              <h3>{strong}</h3>
            </b>
            <div>
              <h1 className="py-4">{title}</h1>
            </div>
            <div>
              <p >{description}</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-5">
            <Image src="/images/ilustration03.svg" height={1700} width={1700} />
          </div>
        </div>
      </div>
    </div>
  )
}