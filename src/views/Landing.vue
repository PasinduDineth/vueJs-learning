<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4"></div>
            <AppHeader/>                               
            <div class="card shadow border-0 ml-4 mr-4">
                <div class="row m-2">
                        <div class="col-2 SideMenu" style="backgroundColor:#fff">
                                <div class="m-2">
                                    <h5 class="mb-0"> <i class="fa fa-tachometer mr-2"></i> DASHBOARD </h5>
                                </div>
                                <div class="m-2">
                                     <h5 class="mb-0"> <i class="fa fa-check-circle mr-2"></i> BOOKINGS </h5>
                                </div>
                                <div class="m-2">
                                    <h5 class="mb-0"> <i class="fa fa-key mr-2"></i> Rooms </h5>
                                </div>
                        </div>
                    <div class="col-10" style="backgroundColor:#f4f5f7">
                        <div class="display:flex">
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                            <h5 class="mb-0"> <i class="fa fa-twitter"></i> DASHBOARD </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import BTooltip from "bootstrap-vue/es/directives/tooltip/tooltip";
import BPopover from "bootstrap-vue/es/directives/popover/popover";
import AppHeader from "../layout/AppHeader";
export default {
  directives: {
    BTooltip,
    BPopover
    
  },components: {
   AppHeader
    }
};
</script>
<style>
.SideMenu{
    display: flex;
    align-items: left;
    flex-direction: column
}
</style>


