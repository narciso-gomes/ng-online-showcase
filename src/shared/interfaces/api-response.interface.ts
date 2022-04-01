import { HttpStatusCode } from "@angular/common/http";

export interface APIResponse {
  errors: any,
  meta: {
    count: number,
    limit: number,
    offset: number,
    results: any,
  },
  statusCode: HttpStatusCode
}
