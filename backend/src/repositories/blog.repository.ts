import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Blog, BlogRelations, BlogTag} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {BlogTagRepository} from './blog-tag.repository';

export class BlogRepository extends DefaultCrudRepository<
  Blog,
  typeof Blog.prototype.id,
  BlogRelations
> {

  public readonly blogTags: HasManyRepositoryFactory<BlogTag, typeof Blog.prototype.id>;

  constructor(
    @inject('datasources.mongo_db') dataSource: MongoDbDataSource, @repository.getter('BlogTagRepository') protected blogTagRepositoryGetter: Getter<BlogTagRepository>,
  ) {
    super(Blog, dataSource);
    this.blogTags = this.createHasManyRepositoryFactoryFor('blogTags', blogTagRepositoryGetter,);
    this.registerInclusionResolver('blogTags', this.blogTags.inclusionResolver);
  }
}
