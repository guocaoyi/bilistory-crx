import React from 'react'

import { Info } from './Info'
import { PlayerWrap } from './PlayerWrap'
import { Skeleton } from './Skeleton'

import type { FC } from 'react'
import type { RcmdVideo } from '../types/index'

/**
 * video card
 */
export const VideoCards: FC<{ videos: RcmdVideo[] }> = (props) => {
  return (
    <>
      {props?.videos?.map((v) => (
        <div className="bili-video-card">
          <Skeleton />

          <div className="bili-video-card__wrap __scale-wrap">
            <PlayerWrap item={v} />

            <Info item={v} />
          </div>
        </div>
      ))}
    </>
  )
}

export default VideoCards
