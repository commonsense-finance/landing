import { useContext } from "react";
import { TokenSetContext } from "../../contexts/TokenSetContext";
import Header from "./Header";
import Components from "./Components";
import Stats from "./Stats";
import About from "./About";

const title = "Index Tokens made with common sense";
const description = "Our Index Tokens are built following purely objective criterions and adding tons of love and passion during the process.";

const Indexs = () => {

  

  return (
    <div className="container-flex bg-soft-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-7 text-center py-5">
            <div>
              <h1 className="py-4">{title}</h1>
            </div>
            <div>
              <p >{description}</p>
            </div>
            
          </div>
        </div>
        <Header />
      <Components />
      <Stats />
      <About />
      
      </div>
      
    </div>
  )
}

export default Indexs

