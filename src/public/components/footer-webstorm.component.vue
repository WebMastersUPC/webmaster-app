<script>
export default {
  name:"footer-webmaster"
}
</script>

<template>
  <pv-toolbar class="bg-black-alpha-90 md:w-full mt-5">
    <template #start>
      <div class="flex align-items-center gap-2" style="max-width: 400px;">
        <img src="https://imgur.com/8o8Veec.jpg" alt="">
        <h4 class="text-white text-nowrap">
          {{$t('footer-part1')}}
        </h4>
      </div>
    </template>
    <template #center>
      <div class="flex flex-column align-items-center justify-content-center gap-2">
        <h1 class="text-white text-center">{{$t('footer-part2')}}</h1>
        <router-link to="/support">
          <pv-button class="bg-white text-black-alpha-90 text-4xl">{{$t('footer-part3')}}</pv-button>
        </router-link>
      </div>
    </template>
    <template #end>
      <div class="flex flex-column align-items-center justify-content-center gap-2">
        <div class="text-white text-2xl">{{$t('footer-part4')}}</div>
        <div class="flex align-items-center gap-2">
          <pv-button label="" text plain class="border-circle w-4rem h-4rem m-2 background-icon">
            <i class="pi pi-twitter " style="font-size: 1.8rem"></i>
          </pv-button>
          <pv-button label="" text plain class="border-circle w-4rem h-4rem m-2 background-icon">
            <i class="pi pi-instagram" style="font-size: 1.8rem"></i>
          </pv-button>
          <pv-button label="" text plain class="border-circle w-4rem h-4rem m-2 background-icon">
            <i class="pi pi-facebook" style="font-size: 1.8rem"></i>
          </pv-button>
        </div>
      </div>
    </template>
  </pv-toolbar>
</template>

<style>
.background-icon{
  background-color: #D9D9D9
}
</style>