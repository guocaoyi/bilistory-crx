import React from 'react'

import { Stats } from './Stats'
import { InlinePlayer } from './InlinePlayer'

import type { FC } from 'react'
import type { RcmdVideo } from '../types/index'

/**
 * card component
 */
export const PlayerWrap: FC<{ item: RcmdVideo }> = (props) => {
  const { item } = props
  let coverPic = (item?.pic ?? '').replace(/https?:/gi, '')
  return (
    <a href={item?.uri ?? ''} target="_blank" rel="noreferrer">
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
              srcSet={`${coverPic}@672w_378h_1c.webp`}
              type="image/webp"
            />
            <img
              src={`${coverPic}@672w_378h_1c`}
              alt={item?.title ?? ''}
              loading="eager"
            />
          </picture>

          <InlinePlayer />
        </div>

        <Stats duration={item?.duration ?? 0} stat={item?.stat ?? {}} />
      </div>
    </a>
  )
}

export default PlayerWrap
