import React, { Component } from 'react'

import { Stats } from './Stats'
import { InlinePlayer } from './InlinePlayer'

/**
 * card component
 */
export class PlayerWrap extends Component {
  render() {
    return (
      <a href={this.state.url} target="_blank" rel="noreferrer">
        <div className="bili-video-card__image __scale-player-wrap">
          <div className="bili-video-card__image--wrap">
            <div className="bili-watch-later" style={{ display: 'none' }}>
              <svg className="bili-watch-later__icon">
                <use xlinkHref="#widget-watch-later"></use>
              </svg>
              <span
                className="bili-watch-later__tip"
                style={{ display: 'none' }}
              ></span>
            </div>
            <picture className="v-img bili-video-card__cover">
              <source
                srcSet="//i0.hdslb.com/bfs/archive/7d4d03ef16729857a78c6604b41987b99678dfa9.jpg@672w_378h_1c.webp"
                type="image/webp"
              />
              <img
                src="//i0.hdslb.com/bfs/archive/7d4d03ef16729857a78c6604b41987b99678dfa9.jpg@672w_378h_1c"
                alt="“有些人天生就是主角！！”"
                loading="eager"
              />
            </picture>

            <InlinePlayer />
          </div>
          <Stats duration={1} stat={} />
        </div>
      </a>
    )
  }
}

export default PlayerWrap
