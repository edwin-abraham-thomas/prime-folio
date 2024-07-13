/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Content } from '../../models/content';
import { ContentCreateRequest } from '../../models/content-create-request';

export interface ApiContentPost$Plain$Params {
      body?: ContentCreateRequest
}

export function apiContentPost$Plain(http: HttpClient, rootUrl: string, params?: ApiContentPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
  const rb = new RequestBuilder(rootUrl, apiContentPost$Plain.PATH, 'post');
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

apiContentPost$Plain.PATH = '/api/Content';
