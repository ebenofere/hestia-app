import { CustomButtonProps } from '@/types'
import { css } from '../../styled-system/css'

const CustomButton = ({title}: CustomButtonProps) => {
  return (
    <div>
        <button className={css({bg:'#078080', color:'white', h:'56px', w: '100%', px:'16px'})}> {title}</button>
    </div>
  )
}

export default CustomButton