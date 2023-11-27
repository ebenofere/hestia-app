import { CustomButton } from '.'
import { css } from '../../styled-system/css'
import { sponsorSection } from '@/constants'

const ExperienceLuxury = () => {
  return (
    <div>
         <div className={css({display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'16px', px:'24', pt: '4'})}>
            <span className={css({fontSize:'5em', fontWeight:'600', letterSpacing:'4px' , color:"#4FA8AE", px:'24', pt: '12'})}>Experience Luxury</span>
            <p className={css({textAlign:'center', width:'50%'})}>
            Join the ranks of satisfied clients who have transformed their spaces with the help of our expert design team. Book a consultation today and start creating your dream Space.
            </p>
            <CustomButton title='Book a Consultation' />
         </div>
         <div className={css({ display:'flex', alignItems:'center', justifyContent:'space-between', py:'8'})}>
            {sponsorSection.map((item => (
                <img src={item.url} title={item.title} key={item.id} />
            )))}
         </div>
    </div>
  )
}

export default ExperienceLuxury