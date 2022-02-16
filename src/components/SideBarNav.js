import Link from 'next/link'
function NavLinks() {
    const extraStyle={

    }
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
        iconScr:'piechart'},
        {label:'Section 7',
        iconScr:'bar.png'},
        {label:'Section 8',
        iconScr:'share.png',
        active: true},
        {label:'Documentation',
        iconScr:'notepag.png'},
    ]
    return (
        <>
            {links.map(({label,iconScr,active}, index)=>(
                <div key={index} className='item flex padd' style={active && extraStyle}>
                    <img src={`images/icons/${iconScr}`} alt="iconl"/>
                    <p>{label}</p>
                </div>
            ))}
        </>
    )
  }
export default function SideBarNav() {
    return (
        <nav className="sidebarnav bgbla">
            <div className="navprofile px2ormx2 flexjusti">
                <div className="nameavatar">
                    <div className="avatar">
                        <p>N</p>
                    </div>
                    <p className="name">Name</p>
                </div>
            </div>
            <div className="mainnav px2ormx2">
                <NavLinks/>
            </div>
            <div className="money">
                <div>
                    <div className="avatar">
                        <p>N</p>
                    </div>
                    <p>0.90</p>
                </div>
                <Link href={'#'}>
                    <a href="">Buy XYZ</a>
                </Link>
            </div>
            <div className="flex">
                <img src="images/icons/world.png" alt="" />
                <div className="flex">
                    <img src="images/icons/tothemoon" alt="" />
                    <div>the circle</div>
                </div>
            </div>
        </nav>
    )
  }
  