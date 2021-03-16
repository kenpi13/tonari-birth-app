import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Button } from '@material-ui/core'

export default function Home() {
  return (
    <div className={styles.container}>
      {''}
      <Link href="/post" passHref>
      <Button variant="outlined">画像をアップロードする</Button>
      </Link>{''}
      {''}
      <Link href="/gallery" passHref>
      <Button variant="outlined">スライドショーを見てみる</Button>
      </Link>{''}
    </div>
  )
}
