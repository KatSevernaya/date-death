<template>
<div class="container">
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

    <p>Loading</p>
</div>
    
</template>

<script>
export default {

}
</script>

<style scope lang="scss">
 .container {
        height: 100vh;
        margin: 0 auto;
        max-width: 1000px;
        display: block;

    .lds-spinner{
        display: block;
        margin: 120px auto 60px;
    }
    p {
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
                letter-spacing: 0.1em;
                color: rgba(255, 255, 255, 0.6);
           }
 }
</style>