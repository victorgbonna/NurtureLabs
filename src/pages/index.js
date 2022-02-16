
import Header from '../components/Header'
import MainContent from '../components/mainContent'
import RightSideBar from '../components/RightSideBar'
import SideBarNav from '../components/SideBarNav'



export default function Home() {
  return (
    <div className='container'>
        <Header/>
        <div className='gridContainer'>
          <SideBarNav/>
          <RightSideBar/>
          <MainContent/>
        </div>
    </div>
  )
}
