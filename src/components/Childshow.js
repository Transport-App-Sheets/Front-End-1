import * as React from 'react';
import styles from './childcard.css';






export default function Childshow(props) {

  const { childname,childaddress,schoolname,driver }=props
    return(
      <div style={{padding:"10px",opacity:"0.9",background:"black",color:"green",width:"25vw",height:'10vw',borderRadius: '10px',margin:'50px 0px 0px 30px' }}>
       <div class="container" style={styles}>
 <div class="wrapper">
   <div class="banner-image"> </div>
   <h1>{childname} </h1>
   <h1>{schoolname} </h1>
   <h2>{driver}</h2>
   <p>{childaddress} <br/>
     </p>
  </div>
  <div class="button-wrapper"> 
  <button class="btn outline">DETAILS</button>  
    <button class="btn fill">Track</button>
  </div>
    </div>
</div>
    

  );
}
