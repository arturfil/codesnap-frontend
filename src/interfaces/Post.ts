export interface Post {
  id: string;
  title: string;
  date: Date;
  description: string;
  tags: string;
}

export interface postsDataState {
  data: Post[];
  loading: boolean;
  error: boolean;
  singlePost: Post,
  postToDelete: Post
}

export interface PostResponse {
  post: Post[],
}