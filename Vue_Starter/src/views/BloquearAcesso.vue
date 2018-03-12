<template>
  <div class="animated fadeIn">
    <b-card sm="12">
      <div slot="header">
        <strong>Tela para bloquear Usuário</strong>
        <small>TBU01</small>
      </div>
      <div id="main" class="container-fluid">

        <form>

          <div class="row">
            <div class="form-group col-md-6">
              <label>Usuário Situação</label>
              <c-switch type="text" variant="success-outline-alt" on="Ati" off="Ina" :checked="true"/>
            </div>
          </div>

        </form>
      </div>
    </b-card>
  </div>
</template>

<script>
  import cSwitch from '../components/Switch'

  export default {
    name: "bloquear-acesso-uce",
    components: {
      cSwitch
    }
  }
</script>

<style scoped>

</style>
