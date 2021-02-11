import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FiltroDeExcecaoHTTP } from './common/filter/filtro-de-excecao.filter';
import { TransformaRespostaInterceptor } from './core/http/transforma-resposta-interceptor';
import { UsuarioModule } from './usuarios/usuarios.module';

@Module({
  imports: [ UsuarioModule ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: FiltroDeExcecaoHTTP,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformaRespostaInterceptor,
    },
],
})
export class AppModule {}
