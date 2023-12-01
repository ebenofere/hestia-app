import { RightGalleryProps } from '@/types'
import { css } from '../../styled-system/css'
import { Box, HStack } from '../../styled-system/jsx'
import { Button } from '@/custom/button'
import { FaArrowRight } from 'react-icons/fa';

const RightGallery = ({title, image}: RightGalleryProps) => {
  return (
    <div className={css({ px:'24', pt: '12', w:"full"})}>
        <div className={css({display: 'flex', alignItems:'top', justifyContent:'space-between', gap:'8'})}>
            <div className={css({w:"50%"})}>
                <span className={css({fontSize:'2em', fontWeight:'600', color: "#282D32"})}>{title} <span className={css({color: "tomato", fontSize:"6xl"})}>.</span></span>
                <p className={css({ color: "#282D32", mb:'8', width:'100%', fontWeight:"400", lineHeight:'35px'})}>Hestia Designs&#39; team of professionals offers extensive experience and a passion for breathing new life into every aspect of what we do. We meticulously ensure that each detail, fixture, and accessory perfectly suit your unique personality and style.</p>
                <div>
                   <HStack>
                        <Box w="25%">
                            <Button bg="#078080" color="white" className={css({display: 'flex', alignItems:'center', justifyContent:'center', gap:'2'})}>
                                Learn More 
                                <FaArrowRight />
                            </Button>
                        </Box>
                        <Box w="380px" h="5px" bg="#078080" flexShrink="0" />
                   </HStack>
                </div>
            </div>
            <div className={css({w:"50%"})}>
                <img src={image} alt={title} />
            </div>
        </div>
    </div>
  )
}

export default RightGallery