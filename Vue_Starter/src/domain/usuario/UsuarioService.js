export default class UsuarioService {

    constructor(resource) {

        this._resource = resource('v1/usuarios{/id}');
    }

    lista() {

        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Não foi possivel obter os usuários. Tente mais tarde');
            });
    }

    cadastra(usuario) {

        if (usuario._id) {
            return this._resource
                .update({id: usuario._id}, usuario);
        } else {
            return this._resource
                .save(usuario);
        }
    }

    apaga(id) {

        return this._resource
            .delete({id})
            .then(null, err => {
                console.log(err);
                throw new Error('Não foi possivel remover o usuário.');
            });
    }

    busca(id) {
        return this._resource
            .get({id})
            .then(res => res.json());
    }
}
