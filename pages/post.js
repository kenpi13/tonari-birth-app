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
            <h1>画像を投稿するページだよん</h1>
            <img src={preview} />
            <input
            type="file"
            name="photo"
            onChange={handleChangeFile}
            />
            {''}
            <Link href="/gallery" passHref>
            <Button variant="outlined">投稿する</Button>
            </Link>
            <Link href="/" passHref>
              <Button variant="outlined">戻る</Button>
            </Link>
            {''}
        </div>
    )
  }