console.info('Content script works! ')
console.info('Content Scripts 是运行在页面中的一段脚本（JavaScript文件）')
import React from 'react'
import ReactDom from 'react-dom'

import { VideoCard } from './components'

if (window?.location?.pathname === '/') {
  const wrapNode = document?.getElementsByClassName('roll-btn-wrap')?.[0]

  if (wrapNode?.children?.length <= 1) {
    const button = document.createElement('button')
    button.className = 'primary-btn roll-btn'
    button.setAttribute('style', 'margin-top: 10px;')
    const span = document.createElement('span')
    span.innerHTML = '退回去'
    button?.append(span)
    wrapNode?.appendChild?.(button)
  }
}

document?.getElementById?.('#XXXXX') &&
  ReactDom.render(<VideoCard />, document?.getElementById?.('#XXXXX'))
