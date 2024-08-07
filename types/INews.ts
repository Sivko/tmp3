export default interface INews {
  status: string;
  data: Data;
  errors: any[];
}

interface Data {
  head: any[];
  params: Params;
  filter: Filter2;
  result: Result;
}

interface Result {
  elementsCount: number;
  pageSize: number;
  currentPage: number;
  list: List[];
  starred: Starred;
}

interface Starred {
  id: number;
  code: string;
  date: string;
  title: string;
  tags: Tag2[];
  picture: string;
}

interface Tag2 {
  name: string;
  code: string;
  values: Value2[];
}

interface Value2 {
  name: string;
  code: string;
  color: string;
  src?: any;
}

interface List {
  id: number;
  code: string;
  date: string;
  title: string;
  tags: Tag[];
  picture: string;
}

interface Filter2 {
  years: Years;
  tags: Tag[];
}

interface Tag {
  name: string;
  code: string;
  values: Value[];
}

interface Value {
  name: string;
  code: string;
  color: string;
  src?: (null | string)[];
}

interface Years {
  name: string;
  code: string;
  values: number[];
}

interface Params {
  sort: Sort;
  filter: Filter;
  limit: Limit;
  select: string[];
}

interface Limit {
  nPageSize: number;
  iNumPage: string;
}

interface Filter {
  ACTIVE: string;
  IBLOCK_ID: number;
}

interface Sort {
  ACTIVE_FROM: string;
  SORT: string;
}

