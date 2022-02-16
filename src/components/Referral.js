import Link from 'next/link'

export default function Referral() {
  return (
    <div className='container'>
        <div className='flex'>
            <img src="images/icons/bagofcash.png" alt="" />
            <h5><span>12.5%</span> of fee</h5>
        </div>
        <p>Your Referral Link for xyz</p>
        <div>
            <p>https://unityexchange.design </p>
            <img src="images/icons/ungroup.png" alt="" />
        </div>
    </div>
  )
}
