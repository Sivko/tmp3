export default interface IArticle {
  status: string;
  data: Data;
  errors: any[];
}

export interface Data {
  head: any[];
  result: Result;
}

export interface Result {
  meta: Meta;
  id: number;
  code: string;
  is_hide_list: boolean;
  date: string;
  title: string;
  tags: Tag[];
  content: IContent[];
  advantage_slider_elements?: any;
  advantage_slider_complex?: any;
  next: Next;
}

export interface Next {
  id: number;
  code: string;
  date: string;
  title: string;
  tags: Tag[];
  picture: string;
}

export interface IContent {
  type: string;
  content?: string;
  title?: string;
  description?: string;
  element?: Element;
}

export interface Element {
  title: string;
  description: string;
  type: string;
  contentType: string;
  originalName: string;
  src: string;
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
  src?: any;
}

export interface Meta {
  elementMetaTitle: string;
  elementMetaKeywords: string;
  elementMetaDescription: string;
  elementPageTitle: string;
  elementOgImage: ElementOgImage;
}

export interface ElementOgImage {
  id: string;
  timestampX: string;
  moduleId: string;
  height: string;
  width: string;
  fileSize: string;
  contentType: string;
  subdir: string;
  fileName: string;
  originalName: string;
  description: string;
  handlerId?: any;
  externalId: string;
  src: string;
}