<template>
<div id="vue-root">
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card>
                            <button @click="navigateToUserCreatePage" class="btn btn-warning">
                                    CreateUser
                            </button>
                        <b-table striped hover thead-class="b-table-thead" thead-tr-class="b-table-thead-tr" :items="users.users" :fields="fields" responsive="sm" class="table table-hover table-primary table-light table-sm">
                            <template v-slot:cell(_)="data">
                                <button @click="viewDetail(data.item._id)" class="btn btn-info">
                                    View
                                </button>
                            </template>

                            <template v-slot:cell(role)="data">
                                <span :class="['user-role-' + data.item.role]">
                                    {{ROLE[data.item.role]}}
                                    </span>
                            </template>

                        </b-table>
                    </card>
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
import router from '../routes/router'

export default {
    data() {
        return {
            ROLE: {
                0: "ADMIN",
                1: "PARTNER",
                2: "CUSTOMER"
            },
            fields: [{
                    key: '_id',
                    sortable: true,
                    label: "UID"
                },
                {
                    key: 'email',
                    sortable: true,
                    label: "Email"
                },
                {
                    key: 'name',
                    sortable: true,
                    label: "Name"
                },
                {
                    key: 'role',
                    sortable: true,
                    label: "Role"
                },
                {key: '_', sortable: false, label: "Detail"},
            ]
        }
    },
    methods: {
        ...mapActions('users', ['getAll']),
        viewDetail(userId){
            router.push({ path: 'user-detail', query: { id: userId } })
        },
        navigateToUserCreatePage(){
            router.push({ path: 'user-create'})
        }
    },
    computed: {
        ...mapState('users', ['users'])
    },
    created() {
        this.getAll();
    }
}
</script>

<style>
.user-role-0 {
    color: crimson;
}
.user-role-1 {
    color: #D6C624 ;
}
.user-role-2     {
    color: #24D66A ;
}
.c-sliding-pagination__list li {
    display: inline-block !important;
    height: 40px;
    width: 40px;
    background: #51B767;
    margin-left: 5px;
    align-content: center;
    border: 3px solid white;
    border-radius: 10px;

}

.c-sliding-pagination__list-element a {
    color: white;
    margin-left: 2px;
    font: 1em sans-serif;
    width: 100%;
    height: 100%;
    display: inline-block !important;
    padding-top: 7px;
    font-size: 20px;
    text-align: center;
}

.b-table-thead:focus {
    border: #4CD964;
}

.b-table-thead {
    border: #4CD964;
}

.b-table-thead {
    border: #4CD964;

}

.b-table-thead {
    border: #4CD964;
}

.b-table-thead-tr:focus {
    border: #4CD964;
}

.b-table-thead-tr {
    border: #4CD964;
}

.b-table-thea-tr {
    border: #4CD964;

}

.b-table-thead-tr {
    border: #4CD964;
}

.c-sliding-pagination__list-element--active {
    background: darkgreen !important;
}
</style>
<style scoped>
