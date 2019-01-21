<template>
<div>
  <div class="row mt-3 ml-1">
    <div class="col-md-3 mb-2 mb-md-0">
      <div class="card card-lift--hover shadow border-0" style="backgroundColor:#5e72e4">
        <div class="p-3">
          <div class="row pl-3 pr-3 cardAlignment">
            <h5 style="color:white">BOOKINGS</h5>
            <i class="fa fa-plane fa-2x" style="color:white"></i>
          </div>
          <h2 style="color:white">9120</h2>
          <hr class="m-0" style="backgroundColor:white">
          <p style="color:white" class="mb-0 mt-2">23% INCREASE</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-2 mb-md-0">
      <div class="card card-lift--hover shadow border-0" style="backgroundColor:#f5365c">
        <div class="p-3">
          <div class="row pl-3 pr-3 cardAlignment">
            <h5 style="color:white">CANCELLED</h5>
            <i class="fa fa-ban fa-2x" style="color:white"></i>
          </div>
          <h2 style="color:white">1022</h2>
          <hr class="m-0" style="backgroundColor:white">
          <p style="color:white" class="mb-0 mt-2">1.2% INCREASE</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-2 mb-md-0">
      <div class="card card-lift--hover shadow border-0" style="backgroundColor:#2dce89">
        <div class="p-3">
          <div class="row pl-3 pr-3 cardAlignment">
            <h5 style="color:white">COMPLEATED</h5>
            <i class="fa fa-check fa-2x" style="color:white"></i>
          </div>
          <h2 style="color:white">11211</h2>
          <hr class="m-0" style="backgroundColor:white">
          <p style="color:white" class="mb-0 mt-2">67% INCREASE</p>
        </div>
      </div>
    </div>
    <div class="col-md-3 mb-2 mb-md-0">
      <div class="card card-lift--hover shadow border-0" style="backgroundColor:#11cdef">
        <div class="p-3">
          <div class="row pl-3 pr-3 cardAlignment">
            <h5 style="color:white">PENDING</h5>
            <i class="fa fa-question fa-2x" style="color:white"></i>
          </div>
          <h2 style="color:white">0451</h2>
          <hr class="m-0" style="backgroundColor:white">
          <p style="color:white" class="mb-0 mt-2">1.2% INCREASE</p>
        </div>
      </div>
    </div>
  </div>
 <hr/>
 <div>
       <!-- <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <base-input placeholder="Name"
                                addon-left-icon="ni ni-zoom-split-in">
                    </base-input>
                </div>
                <div class="col-lg-4 col-sm-6" >
                    <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
                        <b-dropdown-item>First Action</b-dropdown-item>
                        <b-dropdown-item>Second Action</b-dropdown-item>
                        <b-dropdown-item>Third Action</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>Something else here...</b-dropdown-item>
                        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                    </b-dropdown>
                </div>
            </div> -->
            <div>
    <b-form inline>
      <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                    <b-dropdown id="ddown1" text="Select a Room" class="m-md-2">
                        <b-dropdown-item>Room 121</b-dropdown-item>
                        <b-dropdown-item>Room 122</b-dropdown-item>
                        <b-dropdown-item>Room 123</b-dropdown-item>
                    </b-dropdown>
      </b-input-group>
      <b-button variant="primary">FIND</b-button>
      
    </b-form>
  </div>
 </div>
</div>

</template>
<style>
.cardAlignment {
  justify-content: space-between;
}
</style>
