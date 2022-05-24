/**
 * UP主
 */
export interface Owner {
  /** UP主编号 */
  mid: number

  /** UP主名称 */
  name: string

  /** UP主头像 */
  face: string
}

/**
 * 统计
 */
export interface Stat {
  /** 播放 */
  view: number

  /** 点赞 */
  like: number

  /** 留言  */
  danmaku: number
}

/**
 * 推荐原因
 */
export interface RcmdReason {
  /**
   * 推荐理由（文本）
   */
  content?: string

  /**
   * 推荐类型
   */
  reason_type: 0 | 1 | 2 | 3
}

/**
 * recommended video
 */
export interface RcmdVideo {
  /** 视频编号 */
  id: number

  /** 视频 Hash 编号 */
  bvid: string

  /** 视频 C 编号 */
  cid: number

  /** tracing 编号 */
  track_id: string

  /** 视频格式 */
  goto: 'av' | 'mp4'

  /** 视频地址 uri */
  uri: `https://www.bilibili.com/video/${string}`

  /** 预览图 */
  pic: string

  /** 标题 */
  title: string

  /** 播放时长（秒） */
  duration: number

  /** 发布时间戳（格式化）秒*/
  pubdate: number

  /** UP主 */
  owner: Owner

  /** 统计 */
  stat: Stat

  /** 视频特征值（JSON） */
  av_feature: string

  /**
   * 是否关注 UP主
   * @type {0} 未关注
   * @type {1} 已关注
   */
  is_followed: 0 | 1

  /**
   * 推荐原因
   */
  rcmd_reason: RcmdReason

  /**
   * 是否展示信息
   */
  show_info: 0 | 1
}

/**
 * response
 */
export interface Response {
  code: 0 | 1 | 2 | 3 | 4 | 5
  message: string
  ttl: number
  data: {
    item: RcmdVideo[]
    user_feature: string
    abtest: { group: 'a' | 'b' }
  }
}
