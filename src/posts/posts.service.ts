import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CommentsService } from '../comments/comments.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,

    @Inject(forwardRef(() => CommentsService))
    private commentsService: CommentsService,
) {}

  private posts: any = [
    {
      id: 1,
      title: 'Post 1',
      text: 'test description',
      author: 3,
      comments: [1, 2]
    },
    {
      id: 2,
      title: 'Post 2',
      text: 'test description 2',
      author: 1,
      comments: [3, 4]
    },
    {
      id: 3,
      title: 'Post 3',
      text: 'test description 3',
      author: 2,
      comments: []
    },
  ];

  findById(id: string) {
    const post = this.posts.find(item => item.id == id);
    if (typeof post.author === 'number') {
      post.author = this.usersService.findById(post.author)
    }

    post.comments.map((comment, index) => {
      if (typeof comment === "number") {
        post.comments[index] = this.commentsService.findById(String(comment))
      }
    });

    return post;
  }

  findAll() {
    this.posts.map(post => {
      if (typeof post.author === "number" ) {
        post.author = this.usersService.findById(post.author);
      }
      post.comments.map((comment, index) => {
        if (typeof comment === "number") {
          post.comments[index] = this.commentsService.findById(String(comment))
        }
      });
    });

    return this.posts;
  }

  addPost(post) {
    let lastId = this.posts[this.posts.length - 1].id;
    const index = ++lastId;

    const newPost = {
      id: index,
      ...post
    };
    this.posts.push(newPost);
  }

  addCommentToPost(postId, commentId) {
    const post = this.posts.find(item => item.id == postId);
    post.comments.push(Number(commentId));

    return post;
  }
}
