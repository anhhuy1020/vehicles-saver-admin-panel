<template>
<div class="wrapper">
    <side-bar>
        <mobile-menu slot="content"></mobile-menu>
        <sidebar-link to="/admin/overview">
            <i class="nc-icon nc-chart-pie-35"></i>
            <p>Dashboard</p>
        </sidebar-link>
        <sidebar-link to="/admin/user-manage">
            <i class="nc-icon nc-single-02"></i>
            <p>Users</p>
        </sidebar-link>
        <sidebar-link to="/admin/demand-manage">
            <i class="nc-icon nc-notes"></i>
            <p>Demands</p>
        </sidebar-link>
        <sidebar-link to="/admin/feedback-manage">
            <i class="nc-icon nc-badge"></i>
            <p>Feedbacks</p>
        </sidebar-link>
    </side-bar>
    <div class="main-panel">
        <top-navbar></top-navbar>

        <dashboard-content @click="toggleSidebar">

        </dashboard-content>

        <content-footer></content-footer>
    </div>
</div>
</template>

<style lang="scss">

</style>

<script>
import TopNavbar from './TopNavbar.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from './MobileMenu.vue'
export default {
    components: {
        TopNavbar,
        ContentFooter,
        DashboardContent,
        MobileMenu
    },
    methods: {
        toggleSidebar() {
            if (this.$sidebar.showSidebar) {
                this.$sidebar.displaySidebar(false)
            }
        }
    }
}
</script>
