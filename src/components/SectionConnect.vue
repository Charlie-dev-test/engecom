<template>
    <section class="section-connect">
        <div class="sliced-connect">
            <div class="sliced-connect__bg"></div>
            <div class="sliced-connect__form">
                <div class="form-wrap">
                    <h2>СВЯЖИТЕСЬ С НАМИ</h2>
                    <p>и мы ответим на ваши вопросы</p>
                    <form action="#">
                        <input class="form-control" type="text" placeholder="Имя">
                        <input class="form-control" type="text" placeholder="Телефон">
                        <input class="form-control" type="text" placeholder="E-mail">
                        <textarea class="form-control" name="question" id="" placeholder="Задайте Ваш вопрос или добавьте комментарий"></textarea>
                        <div class="agreement">
                            <p>Отправляя форму обратной связи, вы <a href="">соглашаетесь</a> с условиями <a href="">обработки и использования персональных данных</a></p>
                        </div>
                        <button class="form-btn" type="submit">ОТПРАВИТЬ</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SectionConnect"
    }
</script>

<style scoped>

</style>