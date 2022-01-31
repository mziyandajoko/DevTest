<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="10"
      style="width:100%;  height: 600px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.center"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
 
  </div>
</template>
 
<script>
// const pos = {lat: -33.876115, lng:18.5008116};
// const pos1 = {lat: -33.9685533, lng:18.5662383};
export default {
  name: "GoogleMap",
  data() {
    return {
      center: {lat: -33.876115,
    lng: 18.5008116},
      markers: [],
    };
  },
 
  mounted() {
    this.geolocate();

  },
 
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {
 
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
 
        this.markers= [
          {
    heading: 31,
    latitude: "-33.876115",
    longitude: "18.5008116"
  },
  {
    heading: 310,
    latitude: "-33.9685533",
    longitude: "18.5662383"
  },
  {
    heading: 0,
    latitude: -34.0461583,
    longitude: 18.7047383
  },
  {
    heading: 0,
    latitude: "-31.8994016",
    longitude: "26.8671716"
  },
  {
    heading: 299,
    latitude: -31.8942983,
    longitude: 26.878175
  },
  {
    heading: 43,
    latitude: -31.9998233,
    longitude: 27.5801216
  }
        ];
 
    }
  }
};
</script>