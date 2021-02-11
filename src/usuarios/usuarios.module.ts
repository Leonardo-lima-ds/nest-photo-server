import { Module } from "@nestjs/common";
import { IsNomeDeUsuarioUnicoConstraint } from "./is-nome-de-usuario-unico.validator";
import { UsuarioService } from "./usuario.service";
import { UsuarioController } from "./usuarios.controller";

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [
        UsuarioService,
        IsNomeDeUsuarioUnicoConstraint,
    ],
})
export class UsuarioModule {}