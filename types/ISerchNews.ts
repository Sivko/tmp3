export interface ISearchNews {
  status: string;
  data: Data;
  errors: any[];
}

export interface Data {
  head: any[];
  params: Params;
  filter: Filter2;
  result: Result;
}

export interface Result {
  elementsCount: number;
  pageSize: number;
  currentPage: number;
  list: List[];
  starred: Starred;
}

export interface Starred {
  id: number;
  code: string;
  date: string;
  title: string;
  tags: Tag2[];
  picture: string;
}

export interface Tag2 {
  name: string;
  code: string;
  values: Value2[];
}

export interface Value2 {
  name: string;
  code: string;
  color: string;
  src?: any;
}

export interface List {
  id: number;
  code: string;
  date: string;
  title: string;
  tags: Tag[];
  picture: string;
}

export interface Filter2 {
  years: Years;
  tags: Tag[];
}

export interface Tag {
  name: string;
  code: string;
  values: Value[];
}

export interface Value {
  name: string;
  code: string;
  color: string;
  src?: (null | string)[];
}

export interface Years {
  name: string;
  code: string;
  values: number[];
}

export interface Params {
  sort: Sort;
  filter: Filter;
  limit: Limit;
  select: string[];
}

export interface Limit {
  nPageSize: number;
  iNumPage: string;
}

export interface Filter {
  '0': _02;
  ACTIVE: string;
  IBLOCK_ID: number;
  PROPERTY_HIDE_IN_INDEX_PAGE: boolean;
}

export interface _02 {
  '0': _0;
  LOGIC: string;
}

export interface _0 {
  PROPERTY_TAG_TYPES: string;
}

export interface Sort {
  ACTIVE_FROM: string;
  SORT: string;
}