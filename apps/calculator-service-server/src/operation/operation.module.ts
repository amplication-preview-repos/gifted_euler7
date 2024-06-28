import { Module } from "@nestjs/common";
import { OperationModuleBase } from "./base/operation.module.base";
import { OperationService } from "./operation.service";
import { OperationController } from "./operation.controller";
import { OperationResolver } from "./operation.resolver";

@Module({
  imports: [OperationModuleBase],
  controllers: [OperationController],
  providers: [OperationService, OperationResolver],
  exports: [OperationService],
})
export class OperationModule {}
