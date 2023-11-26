import Image from 'next/image'
import styles from './page.module.css'
import {css} from "../../styled-system/css";
import { circle } from '../../styled-system/patterns';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/LeftGallery';
import RightGallery from '@/components/RightGallery';
import LeftGallery from '@/components/LeftGallery';

export default function Home() {
  return (
   <div>
      <Hero />

      <WhoWeAre />

      <LeftGallery title="architecture" heading="What we do" image="https://res.cloudinary.com/ebenofere/image/upload/v1700981130/Hestia/Rectangle_594_sglkvs.png" />
      <RightGallery title="residential" />
      <LeftGallery title="commercial" image="https://res.cloudinary.com/ebenofere/image/upload/v1700987096/Hestia/Rectangle_594_hrjgwf.png" />
      <RightGallery title="religious" />
      <LeftGallery title="storefront" image="https://res.cloudinary.com/ebenofere/image/upload/v1700987134/Hestia/Rectangle_594_1_hoegdq.png" />


 

   </div>
  )
}
