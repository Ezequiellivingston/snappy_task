<template>
  <div>
    <b-button
      class="button_modal"
      size="is-small"
      @click="isComponentModalActive = true"
    >
      <b-icon icon="pencil" class="btn"></b-icon>
    </b-button>
    <b-modal v-model="isComponentModalActive" :width="340" scroll="keep">
      <div class="card">
        <div class="card-content">
          <form @submit.prevent="updateTeam()">
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

              <b-button class="mt-5" type="is-primary" @click="updateTeam()"
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
import service from '@/services' // importo para editar eliminar y llamar datos.

export default {
  props: {
    team: {
      type: Object,
      required: true,
    },
    indexteam: {
      type: Number,
      required: true,
    },
  },

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

  mounted() {
    // desestructuración del objeto y para crear un nuevo objeto para que no cambie la props inicial
    this.form = { ...this.team }
  },

  methods: {
    // updateTeam edito a partir de la funcion updateTeam de la importacion de serviocio y emito un evento
    updateTeam() {
      if (this.feedback.valid) {
        service.updateTeam(this.indexteam, this.form)
        this.isComponentModalActive = false
        this.$emit('refresh')
        this.$buefy.toast.open({
          duration: 3000,
          message: 'Team editado con éxito!',
          type: 'is-success',
        })
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

<style scoped>
.button_modal {
  display: hide;
  border: none;
}
</style>
