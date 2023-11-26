import {css} from "../../styled-system/css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className={css({bgImage:"url('https://res.cloudinary.com/ebenofere/image/upload/v1700965465/Hestia/Hero_Mask_g6bp7l.png')", bgRepeat: 'no-repeat', bgPosition:'center', bgSize:'cover', width: '100%', minH: "100vh"})}>
        <Navbar />

        <div className={css({display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', minH: '80vh', fontSize:'5em', color:'white', letterSpacing: '4px' })}>
            <div>
                <span className={css({fontWeight:'600'})}>Designing</span> spaces <br /> 
            </div>
            <div className={css({ml:'48'})}><span className={css({fontWeight:'600'})}>You</span>'ll love to be in <span className={css({color:'tomato'})}>.</span></div>
        </div>

    </div>
  )
}

export default Hero