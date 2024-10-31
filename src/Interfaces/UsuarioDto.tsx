import {Perfil} from './Perfil'
import {Address} from './Address'

export interface UsuarioDTO {
    name: string;
    email: string;
    senha: string;
    foto?: string;
    tipoPerfil: Perfil;
    lstAddresses: Address[];
    unidade: string;
  }