<template>
    
    <div class="conteiner">
       
        <div class="quiz-blank">
            <div class="quize-blank__text-block">
                 <p class="quiz-blank__script-text" style="white-space: pre-line;">{{ questions[index].text }}</p>
                    <transition name="fade" v-if="index===4">
                    <div class="quiz-blank__message" v-if="show">
                        <p 
                            style="white-space: pre-line;" 
                            v-if="(2021-this.questions[2].birthDate[2])<=36">{{ questions[index].text1 }}</p>
                        <p 
                            style="white-space: pre-line;" 
                            v-if="36<(2021-this.questions[2].birthDate[2]) && (2021-this.questions[2].birthDate[2])<45">{{ questions[index].text2 }}</p>
                            
                        <p 
                            style="white-space: pre-line;" 
                            v-if="(2021-this.questions[2].birthDate[2])>=45">{{ questions[index].text3 }}</p>
                    </div>
                 
                    </transition>
                 <div class="quiz__img-eye1">
                    <img src="./../img/eye.svg" alt="">
                 </div>
                 <div class="quiz__img-eye2">
                    <img src="./../img/eye-1.svg" alt="">
                 </div>
            </div>
            
             <h1 class="primary">{{ questions[index].question }}</h1>
        
        <form 
            action="" 
            class="quiz-blank__form" 
            v-if="index === 2"  
            @submit.prevent="$emit('submit-handler', $event)">
            <app-form 
                :id="0"
                title="День"
                :items='days'
                @click="dayChoose"
                @input="$emit('birth-date-handler', id, $event)"
                :validation= 'isValid[0]'
            >
            </app-form>
            <app-form 
                :id="1"
                title="Месяц"
                :items='months'
                @input="$emit('birth-date-handler', id, $event)"
                :validation= 'isValid[1]'

            ></app-form>
            <app-form 
                :id="2"
                title="Год"
                :items='years'
                @click="yearChoose"
                @input="$emit('birth-date-handler', id, $event)"
                :validation= 'isValid[2]'
                

            ></app-form>
            <button 
                class="btn" 
                type="submit"
                v-for="(answer, id) in questions[index].answers" 
                :key="answer">
                {{ questions[index].answers[id]  }}
            </button>

        </form>
        <div class="quiz-blank__buttons" v-else>
            <button class="btn"  v-for="(answer, idx) in questions[index].answers" :key="answer" @click="$emit('answer-choosed', idx)">{{ questions[index].answers[idx]  }}</button>
            
        </div>
        <p>Вопрос {{ index+1 }}-5</p>
  
    </div>
        </div>
       
</template>

<script>
import AppForm from './AppForm'

export default {
 emits: { 
     'answer-choosed'(idx) {
        
     },
     'submit-handler'($event) {
        return true
     },
     'birth-date-handler'(id, $event) {
            if(id) {
                return true
            }
            console.warn('There is no id parameter for emit birth-date-handler')
            return false
     }
     },
 props: {
    index: Number,
    show: Boolean,
    questions: Array,
    years: Array,
    months: Array,
    days: Array,
    isValid: Array
 },
 data() {
     return {
         
     }
 },
 computed: {
        yearChoose() {
            for (let i = 1920; i <= 2003; i++) this.years.push(i)
        },
        dayChoose() {
            for (let i = 1; i <= 31; i++) this.days.push(i)
        },

    },
 components: { AppForm }
}
</script>

<style lang="scss" scope>
.container {
        height: 100vh;
        margin: 0 auto;
        max-width: 1440px;
        display: block;
        h1 {
            text-align: center;
        }
    }
    .quiz-blank{
        margin-right: auto;
        margin-left: auto;
        height: 100vh;
        max-width: 1440px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 130px;
        padding-bottom: 130px; 


        .quize-blank__text-block {
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            width: 100%;
            margin-bottom: 100px;
            display: block;
        }
        .btn{
                margin: 15px 0;
            }
       .quiz-blank__buttons{
            display: flex;
            flex-direction: column;
            
            
           
       }
       p {
                font-family: Roboto;
                font-style: normal;
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
              
                color: rgba(255, 255, 255, 0.6);
           }
      
        .quiz-blank__script-text {
            font-family: 'Bad Script', cursive;
            text-align: center;
            font-size: 25px;
            line-height: 35px;
            text-align: center;
            margin: 10px auto 50px auto;
            
        }
        .quiz-blank__form{
            display: flex;
            flex-direction: column;
        }
        select {
            width: 310px;
            height: 70px;
            background: linear-gradient(90deg, rgba(228, 228, 228, 0.9) -6.2%, rgba(203, 203, 203, 0.9) 100%);
            border-radius: 50px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, .4) inset; 
            outline: none;
            margin: 15px 0;
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            line-height: 16px;
            text-align-last: center;
            color: #202024;
        }
        .invalid {
          border: 1px solid #EE5353;  
        }
        .quiz-blank__message{
            background: #ffffff;
            border-radius: 5px;
            position: relative;
            margin: 0 auto 80px auto;
            padding: 23px 12px 21px;
            width: fit-content;

            &::after {
                content: ''; 
                position: absolute; 
                right: 20px; bottom: -20px; 
                border: 10px solid transparent; 
                border-top: 10px solid #ffffff; 
            }

            p {
               font-family: 'Bad Script', cursive;
                text-align: center; 
                color: #202024;
                
                font-size: 25px;
            }
        }
    }


    /* Small Devices, Tablets */
    @media only screen and (max-width : 768px) {
         .quiz-blank {
            padding-bottom: 30px;
            padding-top: 30px;
        }
         .quize-blank__text-block  {
            min-height: 100px;
        }
        .quize-blank__text-block  .quiz-blank__message {
            margin-bottom: 30px;
            p {
                font-size: 20px;
            }

        }
         .quize-blank__text-block .quiz-blank__script-text,  .quize-blank__text-block.quiz-blank .quiz-blank__message p{
            font-size: 16px;
            line-height: 20px;
        }
       
    }
    /* Extra Small Devices, Phones */
    @media only screen and (max-width : 480px) {
       
    }
    
</style>