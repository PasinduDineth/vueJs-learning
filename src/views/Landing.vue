<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4"></div>
            <AppHeader/>                               
            <div class="card shadow border-0 ml-4 mr-4">
                <div class="row m-2">
                        <div class="col-2" style="backgroundColor:#fff">
                            <ul class="navbar-nav ml-lg-auto">
                                <li class="nav-item">
                                 <router-link :to="{name : 'dashboard'}"><a class="nav-link"><i class="fa fa-tachometer mr-2"></i>Dashboard
                                        <span class="sr-only">(current)</span>
                                    </a></router-link>
                                </li>
                                <li class="nav-item">
                                  <router-link :to="{name : 'rooms'}"><a class="nav-link"><i class="fa fa-key mr-2"></i>Room</a></router-link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" id="navbar-primary_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-check-circle mr-2"></i>Bookings</a>
                                </li>
                            </ul>
                        </div>
                    <div class="col-10" style="backgroundColor:white">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
</template>
<script>
import BTooltip from "bootstrap-vue/es/directives/tooltip/tooltip";
import BPopover from "bootstrap-vue/es/directives/popover/popover";
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import AppHeader from "../layout/AppHeader";
export default {
  directives: {
    BTooltip,
    BPopover,
     BaseNav,
    CloseButton,
    BaseDropdown
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


