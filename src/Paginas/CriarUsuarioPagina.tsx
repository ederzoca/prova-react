import { useForm, useFieldArray } from 'react-hook-form';
import { UsuarioDTO } from '../Interfaces/UsuarioDto';
import { CadastroUsuario as cadastrarUsuario } from '../Serviços/CadastroUsuario';
import '../Paginas/CriarUsuarioPagina.css';

const CadastroUsuarioForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<UsuarioDTO>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'lstAddresses',
    });

    const onSubmit = async (data: UsuarioDTO) => {
        try {
            const createdUser = await cadastrarUsuario(data);
            console.log('Create user:', createdUser);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nome</label>
                <input id="name" {...register('name', { required: 'Nome é obrigatório' })} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" {...register('email', { required: 'E-mail é obrigatório' })} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="senha">Senha</label>
                <input id="senha" type="password" {...register('senha', { required: 'Senha é obrigatória' })} />
                {errors.senha && <p>{errors.senha.message}</p>}
            </div>

            <div>
                <label htmlFor="tipo">Tipo de Perfil</label>
                <input id="tipo" {...register('tipoPerfil.tipo', { required: 'Tipo de perfil é obrigatório' })} />
                {errors.tipoPerfil?.tipo && <p>{errors.tipoPerfil.tipo.message}</p>}
            </div>

            <div>
                <label htmlFor="nivelAcesso">Nível de Acesso</label>
                <input id="nivelAcesso" {...register('tipoPerfil.nivelAcesso', { required: 'Nível de acesso é obrigatório' })} />
                {errors.tipoPerfil?.nivelAcesso && <p>{errors.tipoPerfil.nivelAcesso.message}</p>}
            </div>

            <h3>Endereços</h3>
            {fields.map((field, index) => (
                <div key={field.id}>
                    <div>
                        <label htmlFor={`lstAddresses.${index}.street`}>Rua</label>
                        <input
                            id={`lstAddresses.${index}.street`}
                            {...register(`lstAddresses.${index}.street`, { required: 'Rua é obrigatória' })}
                        />
                        {errors.lstAddresses?.[index]?.street && <p>{errors.lstAddresses[index]?.street?.message}</p>}
                    </div>

                    <button type="button" onClick={() => remove(index)}>
                        Remover Endereço
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={() =>
                    append({
                        street: '',
                        number: '',
                        complement: '',
                        district: '',
                        neighborhood: '',
                        city: '',
                        state: '',
                        country: '',
                        zipCode: '',
                    })
                }
            >
                Adicionar Endereço
            </button>

            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default CadastroUsuarioForm;
