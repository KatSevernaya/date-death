<template>
<div class="last-page">
    <div class="last-page__wrap">
        <div class="last-page__message">
            <p>Спасибо за Ваши ответы!<br>
                <span>Мы подготовили для Вас <br>персональную аудио запись с<br> Вашим прогнозом.</span>
            </p>
        </div>
        <p>Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем.</p>
        <div class="last-page__notification">
            <p><span>Первое значимое событие может произойти уже {{ date }},</span> Вам надо быть готовым, что бы последствия не оказались необратимыми.</p>

        </div>
        <p>Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!</p>
        <button class="btn"
        @click="$emit('send-data')"
        >Позвонить и прослушать</button>
        <div class="last-page__getdata" v-if="dataFromSwapi">
           Имя:  {{ dataFromSwapi.name }} <br>
           Рост: {{ dataFromSwapi.height}} см.<br>
           Вес: {{ dataFromSwapi.mass}} кг.<br>
           Цвет Волос: {{ dataFromSwapi.hair_color}} <br>
           Цвет кожи: {{ dataFromSwapi.skin_color}} <br>
           Цвет глаз: {{ dataFromSwapi.eye_color}} <br>
           Год рождения: {{ dataFromSwapi.birth_year}} <br>
           Пол: {{ dataFromSwapi.gender }} <br>
        </div>
    </div>
 <app-footer class="app-footer"></app-footer> 
</div>



</template>

<script>
import AppFooter from './AppFooter'
export default {
    components: { AppFooter },
    emits: [ 'send-data' ],
    props: [ 'dataFromSwapi' ],
    data() {
        return {
            
            date: new Date(Date.now() + 1000*60*60*24).toLocaleDateString()
        }
    }
}
</script>

<style lang="scss" scope>
 .last-page {
        overflow: hidden;
        min-height: 100vh;
        position: relative;
    }
 .app-footer {
     position: absolute;
     bottom: 0;
     left: 50%;
     transform: translateX(-50%);
 }  
.last-page__wrap{
    margin-right: auto;
    margin-left: auto;
    max-width: 480px;
   // padding-bottom: 120px;
    
    //padding-bottom: 100px;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
        line-height: 35px;
        font-weight: 300;
        text-align: center;
       
    
    
    }
    .last-page__getdata {
        margin: 20px;
        text-align: center;
        color: #ffffff; 
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        line-height: 16px;
        font-weight: 300;
       

    }
   
}
.last-page__message {
    background: #ffffff;
    border-radius: 5px;
    position: relative;
    &::after {
        content: ''; 
        position: absolute; 
        right: 20px; bottom: -20px; 
        border: 10px solid transparent; 
        border-top: 10px solid #ffffff; 
        }
    p{
        color: #202024;
        font-weight: 400;
        margin: 11px 17px 30px 17px;
        span {
            font-weight: 700;
            
        }
    }
    
}
.last-page__notification{
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 3px;
        p {
            margin: 64px 50px 38px;
            color: #F6C866;
            
            span {
                text-transform: uppercase;
                font-weight: bold;
            }
        }
    }


@media only screen and (max-width : 768px) {
    .last-page {
        padding: 20px 10px 0 10px;
        p {
            font-size: 14px;
            line-height: 16px;
        }
        .btn {
            font-size: 14px;
            width: 240px;
            height: 48px;
            margin-bottom: 40px;
        }
    }
    .last-page__notification {
        p {
            font-size: 16px;
            line-height: 25px;
            margin: 13px 15px 8px;
        }
    }
    .last-page__message {
        p {
            margin: 6px 14px 6px 13px;
        }
    }
}

    
</style>