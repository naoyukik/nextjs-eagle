export interface Palette {
  color: number[];
  ratio: number;
}

export interface ItemListData {
  id: string;
  name: string;
  size: number;
  ext: string;
  tags: string[];
  folders: string[];
  isDeleted: boolean;
  url: string;
  annotation: string;
  modificationTime: number;
  height: number;
  width: number;
  lastModified: number;
  palettes: Palette[];
}

export interface ItemListResponse {
  status: string;
  data: ItemListData[];
}
