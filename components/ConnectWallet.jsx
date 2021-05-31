import React, { useEffect, useState } from "react";
import Link from 'next/link'

import { useWeb3Modal } from "../hooks/web3";

const truncateAddress = (address) => {
  return " " + address.slice(0, 6) + "..." + address.slice(-4);
};

const ConnectWallet = () => {

  const [signerAddress, setSignerAddress] = useState("");
  const [signerBalance, setSignerBalance] = useState("0");
  // const [isWaiting, setWaiting] = useState(false)
  // const [isSent, setSent] = useState(false)
  // const [walletNotDetected, setWalletNotDetected] = useState(false)

  const { connectWallet, disconnectWallet, provider, error } = useWeb3Modal();

  useEffect(() => {
    const getAddress = async () => {
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = (await signer.getBalance()).toString();
      setSignerAddress(address);
      setSignerBalance(balance);
    }
    if (provider) 
      getAddress();
    else {
      setSignerAddress("");
      setSignerBalance("0");
    }
  }, [provider]);

  const handleClickConnect = async () => {
    await connectWallet();
  };

  const handleClickAddress = () => {
    disconnectWallet();
  };

  return (
    <>
      <a class="nav-link btn btn-dark btn-sm mr-1" href="/profile">{signerBalance}</a>
      
      <button type="button" class="btn btn-light btn-sm me-2"
        onClick={signerAddress ? handleClickAddress : handleClickConnect}>
        <i class="bi bi-wallet"></i> {signerAddress ? truncateAddress(signerAddress) : " Connect Wallet"}
      </button>
      {signerAddress ? <a class="nav-link btn btn-dark btn-sm mr-1" href="/profile"><i class="bi bi-gear"></i></a> :
        <a class="nav-link btn btn-dark btn-sm mr-1 disabled" href="/profile"><i class="bi bi-gear"></i></a>}

    </>
  );
}


export default ConnectWallet;