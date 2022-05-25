import React from 'react'

import type { FC } from 'react'
import type { RcmdVideo } from '../types/index'

/**
 * video info
 */
export const Info: FC<{ item: RcmdVideo }> = (props) => {
  const { item } = props
  const { rcmd_reason } = item ?? {}
  const uri = (item?.uri ?? '').replace(/https?:/gi, '')

  return (
    <div className="bili-video-card__info __scale-disable">
      <div className="bili-video-card__info--right">
        <a href={uri} target="_blank" rel="noreferrer">
          <h3 className="bili-video-card__info--tit" title={item?.title ?? ''}>
            “{item?.title ?? ''}”
          </h3>
        </a>

        <p className="bili-video-card__info--bottom">
          {rcmd_reason?.reason_type === 3 && (
            <div className="bili-video-card__info--icon-text">
              {rcmd_reason?.content ?? ''}
            </div>
          )}

          <a
            className="bili-video-card__info--owner"
            href={`https://space.bilibili.com/${item?.owner?.mid ?? 0}`}
            target="_blank"
            rel="noreferrer"
            style={{ flex: '1 1 0%' }}
          >
            {rcmd_reason?.reason_type === 0 && (
              <svg className="bili-video-card__info--owner__up">
                <use xlinkHref="#widget-up"></use>
              </svg>
            )}

            <span className="bili-video-card__info--author">
              {item?.owner?.name ?? ''}
            </span>

            {rcmd_reason?.reason_type === 0 && (
              <span className="bili-video-card__info--date">
                · {item?.pubdate}
              </span>
            )}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Info
