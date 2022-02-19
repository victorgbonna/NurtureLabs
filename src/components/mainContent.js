
import { useState } from 'react'
import Link from 'next/link'
import Coins from "./coins"
import Referral from "./referral"
import ReferralTable from "./referralTable"

export default function MainContent({truncateText, referraldata}) {

    const [activeIndex, setactiveIndex]=useState(0)
    const buttons =[]
    const tabword=['First', 'Second', 'Third', 'Fourth', 'Fifth']
    for (let i =0; i<referraldata.length; i++) {
        buttons.push(
            <button onClick={()=>setactiveIndex(i)} key={i} className={`${activeIndex==i && 'active'}`}>{tabword[i]} tab</button>
        );
    }

    return (
      <main className='maincontent'>
          <div className="header">
              <h5>Section</h5>
              <div className="right">
                    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3966 10.3811H16.3446C14.8568 10.3804 13.6509 9.41664 13.6499 8.2267C13.6499 7.03676 14.8568 6.073 16.3446 6.07227H20.3966" stroke="#3772FF" strokeWidth="1.25176" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.8029 8.17741H16.491" stroke="#3772FF" strokeWidth="1.25176" strokeLinecap="round" strokeLinejoin="round"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.4926 1.25851H15.144C18.0448 1.25851 20.3965 3.13936 20.3965 5.45941V11.2048C20.3965 13.5249 18.0448 15.4057 15.144 15.4057H6.4926C3.59178 15.4057 1.24011 13.5249 1.24011 11.2048V5.45941C1.24011 3.13936 3.59178 1.25851 6.4926 1.25851Z" stroke="#3772FF" strokeWidth="1.25176" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>0.2 $XYZ</p>
                    <small>Tier 4</small>
              </div>
          </div>
          <div className="notif">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="close">
                <circle cx="12.3738" cy="12.6436" r="12" fill="white"/>
                <path d="M15.8738 9.14355L8.87378 16.1436" stroke="#191B20" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.87378 9.14355L15.8738 16.1436" stroke="#191B20" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="tutordiv">
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                <Link href='#'>
                    <a>Tutorial</a>
                </Link>
            </div>
            <img src="images/btcmore.png" alt="" />
          </div>
          <div className="rewards">
            <div className="rdetails">
                <h5>Your rewards</h5>
                <p>$ 0.26231428</p>
                <div className="coingrid">
                    <Coins/>
                </div>
            </div>
            <Link href=''>
                <a className="customlink">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5913 15.6857H5.59131V13.7295H13.5913V1.99222H3.59131V7.86084H1.59131V1.01411C1.59131 0.474201 2.03931 0.0360107 2.59131 0.0360107H14.5913C15.1433 0.0360107 15.5913 0.474201 15.5913 1.01411V14.7076C15.5913 15.2475 15.1433 15.6857 14.5913 15.6857Z" fill="white"/>
                        <path d="M11.5912 3.94843H5.59125L7.88425 6.19122L0.177246 13.7295L1.59125 15.1125L9.29825 7.57425L11.5912 9.81705V3.94843Z" fill="white"/>
                    </svg>
                    <p>Custom link</p>
                </a>
            </Link>
            </div>
            <div className="referralgrid">
                <Referral/>
                <Referral/>
            </div>
            <div className="tabs">
                <div className="tabheader">
                    {buttons}    
                </div>
                <ul className="tablerows">
                    <li>ASSET</li>
                    <li>AMOUNT</li>
                    <li>USER ACCOUNT</li>
                    <li>REFERRAL EARNING</li>
                </ul>
                <ul className="tablecolumns">
                    <ReferralTable truncateText={truncateText} refObject={referraldata[activeIndex]}/>
                </ul>
                
            </div>
      </main>
    )
}
 