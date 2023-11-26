import { css } from '../../styled-system/css'

const Footer = () => {
  return (
    <div className={css({display: 'flex', alignItems: 'center', justifyContent:'space-between'})}>
        <span>@2023 CarHub. All rights reserved</span>
        <div className={css({gap: '4'})}>
            <span>Privacy Policy</span>
            <span>Terms & Condition</span>
        </div>
    </div>
  )
}

export default Footer