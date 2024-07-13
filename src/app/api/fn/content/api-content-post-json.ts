/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Content } from '../../models/content';
import { ContentCreateRequest } from '../../models/content-create-request';

export interface ApiContentPost$Json$Params {
      body?: ContentCreateRequest
}

export function apiContentPost$Json(http: HttpClient, rootUrl: string, params?: ApiContentPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
  const rb = new RequestBuilder(rootUrl, apiContentPost$Json.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Content>;
    })
  );
}

apiContentPost$Json.PATH = '/api/Content';
