import { Button } from '@/custom/button'
import { css } from '../../styled-system/css'
import CustomButton from './CustomButton'
import { Box, HStack } from '../../styled-system/jsx'
import { FaArrowRight } from 'react-icons/fa';

const WhoWeAre = () => {
  return (
    <div className={css({display: 'flex', alignItems:'center', justifyContent:'center', px:'24', pt: '24'})}>
        <div>
            <span className={css({fontSize:'96px', fontWeight:'800', color:"#4FA8AE",  mb:'6'})}>Who we are,</span>
            <div>
                <span className={css({fontSize:'3em', fontWeight:'600', color: "#282D32", pos: "relative"})}>AT Hestia 
                <span className={css({color: "tomato", fontSize:"7xl", pos:"absolute", top:"-10"})}>.</span>
                </span>
                <p className={css({ fontSize:'20px', fontWeight:'400', fontStyle:'italic', color: "#282D32", mb:'12'})}>We Create Interiors That Inspire.</p>
                <p className={css({ color: "#282D32", mb:'8', width:'85%',fontWeight:"400", lineHeight:'35px'})}>Hestia Designs&#39; team of professionals offers extensive experience and a passion for breathing new life into every aspect of what we do. We meticulously ensure that each detail, fixture, and accessory perfectly suit your unique personality and style.</p>
                <div>
                  <HStack pos="relative">
                          <Box w="25%">
                              <Button bg="#078080" color="white" className={css({display: 'flex', alignItems:'center', justifyContent:'center'})}>
                                  Learn More 
                                  <FaArrowRight />
                              </Button>
                          </Box>
                          <Box w="380px" h="5px" bg="#078080" pos="absolute" left="40" />
                  </HStack>
                </div>
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