import Image from 'next/image'

import dynamic from "next/dynamic";
const ConnectWallet = dynamic(() => import("../components/ConnectWallet"), {
  ssr: false,
});

function Navbar() {
  return (  
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand text-white mt-1" href="#">
      <Image src="/logo-white.svg" height={18} width={170} />
        
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample04">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Indexs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Docs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Contact</a>
          </li>
          
      
        </ul>
        <form className="d-flex">
  
  <button className="btn btn-outline-light btn-sm" type="submit">Connect</button>
</form>
      </div>
    </div>
  </nav>

  )
}

export default Navbar
