import axios from 'axios';
import { UsuarioDTO } from '../Interfaces/UsuarioDto';

const apiClient = axios.create({
    baseURL: 'https://scholarspace-254954748843.southamerica-east1.run.app/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const CadastroUsuario = (usuarioDto: UsuarioDTO) => {
    return apiClient.post('/User', usuarioDto);
};
