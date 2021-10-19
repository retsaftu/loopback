import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Zander, ZanderRelations} from '../models';

export class ZanderRepository extends DefaultCrudRepository<
  Zander,
  typeof Zander.prototype.date,
  ZanderRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Zander, dataSource);
  }
}
