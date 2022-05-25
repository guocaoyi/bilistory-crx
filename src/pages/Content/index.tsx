import React from 'react'
import ReactDom from 'react-dom'

import { VideoCards } from './components/VideoCard'

let res = {
  code: 0,
  message: '0',
  ttl: 1,
  data: {
    item: [],
    user_feature: '',
    abtest: { group: 'b' },
  },
}

if (window?.location?.pathname === '/') {
  const wrapNode = document?.getElementsByClassName('roll-btn-wrap')?.[0]

  if (wrapNode?.children?.length <= 1) {
    // back button
    const button = document.createElement('button')
    button.className = 'primary-btn roll-btn'
    button.setAttribute('style', 'margin-top: 10px;')
    const span = document.createElement('span')
    span.innerHTML = '🤺 退'
    button?.append(span)
    wrapNode?.appendChild?.(button)
  }
}

const container = document?.getElementsByClassName(
  'recommend-container__2-line',
)?.[0]
container &&
  ReactDom.render(<VideoCards videos={res?.data?.item ?? []} />, container)
