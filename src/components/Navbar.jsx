import React from 'react'
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { MdNotifications } from "@react-icons/all-files/md/MdNotifications"

import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className='nav'>
        <h1>LOGO</h1>
        <div className='center'>
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
            <div>Item4</div>
            <div>Item5</div>
            <div>Item6</div>
           
        </div>
        <div className='right'>
            <button className='sign'>Sign in</button>
            <div>
              <CgProfile size={25}/>
            </div>
            <div>
              <MdNotifications size={25}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar