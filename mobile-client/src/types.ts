export interface Post {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}

export interface ApiResponse {
  posts: Post[];
  totalItems: number;
}
