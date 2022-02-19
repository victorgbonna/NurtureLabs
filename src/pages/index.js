import Header from '../components/header'
import MainContent from '../components/mainContent'
import RightSideBar from '../components/rightSideBar'
import SideBarNav from '../components/sideBarNav'

import axios from 'axios'

export default function Home({data}) {
  console.log(data)
  const truncateText=(text)=>{
    const pretext=text.substring(0,4)
    const subtext=text.substring(text.length-4)
    return `${pretext}...${subtext}`
  }
  return (
    <div className='container'>
        <Header/>
        <div className='gridContainer'>
          <SideBarNav/>
          {/* <RightSideBar/> */}
          <MainContent truncateText={truncateText} referraldata={data}/>
          <RightSideBar truncateText={truncateText}/>
        </div>
    </div>
  )
}
export async function getServerSideProps() {
  const res = await axios(`https://raw.githubusercontent.com/akshita151199/APIs/main/data`)
  const { data } = res.data
  // Pass data to the page via props
  return { props: {data} }
}