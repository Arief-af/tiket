<template>
  <div class="container wrapper">
    <div class="card shadow px-5">
      <div class="card-titile py-3">
        <div class="row justify-content-center">
          <div class="col-auto">
            <label>Tujuan : </label>
               <select v-model="tujuan" class="form-select" style="width: 100%">
                <option value='0' selected>Pilih tujuan</option>
                <option value="jakarta">Jakarta</option>
                <option value="banten">Banten</option>
                <option value="yogyakerta">Yogyakarta</option>
              </select>
          </div>
           <div class="col-auto mt-xs-3">
           <label>Jumlah penumpang : </label>
           <input type="number" v-model="penumpang" class="form-control" style="width: 100%;">
        </div>
        </div>
    
       
      </div>
      <hr style="width: 100%">
      <div class="card-body mb-4">
        <div class="text-center">Harga tiket/orang : {{harga}} </div>
        <div class="text-center">Total harga tiket : {{total}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      tujuan: '',
      jakarta: 200000,
      banten: 250000,
      yogyakerta: 300000,
      harga: 0,
      total: 0,
      penumpang: 0
    }
  },
 updated(){
   if (this.tujuan == 0) {
     this.harga = 0 
   }else if(this.tujuan == 'jakarta'){
     this.harga = this.jakarta
   }else if(this.tujuan == 'banten'){
     this.harga = this.banten
   }else if(this.tujuan == 'yogyakerta'){
     this.harga = this.yogyakerta
   }

   this.total = this.harga*this.penumpang
 }
}
</script>

<style>
 .wrapper{
    margin: 60px auto;
  }

  .form-control:focus {
     box-shadow: none !important;
     border-color: #42b983;
   }

   .form-select:focus{
     box-shadow: none !important;
     border-color: #42b983;
   }
</style>


