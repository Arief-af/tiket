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
            <label>Jumlah penumpang dewasa : </label>
            <input type="number" v-model="penumpangD" class="form-control" style="width: 100%;">
          </div>

          <div class="col-auto">
            <label>Jumlah penumpang anak : </label>
            <input type="number" v-model="penumpangA" class="form-control" style="width: 100%;">
          </div>
        </div>
    
       
      </div>
      <hr style="width: 100%">
      <div class="card-body mb-4">
        <div class="text-center">Harga tiket dewasa/orang : {{hargaD}} </div>
        <div class="text-center">Harga tiket anak /orang : {{hargaA}} </div>
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
      jakartaA: 100000,
      bantenA: 125000,
      yogyakertaA: 150000,
      harga: 0,
      total: 0,
      penumpangD: 0,
      penumpangA: 0,
      hargaD: 0,
      hargaA: 0
    }
  },
 updated(){
   if (this.tujuan == 0 && this.penumpangD == 0) {
     this.hargaD = 0 
   }else if(this.tujuan == 'jakarta' && this.penumpangD > 0){
     this.hargaD = this.jakarta
   }else if(this.tujuan == 'banten' && this.penumpangD > 0){
     this.hargaD = this.banten
   }else if(this.tujuan == 'yogyakerta' && this.penumpangD > 0){
     this.hargaD = this.yogyakerta
   }

   if (this.tujuan == 0 && this.penumpangA == 0) {
     this.hargaA = 0 
   }if(this.tujuan == 'jakarta' && this.penumpangA > 0){
     this.hargaA = this.jakartaA
   }else if(this.tujuan == 'banten' && this.penumpangA > 0){
     this.hargaA = this.bantenA
   }else if(this.tujuan == 'yogyakerta' && this.penumpangA > 0){
     this.hargaA = this.yogyakertaA
   }
 
   this.total = this.hargaD*this.penumpangD + this.hargaA*this.penumpangA
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


