import { observable } from 'rxjs/symbol/observable';
import { env } from '../config/config';
import { Injectable } from '@angular/core';
import {
    ConnectionBackend,
    Headers,
    Http,
    Request,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    XHRBackend,
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class InterceptedHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        url = this.updateUrl(url);
        return super.get(url, this.getRequestOptionArgs(options))
            .catch(this.onCatch)
            .map((res: Response) => {
                this.onSuccess(res);
                const xx: any = [
                    { 'Hello': 'world' }
                ];
                res = xx;
            },
            (error: any) => {
                this.onError(error);
            });
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    private updateUrl(req: string) {
        return env.Url + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        return options;
    }


    private onSuccess(res: Response) {
        console.log(res);
    }

    private onError(error: any) {
        console.log(error);
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }
}

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new InterceptedHttp(xhrBackend, requestOptions);
}
export const _HttpMiddleware = {
    provide: Http,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
}
