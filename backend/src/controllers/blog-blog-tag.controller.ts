import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Blog,
  BlogTag,
} from '../models';
import {BlogRepository} from '../repositories';

export class BlogBlogTagController {
  constructor(
    @repository(BlogRepository) protected blogRepository: BlogRepository,
  ) { }

  @get('/blogs/{id}/blog-tags', {
    responses: {
      '200': {
        description: 'Array of Blog has many BlogTag',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(BlogTag)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<BlogTag>,
  ): Promise<BlogTag[]> {
    return this.blogRepository.blogTags(id).find(filter);
  }

  @post('/blogs/{id}/blog-tags', {
    responses: {
      '200': {
        description: 'Blog model instance',
        content: {'application/json': {schema: getModelSchemaRef(BlogTag)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Blog.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogTag, {
            title: 'NewBlogTagInBlog',
            exclude: ['id'],
            optional: ['blogId']
          }),
        },
      },
    }) blogTag: Omit<BlogTag, 'id'>,
  ): Promise<BlogTag> {
    return this.blogRepository.blogTags(id).create(blogTag);
  }

  @patch('/blogs/{id}/blog-tags', {
    responses: {
      '200': {
        description: 'Blog.BlogTag PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogTag, {partial: true}),
        },
      },
    })
    blogTag: Partial<BlogTag>,
    @param.query.object('where', getWhereSchemaFor(BlogTag)) where?: Where<BlogTag>,
  ): Promise<Count> {
    return this.blogRepository.blogTags(id).patch(blogTag, where);
  }

  @del('/blogs/{id}/blog-tags', {
    responses: {
      '200': {
        description: 'Blog.BlogTag DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(BlogTag)) where?: Where<BlogTag>,
  ): Promise<Count> {
    return this.blogRepository.blogTags(id).delete(where);
  }
}
