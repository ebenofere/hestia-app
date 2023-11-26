import { css } from '../../styled-system/css'
import CustomButton from './CustomButton'

const WhoWeAre = () => {
  return (
    <div className={css({display: 'flex', alignItems:'center', justifyContent:'center'})}>
        <div>
            <span className={css({fontSize:'5em', fontWeight:'600', color:"teal.600"})}>Who we are,</span>
            <div>
                <span className={css({fontSize:'3em', fontWeight:'600', color:"teal.600"})}>AT Hestia <span>.</span></span>
                <span>We Create Interiors That Inspire.</span>
                <p>Hestia Designs' team of professionals offers extensive experience and a passion for breathing new life into every aspect of what we do. We meticulously ensure that each detail, fixture, and accessory perfectly suit your unique personality and style.</p>
                <CustomButton title="Learn More" />
            </div>
        </div>
        <div>
            <img src='https://res.cloudinary.com/ebenofere/image/upload/v1700972267/Hestia/interior1_gnva7r.png' />
        </div>
    </div>
  )
}

export default WhoWeAre