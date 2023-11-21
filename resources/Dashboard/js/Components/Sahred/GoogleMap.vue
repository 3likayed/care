<script setup>
import {computed, reactive, ref, watch} from "vue";

let props = defineProps({
  center: Object,
  modelValue: Object,
})

let location = computed(() => {
  return {
    lat: props.modelValue.lat,
    lng: props.modelValue.lng
  }
});

const emit = defineEmits(["update:modelValue"]);
let mapCenter = reactive({lat: props.center.lat, lng: props.center.lng});

function setPlace(newLocation, changeCenter, changePlace) {
  let lat = newLocation.lat();
  let lng = newLocation.lng();
  if (changeCenter === true) {
    mapCenter.lat = lat
    mapCenter.lng = lng
  }
  if (changePlace) {
    emit('update:modelValue', {lat: lat, lng: lng})
  }
}

const myMapRef = ref(null);
const controlUI = document.createElement("button");
controlUI.title = "Click to zoom the map";
const controlText = document.createElement("div");
controlText.innerHTML = `Center`;
controlUI.appendChild(controlText);

function addMyButton(map) {

  var controlDiv = document.createElement('div');

  var firstChild = document.createElement('div');

  firstChild.style.cursor = 'pointer';
  firstChild.style.marginRight = '10px';
  firstChild.style.padding = '0px';
  firstChild.title = 'Your Location';
  firstChild.className = "w-[40px] h-[40px] bg-white flex justify-center items-center shadow-2xl  cursor-pointer margin-x-[10px] "
  controlDiv.appendChild(firstChild);

  var secondChild = document.createElement('div');
  secondChild.style.margin = '5px';
  secondChild.style.width = '18px';
  secondChild.style.height = '18px';
  secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
  secondChild.style.backgroundSize = '180px 18px';
  secondChild.style.backgroundPosition = '0px 0px';
  secondChild.style.backgroundRepeat = 'no-repeat';
  secondChild.id = 'you_location_img';
  firstChild.appendChild(secondChild);
  firstChild.addEventListener('click', function () {
    navigator.geolocation.getCurrentPosition((position) => {
      setPlace({lat: () => position.coords.latitude, lng: () => position.coords.longitude}, true);
      map.setZoom(16)
    });
  });
  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}

watch(myMapRef, googleMap => {
  if (googleMap) {
    googleMap.$mapPromise.then(map => {
      addMyButton(map);
    })
  }
});


</script>

<template>
  <div>
    <GMapAutocomplete
        class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full mb-2 dark:placeholder-gray-400 bg-white dark:bg-slate-800"
        @place_changed="(place)=>setPlace(place.geometry.location,true,true)"
    />
    <GMapMap

        ref="myMapRef"
        :center="mapCenter"
        :disableDefaultUI="true"
        :options="{

                      zoomControl: true,
                      mapTypeControl: true,
                      scaleControl: true,
                      streetViewControl: true,
                      rotateControl: true,
                      fullscreenControl: true
              }"
        :zoom="16"
        class="h-[420px] md:h-[600px]"
        @click="(place)=>setPlace(place.latLng,false,true)"
    >
      <GMapMarker
          :position="{lat: location.lat, lng: location.lng}"/>
    </GMapMap>
  </div>

</template>

<style scoped>

</style>