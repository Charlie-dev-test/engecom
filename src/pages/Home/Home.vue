<template>
    <BaseLayout>
        <template v-slot:header>
            <MainHeader/>
        </template>
        <template v-slot:content>
            <SectionTop/>
            <SectionAbout/>
            <SectionServices/>
        </template>
        <template v-slot:footer>
            <MainFooter/>
        </template>
    </BaseLayout>
</template>

<script>
    import BaseLayout from "../../layouts/BaseLayout";
    import MainHeader from "../../layouts/MainHeader";
    import MainFooter from "../../layouts/MainFooter";
    import SectionTop from "../../components/SectionTop";
    import SectionAbout from "../../components/SectionAbout";
    import SectionServices from "../../components/SectionServices";
    export default {
        name: "Home",
        components: {
            BaseLayout,
            MainHeader,
            MainFooter,
            SectionTop,
            SectionAbout,
            SectionServices
        }
    }
</script>

<style scoped>

</style>