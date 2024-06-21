/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiUserPost$Json } from '../fn/user/api-user-post-json';
import { ApiUserPost$Json$Params } from '../fn/user/api-user-post-json';
import { apiUserPost$Plain } from '../fn/user/api-user-post-plain';
import { ApiUserPost$Plain$Params } from '../fn/user/api-user-post-plain';
import { apiUserPut$Json } from '../fn/user/api-user-put-json';
import { ApiUserPut$Json$Params } from '../fn/user/api-user-put-json';
import { apiUserPut$Plain } from '../fn/user/api-user-put-plain';
import { ApiUserPut$Plain$Params } from '../fn/user/api-user-put-plain';
import { apiUserUserIdDelete$Json } from '../fn/user/api-user-user-id-delete-json';
import { ApiUserUserIdDelete$Json$Params } from '../fn/user/api-user-user-id-delete-json';
import { apiUserUserIdDelete$Plain } from '../fn/user/api-user-user-id-delete-plain';
import { ApiUserUserIdDelete$Plain$Params } from '../fn/user/api-user-user-id-delete-plain';
import { apiUserUserIdGet$Json } from '../fn/user/api-user-user-id-get-json';
import { ApiUserUserIdGet$Json$Params } from '../fn/user/api-user-user-id-get-json';
import { apiUserUserIdGet$Plain } from '../fn/user/api-user-user-id-get-plain';
import { ApiUserUserIdGet$Plain$Params } from '../fn/user/api-user-user-id-get-plain';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUserPut()` */
  static readonly ApiUserPutPath = '/api/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPut$Plain$Response(params?: ApiUserPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPut$Plain(params?: ApiUserPut$Plain$Params, context?: HttpContext): Observable<User> {
    return this.apiUserPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPut$Json$Response(params?: ApiUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPut$Json(params?: ApiUserPut$Json$Params, context?: HttpContext): Observable<User> {
    return this.apiUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `apiUserPost()` */
  static readonly ApiUserPostPath = '/api/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Plain$Response(params?: ApiUserPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Plain(params?: ApiUserPost$Plain$Params, context?: HttpContext): Observable<User> {
    return this.apiUserPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Json$Response(params?: ApiUserPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPost$Json(params?: ApiUserPost$Json$Params, context?: HttpContext): Observable<User> {
    return this.apiUserPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `apiUserUserIdGet()` */
  static readonly ApiUserUserIdGetPath = '/api/User/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdGet$Plain$Response(params: ApiUserUserIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserUserIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUserIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdGet$Plain(params: ApiUserUserIdGet$Plain$Params, context?: HttpContext): Observable<User> {
    return this.apiUserUserIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdGet$Json$Response(params: ApiUserUserIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return apiUserUserIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUserIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdGet$Json(params: ApiUserUserIdGet$Json$Params, context?: HttpContext): Observable<User> {
    return this.apiUserUserIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `apiUserUserIdDelete()` */
  static readonly ApiUserUserIdDeletePath = '/api/User/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdDelete$Plain$Response(params: ApiUserUserIdDelete$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiUserUserIdDelete$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUserIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdDelete$Plain(params: ApiUserUserIdDelete$Plain$Params, context?: HttpContext): Observable<boolean> {
    return this.apiUserUserIdDelete$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdDelete$Json$Response(params: ApiUserUserIdDelete$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return apiUserUserIdDelete$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUserUserIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserIdDelete$Json(params: ApiUserUserIdDelete$Json$Params, context?: HttpContext): Observable<boolean> {
    return this.apiUserUserIdDelete$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

}
