<template>
    <button @click="logout">Sign Out</button>
</template>
  
<script>
export default {
    methods: {
        logout() {
            // Remove the token from local storage
            localStorage.removeItem('token');

            // Redirect the user to the login page or desired page after sign-out
            this.$router.push('/login');
        }
    }
};
</script>
  
<style>
.form {
    color: black !important;
    margin-right: 5px;
}

.login-button {
    border: 2px solid black;
}

.login-button:hover {
    border: 2px solid white;
}
</style>
  