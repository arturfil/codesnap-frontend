export interface Post {
  id: string;
  title: string;
  date: Date;
  description: string;
  tags: string;
}

export interface PostsResponse {
  data: Post[] | null;
  loading: boolean;
  error: string;
}

export interface SinglePostResponse {
  post: Post,
  loading: boolean;
  error: string
}