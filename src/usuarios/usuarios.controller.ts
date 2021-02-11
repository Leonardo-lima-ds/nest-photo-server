import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {

   constructor(private usuarioService: UsuarioService) {}

      @Get(':nomeDeUsuario')
      public retornaPeloNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string): Usuario {
         const usuarioEncontrado = this.usuarioService.encontraUsuarioPeloNome(nomeDeUsuario);

         if (!usuarioEncontrado) {
            throw new NotFoundException({
               statusCode: HttpStatus.NOT_FOUND,
               message: 'Usuário não encontrado.',
            });
         }

         return usuarioEncontrado;
      }
   
     @Post()
     public criaNovoUsuario(@Body() usuario: Usuario): NestResponse {
        const novoUsuario =  this.usuarioService.criar(usuario);

        return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
               'location': `/users/${novoUsuario.nomeDeUsuario}`
            })
            .comBody(novoUsuario)
            .build();

        /*res.status(HttpStatus.CREATED)
            .location(`/users/${novoUsuario.nomeDeUsuario}`)
            .json(novoUsuario);*/

        // return novoUsuario;
     }
}