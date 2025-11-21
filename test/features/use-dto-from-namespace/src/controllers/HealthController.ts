import core from "@nestia/core";
import { Controller } from "@nestjs/common";

import { FooDtos } from "../dto/foo.dto";

@Controller({
  path: "health",
  version: "1",
})
export class HealthController {
  @core.TypedRoute.Get()
  public get(): FooDtos.HealthCheckResponse {
    return {
      responseTime: new Date().toISOString(),
    };
  }
}
