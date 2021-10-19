import {Entity, model, property} from '@loopback/repository';

// @model({settings: {strict: false}})
@model({
  settings: {
    // add it to the model definition
    mongodb: {collection: 'zander'},
  },
})
export class Zander extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;
  @property({
    type: 'date',
    required: true,
  })
  date: string;
  @property({
    type: 'number',
  })
  pressure?: number;

  @property({
    type: 'number',
  })
  temperature?: number;

  @property({
    type: 'date',
  })
  create_date?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Zander>) {
    super(data);
  }
}

export interface ZanderRelations {
  // describe navigational properties here
}

export type ZanderWithRelations = Zander & ZanderRelations;
