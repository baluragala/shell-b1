export interface Post {
  id?: number;
  title: string;
  desc: string;
  author: string;
  category?: string;
  rating?: number;
  isFavorite?: boolean;
}
