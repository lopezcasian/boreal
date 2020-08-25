import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Blog, BlogWithRelations} from './blog.model';

@model()
export class BlogTag extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: false,
    defaultFn: "uuidv4"
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @belongsTo(() => Blog)
  blogId: string;

  constructor(data?: Partial<BlogTag>) {
    super(data);
  }
}

export interface BlogTagRelations {
  blog?: BlogWithRelations;
}

export type BlogTagWithRelations = BlogTag & BlogTagRelations;
