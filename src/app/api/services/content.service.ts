/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiContentPost$Json } from '../fn/content/api-content-post-json';
import { ApiContentPost$Json$Params } from '../fn/content/api-content-post-json';
import { apiContentPost$Plain } from '../fn/content/api-content-post-plain';
import { ApiContentPost$Plain$Params } from '../fn/content/api-content-post-plain';
import { apiContentPut$Json } from '../fn/content/api-content-put-json';
import { ApiContentPut$Json$Params } from '../fn/content/api-content-put-json';
import { apiContentPut$Plain } from '../fn/content/api-content-put-plain';
import { ApiContentPut$Plain$Params } from '../fn/content/api-content-put-plain';
import { apiContentUserIdDelete$Json } from '../fn/content/api-content-user-id-delete-json';
import { ApiContentUserIdDelete$Json$Params } from '../fn/content/api-content-user-id-delete-json';
import { apiContentUserIdDelete$Plain } from '../fn/content/api-content-user-id-delete-plain';
import { ApiContentUserIdDelete$Plain$Params } from '../fn/content/api-content-user-id-delete-plain';
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

  /** Path part for operation `apiContentPost()` */
  static readonly ApiContentPostPath = '/api/Content';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentPost$Plain$Response(params?: ApiContentPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
    return apiContentPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContentPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentPost$Plain(params?: ApiContentPost$Plain$Params, context?: HttpContext): Observable<Content> {
    return this.apiContentPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Content>): Content => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentPost$Json$Response(params?: ApiContentPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Content>> {
    return apiContentPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContentPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiContentPost$Json(params?: ApiContentPost$Json$Params, context?: HttpContext): Observable<Content> {
    return this.apiContentPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Content>): Content => r.body)
    );
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

  /** Path part for operation `apiContentUserIdDelete()` */
  static readonly ApiContentUserIdDeletePath = '/api/Content/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentUserIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentUserIdDelete$Plain$Response(params: ApiContentUserIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiContentUserIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContentUserIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentUserIdDelete$Plain(params: ApiContentUserIdDelete$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiContentUserIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiContentUserIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentUserIdDelete$Json$Response(params: ApiContentUserIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiContentUserIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiContentUserIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiContentUserIdDelete$Json(params: ApiContentUserIdDelete$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiContentUserIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
