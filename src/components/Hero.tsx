import {css} from "../../styled-system/css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className={css({bgImage:"url('https://res.cloudinary.com/ebenofere/image/upload/v1700965465/Hestia/Hero_Mask_g6bp7l.png')", bgRepeat: 'no-repeat', bgPosition:'center', bgSize:'cover', width: '100%', minH: "100vh"})}>
        <Navbar />

        <div className={css({display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', minH: '80vh', fontSize:'6em', color:'white' })}>
            <div>
                <span className={css({fontWeight:'800'})}>Designing</span> spaces <br /> 
            </div>
            <div className={css({ml:'48', pos:'relative'})}>
              <span className={css({fontWeight:'600'})}>You</span>
              &#39;ll love to be in 
              <span className={css({color:'tomato', pos:'absolute', top:'-50px', right:'-20px'})}>.</span>
            </div>
        </div>

    </div>
  )
}

export default Hero