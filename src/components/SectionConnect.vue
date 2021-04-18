<template>
    <section class="section-connect">
        <div class="sliced-connect">
            <div class="sliced-connect__bg">
                <div class="yellow"></div>
            </div>
            <div class="sliced-connect__form">
                <div class="form-wrap">
                    <h2>СВЯЖИТЕСЬ С НАМИ</h2>
                    <p>и мы ответим на ваши вопросы</p>
                    <Form/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Form from './Form'
    export default {
        name: "SectionConnect",
        components: {
            Form
        }
    }
</script>

<style scoped>

</style>