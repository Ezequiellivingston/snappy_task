<template>
  <div>
    <b-button class="button_modal" size="is-small" @click="isComponentModalActive = true">
      <b-icon icon="delete" class="btn"></b-icon>
    </b-button>
    <b-modal v-model="isComponentModalActive" :width="340" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div>
            <p>¿Estas seguro que quieres Eliminar {{teamName}}?</p>
          </div>
          <div class="has-text-right">
            <b-button class="mt-5" type="is-success is-light" @click="isComponentModalActive = false">Cancelar</b-button>
            <b-button class="mt-5" type="is-danger" @click="removeTeam()">Eliminar</b-button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import service from '@/services' // importo para editar eliminar y llamar datos.

export default {

  props: {
    teamName: {
      type: String,
      required: true
    },
    indexteam:{
      type: Number,
      required: true
    }
  },

  data() {
    return {
      isComponentModalActive: false,
      isTouch: false,
    }
  },

  computed: {
    
  },

  mounted() {
  },

  methods: {
    //createTeam elimina apartir de js service y emite evento
    removeTeam() {
      service.removeTeam(this.indexteam)
      this.isComponentModalActive = false
      this.$emit('refresh')
      this.$buefy.toast.open({
                    duration: 3000,
                    message: `Eliminaste ${this.teamName} con éxito`,
                    position: 'is-top',
                    type: 'is-danger'
                })
    }
  }
}
</script>

<style scoped>
.button_modal {
  display: hide;
  border: none;
}
</style>
