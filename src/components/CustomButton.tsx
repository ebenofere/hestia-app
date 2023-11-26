import { CustomButtonProps } from '@/types'
import { css } from '../../styled-system/css'

const CustomButton = ({title}: CustomButtonProps) => {
  return (
    <div>
        <button className={css({bg:'teal.600', color:'white', py:"16px", px: "24px"})}> {title}</button>
    </div>
  )
}

export default CustomButton