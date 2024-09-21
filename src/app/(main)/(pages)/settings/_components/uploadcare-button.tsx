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
import { FileUploaderRegular } from '@uploadcare/react-uploader';
import '@uploadcare/react-uploader/core.css';

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
  }, [])

  return (
    <div>
      <FileUploaderRegular
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-light"
         pubkey="2614df91112b67078ce2"
      />
    </div>
  )
}

export default UploadCareButton