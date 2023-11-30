import { Button } from '@/custom/button';
import { css } from '../../styled-system/css'
import { Box, HStack } from '../../styled-system/jsx';
import CustomButton from './CustomButton'
import { whatWeDid } from '@/constants';
import { FaArrowRight } from 'react-icons/fa';

const WhatWeHaveDone = () => {
  return (
    <div className={css({ px:'24', pt: '12'})}>
        <div className={css({display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'24px', mb:'10'})}>
            <div className={css({fontSize:'96px', fontWeight:'800' , color:"#4FA8AE"})}>What we&#39;ve done</div>

            <div className={css({fontSize:'48px', fontWeight:'600', color: "#282D32", lineHeight:'20px'})}>With the place <span className={css({color: "tomato", fontSize:"48px"})}>.</span></div>
        </div>

        {whatWeDid.map((item) => (
            <div className={css({display: "flex", alignItems:"top", justifyContent:"center", gap:"5em"})} key={item.id}>
                <div>
                    <div className={css({width: "558px", height:"536px"})}>
                        <img src={item.image} alt={item.title} key={item.id} />
                    </div>
                    <div >
                        <HStack className={css({display: "flex", alignItems:"center", justifyContent:"left", gap: "10", py:"32px"})}>
                            <Box w="35%">
                                <Button bg="#078080" color="white" className={css({display: 'flex', alignItems:'center', justifyContent:'center', gap:'2'})}>
                                    Book a Consultation
                                </Button>
                            </Box>
    
                            <Box w="35%">
                                <Button bg="#078080" color="white" className={css({display: 'flex', alignItems:'center', justifyContent:'center', gap:'2'})}>
                                    See more Projects
                                    <FaArrowRight />
                                </Button>
                            </Box>
                        </HStack>
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