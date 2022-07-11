import React from 'react';
import styles from './Nav.module.css';
import Logo from './../../assets/images/Switch-logo.png'
import UserAccount from '../UserAccount-component/UserAccount';
import Search from '../Search-component/Search';
import Dropdowncomponent from '../Dropdown-component/Dropdown-component'
import QuickLinkdropdown from '../Dropdown-component/QuickLink-dropdown';
import HelpComponent from '../Help-component/helpComponent';
import BannerComponent from '../Banner-component/BannerComponent';




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
                <QuickLinkdropdown/>
            </div>
            <div>
            <HelpComponent/>
            </div>
            
            <div className={styles.useraccount}>
                <UserAccount/>
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
        <div style={{width:'100%',
        height:1,backgroundColor:'gray',marginTop:30}}></div>
        <div>
            <BannerComponent/>
        </div>
        </>
    )
}

export default Nav;