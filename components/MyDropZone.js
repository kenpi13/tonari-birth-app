import React, {useCallback,useState} from 'react'
import {useDropzone} from 'react-dropzone'

export default function MyDropzone() {
  const [uploadfile, setUploadfile] = useState();
  const [fileUrl, setFileUrl] = useState();
  const maxSize = 3 * 1024 * 1024;

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 0) {
        const src = URL.createObjectURL(acceptedFiles[0]);
        setFileUrl(src);
        setUploadfile(acceptedFiles[0]);
    }
    // Do something with the files
  }, []);
  const {acceptedFiles,getRootProps, getInputProps, isDragActive,isDragReject,fileRejections} = useDropzone({
      onDrop,
      accept: 'image/png, image/jpeg, image/jpg',
      minSize:1,
      maxSize,
    })

  return (
    <div>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>ファイルをドラッグするかクリックして下さい</p>
      {uploadfile ? <p>選択されたファイル:{uploadfile.name}</p> : null}
      {
        isDragActive ?
          <p>クリックOR</p> :
          <p>ここにドラッグしてくれ！</p>
      }
    <div className="card mt-2" style={{ objectFit:'contain',margin: 'auto' }} >
    <img src={fileUrl} />
    </div>
    </div>
    <button type="button" className="btn btn-primary mt-2">登録</button>
    </div>
  )
}