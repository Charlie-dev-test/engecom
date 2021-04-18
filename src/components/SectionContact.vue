<template>
    <section class="section-contact">
        <div class="contact">
            <div class="contact-info">
                <div class="info-wrap">
                    <h2>ООО &laquo;ИНЖЕНЕРНАЯ КОМПЛЕКТАЦИЯ&ndash;КОМПЛЕКСНЫЕ РЕШЕНИЯ</h2>
                    <div class="props">
                        <p>199034, САНКТ-ПЕТЕРБУРГ,&shy;
                            13 ЛИНИЯ В.О., Д. 6-8, ЛИТ. А,&shy;
                            ПОМ. 46Н, КОМ. 6</p>
                        <p><a class="contact-tel" href="tel:+78125653315">+7&nbsp;812&nbsp;565&nbsp;33&nbsp;15</a></p>
                        <p>
                            <a class="contact-props" href="#">СКАЧАТЬ РЕКВИЗИТЫ</a>
                        </p>
                    </div>

                </div>

            </div>
            <div class="contact-map">
                <yandex-map
                        :coords="[59.934961, 30.277016]"
                        zoom="16"
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