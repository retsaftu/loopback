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
  response,
} from '@loopback/rest';
import {Zander} from '../models';
import {ZanderRepository} from '../repositories';

export class ZanderController {
  constructor(
    @repository(ZanderRepository)
    public zanderRepository : ZanderRepository,
  ) {}

  @post('/zanders')
  @response(200, {
    description: 'Zander model instance',
    content: {'application/json': {schema: getModelSchemaRef(Zander)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zander, {
            title: 'NewZander',
            exclude: ['id'],
          }),
        },
      },
    })
    zander: Omit<Zander, 'id'>,
  ): Promise<Zander> {
    return this.zanderRepository.create(zander);
  }

  @get('/zanders/count')
  @response(200, {
    description: 'Zander model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Zander) where?: Where<Zander>,
  ): Promise<Count> {
    return this.zanderRepository.count(where);
  }

  @get('/zanders')
  @response(200, {
    description: 'Array of Zander model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Zander, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Zander) filter?: Filter<Zander>,
  ): Promise<Zander[]> {
    return this.zanderRepository.find(filter);
  }

  @patch('/zanders')
  @response(200, {
    description: 'Zander PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zander, {partial: true}),
        },
      },
    })
    zander: Zander,
    @param.where(Zander) where?: Where<Zander>,
  ): Promise<Count> {
    return this.zanderRepository.updateAll(zander, where);
  }

  @get('/zanders/{id}')
  @response(200, {
    description: 'Zander model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Zander, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Zander, {exclude: 'where'}) filter?: FilterExcludingWhere<Zander>
  ): Promise<Zander> {
    return this.zanderRepository.findById(id, filter);
  }

  @patch('/zanders/{id}')
  @response(204, {
    description: 'Zander PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Zander, {partial: true}),
        },
      },
    })
    zander: Zander,
  ): Promise<void> {
    await this.zanderRepository.updateById(id, zander);
  }

  @put('/zanders/{id}')
  @response(204, {
    description: 'Zander PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() zander: Zander,
  ): Promise<void> {
    await this.zanderRepository.replaceById(id, zander);
  }

  @del('/zanders/{id}')
  @response(204, {
    description: 'Zander DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.zanderRepository.deleteById(id);
  }
}
