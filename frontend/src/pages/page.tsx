import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

export const Image: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return (
    <>
      <div ref={ref} style={{display: 'flex', height: '100vh', width: '100vw'}}>
        <div style={{backgroundColor: 'red', height: '300px', width: '300px', margin: 'auto'}}></div>
      </div>
      <button onClick={onButtonClick}>Click me</button>
    </>
  )
}