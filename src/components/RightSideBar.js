import { FaCaretDown, FaArrowLeft } from "react-icons/fa"

export default function RightSideBar() {
    return (
        <div className="rightbar">
            <div className="profile">
                <div>
                    <img src="images/icons/avalanche.png" alt="" />
                    <p>Avalanche</p>
                    <FaCaretDown/>
                </div>
                <div>
                    <img src="images/icons/mouse.png" alt="" />
                    <p>0xf6...1353</p>
                    <FaCaretDown/>
                </div>
            </div>
            <div className="customlink">
                <div>
                    <FaArrowLeft/>
                    <h6>Custom link</h6>
                </div>
                <div>
                    <p>https://testnet.xyz.xyz/trade?ref=</p>
                    <input type="text" placeholder="ENTER" />
                </div>
                <div>
                    <Link href=''>
                        <a>
                            <img src="images/icons/mouse.png" alt="" />
                            <p>Custom link</p>
                        </a>
                    </Link>
                    <Link href=''>
                        <a>
                            <img src="images/icons/mouse.png" alt="" />
                            <p>Cancel</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
  }
  