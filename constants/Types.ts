export interface BaseEntity {
  id: number;
  createdBy: string;
  createdDate: string;
  modifiedBy: string;
  modifiedDate: string;
}

export interface Recipe extends BaseEntity {
  image1: string;
  title: string;
  netTime: number;
  rating: number;
  numReviews: number;
}

export interface User extends BaseEntity {
  username: string;
  herdId: string;
  userAccountId: number;
}
