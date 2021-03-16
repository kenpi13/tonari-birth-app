import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@material-ui/core'

export default function Post() {
    const [preview, setPreview] = useState('');
  
    const handleChangeFile = (e) => {
      const { files } = e.target;
      setPreview(window.URL.createObjectURL(files[0]));
    };
  
    return (
        <div>
      <img src={preview} />
      <input
        type="file"
        name="photo"
        onChange={handleChangeFile}
      />
       {''}
  <Link href="/" passHref>
   <Button variant="outlined">戻る</Button>
  </Link>
  {''}
      </div>
    )
  }