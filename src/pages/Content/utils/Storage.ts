type SStorage = typeof window.sessionStorage

// storage
export class Storage {
  private static _db: SStorage = window.sessionStorage
  private static _instance: Storage

  private constructor() {}

  public static getInstance(): Storage {
    return this._instance || (this._instance = new Storage())
  }

  getItem() {
    return this._db.getItem.apply(this._db, arguments)
  }
}

export default Storage
