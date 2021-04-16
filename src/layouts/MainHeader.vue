<template>
    <header>
        <div class="header-wrap">
            <div class="header-logo">
                <a href="#">
                    <img :src=" require('../assets/img/logo.png') " alt="">
                </a>
            </div>
            <ul class="header-nav">
                <li><a href="#">О&nbsp;КОМПАНИИ</a></li>
                <li><a class="active" href="#">УСЛУГИ</a></li>
                <li><a href="#">ОБРАТНАЯ&nbsp;СВЯЗЬ</a></li>
                <li><a href="#">КОНТАКТЫ</a></li>
            </ul>
            <div class="tablet-nav">
                <div class="tablet-nav__phone">
                    <a href="tel:+78125653315">+7&nbsp;812&nbsp;565&nbsp;33&nbsp;15</a>
                    <p>с 10:00 до 19:00</p>
                </div>
                <div class="tablet-nav__address">
                    <a href="#">Санкт-Петербург</a>
                    <p>13 линия В.О., д. 6-8</p>
                </div>
                <div class="tablet-nav__burger">
                    <a href="#" @click.prevent="openModal">
                        <img :src=" require('../assets/img/meat.svg') " alt="">
                    </a>
                </div>
            </div>
            <div class="mobile-nav">
                <a href="tel:+78125653315">
                    <img :src=" require('../assets/img/phone-call-white.svg') " alt="">
                </a>
                <a href="#" @click.prevent="openModal">
                    <img :src=" require('../assets/img/meat.svg') " alt="">
                </a>
            </div>
        </div>
        <ModalMenu ref="mainModal"></ModalMenu>
    </header>
</template>

<script>
    import ModalMenu from "../components/ModalMenu";
    export default {
        name: "MainHeader",
        components:{
            ModalMenu
        },
        data() {
            return {
                modalOpened: false,
                width: 0
            }
        },
        methods: {
            openModal() {
                this.$refs.mainModal.open();
            }
        }
    }
</script>

<style scoped>

</style>