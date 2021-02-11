import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeUsuarioUnico } from "./is-nome-de-usuario-unico.validator";

export class Usuario {
    id: number;

    @Expose({
        name: 'userName'
    })
    @IsNotEmpty({
        message: 'Nome de usuário é obrigatório'
    })
    @IsString({
        message: 'Nome de usuário precisa ser uma string'
    })
    @IsNomeDeUsuarioUnico({
        message: 'Nome de usuário já cadastrado'
    })
    nomeDeUsuario: string;

    @IsNotEmpty({
        message: 'Campo email é obrigatório'
    })
    @IsEmail({}, {
        message: 'Email inválido'
    })
    email: string;

    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: 'Campo senha é obrigatório'
    })
    senha: string;

    @Expose({
        name: 'fullName'
    })
    @IsNotEmpty({
        message: 'Nome completo é obrigatório'
    })
    @IsString({
        message: 'Nome de usuário precisa ser uma string'
    })
    nomeCompleto: string;

    @Expose({
        name: 'joinDate'
    })
    dataDeEntrada: Date;
}