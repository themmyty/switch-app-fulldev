import React from 'react';
import styles from './Nav.module.css';
import Logo from './../../assets/images/Switch-logo.png'
import user from './../../assets/images/User.png'
import Search from '../Search-component/Search';
import Dropdowncomponent from '../Dropdown-component'



const Nav: React.FC<{}> = () => {
    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <img src ={Logo}/>
            </div>
            <div className={styles.dropdowncomponent}>

              
                <Dropdowncomponent/>
            </div>
            <div className={styles.searchbox}>
                
                <Search/>
            </div>
            <div>
                <img src={user}/>
            </div>
            <div>
                <Dropdowncomponent />
            </div>
        </nav>
        <div className={styles.navOptions}>
           <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/payment">Payment</a></li>
            <li><a href="/report">Report</a></li>
            <li><a href="/customer">Customer</a></li>
           <li><a href="/support">Support</a></li>
           <li><a href="/more">More</a></li>
            </ul> 
        </div>
        </>
    )
}

export default Nav;