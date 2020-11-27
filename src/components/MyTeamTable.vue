<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column is-8">
        <GraphMetrics />
      </div>
      <div class="column">
        <div class="is-flex is-justify-content-flex-end">
          <MyTeamCreateForm @refresh="getTeams" />
        </div>
      </div>
    </div>
    <b-table
      :data="teams"
      :show-detail-icon="showDetailIcon"
      detailed
      detail-key="nombre"
    >
      <b-table-column field="nombre" label="Teams" width="100%" v-slot="props">
        <span>{{ props.row.nombre }}</span>
      </b-table-column>

      <b-table-column field="stores" label="Stores" v-slot="props">
        <span class="tag is-info">{{ props.row.stores }}</span>
      </b-table-column>

      <b-table-column field="_" label v-slot="props" width="200px">
        <div class="btn_conten">
          <MyTeamEditForm
            :team="props.row"
            :indexteam="props.index"
            @refresh="getTeams"
          />

          <MyTeamRemoveForm
            :teamName="props.row.nombre"
            :indexteam="props.index"
            @refresh="getTeams"
          />
        </div>
      </b-table-column>

      <template slot="detail" slot-scope="props">
        <div class="columns">
          <div
            class="column is-2"
            v-for="item in props.row.users"
            :key="item.nombre"
          >
            <div class="card">
              <div
                class="card-content is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
              >
                <figure class="image has-background-info has-text-white">
                  <span>T</span>
                </figure>

                <span class="mt-2">{{ item.nombre }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import service from '@/services'
import MyTeamCreateForm from '@/components/MyTeamCreateForm'
import MyTeamEditForm from '@/components/MyTeamEditForm'
import MyTeamRemoveForm from '@/components/MyTeamRemoveForm'
import GraphMetrics from '@/components/GraphMetrics'

export default {
  components: {
    MyTeamCreateForm,
    MyTeamEditForm,
    MyTeamRemoveForm,
    GraphMetrics,
  },

  data() {
    return {
      showDetailIcon: true,
      teams: [],
    }
  },

  mounted() {
    this.getTeams()
  },

  methods: {
    getTeams() {
      this.teams = service.getTeams()
    },
  },
}
</script>

<style scoped>
.btn_conten {
  display: flex;
}
.subcard {
  width: 120px;
}
.image {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
