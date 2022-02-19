
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
        {coinlists.map(({asset,price}, index)=>(
            <div key={index} className='item'>
                <small>${price} {asset}</small>
            </div>
        ))}
    </>
  )
}
