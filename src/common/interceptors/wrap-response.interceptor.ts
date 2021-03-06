import {CallHandler, ExecutionContext, HttpStatus, Injectable, NestInterceptor} from "@nestjs/common";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class WrapResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any>  {
    const statusCode = context.switchToHttp().getResponse().statusCode;
    return next.handle().pipe(map((data) => {
      return statusCode === HttpStatus.OK ?  { data } : data;
    }))
  }
}
