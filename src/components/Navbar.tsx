import { Button } from '@/custom/button'
import { css } from '../../styled-system/css'
import { Box, HStack } from '../../styled-system/jsx'
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className={css({display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: '12', py: '3', bg:'rgba(0, 0, 0, 0.3)', color:"white", fontSize:'14px'})}>
        <img src='https://res.cloudinary.com/ebenofere/image/upload/v1700966082/Hestia/logo_fqdbpg.png' alt='logo' />
        <div className={css({display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap:'8'})}>
            <div>About</div>
            <div>Process</div>
            <div>Blog</div>
            <div>Portfolio</div>
            <div>
                <HStack>
                    <Box w="100%">
                        <Button bg="#078080" color="white" className={css({display: 'flex', alignItems:'center', justifyContent:'center', gap:'2', px:"5"})}>
                            Learn More 
                            <FaArrowRight />
                        </Button>
                    </Box>
                </HStack>
              </div>
        </div>
    </div>
  )
}

export default Navbar