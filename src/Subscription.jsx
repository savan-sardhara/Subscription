import correct_sign from './assets/correct_sign.png'
import BtnRigthSideArrow from './assets/whiteArrow.png'

function Subscription(){
    return (
        <div className="OuterDiv" style={{border:"solid 0.1px lightgray",height:"580px",width:"400px",margin:'20px',borderRadius:'10px',borderTop:'solid 10px #9e28c9'}}>
            <div className="TopDiv" style={{display:"flex",flexDirection:"column",background:'#f5f5f5',padding:'10px 0 20px 20px',}} >
                <h3 style={{margin:"0",padding:"0",fontSize:'23px'}}>Personal Plan</h3>
                <p style={{margin:"0",padding:"0",fontSize:'14px'}}>For You</p>
                <p style={{margin:"15px 0 0 0",padding:"0", color:'gray',display:'flex'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width:"16px",margin:"0 10px 0 0",fill:"Gray"}}>
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                </svg>
                Individual</p>
            </div>


            <div className="MiddelDiv" style={{padding:'20px 20px 0px 20px'}}>
                <h3 style={{margin:"0",padding:"0"}}>Starting at ₹850 per month</h3>
                <p style={{margin:"0",padding:"0",fontSize:'15px',color:'gray'}}>Billed monthly or annually. Cancel anytime.</p>
                <button style={{width:'100%',margin:'30px 0 0px 0',borderRadius:'5px',fontSize:'18px',backgroundColor:'#6D28D2',padding:'12px',color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <span>
                    Start Subscription
                    </span>
                    <img src={BtnRigthSideArrow} alt="" style={{width:'25px',margin:'0 0 0 10px '}} />
                </button>
            </div>

            <div className="PlanDataDiv" >
                <ul style={{listStyle:'none',padding:'10px 0 0 25px' }}>
                    <li style={{padding:'5px 0 5px 0',display:'flex',alignContent:'center'}}>
                        <img src={correct_sign} alt="✔" style={{width:'20px',margin:'0 10px 0 0'}}/>
                        Access to 12,000+ top courses
                    </li>
                    <li style={{padding:'5px 0 5px 0',display:'flex',alignContent:'center'}}>
                        <img src={correct_sign} alt="✔" style={{width:'20px',margin:'0 10px 0 0'}}/>
                        Certification prep
                    </li>
                    <li style={{padding:'5px 0 5px 0',display:'flex',alignContent:'center'}}>
                        <img src={correct_sign} alt="✔" style={{width:'20px',margin:'0 10px 0 0'}}/>
                        Goal-focused recommendations
                    </li>
                    <li style={{padding:'5px 0 5px 0',display:'flex',alignContent:'center'}}>
                        <img src={correct_sign} alt="✔" style={{width:'20px',margin:'0 10px 0 0'}}/>
                        AI-powered coding exercises
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Subscription