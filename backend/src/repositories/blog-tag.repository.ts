import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {BlogTag, BlogTagRelations, Blog} from '../models';
import {MongoDbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {BlogRepository} from './blog.repository';

export class BlogTagRepository extends DefaultCrudRepository<
  BlogTag,
  typeof BlogTag.prototype.id,
  BlogTagRelations
> {

  public readonly blog: BelongsToAccessor<Blog, typeof BlogTag.prototype.id>;

  constructor(
    @inject('datasources.mongo_db') dataSource: MongoDbDataSource, @repository.getter('BlogRepository') protected blogRepositoryGetter: Getter<BlogRepository>,
  ) {
    super(BlogTag, dataSource);
    this.blog = this.createBelongsToAccessorFor('blog', blogRepositoryGetter,);
    this.registerInclusionResolver('blog', this.blog.inclusionResolver);
  }
}
