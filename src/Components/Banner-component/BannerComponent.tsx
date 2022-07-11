import React from 'react'
import styles from './Banner.module.css'
import closeicon from '../../assets/images/closecircle.png'

function BannerComponent() {
  return (
    <div>
         <div className={styles.bannerContainer}>
             <div className={styles.texts}>
                 <h5>Welcome to SwitchApp</h5>
                <p>You’re almost there — our guide will help you complete your Business profile
                and you’ll start receiving payments. Click this banner to complete your set-up</p>
             </div>
             <div><img src ={closeicon}/>
             </div>
        </div>
    </div>
  )
}

export default BannerComponent
