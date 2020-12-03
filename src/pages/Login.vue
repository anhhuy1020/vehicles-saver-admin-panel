<template>
<div>
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <h2>Login</h2>
                    <form @submit.prevent="handleSubmit">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
                            <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                            <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary" :disabled="status.loggingIn">Login</button>
                            <img v-show="status.loggingIn" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'

export default {
    data() {
        return {
            email: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    created() {
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit(e) {
            this.submitted = true;
            const {
                email,
                password
            } = this;
            if (email && password) {
                this.login({
                    email,
                    password
                })
            }
        }
    }
};
</script>
