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

// author
export interface IAuthor {
  id: number;
  attributes: IAuthorAttribute;
}
export interface IAuthorAttribute {
  username: string;
  email: string;
  provider: string;
  firstName: string; // net to change in content type
  lastName: string;
  avatar: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    };
  };
}

export interface IBlogImage {
  data: {
    attributes: {
      url: string;
      formats: {
        small: {
          url: string;
        };
      };
    };
  };
}

// Articles
export interface IArticlesAttribute {
  title: string;
  slug: string;
  shortDescription: string;
  createdAt: string;
  body: string;
  image: IBlogImage;
  category: {
    data: ICategory;
  };
  author: {
    data: IAuthor;
  };
}
export interface IArticles {
  id: number;
  attributes: IArticlesAttribute;
}
