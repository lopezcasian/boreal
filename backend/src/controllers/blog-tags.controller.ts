import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {BlogTag, Blog} from '../models';
import {BlogTagRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

@authenticate('jwt')
export class BlogTagsController {
  constructor(
    @repository(BlogTagRepository)
    public blogTagRepository : BlogTagRepository,
  ) {}

  @post('/blog-tags', {
    responses: {
      '200': {
        description: 'BlogTag model instance',
        content: {'application/json': {schema: getModelSchemaRef(BlogTag)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogTag, {
            title: 'NewBlogTag',
            exclude: ['id'],
          }),
        },
      },
    })
    blogTag: Omit<BlogTag, 'id'>,
  ): Promise<BlogTag> {
    return this.blogTagRepository.create(blogTag);
  }

  @get('/blog-tags', {
    responses: {
      '200': {
        description: 'Array of BlogTag model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(BlogTag, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(BlogTag) filter?: Filter<BlogTag>,
  ): Promise<BlogTag[]> {
    return this.blogTagRepository.find(filter);
  }

  @get('/blog-tags/{id}', {
    responses: {
      '200': {
        description: 'BlogTag model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(BlogTag, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(BlogTag, {exclude: 'where'}) filter?: FilterExcludingWhere<BlogTag>
  ): Promise<BlogTag> {
    return this.blogTagRepository.findById(id, filter);
  }

  @patch('/blog-tags/{id}', {
    responses: {
      '204': {
        description: 'BlogTag PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(BlogTag, {partial: true}),
        },
      },
    })
    blogTag: BlogTag,
  ): Promise<void> {
    await this.blogTagRepository.updateById(id, blogTag);
  }

  @put('/blog-tags/{id}', {
    responses: {
      '204': {
        description: 'BlogTag PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() blogTag: BlogTag,
  ): Promise<void> {
    await this.blogTagRepository.replaceById(id, blogTag);
  }

  @del('/blog-tags/{id}', {
    responses: {
      '204': {
        description: 'BlogTag DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.blogTagRepository.deleteById(id);
  }

  @get('/blog-tags/{id}/blog', {
    responses: {
      '200': {
        description: 'Blog belonging to BlogTag',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Blog)},
          },
        },
      },
    },
  })
  async getBlog(
    @param.path.string('id') id: typeof BlogTag.prototype.id,
  ): Promise<Blog> {
    return this.blogTagRepository.blog(id);
  }
}
