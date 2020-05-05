<template>
    <div class="container">
        <div>
            <h1 class="title">
                i4Sketch
            </h1>
            <h2 class="subtitle">
                Experimental layout design web application.
            </h2>
            <div class="links">
                <a href="https://github.com/Marco3jp/i4Sketch"
                   target="_blank"
                   class="button button--green">
                    GitHub
                </a>

                <a href="https://github.com/Marco3jp/i4Sketch/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"
                   target="_blank"
                   class="button button--orange">
                    Issues
                </a>

                <nuxt-link to="/editor" class="button button--grey">
                    Go to Sketchbook!
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        components: {}
    })
</script>

<style lang="scss" scoped>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
        display: flex;
        justify-content: center;
    }

    .button {
        display: block;
        border-radius: 4px;
        text-decoration: none;
        padding: 10px 30px;

        &:not(:first-of-type) {
            margin-left: 20px;
        }
    }

    .button--green {
        border: 1px solid #3b8070;
        color: #3b8070;
    }

    .button--green:hover {
        color: #fff;
        background-color: #3b8070;
    }

    .button--orange {
        border: 1px solid #FF6F00;
        color: #FF6F00;
    }

    .button--orange:hover {
        color: #fff;
        background-color: #FF6F00;
    }

    .button--grey {
        border: 1px solid #35495e;
        color: #35495e;
    }

    .button--grey:hover {
        color: #fff;
        background-color: #35495e;
    }
</style>
