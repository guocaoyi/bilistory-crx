import React from 'react'

import { FC } from 'react'

/**
 * preview inner player
 */
export const InlinePlayer: FC<unknown> = () => {
  return (
    <div className="v-inline-player">
      <div
        data-iid="1"
        data-injector="nano"
        className="bpx-docker bpx-docker-major"
      >
        <div
          className="bpx-player-container bpx-state-disable-box-shadow bpx-state-no-cursor"
          data-screen="normal"
          data-ctrl-hidden="true"
        >
          <div className="bpx-player-primary-area" aria-label="哔哩哔哩播放器">
            <div className="bpx-player-video-area">
              <div className="bpx-player-video-perch">
                <div className="bpx-player-video-wrap">
                  <video
                    crossOrigin="anonymous"
                    preload="auto"
                    src="blob:https://www.bilibili.com/f8568531-1b58-43d4-abfc-451b3d54553d"
                  ></video>
                </div>
              </div>
              <div className="bpx-player-row-dm-wrap"></div>
              <div className="bpx-player-adv-dm-wrap"></div>
              <div className="bpx-player-bas-dm-wrap"></div>
              <div className="bpx-player-cmd-dm-wrap">
                <div className="bpx-player-cmd-dm-inside"></div>
              </div>
              <div className="bpx-player-ending-panel" hidden></div>
              <div className="bpx-player-share-panel" hidden></div>
              <div className="bpx-player-subtitle-wrap"></div>
              <div className="bpx-player-top-wrap">
                <div className="bpx-player-top-mask"></div>
                <div className="bpx-player-top-title"></div>
                <div className="bpx-player-top-follow"></div>
                <div className="bpx-player-top-issue">
                  <span className="bpx-player-top-issue-icon"></span>
                </div>
              </div>
              <div className="bpx-player-state-wrap">
                <div className="bpx-player-state-play"></div>
                <div className="bpx-player-state-buff-icon"></div>
                <div className="bpx-player-state-buff-text">
                  <span className="bpx-player-state-buff-title">
                    正在缓冲...
                  </span>
                  <span className="bpx-player-state-buff-speed"></span>
                </div>
              </div>
              <div className="bpx-player-loading-panel">
                <div className="bpx-player-loading-panel-text" hidden>
                  <div className="bpx-player-loading-panel-text-row">
                    <span>获取播放地址...</span>
                    <span>[成功]</span>
                  </div>

                  <div className="bpx-player-loading-panel-text-row">
                    <span>播放器初始化...</span>
                    <span>[成功]</span>
                    <span className="bpx-common-opacity-60">
                      3.1.4-8e4ce27f
                    </span>
                  </div>

                  <div className="bpx-player-loading-panel-text-row">
                    <span>加载视频信息...</span>
                    <span>[成功]</span>
                  </div>

                  <div className="bpx-player-loading-panel-text-row">
                    <span>加载视频内容...</span>
                  </div>
                </div>
                <div className="bpx-player-loading-panel-blur" hidden>
                  <div className="bpx-player-loading-panel-blur-detail"></div>
                </div>
              </div>
              <div className="bpx-player-toast-wrap">
                <div className="bpx-player-toast-auto"></div>
                <div className="bpx-player-toast-fixed"></div>
              </div>
              <div className="bpx-player-control-wrap">
                <div className="bpx-player-control-mask"></div>
                <div className="bpx-player-control-entity">
                  <div className="bpx-player-control-top"></div>
                  <div className="bpx-player-control-bottom">
                    <div className="bpx-player-control-bottom-left"></div>
                    <div className="bpx-player-control-bottom-center"></div>
                    <div className="bpx-player-control-bottom-right"></div>
                  </div>
                </div>
              </div>
              <div className="bpx-player-dialog-wrap"></div>
            </div>
            <div className="bpx-player-sending-area" hidden>
              <div className="bpx-player-sending-bar">
                <div className="bpx-player-sending-bar-left"></div>
                <div className="bpx-player-sending-bar-right"></div>
              </div>
            </div>
          </div>
          <div className="bpx-player-dialog-area"></div>
          <div className="bpx-player-tooltip-area"></div>
          <div className="bpx-player-context-area"></div>
        </div>
      </div>
    </div>
  )
}

export default InlinePlayer
