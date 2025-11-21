import typia from "typia";
import type { Primitive } from "typia";

import api from "../../../../api";
import type { FooDtos } from "../../../../dto/foo.dto";

export const test_api_api_internal_v1_health_get = async (
  connection: api.IConnection,
) => {
  const output: Primitive<FooDtos.HealthCheckResponse> =
    await api.functional.api.internal.v1.health.get(connection);
  typia.assert(output);
};
