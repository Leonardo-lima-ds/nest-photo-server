import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
export declare class FiltroDeExcecaoHTTP implements ExceptionFilter {
    private httpAdapter;
    constructor(adapterHost: HttpAdapterHost);
    catch(exception: Error, host: ArgumentsHost): void;
}
