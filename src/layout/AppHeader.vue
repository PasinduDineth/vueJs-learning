<template>

    <header class="header-global">
        <base-nav class="navbar-main" type="" effect="light" expand>
            <a slot="brand" class="navbar-brand mr-lg-5" href="https://demos.creative-tim.com/vue-argon-design-system/documentation">
                <img src="../assets/zeus.png">
            </a>
            <!-- logo section -->
            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <!-- <div class="col-6 collapse-brand">
                    <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
                        <img src="img/brand/blue.png">
                    </a>
                </div> -->
                <div class="col-12 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>
            <!-- menu items -->
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text ItemsColor ">Main Menu</span>
                    </a>
                    <div class="dropdown-menu-inner">
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                                <i class="ni ni-spaceship"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-primary mb-md-1">Front Office</h6>
                                <p class="description d-none d-md-inline-block mb-0">This section will have all the capabilities of managing the front office.</p>
                            </div>
                        </a>
                        <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
                           class="media d-flex align-items-center">
                            <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                                <i class="ni ni-ui-04"></i>
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Inventory</h5>
                                <p class="description d-none d-md-inline-block mb-0">Manage your hotel inventory using this section.</p>
                            </div>
                        </a>
                    </div>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text ItemsColor">Shortcuts</span>
                    </a>
                    <router-link to="/landing" class="dropdown-item">Check In</router-link>
                    <router-link to="/profile" class="dropdown-item">Check out</router-link>
                    <router-link to="/login" class="dropdown-item">Register a Custommer</router-link>
                    <router-link to="/register" class="dropdown-item">Reports</router-link>
                </base-dropdown>
            </ul>

            <!-- profile section -->
            
       
              <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                  <!-- date and time section -->
                <li class="nav-item">
                        <a class="nav-link nav-link-icon">
                                <!-- <i class="fa fa-calendar fa-1x"></i> -->
                                <span class="nav-link-inner--text ItemsColor"><b>{{now}}{{hours}}:{{minutes}}:{{seconds}} {{hourtime}}  {{ new Date() | moment("dddd, MMMM Do YYYY") }}</b></span>
                        </a>
                </li>
                  <!-- profile picture and dropdowns section -->
                <li class="nav-item">
                     <base-dropdown tag="li" class="nav-item">
                    <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                         <img v-lazy="'https://demos.creative-tim.com/vue-argon-design-system/img/theme/team-4-800x800.jpg'" alt="Rounded image" class="img-fluid rounded-circle shadow-lg"
                                style="width: 50px;">
                    </a>
                    <router-link to="/landing" class="dropdown-item"><b>Harsha Senarathne</b></router-link>
                    <router-link to="/profile" class="dropdown-item">Profile</router-link>
                    <router-link to="/login" class="dropdown-item">Settings</router-link>
                    <router-link to="/register" class="dropdown-item">Logout</router-link>
                     </base-dropdown>
                </li>
              </ul>
            
        </base-nav>
    </header>

</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import { getHourTime, getZeroPad } from './filters'
export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  },  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourtime: ''
    }
  },
  mounted () {
    this.$options.interval = setInterval(this.updateDateTime, 1000);
  },
  beforeDestroy () {
    clearInterval(this.$options.interval);
  },
  methods: {
    updateDateTime () {
      let now = new Date()
      this.hours = now.getHours()
      this.minutes = getZeroPad(now.getMinutes())
      this.seconds = getZeroPad(now.getSeconds())
      this.hourtime = getHourTime(this.hours)
      this.hours = this.hours % 12 || 12
    }
  }
};

</script>
<style>
.ItemsColor{
    color:white
}
</style>
