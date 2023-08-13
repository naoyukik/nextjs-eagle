export interface Data {
  folders: Folder[];
  smartFolders: SmartFolder[];
  quickAccess: QuickAccess[];
  tagsGroups: TagsGroups[];
  modificationTime: number;
  applicationVersion: string;
}

export interface Folder {
  id: string;
  name: string;
  description: string;
  children: Folder[];
  modificationTime: number;
  tags: string[];
  iconColor: string;
  password: string;
  passwordTips: string;
  coverId: string;
  orderBy: string;
  sortIncrease: boolean;
}

export interface SmartFolder {
  id: string;
  icon: string;
  name: string;
  description: string;
  modificationTime: number;
  conditions: Condition[];
  orderBy: string;
  sortIncrease: boolean;
}

export interface Condition {
  match: string;
  rules: Rule[];
}

export interface Rule {
  method: string;
  property: string;
  value: (number | string)[];
}

export interface QuickAccess {
  type: string;
  id: string;
}

export interface TagsGroups {
  id: string;
  name: string;
  tags: string[];
  color: string;
}

export interface LibraryInfoResponse {
  status: string;
  data: Data;
}