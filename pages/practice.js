import React from 'react'
import Link from 'next/link'
import { Button } from '@material-ui/core'

const Practice = () => (
  <div>
  <h1 className="practice"> practice </h1>
  {''}
      <Link href="/" passHref>
      <Button variant="outlined">つかれた</Button>
      </Link>
  {''}
  {''}
      <Link href="/" passHref>
      <Button variant="outlined">ねる</Button>
      </Link>
  {''}
  <style>
      {`
      .practice{
          color:red;
      }
    `}
  </style>
  </div>
);

export default Practice;