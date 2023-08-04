<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input type="email" v-model="email" placeholder="Email" required>
            <input type="password" v-model="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
  
<script>
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
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    const token = data.token;

                    // Save the token to local storage or Vuex store for future use
                    localStorage.setItem('token', token);

                    // Assuming the login request was successful, navigate to the home page
                    this.$router.push('/home');
                } else {
                    throw new Error('Invalid email or password');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>
  
<style>
/* Add your custom styles here */
</style>
  