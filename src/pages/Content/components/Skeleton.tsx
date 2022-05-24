import React from 'react'

import type { FC } from 'react'

/**
 * Skeleton
 */
export const Skeleton: FC<unknown> = () => (
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
)

export default Skeleton
