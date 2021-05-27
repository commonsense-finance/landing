import Image from 'next/image'

const title = "Investing in crypto, simplified";
const description = "We're helping normal people to have same returns as geeks through 'Index Tokens'.";

export default function Hero() {
  return (
    <div className="container-flex bg-soft-yellow py-5">
      <div className="container">
        <div class="row align-items-center">
          <div class="col-sm-12 col-md-5">
            <div>
              <h1 >{title}</h1>
            </div>
            <div>
              <p className="py-4">{description}</p>
            </div>
            <div className="pt-4">
              <button type="button" class="btn-lg btn-secondary text-white">Join the Private Beta</button>
            </div>

          </div>

          <div class="col-sm-12 col-md-7">
            <Image src="/images/ilustration01.svg" height={1700} width={1700} />
          </div>
        </div>
      </div>
    </div>
  )
}