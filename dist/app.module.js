"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const filtro_de_excecao_filter_1 = require("./common/filter/filtro-de-excecao.filter");
const transforma_resposta_interceptor_1 = require("./core/http/transforma-resposta-interceptor");
const usuarios_module_1 = require("./usuarios/usuarios.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [usuarios_module_1.UsuarioModule],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: filtro_de_excecao_filter_1.FiltroDeExcecaoHTTP,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: common_1.ClassSerializerInterceptor
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transforma_resposta_interceptor_1.TransformaRespostaInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map