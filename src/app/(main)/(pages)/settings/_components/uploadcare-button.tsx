// 'use client'
// import React, { useEffect, useRef } from 'react'
// import * as LR from '@uploadcare/blocks'
// import { useRouter } from 'next/navigation'
// import { FileUploaderRegular } from '@uploadcare/react-uploader';
// import '@uploadcare/react-uploader/core.css';

// type Props = {
//   onUpload: (e: string) => any
// }

// LR.registerBlocks(LR)

// const UploadCareButton = ({ onUpload }: Props) => {
//   const router = useRouter()
//   const ctxProviderRef = useRef<
//     typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
//   >(null)

//   useEffect(() => {
//     const handleUpload = async (e: any) => {
//       const file = await onUpload(e.detail.cdnUrl)
//       if (file) {
//         router.refresh()
//       }
//     }
//     ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
//   }, [])

//   return (
//     <div>
//       <FileUploaderRegular
//          sourceList="local, url, camera, dropbox"
//          classNameUploader="uc-light"
//          pubkey="2614df91112b67078ce2"
//       />
//     </div>
//   )
// }

// export default UploadCareButton

'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks'
import { useRouter } from 'next/navigation' 

type Props = {
  onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
    // ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
     ctxProviderRef.current?.addEventListener('file-upload-success', handleUpload)
  }, [])

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="2614df91112b67078ce2"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
  </div>
  )
}

export default UploadCareButton