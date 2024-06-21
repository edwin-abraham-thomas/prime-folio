/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiContentPut$Json } from '../fn/content/api-content-put-json';
import { ApiContentPut$Json$Params } from '../fn/content/api-content-put-json';
import { apiContentPut$Plain } from '../fn/content/api-content-put-plain';
import { ApiContentPut$Plain$Params } from '../fn/content/api-content-put-plain';
import { apiContentUserIdGet$Json } from '../fn/content/api-content-user-id-get-json';
import { ApiContentUserIdGet$Json$Params } from '../fn/content/api-content-user-id-get-json';
import { apiContentUserIdGet$Plain } from '../fn/content/api-content-user-id-get-plain';
import { ApiContentUserIdGet$Plain$Params } from '../fn/content/api-content-user-id-get-plain';
import { Content } from '../models/content';

@Injectable({ providedIn: 'root' })
export class ContentService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiContentUserIdGet()` */
  static readonly ApiContentUserIdGetPath = '/api/Content/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentUserIdGet$Plain$Response(params: ApiContentUserIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
    return apiContentUserIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContentUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentUserIdGet$Plain(params: ApiContentUserIdGet$Plain$Params, context?: HttpContext): Observable<Content> {
    return this.apiContentUserIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Content>): Content => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentUserIdGet$Json$Response(params: ApiContentUserIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
    return apiContentUserIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContentUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentUserIdGet$Json(params: ApiContentUserIdGet$Json$Params, context?: HttpContext): Observable<Content> {
    return this.apiContentUserIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Content>): Content => r.body)
    );
  }

  /** Path part for operation `apiContentPut()` */
  static readonly ApiContentPutPath = '/api/Content';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentPut$Plain$Response(params?: ApiContentPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
    return apiContentPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContentPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentPut$Plain(params?: ApiContentPut$Plain$Params, context?: HttpContext): Observable<Content> {
    return this.apiContentPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Content>): Content => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentPut$Json$Response(params?: ApiContentPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
    return apiContentPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContentPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentPut$Json(params?: ApiContentPut$Json$Params, context?: HttpContext): Observable<Content> {
    return this.apiContentPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Content>): Content => r.body)
    );
  }

}
