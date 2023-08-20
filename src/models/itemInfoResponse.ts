export interface ItemInfoResponse {
  status: string
  data: Item
}

export interface Item {
  id: string
  name: string
  size: number
  ext: string
  tags: string[]
  folders: string[]
  isDeleted: boolean
  url: string
  annotation: string
  modificationTime: number
  width: number
  height: number
  noThumbnail: boolean
  lastModified: number
  palettes: Palette[]
}

interface Palette {
  color: number[]
  ratio: number
  $$hashKey: string
}
