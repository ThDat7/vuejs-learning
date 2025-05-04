<script setup lang="ts">
import { onMounted, ref } from 'vue'

const name = ref('John Doe')
const status = ref('pending')
const tasks = ref(['Task One', 'Task Two', 'Task Three'])
const newTask = ref('')

const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}

const addTask = () => {
  tasks.value.push(newTask.value)
  newTask.value = ''
}

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1)
}

onMounted(async () => {
  interface Todo {
    title: string
  }

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((task: Todo) => task.title)
  } catch (error) {
    console.log(error)
  }
})
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'pending'">User is pending</p>
  <p v-else-if="status === 'active'">User is active</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>
        <button @click="deleteTask(index)">x</button>
        {{ task }}
      </span>
    </li>
  </ul>
  <br />
  <!-- <button v-on:click="toggleStatus">Change status</button> -->
  <button @click="toggleStatus">Change status</button>
</template>
