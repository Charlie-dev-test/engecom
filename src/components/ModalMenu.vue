<template>
    <div
            class="modal-menu hidden"
            ref="modalHead"
    >
        <div class="modal-menu__body">
            <div class="top-line"></div>
            <div class="menu">
                <ul class="modal-list">
                    <li><a href="#"><span>О&nbsp;КОМПАНИИ</span><span class="menu-arrow">&rarr;</span></a></li>
                    <li><a href="#"><span>УСЛУГИ</span><span class="menu-arrow">&rarr;</span></a></li>
                    <li><a href="#"><span>ОБРАТНАЯ&nbsp;СВЯЗЬ</span><span class="menu-arrow">&rarr;</span></a></li>
                    <li><a href="#"><span>КОНТАКТЫ</span><span class="menu-arrow">&rarr;</span></a></li>
                </ul>
            </div>
        </div>
        <div class="modal-menu__line">
            <a href="#" @click.prevent="close"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalMenu",
        data() {
            return {
                width: 0
            }
        },
        methods: {
            displayByWidth() {
                this.width = document.documentElement.clientWidth;
                if(this.width>768){
                    if(!this.$refs.modalHead.classList.contains('hidden')){
                        this.$refs.modalHead.classList.add('hidden')
                    }
                }
            },
            open() {
                if(this.$refs.modalHead.classList.contains('slideOutLeft')){
                    this.$refs.modalHead.classList.remove('slideOutLeft');
                }
                this.$refs.modalHead.classList.add('slideInLeft');
                if(this.$refs.modalHead.classList.contains('hidden')){
                    this.$refs.modalHead.classList.remove('hidden')
                }
            },
            close() {
                if(this.$refs.modalHead.classList.contains('slideInLeft')) {
                    this.$refs.modalHead.classList.remove('slideInLeft')
                }
                this.$refs.modalHead.classList.add('slideOutLeft');
            }
        },
        created() {
            window.addEventListener("resize", this.displayByWidth);
        },
        destroyed() {
            window.removeEventListener("resize", this.displayByWidth);
        }
    }
</script>

<style scoped>

</style>