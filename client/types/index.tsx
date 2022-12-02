// common
export interface ICollectionResponse<T> {
  data: T;
  meta: IResponseMeta;
}
export interface IResponseMeta {
  pagination: IPagination;
}
export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// category
export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}
export interface ICategoryAttribute {
  title: string;
  slug: string;
}
