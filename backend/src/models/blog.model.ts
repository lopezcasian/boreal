import {Entity, model, property, hasMany} from '@loopback/repository';
import {BlogTag, BlogTagWithRelations} from './blog-tag.model';

@model()
export class Blog extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: false,
    defaultFn: "uuidv4"
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  smallDescription?: string;

  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @hasMany(() => BlogTag)
  blogTags: BlogTag[];

  constructor(data?: Partial<Blog>) {
    super(data);
  }
}

export interface BlogRelations {
  blogTags?: BlogTagWithRelations[];
}

export type BlogWithRelations = Blog & BlogRelations;
