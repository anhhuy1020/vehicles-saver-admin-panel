<template>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-6">
                <card class="card-user">

                    <div class="row">
                        <div class="col-xl-3">
                            <img class="avatar border-gray" :src="demandDetail.customer.info.avatarUrl" />
                        </div>
                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-xl-9">
                                    <h3 class="title">Customer </h3>
                                    <h5 class="subTitle">{{ demandDetail.customer.user.name }}</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div slot="content">
                                        <p class="card-category">Email</p>
                                        <h5 class="card-title">{{ demandDetail.customer.user.email }}</h5>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div slot="content">
                                        <p class="card-category">Phone</p>
                                        <h5 class="card-title">{{ demandDetail.customer.info.phone }}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </card>
            </div>

            <div class="col-xl-6"  v-if="demandDetail.demand.partnerId!=''">
                <card class="card-user">
                    <div class="row">
                        <div class="col-xl-3">
                            <img class="avatar border-gray" :src="demandDetail.partner.info.avatarUrl" />
                        </div>
                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-xl-9">
                                    <h3 class="Title">Partner </h3>
                                    <h5 class="subTitle">{{ demandDetail.partner.user.name }}</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div slot="content">
                                        <p class="card-category">Email</p>
                                        <h5 class="card-title">{{ demandDetail.partner.user.email }}</h5>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div slot="content">
                                        <p class="card-category">Phone</p>
                                        <h5 class="card-title">{{ demandDetail.partner.info.phone }}</h5>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xl-6">
                                    <div slot="content">
                                        <p class="card-category">Rating</p>
                                        <h5 class="card-title">{{ demandDetail.partner.info.rating }}</h5>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div slot="content">
                                        <p class="card-category">nRating</p>
                                        <h5 class="card-title">{{ demandDetail.partner.info.nRating }}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </card>
            </div>
            <div class="col-xl-6"  v-if="demandDetail.demand.partnerId==''">
                <card class="card-user">
                    <div class="row">
                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-xl-9">
                                    <h3 class="Title">Partner </h3>
                                    <h5 class="card-title status SEARCHING_PARTNER">SEARCHING...</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </card>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-12">
                <card>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-xl-12">
                                    <h3 class="title">Demand </h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div slot="content">
                                                <p class="card-category">Id</p>
                                                <h5 class="card-title">{{ demandDetail.demand._id }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div slot="content">
                                                <p class="card-category">Status</p>
                                                <h5 :class="'card-title status ' + demandDetail.demand.demandStatus">{{ demandDetail.demand.demandStatus }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <br>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div slot="content">
                                                <p class="card-category">Vehicle type</p>
                                                <h5 class="card-title">{{ demandDetail.demand.vehicleType }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div slot="content">
                                                <p class="card-category">Address detail</p>
                                                <h5 class="card-title">{{ demandDetail.demand.addressDetail }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <br>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div slot="content">
                                                <p class="card-category">Problems</p>
                                                <h5 class="card-title">{{ demandDetail.demand.problemDescription }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <br>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div slot="content">
                                                <p class="card-category">Created date</p>
                                                <h5 class="card-title">{{ demandDetail.demand.createdDate }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <div slot="content">
                                                <p class="card-category">Completed date</p>
                                                <h5 class="card-title">{{ demandDetail.demand.completedDate }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" v-if="demandDetail.demand.billId != ''">
                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-xl-9">
                                    <div class="row">
                                        <div class="col-xl-9">
                                            <h3 class="title">Bill</h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <div slot="content">
                                                <p class="card-category">Items</p>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <div slot="content">
                                                <b-table thead-class="b-table-thead" thead-tr-class="b-table-thead-tr" :items="demandDetail.bill.items" :fields="billFields" responsive="sm" class="table table-hover table-primary table-light table-sm">
                                                    <template v-slot:cell(cost)="data">
                                                        <span>
                                                            {{data.item.cost + ' đ'}}
                                                        </span>
                                                    </template>
                                                </b-table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xl-5">
                                    <div slot="content">
                                        <p class="card-category">Fee</p>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div slot="content">
                                        <h5 class="card-title">{{ demandDetail.bill.fee + " đ"}}</h5>
                                    </div>
                                </div>

                                <div class="col-xl-5">
                                    <div slot="content">
                                        <p class="card-category">Total</p>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div slot="content">
                                        <h5 class="card-title">{{ calTotalCost(demandDetail.bill) + " đ"}}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" v-if="demandDetail.demand.feedbackId != ''">
                        <div class="col-xl-12">
                            <div class="row">
                                <div class="col-xl-9">
                                    <div class="row">
                                        <div class="col-xl-9">
                                            <h3 class="title">Feedback </h3>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-8">
                                            <div slot="content">
                                                <p class="card-category">Rating</p>
                                                <h5 class="card-title">{{ demandDetail.feedback.rating }}</h5>
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <div slot="content">
                                                <p class="card-category">Comment</p>
                                                <h5 class="card-title">{{ demandDetail.feedback.comment }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Card from "src/components/Cards/Card.vue";
import {
    mapState,
    mapActions
} from 'vuex'

export default {
    components: {
        Card,
    },
    data() {
        return {
            billFields: [{
                    key: "service",
                    sortable: true,
                    label: "Service",
                },
                {
                    key: "cost",
                    sortable: true,
                    label: "Cost",
                },
            ],
            feedbackFields: [{
                    key: "addressDetail",
                    sortable: true,
                    label: "Address detail",
                },
                {
                    key: "vehicleType",
                    sortable: true,
                    label: "Vehicle type",
                },
                {
                    key: "problemDescription",
                    sortable: true,
                    label: "Problems",
                },
                {
                    key: "demandStatus",
                    sortable: true,
                    label: "Status",
                },
                {
                    key: "createdDate",
                    sortable: true,
                    label: "Created date",
                },
                {
                    key: '_',
                    sortable: false,
                    label: "Detail"
                },
            ],
        };
    },
    created() {
        let id = this.$route.query.id;
        this.getDemandDetail({
            id: id
        });
    },
    computed: {
        ...mapState('demands', ['demandDetail'])
    },
    methods: {
        ...mapActions('demands', ['getDemandDetail']),
        calTotalCost(bill) {
            let total = 0;
            total += bill.fee;
            for (let i = 0; i < bill.items.length; i++) {
                total += bill.items[i].cost;
            }

            return total;
        }
    },
};
</script>

<style>
.card-title.status.SEARCHING_PARTNER {
    color: #D6C624;
}

.card-title.status.HANDLING {
    color: #2453d6;
}

.card-title.status.PAYING {
    color: #d69e24;
}

.card-title.status.CANCELED {
    color: crimson;
}

.card-title.status.COMPLETED {
    color: #24D66A;
}
</style>
