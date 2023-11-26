import Image from 'next/image'
import styles from './page.module.css'
import {css} from "../../styled-system/css";
import { circle } from '../../styled-system/patterns';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';

export default function Home() {
  return (
   <div >
      <Hero />
      <WhoWeAre />
   </div>
  )
}
