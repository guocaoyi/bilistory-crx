import React, { Component } from 'react'

import { PlayerWrap } from './PlayerWrap'

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
        <div className="bili-video-card__skeleton hide">
          <div className="bili-video-card__skeleton--cover"></div>
          <div className="bili-video-card__skeleton--info">
            <div className="bili-video-card__skeleton--right">
              <p className="bili-video-card__skeleton--text"></p>
              <p className="bili-video-card__skeleton--text short"></p>
              <p className="bili-video-card__skeleton--light"></p>
            </div>
          </div>
        </div>
        <div className="bili-video-card__wrap __scale-wrap">
          <a href={this.state.url} target="_blank" rel="noreferrer">
            <PlayerWrap />
          </a>
          <div className="bili-video-card__info __scale-disable">
            <div className="bili-video-card__info--right">
              <a href={this.state.url} target="_blank" rel="noreferrer">
                <h3
                  className="bili-video-card__info--tit"
                  title="“有些人天生就是主角！！”"
                >
                  “有些人天生就是主角！！”
                </h3>
              </a>
              <p className="bili-video-card__info--bottom">
                <div className="bili-video-card__info--icon-text">1万点赞</div>
                <a
                  className="bili-video-card__info--owner"
                  href="//space.bilibili.com/27664707"
                  target="_blank"
                  rel="noreferrer"
                  style={{ flex: '1 1 0%' }}
                >
                  <span className="bili-video-card__info--author">
                    一只小黄书
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoCard
