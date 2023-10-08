import { Controller, Post, Get, Delete, Patch, Param, Body, ParseIntPipe} from '@nestjs/common';
import { PostsService } from './posts.service';
import { createPostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {}

    @Get()
    getPosts() {
        return this.postsService.getPosts();
    }


    @Post()
    createPost(@Body() post: createPostDto) {
        return this.postsService.createPost(post);
    }

}
