<script setup>
import { reactive, onMounted } from 'vue'
import { useManufactorStore } from '@/stores/manufactor'

const manufactorStore = useManufactorStore()
const newManufactor = reactive({
  name: '',
  country: ''
})

async function addManufactor() {
  await manufactorStore.createManufactor(newManufactor)
  newManufactor.name = ''
  newManufactor.country = ''
}

async function deleteManufactor(id) {
  await manufactorStore.deleteManufactor(id)
}

onMounted(async () => {
  await manufactorStore.getManufactorers()
})
</script>

<template>
  <div class="container">
    <div class="manufactor-add">
      <input type="text" v-model="newManufactor.name" placeholder="Nome" />
      <input type="text" v-model="newManufactor.country" placeholder="País" />
      <button @click="addManufactor">Adicionar</button>
    </div>

    <div class="manufactor-list">
      <div v-if="manufactorStore.manufactorers.length === 0">
        <p>Fabricantes não encontrados!!!</p>
      </div>
      <table class="manufactor-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="manufactor in manufactorStore.manufactorers" :key="manufactor.id">
            <td>{{ manufactor.id }}</td>
            <td>{{ manufactor.name }}</td>
            <td>{{ manufactor.country }}</td>
            <td>
              <span class="mdi mdi-delete delete" @click="() => deleteManufactor(manufactor.id)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.manufactor-list {
  width: 30vw;
  border-collapse: collapse;

  & th {
    font-weight: bold;
  }

  & tr:nth-child(odd) {
    background-color: beige;
  }
}

.delete:hover {
  cursor: pointer;
}
</style>
