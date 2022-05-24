import React from 'react'

import type { FC } from 'react'
import type { Stat } from '../types'

/**
 * 视频统计组件（播放、评论、时长）
 */
export const Stats: FC<{ stat: Stat; duration: number }> = (props) => (
  <div className="bili-video-card__mask">
    <div className="bili-video-card__stats">
      <div className="bili-video-card__stats--left">
        <span className="bili-video-card__stats--item">
          <svg className="bili-video-card__stats--icon">
            <use xlinkHref="#widget-video-play-count"></use>
          </svg>
          <span className="bili-video-card__stats--text">
            {props?.stat?.view / 10000}万
          </span>
        </span>
        <span className="bili-video-card__stats--item">
          <svg className="bili-video-card__stats--icon">
            <use xlinkHref="#widget-video-danmaku"></use>
          </svg>
          <span className="bili-video-card__stats--text">
            {props?.stat?.danmaku}
          </span>
        </span>
      </div>
      <span className="bili-video-card__stats__duration">
        {props?.duration ?? 0}
      </span>
    </div>
  </div>
)

export default Stats
