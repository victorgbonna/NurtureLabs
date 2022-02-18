import Link from 'next/link'
import { useState} from 'react'   

function NavLinks() {
    const [activeNav,setActiveNav]=useState(8)

    const links=[
        {label:'Home',
        iconScr:'home.png'},
        {label:'Section 1',
        iconScr:'trends.png'},
        {label:'Section 2',
        iconScr:'candlesticks.png'},
        {label:'Section 3',
        iconScr:'chart.png'},
        {label:'Section 4',
        iconScr:'cashreturns.png'},
        {label:'Section 5',
        iconScr:'coins.png'},
        {label:'Section 6',
        iconScr:'piechart.png'},
        {label:'Section 7',
        iconScr:'bar.png'},
        {label:'Section 8',
        iconScr:'share.png'},
        {label:'Documentation',
        iconScr:'notepad.png'},
    ]
    return (
        <>
            {links.map(({label,iconScr}, index)=>(
                <div key={index} onClick={()=> setActiveNav(index)} className={`item ${activeNav==index && 'active'}`}>
                    <img src={`images/icons/${iconScr}`} alt="iconl"/>
                    <p>{label}</p>
                </div>
            ))}
        </>
    )
  }
export default function SideBarNav() {
    return (
        <nav className="sidebarnav">
            <div className="navprofile">
                <div className="nameavatar">
                    <p className='avatar'>
                        N
                    </p>
                    
                    <p className="name">Name</p>
                </div>
                <img src="images/icons/closing icon (2).png" alt="" />
            </div>
            <div className="mainnav">
                <NavLinks/>
            </div>
            <div className="money">
                <div>
                    <p className="avatar">
                        N
                    </p>
                    <p className='amount'>0.90</p>
                </div>
                <Link href={'#'}>
                    <a href="">Buy XYZ</a>
                </Link>
            </div>
            <div className=" bottomicons">
                <img src="images/icons/world.png" alt="" />
                <div className="">
                    <img src="images/icons/tothemoon.png" alt="" />
                    <div className='circle'> &nbsp; </div>
                </div>
            </div>
        </nav>
    )
  }
  