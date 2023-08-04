<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input class="form" type="email" v-model="email" placeholder="Email" required>
            <input class="form" type="password" v-model="password" placeholder="Password" required>
            <button class="login-button" type="submit">Login</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: 'example@example.com',
            password: '1234'
        };
    },
    methods: {
        async login() {
            try {
                // Make an HTTP POST request to the backend /login endpoint
                const response = await axios.post('/login', { email: this.email, password: this.password });

                // Store the token in local storage
                localStorage.setItem('token', response.data.token);

                // Redirect the user to the desired page (e.g., home page)
                this.$router.push('/home');
            } catch (error) {
                console.log(error);
                this.$router.push('/about');
            }
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
  