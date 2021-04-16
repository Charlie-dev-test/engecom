<template>
    <footer>
        <div class="footer-wrap">
            <div class="footer">
                <div class="logo">
                    <a href="#">
                        <img :src=" require('../assets/img/logo.png') " alt="">
                    </a>
                </div>
                <ul class="footer-nav">
                    <li><a href="#">О&nbsp;КОМПАНИИ</a></li>
                    <li><a href="#">УСЛУГИ</a></li>
                    <li><a href="#">ОБРАТНАЯ&nbsp;СВЯЗЬ</a></li>
                    <li><a href="#">КОНТАКТЫ</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <h5>ООО &laquo;ИНЖЕНЕРНАЯ КОМПЛЕКТАЦИЯ-<wbr>КОМПЛЕКСНЫЕ РЕШЕНИЯ&raquo;, 2021</h5>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style scoped>

</style>