<template>
    <section class="section-contact">
        <div class="contact">
            <div class="contact-info">
                <h2>ООО «Инженерная комплектация-
                    комплексные решения»</h2>

            </div>
            <div class="contact-map">
                <yandex-map
                        :coords="[59.934961, 30.277016]"
                        zoom="15"
                        style="width: 100%; height: 440px;"
                        :cluster-options="{
    1: {clusterDisableClickZoom: true}
  }"
                        :controls="['typeSelector', 'zoomControl']"
                        map-type="map"
                        :scroll-zoom = false
                >
                    <ymap-marker
                            marker-id="3"
                            marker-type="placemark"
                            :coords="[59.934961, 30.277016]"
                            hint-content="Hint content 1"
                            :balloonTemplate = "balloonTemplate"
                    ></ymap-marker>
                </yandex-map>
            </div>
        </div>
    </section>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    export default {
        data() {
            return {
                placemarks: [
                    {
                        coords: [54.8, 39.8],
                        properties: {},
                        options: {},
                        clusterName: "1",
                    }
                ]
            }
        },
        components: {
            yandexMap,
            ymapMarker
        },
        computed: {
            balloonTemplate() {
                return `
      <p style="font-size: .8rem;
      border-radius: 10px;
        font-weight: 600;
        text-align: center;">ООО &laquo;ИНЖЕНЕРНАЯ КОМПЛЕКТАЦИЯ-<br>КОМПЛЕКСНЫЕ РЕШЕНИЯ&raquo;</p>
    `
            }
        },
    }
</script>

<style scoped>

</style>