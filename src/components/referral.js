import Link from 'next/link'

export default function Referral() {
  return (
    <div className='cont'>
        <div className='headercont'>
            <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.9747" cy="12.3044" r="12.0673" fill="url(#paint0_linear_0_533)"/>
              <path d="M15.3193 10.2586H11.0659C10.2514 11.1896 8.79163 13.0769 8.79163 14.6595C8.79163 15.3742 9.10917 17.7064 13.1926 17.7064C17.276 17.7064 17.5935 15.3742 17.5935 14.6595C17.5935 13.0769 16.1338 11.1896 15.3193 10.2586Z" fill="white"/>
              <path d="M12.8543 9.58404V8.2299H13.5314V9.58404H15.0947L16.4489 6.87576H9.9368L11.2909 9.58404H12.8543Z" fill="white"/>
              <defs>
              <linearGradient id="paint0_linear_0_533" x1="-11.1598" y1="12.3044" x2="12.9747" y2="36.4389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#BBB5E2"/>
              <stop offset="1" stopColor="#9C92DF"/>
              </linearGradient>
              </defs>
            </svg>

            <h5 className='hh5'>12.5% of fee</h5>
        </div>
        <p className='refdesc'>Your Referral Link for xyz</p>
        <div className='reflink'>
            <p>https://unityexchange.design </p>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5938 12.5594H1.59375C1.04075 12.5594 0.59375 12.1124 0.59375 11.5594V1.55939C0.59375 1.00739 1.04075 0.559387 1.59375 0.559387H11.5938C12.1467 0.559387 12.5938 1.00739 12.5938 1.55939V11.5594C12.5938 12.1124 12.1467 12.5594 11.5938 12.5594Z" fill="white"/>
              <path d="M15.5938 16.5594H4.59375V14.5594H14.5938V4.55939H16.5938V15.5594C16.5938 16.1124 16.1467 16.5594 15.5938 16.5594Z" fill="white"/>
            </svg>
        </div>
    </div>
  )
}
