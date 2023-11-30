import Image from 'next/image'
import styles from './page.module.css'
import {css} from "../../styled-system/css";
import { circle } from '../../styled-system/patterns';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/LeftGallery';
import RightGallery from '@/components/RightGallery';
import LeftGallery from '@/components/LeftGallery';
import WhatWeHaveDone from '@/components/WhatWeHaveDone';
import { whatWeDid } from '@/constants';
import { ExperienceLuxury } from '@/components';

export default function Home() {
  return (
   <div>
      <Hero />
      <WhoWeAre />

      <hr className={css({border:'1px solid #e5e1d6'})} />

      <LeftGallery title="architecture" heading="What we do" image="https://res.cloudinary.com/ebenofere/image/upload/v1700981130/Hestia/Rectangle_594_sglkvs.png" />
      <RightGallery title="residential" image="https://res.cloudinary.com/ebenofere/image/upload/v1700982054/Hestia/Rectangle_594_1_u11rsp.png" />
      <LeftGallery title="commercial" image="https://res.cloudinary.com/ebenofere/image/upload/v1700987096/Hestia/Rectangle_594_hrjgwf.png" />
      <RightGallery title="religious" image="https://res.cloudinary.com/ebenofere/image/upload/v1700982054/Hestia/Rectangle_594_1_u11rsp.png" />
      <LeftGallery title="storefront" image="https://res.cloudinary.com/ebenofere/image/upload/v1700987134/Hestia/Rectangle_594_1_hoegdq.png" />

      <WhatWeHaveDone  />

      <ExperienceLuxury />
   </div>
  )
}
