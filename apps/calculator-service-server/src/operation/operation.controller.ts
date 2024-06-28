import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OperationService } from "./operation.service";
import { OperationControllerBase } from "./base/operation.controller.base";

@swagger.ApiTags("operations")
@common.Controller("operations")
export class OperationController extends OperationControllerBase {
  constructor(protected readonly service: OperationService) {
    super(service);
  }
}
