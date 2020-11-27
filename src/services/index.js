import teams from '@/api/teams.json'
import store from '@/api/store.json'

export default {
  getStore() {
    return store // retorno store de api/store.json
  },
  getTeams() {
    return teams // retorno store de api/teams.json
  },

 // creo un nuevo objeto en el team 
  createTeam({ nombre }) {
    const team = { nombre, users: [] }
    teams.push(team)
    return team
  },

  // edito el teams utilizando los parametros index para indentificarlo
  updateTeam(index, { nombre, stores, users }) {
    const team = { nombre, stores, users }
    teams.splice(index, 1, team)
    return team
  },
//elimino el objeto con el inice de parametro
  removeTeam(index) {
    teams.splice(index, 1)
  }
}
