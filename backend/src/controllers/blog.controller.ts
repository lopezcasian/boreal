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
import {Blog} from '../models';
import {BlogRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

@authenticate('jwt')
export class BlogController {
  constructor(
    @repository(BlogRepository)
    public blogRepository : BlogRepository,
  ) {}

  @post('/blogs', {
    responses: {
      '200': {
        description: 'Blog model instance',
        content: {'application/json': {schema: getModelSchemaRef(Blog)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Blog, {
            title: 'NewBlog',
            
          }),
        },
      },
    })
    blog: Blog,
  ): Promise<Blog> {
    return this.blogRepository.create(blog);
  }

  @authenticate.skip()
  @get('/blogs', {
    responses: {
      '200': {
        description: 'Array of Blog model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Blog, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Blog) filter?: Filter<Blog>,
  ): Promise<Blog[]> {
    return this.blogRepository.find(filter);
  }

  @authenticate.skip()
  @get('/blogs/{id}', {
    responses: {
      '200': {
        description: 'Blog model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Blog, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Blog, {exclude: 'where'}) filter?: FilterExcludingWhere<Blog>
  ): Promise<Blog> {
    return this.blogRepository.findById(id, filter);
  }

  @patch('/blogs/{id}', {
    responses: {
      '204': {
        description: 'Blog PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Blog, {partial: true}),
        },
      },
    })
    blog: Blog,
  ): Promise<void> {
    await this.blogRepository.updateById(id, blog);
  }

  @put('/blogs/{id}', {
    responses: {
      '204': {
        description: 'Blog PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() blog: Blog,
  ): Promise<void> {
    await this.blogRepository.replaceById(id, blog);
  }

  @del('/blogs/{id}', {
    responses: {
      '204': {
        description: 'Blog DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.blogRepository.deleteById(id);
  }
}
