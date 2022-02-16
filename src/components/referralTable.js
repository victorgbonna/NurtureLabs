
export default function referralTable() {
    const referrallist=
    {
        user:'0xFbEA9559AE33214a080c03c68EcF1D3AF0f58A7D',
        img : "https://raw.githubusercontent.com/akshita151199/APIs/main/btc.png",
        asset:'AVAX',
        referral_earnings : 0.001,
        amount: 0.001,
        chain:{
            img : "https://raw.githubusercontent.com/akshita151199/APIs/main/avax.png",
            name : "AVAX"
        },
        type:'Put',
        state:'expired'
    }
  return (
    <>
        <li>
            <img src={img} alt="avatar"/>
        </li>
        <li className="flex">
            <img src={img} alt="avatar"/>
            <div className="flex">
                <h5>{asset}</h5>
                <div>
                    <p>{type}</p>
                    <button>
                        <img src={chain.img} alt="avatar" />
                        <small>{chain.name}</small>
                    </button>
                </div>
            </div>
            
        </li>
        <li>
            <h5>{amount} BNB</h5>
            <p>{state}</p>
        </li>
        <li>
            <p>{user}</p>
        </li>
        <li>
            <h5>{referral_earnings} BNB</h5>
            <div className="flex">
                <Link href='#'>
                    <a className="">View on BSC Scan</a>
                </Link>
                <img src="images/icons/notearrow.png" alt="" />
            </div>
        </li>
    </>
  )
}
