
export default function Coins() {
    const coinlists=[
        {asset:'AVAX',
        price:40},
        {asset:'BNB',
        price:10},
        {asset:'BTC',
        price:210},
    ]
  return (
    <>
        {links.map(({asset,price}, index)=>(
            <div key={index} className='item flex padd' style={active && extraStyle}>
                <small>{asset} {price}</small>
            </div>
        ))}
    </>
  )
}
