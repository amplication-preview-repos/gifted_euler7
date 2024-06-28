import * as graphql from "@nestjs/graphql";
import { OperationResolverBase } from "./base/operation.resolver.base";
import { Operation } from "./base/Operation";
import { OperationService } from "./operation.service";

@graphql.Resolver(() => Operation)
export class OperationResolver extends OperationResolverBase {
  constructor(protected readonly service: OperationService) {
    super(service);
  }
}
