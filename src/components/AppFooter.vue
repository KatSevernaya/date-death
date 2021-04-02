<template>
    <footer 
        class="footer" 
        @click="show = !show" 
        
    >
        <p :class="{
            'hidePart' : !show,
            'showAll' : show
        }" >TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI, </p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
methods: {
    
}
}
</script>

<style lang="scss" scope>
    .footer {
        display: block;
        overflow: hidden;
        
        p {
            margin-right: auto;
            margin-left: auto;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            width: 488px;
            text-align: center;
            letter-spacing: 3px;
            text-transform: uppercase;
            text-align:center;
            color: #9D9D9D;
        }
       

    }
     .hidePart {
            transform: translateY(60%);
        }
    .showAll{
            transform: translateY(0);
    }

   
    @media only screen and (max-width : 768px) {
        .footer {
            
             p {
            font-size: 7px !important;
            line-height: 9px !important;
            width: 294px;

        }
        }
        
    }
   
</style>