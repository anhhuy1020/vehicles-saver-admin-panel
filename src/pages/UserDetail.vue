<template>
  <div class="content">
    <div class="container-fluid">
      <card class="card-user">
        <div class="row">
          <div class="col-xl-3 ">
            <img class="avatar border-gray" :src="getAvatarUrl()" />
          </div>
          <div class="col-xl-7">
            <div class="row">
              <div class="col-xl-9">
                <h4 class="title">{{ userDetail.user.name }}</h4>
                <p>{{ROLE[userDetail.user.role]}}</p>
              </div>
              <div class="col-xl-1 ">
                <br />
                <button @click="edit(data.item._id)" class="btn btn-info">
                  Edit
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-5">
                  <div slot="content">
                    <p class="card-category">Email</p>
                    <h5 class="card-title">{{ userDetail.user.email }}</h5>
                  </div>
              </div>
              <div class="col-xl-5">
                <div slot="content" v-if="userDetail.user.role != 0">
                  <p class="card-category">Phone</p>
                  <h5 class="card-title">{{ userDetail.info.phone }}</h5>
                </div>
              </div>
              <div class="col-xl-5">
                <div slot="content" v-if="userDetail.user.role == 1">
                  <p class="card-category">Rating</p>
                  <h5 class="card-title">{{ userDetail.info.rating }}</h5>
                </div>
              </div>
              <div class="col-xl-5">
                <div slot="nRating" v-if="userDetail.user.role == 1">
                  <p class="card-category">nRating</p>
                  <h5 class="card-title">{{ userDetail.info.nRating }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </card>
      <card>
        <div class="row" v-if="userDetail.user.role != 0">
          <div class="col-12">
            <card>
              <b-table
                thead-class="b-table-thead"
                thead-tr-class="b-table-thead-tr"
                 striped hover
                :items="userDetail.history"
                :fields="demandFields"
                responsive="sm"
                class="table table-hover table-primary table-light table-sm"
              >
                   <template v-slot:cell(demandStatus)="data">
                                <span :class="['demand-status-' + data.item.demandStatus]">
                                    {{data.item.demandStatus}}
                                    </span>
                    </template>
              </b-table>
            </card>
          </div>
        </div>
      </card>
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
      ROLE: {
        0: "ADMIN",
        1: "PARTNER",
        2: "CUSTOMER",
      },
      info: {
        name: "Hồ Quốc Huy",
        role: 0,
        email: "hoquochuy1998@gmail.com",
        phone: "0986421400",
        rating: 3.4,
        avatarUrl: "https://source.unsplash.com/300x300/?portrait",
        nRating: 100,
        demandsHistory: [],
      },
      demandFields: [
        {
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
        {key: '_', sortable: false, label: "Detail"},
      ],
    };
  },
  created() {
    let id = this.$route.query.id;
    this.getUserDetail({id:id});
    console.log("user = ", this.userDetail);
  },
    computed: {
        ...mapState('users', ['userDetail'])
    },
  methods:{
    ...mapActions('users', ['getUserDetail']),
      getAvatarUrl(){
          return this.info.role ==0?
          "img/faces/face-3.jpg"
          :this.info.avatarUrl
      }
  },
};
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
</style>
