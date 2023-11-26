import { css } from '../../styled-system/css'
import CustomButton from './CustomButton'

const WhoWeAre = () => {
  return (
    <div className={css({display: 'flex', alignItems:'center', justifyContent:'center', px:'24', pt: '24'})}>
        <div>
            <span className={css({fontSize:'5em', fontWeight:'600', letterSpacing:'4px' , color:"#4FA8AE",  mb:'6'})}>Who we are,</span>
            <div>
                <span className={css({fontSize:'3em', fontWeight:'600', color: "#282D32"})}>AT Hestia <span className={css({color: "tomato", fontSize:"6xl"})}>.</span></span>
                <p className={css({ fontSize:'1.2em', fontWeight:'500', fontStyle:'italic', color: "#282D32", mb:'12'})}>We Create Interiors That Inspire.</p>
                <p className={css({ color: "#282D32", mb:'8', width:'85%', wordSpacing:'1px', lineHeight:'2em'})}>Hestia Designs' team of professionals offers extensive experience and a passion for breathing new life into every aspect of what we do. We meticulously ensure that each detail, fixture, and accessory perfectly suit your unique personality and style.</p>
                <CustomButton title="Learn More" />
            </div>
        </div>
        <div className={css({width: "140%"})}>
            <img src='https://res.cloudinary.com/ebenofere/image/upload/v1700972267/Hestia/interior1_gnva7r.png'/>
        </div>
        <div className={css({borderTop: "2px", borderColor: 'gray.500'})}></div>
    </div>
  )
}

export default WhoWeAre