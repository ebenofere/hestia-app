import { CustomButtonProps } from '@/types'
import { css } from '../../styled-system/css'

const CustomButton = ({title}: CustomButtonProps) => {
  return (
    <div>
        <button className={css({bg:'teal.600', color:'white', py:'2', px:'4'})}> {title}</button>
    </div>
  )
}

export default CustomButton