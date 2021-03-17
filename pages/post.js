import React, { useState } from 'react'
// import Link from 'next/link'
// import { Button } from '@material-ui/core'
import MyDropZone from '../components/MyDropZone'
import MyDropZones from '../components/MyDropZones'

export default function Post() {
    return (
        <div>
            <h1>画像を投稿するページだよん</h1>
            <MyDropZone/>
            <MyDropZones/>
            {/* <h1>だよん</h1>
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
            {''} */}
        </div>
    )
  }