<template>
    <div id="main">
        <slot name="header"></slot>
        <main>
            <slot name="content">
            </slot>
        </main>
        <slot name="footer"></slot>
    </div>
</template>

<script>
    export default {
        name: "BaseLayout"
    }
</script>

<style scoped>

</style>