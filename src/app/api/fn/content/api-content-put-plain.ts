/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Content } from '../../models/content';
import { ContentUpdateRequest } from '../../models/content-update-request';

export interface ApiContentPut$Plain$Params {
      body?: ContentUpdateRequest
}

export function apiContentPut$Plain(http: HttpClient, rootUrl: string, params?: ApiContentPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
  const rb = new RequestBuilder(rootUrl, apiContentPut$Plain.PATH, 'put');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Content>;
    })
  );
}

apiContentPut$Plain.PATH = '/api/Content';
