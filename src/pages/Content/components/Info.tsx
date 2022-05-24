import React from 'react'

import type { FC } from 'react'

/**
 * video card
 */
export const Info: FC<{ oser?: string }> = (props) => (
  <div className="bili-video-card__info __scale-disable">
    <div className="bili-video-card__info--right">
      <a href={'url'} target="_blank" rel="noreferrer">
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
          <svg className="bili-video-card__info--owner__up">
            <use xlinkHref="#widget-up"></use>
          </svg>

          <span className="bili-video-card__info--author">
            {props?.oser ?? ''}
          </span>

          <span className="bili-video-card__info--date">· 5-20</span>
        </a>
      </p>
    </div>
  </div>
)

export default Info
