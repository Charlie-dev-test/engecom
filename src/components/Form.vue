<template>
    <form class="engecom-form" action="#">
        <input class="form-control" type="text" placeholder="Имя">
        <input class="form-control" type="text" placeholder="Телефон">
        <input class="form-control" type="text" placeholder="E-mail">
        <textarea class="form-control" name="question" id="" placeholder="Задайте Ваш вопрос или добавьте комментарий"></textarea>
        <div class="agreement">
            <p>Отправляя форму обратной связи, вы <a href="">соглашаетесь</a> с условиями <a href="">обработки и использования персональных данных</a></p>
        </div>
        <button class="form-btn" type="submit">ОТПРАВИТЬ</button>
    </form>
</template>

<script>
    export default {
        name: "Form"
    }
</script>

<style scoped>

</style>