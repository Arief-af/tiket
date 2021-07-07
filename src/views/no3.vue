<template>
  <div class="container wrapper">
    <div class="card shadow px-5">
      <div class="card-titile py-3">
        <div class="row justify-content-center">
        <div v-show="alert" class="alert bg-warning text-white text-center py-2 rounded mb-2">selamat anda mendapatkan discount 10%</div>
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
        <div class="text-center">Sub total : {{total}} </div>
        <div class="text-center">Discount : {{discount}} </div>
        <div class="text-center">Total harga tiket : {{afterDis}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

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
      hargaA: 0,
      afterDis: 0,
      discount: 0,
      alert: false
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
   }if(this.tujuan == 'jakarta' && this.penumpangA >0){
     this.hargaA = this.jakartaA
   }else if(this.tujuan == 'banten' && this.penumpangA > 0){
     this.hargaA = this.bantenA
   }else if(this.tujuan == 'yogyakerta' && this.penumpangA > 0){
     this.hargaA = this.yogyakertaA
   }
 
   this.total = this.hargaD*this.penumpangD + this.hargaA*this.penumpangA

   this.afterDis = this.total
   if (this.total >= 500000) {
       let discount = this.total/100*10
       this.afterDis = this.total-discount
       this.discount = this.total - this.afterDis
       this.alert = true
   }else{
       this.discount = 0
   }
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


