<template>
<div id="vue-root">
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card>
                        <b-table thead-class="b-table-thead" thead-tr-class="b-table-thead-tr" :items="customers" :fields="fields" responsive="sm" class="table table-hover table-primary table-light table-sm">
                            <template v-slot:cell(_)="data">
                                <button @click="viewSupport(data.item._id, data.item.userId)" class="btn btn-info">
                                    View
                                </button>
                            </template>

                            <template v-slot:cell(status)="data">
                                <b-badge :variant="renderStatus(data.item.status).variant"> {{renderStatus(data.item.status).text }}</b-badge>
                            </template>

                            <template v-slot:cell(dateUpdate)="data">
                                {{new Date(data.item.dateUpdate || data.item.dateStart).toDateString()}}
                            </template>

                            <template v-slot:cell(dateStart)="data">
                                {{new Date(data.item.dateStart || data.item.dateStart).toDateString()}}
                            </template>

                            <template v-slot:cell(type)="data">
                                {{listTypeLabel[data.item.type + 1]}}
                            </template>

                            <template v-slot:cell(isRead)="data">
                                {{data.item.isRead? "YES" : "NO"}}
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

export default {
    data() {
        return {
            fields: [{
                    key: 'userId',
                    sortable: true,
                    label: "UID"
                },
                {
                    key: 'phone',
                    sortable: true,
                    label: "Phone"
                },
                {
                    key: 'address',
                    sortable: true,
                    label: "Address"
                },
                {
                    key: 'currentDemand',
                    sortable: true,
                    label: "Current Demand"
                },
            ]
                    }
    },
    methods:{
      ...mapActions('customers', ['getAll']),
    },
    computed: {
      ...mapState('customers',['customers'])
      },
    created() {
      this.getAll();
           console.log("customers: ", this.customers);
 }
}
</script>

<style>
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
