import { css } from '../../styled-system/css'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <div className={css({display: 'flex', alignItems: 'top', justifyContent:'space-between', bg:"#232323", color:"white", py:'12', px:'36'})}>
       <div className={css({display: 'flex', flexDirection:"column", gap:"6", fontSize:"sm"})}>
        <div>
            <img src='https://res.cloudinary.com/ebenofere/image/upload/v1701071411/Hestia/Light_aloxjp.png' alt='logo' />
        </div>
        <span>Copyright © 2020 Landify UI Kit.</span>
        <p>All rights reserved</p>
        <div>
            <img src='https://res.cloudinary.com/ebenofere/image/upload/v1701072011/Hestia/Social_Links_ebr5xz.png' alt='social-link' />
       </div>
       </div>
       <div className={css({display: 'flex', alignItems:'center', justifyContent:'center', gap:'10' })}>
            {footerLinks.map((item) => (
                <div className={css({display: 'flex', flexDirection: 'column',alignItems: 'center'})} key={item.id}>
                    <p className={css({fontSize:'xl', fontWeight:'500', mb:'6'})}>{item.title}</p>
                    {item.links.map((link) => (
                        <a key={link.id} href={link.url} className={css({fontSize:'md', fontWeight:'400', mb:'4'})}>{link.title}</a>
                    ))}
                </div>
            ))}
       </div>
       <div>
            <p className={css({fontSize:'xl', fontWeight:'500', mb:'6'})}>Stay up to date</p>
            <input type='text' name='email' placeholder='Your email address' className={css({py: '2', px:'4', borderRadius: '8px', bg:'#4f4f4f', color:'white'})}  />
       </div>

    </div>
  )
}

export default Footer