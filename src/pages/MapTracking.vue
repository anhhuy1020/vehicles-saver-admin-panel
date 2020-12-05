<template>
<gmap-map id="map" :center="center" :zoom="13" :options="options" map-type-id="terrain">
    <gmap-marker v-for="(m, index) in markers" :key="index" :ref="`marker${index}`" :position="m.position" :clickable="true" :draggable="true" :icon="markerOptions">
    </gmap-marker>
</gmap-map>
</template>

<script>
import {
    API_KEY
} from './Maps/API_KEY'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: API_KEY
    },
})
export default {
    data() {
        return {
            center: {
                lat: 40.748817,
                lng: -73.985428
            },
            options: {
                styles: [{
                    'featureType': 'water',
                    'stylers': [{
                        'saturation': 43
                    }, {
                        'lightness': -11
                    }, {
                        'hue': '#0088ff'
                    }]
                }, {
                    'featureType': 'road',
                    'elementType': 'geometry.fill',
                    'stylers': [{
                        'hue': '#ff0000'
                    }, {
                        'saturation': -100
                    }, {
                        'lightness': 99
                    }]
                }, {
                    'featureType': 'road',
                    'elementType': 'geometry.stroke',
                    'stylers': [{
                        'color': '#808080'
                    }, {
                        'lightness': 54
                    }]
                }, {
                    'featureType': 'landscape.man_made',
                    'elementType': 'geometry.fill',
                    'stylers': [{
                        'color': '#ece2d9'
                    }]
                }, {
                    'featureType': 'poi.park',
                    'elementType': 'geometry.fill',
                    'stylers': [{
                        'color': '#ccdca1'
                    }]
                }, {
                    'featureType': 'road',
                    'elementType': 'labels.text.fill',
                    'stylers': [{
                        'color': '#767676'
                    }]
                }, {
                    'featureType': 'road',
                    'elementType': 'labels.text.stroke',
                    'stylers': [{
                        'color': '#ffffff'
                    }]
                }, {
                    'featureType': 'poi',
                    'stylers': [{
                        'visibility': 'off'
                    }]
                }, {
                    'featureType': 'landscape.natural',
                    'elementType': 'geometry.fill',
                    'stylers': [{
                        'visibility': 'on'
                    }, {
                        'color': '#b8cb93'
                    }]
                }, {
                    'featureType': 'poi.park',
                    'stylers': [{
                        'visibility': 'on'
                    }]
                }, {
                    'featureType': 'poi.sports_complex',
                    'stylers': [{
                        'visibility': 'on'
                    }]
                }, {
                    'featureType': 'poi.medical',
                    'stylers': [{
                        'visibility': 'on'
                    }]
                }, {
                    'featureType': 'poi.business',
                    'stylers': [{
                        'visibility': 'simplified'
                    }]
                }]
            },
            markers: [],
            places: [],
            currentPlace: null,
            markerOptions: {
                url: "https://images.unsplash.com/photo-1513635254-7f7a60909628?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=300",
                scaledSize: {
                    width: 30,
                    height: 30,
                    f: 'px',
                    b: 'px',
                },
                fillColor:'red',
                fillOpacity:1.0
            },
        }
    },
    mounted() {
        this.geolocate();
    },
    methods: {
        // nhận địa điểm thông qua autocomplete component
        setPlace(place) {
            this.currentPlace = place;
        },
        addMarker() {
            if (this.currentPlace) {
                const marker = {
                    lat: this.currentPlace.geometry.location.lat(),
                    lng: this.currentPlace.geometry.location.lng()
                };
                this.markers.push({
                    position: marker
                });
                this.places.push(this.currentPlace);
                this.center = marker;
                this.currentPlace = null;
            }
        },
        geolocate: function () {
            navigator.geolocation.getCurrentPosition(position => {
                this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.markers.push({
                    position: this.center
                });
            });
        }
    }
}
</script>

<style>
#map {
    min-height: calc(100vh - 123px);
}
</style>
