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
  postToEdit: Post,
  postToDelete: Post
}

export interface SinglePostResponse {
  post: Post,
  loading: boolean;
  error: string
}