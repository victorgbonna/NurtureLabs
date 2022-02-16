import { FaWindowClose } from "react-icons/fa"
import Link from 'next/link'
import Coins from "./Coins"
import Referral from "./Referral"

export default function MainContent() {
    return (
      <main className='maincontent'>
          <div className="header">
              <h5>Section</h5>
              <div className="flex">
                    <img src="images/icons/mouse.png" alt="" />
                    <p>0.2 $XYZ</p>
                    <small>Tier 4</small>
              </div>
          </div>
          <div className="relative flex">
            <FaWindowClose className="absolute"/>
            <div className="tutordiv">
                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                <Link href='#'>
                    <a>Tutorial</a>
                </Link>
            </div>
            <img src="images/icons/btcmore.png" alt="" />
          </div>
          <div className="rewards">
            <div>
                <h5>Your rewards</h5>
                <p>$ 0.26231428</p>
                <div className="flex">
                    <Coins/>
                </div>
            </div>
            <Link href=''>
                <a className="self-center">
                    <img src="images/icons/mouse.png" alt="" />
                    <p>Custom link</p>
                </a>
            </Link>
            </div>
            <div className="grid">
                <Referral/>
                <Referral/>
            </div>
            <div className="tabs">
                <div className="header flex">
                    <button>First Tab</button>
                    <button>Second Tab</button>
                </div>
                <ul className="tablerows">
                    <li>ASSET</li>
                    <li>AMOUNT</li>
                    <li>USER ACCOUNT</li>
                    <li>REFERRAL EARNING</li>
                </ul>
                <></>
                {/* <table>
                    <tr className="tableheader">
                        <th>ASSET</th>
                        <th>AMOUNT</th>
                        <th>USER ACCOUNT</th>
                    </tr>
                    <tr>
                    
                    </tr>
                </table> */}
            </div>
      </main>
    )
}
 