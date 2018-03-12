<template>
  <div class="animated fadeIn">
        <b-card sm="12">
          <div slot="header">
            <strong v-if="!usuario.id">Tela para cadastro de Usuário</strong>
            <small v-if="!usuario.id">TUC01</small>

            <strong v-else>Tela para alteração de Usuário</strong>
            <small v-else>TUU01</small>
          </div>
          <div id="main" class="container-fluid">

            <form @submit.prevent="grava()">

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="nome">Nome</label>
                  <input data-vv-as="Nome" type="text" v-validate
                         v-validate.initial="nome" data-vv-rules="required|nome" autocomplete="off"
                         class="form-control" name="nome" id="nome" placeholder="Nome completo" v-model="usuario.nome">
                  <span class="erro" v-show="errors.has('nome')">
          {{ errors.first('nome') }}
          </span>
                </div>
                <div class="form-group col-md-6">
                  <label for="email">Email</label>
                  <input data-vv-as="Email" type="email" v-validate
                         v-validate.initial="email" data-vv-rules="required|email" autocomplete="off"
                         class="form-control"
                         name="email" id="email" placeholder="mail@mail.com">
                  <span class="erro" v-show="errors.has('email')">
          {{ errors.first('email') }}
          </span>
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="telefone">Telefone</label>
                  <input type="tel" class="form-control" name="telefone" id="telefone" placeholder="67 99999 9999">
                </div>
                <div class="form-group col-md-6">
                  <label for="data">Data Nascimento</label>
                  <input data-vv-as="Data Nascimento" type="date" v-validate
                         v-validate.initial="data" data-vv-rules="required|data" class="form-control" name="data"
                         id="data"
                         placeholder="dd/mm/aaaa">
                  <span class="erro" v-show="errors.has('data')">
                  {{ errors.first('data') }}
                  </span>
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <b-form-group for="usuario" label="Usuário">
                  <b-form-input data-vv-as="Usuário" type="text" class="form-control form-control-warning"  v-validate
                         v-validate.initial="usuario" data-vv-rules="required|usuario" autocomplete="off"
                         name="usuario" id="usuario" placeholder="Digite um nome de usuário"></b-form-input>
                  <span class="erro" v-show="errors.has('usuario')">
                  {{ errors.first('usuario') }}
                  </span>
                  </b-form-group>
                </div>

                <div class="form-group col-md-6">
                  <label for="situacao">Situação</label><br>
                  <c-switch type="text" id="situacao" name="situacao" variant="success-outline-alt" on="Ati" off="Ina" :checked="true"/>
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="senha">Senha</label>
                  <input data-vv-as="Senha" type="password" v-validate
                         v-validate.initial="senha" data-vv-rules="required|senha|min:6|max:30" autocomplete="off"
                         class="form-control" name="senha" id="senha" placeholder="Coloque uma senha" v-validate>
                  <span class="erro" v-show="errors.has('senha')">
          {{ errors.first('senha') }}
          </span>
                </div>
                <div class="form-group col-md-6">
                  <label for="confSenha">Conf. Senha</label>
                  <input data-vv-as="Conf. Senha" type="password" v-validate
                         v-validate.initial="confSenha" data-vv-rules="required|confSenha|min:6|max:30"
                         autocomplete="off"
                         class="form-control" name="confSenha" id="confSenha" placeholder="Confirme sua senha"
                         v-validate>
                  <span class="erro" v-show="errors.has('confSenha')">
          {{ errors.first('confSenha') }}
          </span>
                </div>

              </div>


              <div class="row">
                <div class="col-md-1">
                  <button type="submit" class="btn btn-primary">Criar</button>
                </div>
              </div>

            </form>
          </div>
        </b-card>
  </div>

</template>

<script>

  import Usuario from '../domain/usuario/Usuario';
  import UsuarioService from '../domain/usuario/UsuarioService';
  import cSwitch from '../components/Switch'

  export default {

    components: {
      cSwitch
    },

    data() {
      return {

        usuario: new Usuario(),
        id: this.$route.params.id
      }
    },

    methods: {

      grava() {
        this.$validator
          .validateAll()
          .then(success => {
          if(success) {
            this.service
              .cadastra(this.usuario)
              .then(() => {
              if(this.id
          )
            this.$router.push({name: 'home'});
            this.usuario = new Usuario()
          },
            err => console.log(err)
          )
            ;
          }
        }
      )
        ;

      }
    },

    created() {

      this.service = new UsuarioService(this.$resource);

      if (this.id) {
        this.service
          .busca(this.id)
          .then(usuario => this.usuario = usuario
      )
        ;
      }
    }
  }
</script>

<style scoped>

  .erro {
    color: red;
  }

</style>
