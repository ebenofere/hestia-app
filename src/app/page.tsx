import Image from 'next/image'
import styles from './page.module.css'
import {css} from "../../styled-system/css";

export default function Home() {
  return (
   <div className={css({bg:"yellow.300"})}>
      <h1>Hello everyone</h1>
   </div>
  )
}
