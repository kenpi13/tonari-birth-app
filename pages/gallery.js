import React from 'react'
import Link from 'next/link'
import { Button } from '@material-ui/core'

const Gallery = () => (
  <div>
  <h1> ふぉとぎゃらりーだよん </h1>
  {''}
      <Link href="/" passHref>
      <Button variant="outlined">戻る</Button>
      </Link>
  {''}
  </div>
);

export default Gallery;