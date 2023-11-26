import { RightGalleryProps } from '@/types'
import { css } from '../../styled-system/css'
import CustomButton from './CustomButton'

const RightGallery = ({title}: RightGalleryProps) => {
  return (
    <div className={css({ px:'24', pt: '12'})}>
        <div className={css({display: 'flex', alignItems:'top', justifyContent:'center'})}>
            <div className={css({ml:'12'})}>
                <span className={css({fontSize:'2em', fontWeight:'600', color: "#282D32"})}>{title} <span className={css({color: "tomato", fontSize:"6xl"})}>.</span></span>
                <p className={css({ color: "#282D32", mb:'8', width:'85%', wordSpacing:'1px', lineHeight:'2em'})}>Hestia Designs' team of professionals offers extensive experience and a passion for breathing new life into every aspect of what we do. We meticulously ensure that each detail, fixture, and accessory perfectly suit your unique personality and style.</p>
                <div>
                    <CustomButton title="Learn More" />
                </div>
            </div>
            <div className={css({width: "140%"})}>
                <img src='https://res.cloudinary.com/ebenofere/image/upload/v1700982054/Hestia/Rectangle_594_1_u11rsp.png'/>
            </div>
        </div>
    </div>
  )
}

export default RightGallery