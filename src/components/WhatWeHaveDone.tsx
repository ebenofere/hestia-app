import { css } from '../../styled-system/css'
import CustomButton from './CustomButton'
import { whatWeDid } from '@/constants';

const WhatWeHaveDone = () => {
  return (
    <div className={css({ px:'24', pt: '12'})}>
        <div className={css({fontSize:'5em', fontWeight:'600', letterSpacing:'4px' , color:"#4FA8AE"})}>What we've done</div>
            <div className={css({fontSize:'2em', fontWeight:'600', color: "#282D32"})}>With the place <span className={css({color: "tomato", fontSize:"6xl"})}>.</span></div>

            {whatWeDid.map((item) => (
                <div className={css({display: "flex", alignItems:"top", justifyContent:"center", gap:"5em"})} key={item.id}>
                    <div>
                        <div className={css({width: "558px", height:"536px"})}>
                            <img src={item.image} alt={item.title} key={item.id} />
                        </div>
                        <div className={css({display: "flex", alignItems:"center", justifyContent:"left", gap: "32px", py:"32px", })}>
                            <CustomButton title='Book a Consultation' />
                            <CustomButton title='See more Projects' />
                        </div>
                    </div>
                    <div>
                        <div className={css({display: "flex", alignItems:"center", justifyContent:"center", gap:"16px"})}>
                            {item.links.map((link) => (
                                <img src={link.url} alt={link.title} key={link.id} />
                            ))}
                        </div>
                        <div>
                            <span className={css({fontSize:'2em', fontWeight:'600', color: "#282D32"})}>{item.title}<span className={css({color: "tomato", fontSize:"6xl"})}>.</span></span>
                            <p className={css({ color: "#282D32", mb:'8', width:'85%', wordSpacing:'1px', lineHeight:'2em'})}>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
            
    </div>
  )
}

export default WhatWeHaveDone