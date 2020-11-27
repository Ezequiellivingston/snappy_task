<template>
  <div>
    <b-button type="is-primary" @click="isComponentModalActive = true"
      >Add team</b-button
    >
    <b-modal v-model="isComponentModalActive" :width="340" scroll="keep">
      <div class="card">
        <div class="card-content">
          <form @submit.prevent="createTeam()">
            <b-field
              label="Nombre"
              :type="feedback.type"
              :message="feedback.message"
            >
              <b-input
                v-model="form.nombre"
                type="text"
                @focus="isTouch = true"
              ></b-input>
            </b-field>

            <div class="has-text-right">
              <b-button
                class="mt-5"
                type="is-success is-light"
                @click="isComponentModalActive = false"
                >Cancelar</b-button
              >

              <b-button class="mt-5" type="is-primary" @click="createTeam()"
                >Guardar</b-button
              >
            </div>
          </form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import service from '@/services'

export default {
  data() {
    return {
      isComponentModalActive: false,
      isTouch: false,
      form: {
        nombre: '',
      },
    }
  },
  computed: {
    //feedback hace un focus a input y valida que no haya caracteres especiales y que no sea basio

    feedback() {
      let re = /^[A-Za-z][A-Za-z0-9]*$/
      let validations = re.exec(this.form.nombre)

      if (validations) {
        return {
          valid: true,
          type: '',
          message: '',
        }
      }

      return {
        valid: false,
        type: 'is-danger',
        message: 'Ingrese el nombre del team',
      }
    },
  },

  methods: {
    //createTeam agrega un nuevo team a tabla y verifica el feedback
    createTeam() {
      if (this.feedback.valid) {
        service.createTeam(this.form)
        this.isComponentModalActive = false
        this.$emit('refresh')

        this.$buefy.toast.open({
          duration: 3000,
          message: `Agregaste ${this.form.nombre} a Team con éxito`,
          type: 'is-success',
        })
        this.form.nombre = ''
      } else {
        this.$buefy.toast.open({
          duration: 3000,
          message: `Asegura no ingresar espacios, comas o caracteres especiales.`,
          position: 'is-top',
          type: 'is-danger',
        })
      }
    },
  },
}
</script>

<style></style>
