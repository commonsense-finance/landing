import Image from 'next/image'

const strong = "Less Risk";
const title = "You don't need to guess anymore which crypto will be the next hype";
const description = "Our Index Tokens contain a preselected set of cryptoassets. If any asset in the pool is performing poorly, there is a high chance that another is performing well, which helps minimize losses.";


export default function Feature() {
  return (
    <div className="container-flex bg-soft-gray py-5">
      <div className="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-6 p-5">
            <Image src="/images/ilustration02.svg" height={1700} width={1700} />
          </div>
          <div class="col-sm-12 col-md-6">
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
        </div>
      </div>
    </div>
  )
}