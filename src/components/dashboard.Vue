<template>
  <div class="hello">
     <div>
            <h1>Hi {{account.user.firstName}}!</h1>
            <h3>Users from secure api end point:</h3>
            <em v-if="users.loading">Loading users...</em>
            <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
            <ul v-if="users.items">
                <li v-for="user in users.items" :key="user.id">
                    {{user.firstName + ' ' + user.lastName}}
                    <span v-if="user.deleting"><em> - Deleting...</em></span>
                    <span v-else-if="user.deleteError" class="text-danger"> - ERROR: {{user.deleteError}}</span>
                    <span v-else> - <a @click="deleteUser(user.id)" class="text-danger">Delete</a></span>
                </li>
            </ul>
            <p>
                <router-link to="/login">Logout</router-link>
            </p>
        </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
input {
  width: 350px;
}
.dashboard-title {
  margin-bottom: 80px;
  margin-top: 140px;
}
.row {
  margin-bottom: 15px;
}

.dashboard-btn {
  width: 353px;
}
</style>
