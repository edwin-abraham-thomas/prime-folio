/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UserCreateOrVerifyRequest } from '../../models/user-create-or-verify-request';
import { UserCreateOrVerifyResponse } from '../../models/user-create-or-verify-response';

export interface ApiUserCreateOrVerifyUserPost$Plain$Params {
      body?: UserCreateOrVerifyRequest
}

export function apiUserCreateOrVerifyUserPost$Plain(http: HttpClient, rootUrl: string, params?: ApiUserCreateOrVerifyUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<UserCreateOrVerifyResponse>> {
  const rb = new RequestBuilder(rootUrl, apiUserCreateOrVerifyUserPost$Plain.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/*+json');
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<UserCreateOrVerifyResponse>;
    })
  );
}

apiUserCreateOrVerifyUserPost$Plain.PATH = '/api/User/CreateOrVerifyUser';
