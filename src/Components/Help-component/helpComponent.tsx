import React from 'react'
import questionmark from '../../assets/images/questionmarrk.png'



const helpComponent:React.FC=() =>{
  return (
    <div>
      <form style={{
        width:75,height:29,
        backgroundColor:'white',
        borderRadius:5,
        justifyContent:'center',
       
      }}>
       <div style={{display:'flex',
       justifyContent:'space-between',
       alignSelf:'baseline',
       margin:6
        
       
      }}>
        <img src={questionmark} style={{width:17,height:17,marginTop:5}}/>
        <p>Help</p>
       </div>
      </form>
     
    </div>
  )
}

export default helpComponent

 
  
  

