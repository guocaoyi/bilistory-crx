import React, { Component } from 'react'

/**
 * 视频统计组件（播放、评论、时长）
 */
export class Stats extends Component {
  state = {
    name: 'dev',
  }

  render() {
    return (
      <div className="bili-video-card__mask">
        <div className="bili-video-card__stats">
          <div className="bili-video-card__stats--left">
            <span className="bili-video-card__stats--item">
              <svg className="bili-video-card__stats--icon">
                <use xlinkHref="#widget-video-play-count"></use>
              </svg>
              <span className="bili-video-card__stats--text">63.3万</span>
            </span>
            <span className="bili-video-card__stats--item">
              <svg className="bili-video-card__stats--icon">
                <use xlinkHref="#widget-video-danmaku"></use>
              </svg>
              <span className="bili-video-card__stats--text">473</span>
            </span>
          </div>
          <span className="bili-video-card__stats__duration">03:30</span>
        </div>
      </div>
    )
  }
}

export default Stats
