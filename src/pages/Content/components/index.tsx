import React, { Component } from 'react'

import { Info } from './Info'
import { PlayerWrap } from './PlayerWrap'
import { Skeleton } from './Skeleton'

/**
 * video card
 */
export class VideoCard extends Component {
  state = {
    name: 'dev',
    url: 'https://www.bilibili.com/video/BV16F411j7mN',
  }

  render() {
    return (
      <div className="bili-video-card">
        <Skeleton />

        <div className="bili-video-card__wrap __scale-wrap">
          <PlayerWrap />

          <Info />
        </div>
      </div>
    )
  }
}

export default VideoCard
