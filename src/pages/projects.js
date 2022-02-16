import Link from 'next/link'
import {FaSearch} from 'react-icons/fa'
import {useState} from 'react'


import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Project from '../components/Project'
import  ProjectShow  from '../components/ProjectShow'
import SearchTags from '../components/SearchTags'
import Welcome from '../components/Welcome'

function Projects(){
  const [show, setShow]=useState(false)
  return(
    <>
      <ProjectShow show={show} closeIt={()=>setShow(false)}/>
      <div className='x-hidden relative'>
        <Nav/>
        <Welcome/>
        <div className='searchdiv'>
          <h4>Find a Project</h4>
          <div className='flex'>
            <input type="text" placeholder='Search'/>
            <Link href={"/"}>
              <FaSearch className='inpbtn hideOnLg'/>
            </Link>
          </div>
          <FaSearch className='searchbtn hideOnSm'/>
        </div>
        <div className='tagdiv'>
          <p>Search Tags:</p>
          <SearchTags/>
        </div>
        <div className='projectgrid'>
          <Project show={show} onShow={()=>setShow(true)}/>
        </div>
        <div className='seemore'>
          <Link href={'/'}>
            <a className='projbtn'>Load More Projects</a>
          </Link>
        </div>
        <Footer/>
      </div>
    </>


    )
}

export default Projects