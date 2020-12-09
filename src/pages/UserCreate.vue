<template>
<card>
    <div class="col-sm-6 offset-sm-3">
        <h4 slot="header" class="card-title">Create User</h4>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && validateName() != null}" />
                <div v-show="submitted && !validateName() !=null" class="invalid-feedback">{{validateName()}}</div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && validateEmail() != null}" />
                <div v-show="submitted && validateEmail() !=null" class="invalid-feedback">{{validateEmail()}}</div>
            </div>
            <div class="form-group">
                <label for="role">Role</label>
                <select v-model="role" class="form-control">
                    <option v-for="r in ROLES" v-bind:value="r.id">
                        {{ r.name }}
                    </option>
                </select>

            </div>
            <div class="form-group" v-if="!this.isAdmin()">
                <label for="phone">Phone</label>
                <input type="text" v-model="phone" name="phone" class="form-control" :class="{ 'is-invalid': submitted && validatePhone() != null}" />
                <div v-show="submitted && validatePhone() !=null" class="invalid-feedback">{{validatePhone()}}</div>
            </div>
            <div class="form-group" v-if="!this.isAdmin()">
                <label for="address">Address</label>
                <input type="text" v-model="address" name="address" class="form-control" :class="{ 'is-invalid': submitted && validateAddress() != null}" />
                <div v-show="submitted && validateAddress() !=null" class="invalid-feedback">{{validateAddress()}}</div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && validatePassword() != null}" />
                <div v-show="submitted && validatePassword() !=null" class="invalid-feedback">{{validatePassword()}}</div>
            </div>
            <div class="form-group">
                <label htmlFor="retypePassword">Retype Password</label>
                <input type="password" v-model="retypePassword" name="retypePassword" class="form-control" :class="{ 'is-invalid': submitted && validateRetypePassword() != null}" />
                <div v-show="submitted && validateRetypePassword() !=null" class="invalid-feedback">{{validateRetypePassword()}}</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Create</button>
            </div>

        </form>
    </div>
</card>
</template>

<script>
import Card from 'src/components/Cards/Card.vue'
import validator from 'src/helpers/validator.js'
import {
    mapState,
    mapActions
} from 'vuex'

export default {
    components: {
        Card
    },
    data() {
        return {
            submitted: false,
            name: '',
            email: '',
            password: '',
            address: '',
            phone: '',
            password: '',
            retypePassword: '',
            role: 0,
            ROLES: [{
                    id: 0,
                    name: "ADMIN"
                },
                {
                    id: 1,
                    name: "PARTNER"
                },
                {
                    id: 2,
                    name: "CUSTOMER"
                },
            ]
        }
    },
    methods: {
        handleSubmit(e) {
            this.submitted = true;
            if (this.validateAll()) {
                let user = {
                    "name": this.name,
                    "email": this.email,
                    "role": this.role,
                    "password": this.password
                };
                if (!this.isAdmin()) {
                    user["address"] = this.address;
                    user["phone"] = this.phone;
                }
                this.create(user);
            }
        },
        isAdmin() {
            return this.role == this.ROLES[0].id;
        },
        validateAll() {
            if (this.validateName() != null) {
                return false;
            }
            if (this.validateEmail() != null) {
                return false;
            }
            if (this.validatePassword() != null) {
                return false
            }
            if (this.validateRetypePassword() != null) {
                return false;
            }
            if (!this.isAdmin()) {
                if (this.validatePhone() != null) {
                    return false;
                }
                if (this.validateAddress() != null) {
                    return false;
                }
            }
            return true;
        },
        validateName() {
            return validator.validateName(this.name);
        },
        validateEmail() {
            return validator.validateEmail(this.email);
        },
        validatePassword() {
            return validator.validatePassword(this.password);
        },
        validatePhone() {
            return validator.validatePhone(this.phone);
        },
        validateRetypePassword() {
            if (this.password !== this.retypePassword) {
                return "Retype password is not match!"
            }
            return null;
        },
        validateAddress() {
            return validator.validateAddress(this.address);
        },
        ...mapActions('users', ['create'])
    }
}
</script>

<style>

</style>
