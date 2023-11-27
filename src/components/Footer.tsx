import { css } from '../../styled-system/css'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <div className={css({display: 'flex', alignItems: 'top', justifyContent:'space-between', height:'10em', bg:"#232323", color:"white", py:'48', px:'36'})}>
       <div>
        <span>Copyright © 2020 Landify UI Kit.</span>
            <p>All rights reserved</p>
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