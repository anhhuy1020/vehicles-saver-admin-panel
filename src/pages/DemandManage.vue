<template>
<div id="vue-root">
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <card>
                        <b-table striped hover thead-class="b-table-thead" thead-tr-class="b-table-thead-tr" :items="demands" :fields="fields" responsive="sm" class="table table-hover table-primary table-light table-sm">
                            <template v-slot:cell(_)="data">
                                <button @click="viewDetail(data.item._id)" class="btn btn-info">
                                    View
                                </button>
                            </template>

                            <template v-slot:cell(demandStatus)="data">
                                <span :class="['demand-status-' + data.item.demandStatus]">
                                    {{data.item.demandStatus}}
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
import router from '../routes/router'

import {
    mapState,
    mapActions
} from 'vuex'

export default {
    data() {
        return {
            fields: [{
                    key: '_id',
                    sortable: true,
                    label: "Id"
                },
                {
                    key: 'vehicleType',
                    sortable: true,
                    label: "Vehicle type"
                },
                {
                    key: 'problemDescription',
                    sortable: true,
                    label: "Problems"
                },
                {
                    key: 'demandStatus',
                    sortable: true,
                    label: "Status"
                },
                {
                    key: 'createdDate',
                    sortable: true,
                    label: "Created date"
                },
                {
                    key: '_',
                    sortable: false,
                    label: "Detail"
                },
            ]
        }
    },
    methods: {
        ...mapActions('demands', ['getAll']),
        viewDetail(demandId) {
            router.push({
                path: 'demand-detail',
                query: {
                    id: demandId
                }
            })
        },
    },
    computed: {
        ...mapState('demands', ['demands'])
    },
    created() {
        this.getAll();
        console.log("demands === ", this.demands)
    }
}
</script>

<style>
.demand-status-SEARCHING_PARTNER {
    color: #D6C624;
}

.demand-status-HANDLING {
    color: #2453d6;
}

.demand-status-PAYING {
    color: #d69e24;
}

.demand-status-CANCELED {
    color: crimson;
}

.demand-status-COMPLETED {
    color: #24D66A;
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
