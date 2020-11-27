<template>
  <section>
    <button class="button is-primary" @click="isComponentModalActive = true">
      Metricas store
    </button>

    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <template>
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Graficos store</p>
            <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
          </header>

          <section class="modal-card-body">
            <div class="is-flex">
              <GraphProductsMetric />
              <GraphClientMetric />
            </div>
          </section>

          <footer class="modal-card-foot is-flex is-justify-content-flex-end">
            <button
              class="button"
              type="button"
              @click="isComponentModalActive = false"
            >
              Cerrar
            </button>
          </footer>
        </div>
      </template>
    </b-modal>
  </section>
</template>

<script>
import GraphProductsMetric from '@/components/GraphProductsMetric'
import GraphClientMetric from '@/components/GraphClientMetric'

export default {
  components: {
    GraphProductsMetric,
    GraphClientMetric,
  },
  data: () => ({
    isComponentModalActive: false,
  }),
}
</script>

<style scoped>
.modal-card-body {
  overflow-x: hidden;
}
</style>
