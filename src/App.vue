<template>
  <div class="blank">
     <app-progress v-if="inProgress"
     @stop-progress="stopProgress"
     ></app-progress>
    <app-loader v-else-if="loading"></app-loader>
    <router-view 
    v-else
      :index="index"
      :questions="questions"
      :years="years"
      :days="days"
      :show="show"
      :months="months"
      :isValid="isValid"
      :dataFromSwapi="dataFromSwapi"
      @send-data="sendData"
      @go-test="goTest"
      @submit-handler="submitHandler"
      @answer-choosed="answerChoosed"
      @birth-date-handler="birthDateHandler"
    ></router-view>
  </div>
  
</template>

<script>
import AppQuize from './components/AppQuize'
import AppLastPage from './components/AppLastPage'
import AppLanding from './components/AppLanding'
import AppLoader from './components/AppLoader'
import AppProgress from './components/AppProgress'

export default {
  components: { AppQuize, AppLastPage, AppLanding, AppLoader, AppProgress },
  data() {
     return {
         count: 0,
         index: 0,
         show: false,
         isValid: [true, true, true],
         inProgress: false,
         loading: false,
         years: [],
         days: [],
         dataFromSwapi: '',
         months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
         questions: [
            
             {
                 question: 'Боитесь ли вы умереть?',
                 answers: 
                    [ 'Да', 'Нет'],
                 choosenAnswer: '',
                 text: "Вы, конечно, умрете.\nИ все, с кем вы знакомы,\nтоже однажды умрут."
                 
             },
              {
                 question: 'Когда Вы чувствуете себя наиболее комфортно?',
                 answers: 
                    ['Утро','День', 'Вечер', 'Ночь'],
                 choosenAnswer: '',
                 text: 'Мы расскажем Вам не только подробности\n вашей смерти, но также поможем Вам\n избежать этой ужасной даты и продлить\n вашу жизнь на многие годы.'
                 
              },
              {
                 question: 'Укажите свою дату рождения:',
                 title: 'title',
                 answers: ['Далее'],
                 birthDate: [0, 0, 0],
                 text: 'Уже совсем скоро Вы узнаете много\n интересного о своем будущем!'
                 
              },
              {
                 question: 'Снятся ли Вам умершие люди?',
                 answers: 
                    ['Да','Нет', 'Иногда'],
                 choosenAnswer: '',
                 text: 'Смерть родного человека – одно из\n тяжелейших испытаний в жизни каждого\n из нас!'
                 
              },
              {
                 question: 'Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?',
                 answers: 
                    ['Да','Затрудняюсь ответить'],
                 choosenAnswer: '',
                 text1: 'По вам скучает очень близкий человек,\n которого больше нет в мире живых.',
                 text2: 'По вам скучает очень близкий человек,\n которого больше нет в мире живых.\n Возможно это дедушка или бабушка.',
                 text3: 'По вам скучает очень близкий человек,\n которого больше нет в мире живых.\n Возможно это кто-то из Ваших родителей.'

                 
              },
             
         ]
     }
 },
 methods: {
     goTest(idx) {
         this.questions[this.index].choosenAnswer = this.questions[this.index].answers[idx]
         this.index = this.index + 1
         this.$router.push('/quiz')
     },
     answerChoosed(idx) {
        this.questions[this.index].choosenAnswer = this.questions[this.index].answers[idx]
        if ( this.index + 1 < this.questions.length ) {
         this.index = this.index + 1
         console.log(idx)
        } else {
           this.inProgress = true
        }

        if (this.index === 4) {
            setTimeout(() => {
                this.show = true
            }, 1500)
        }
     

        
    },
    submitHandler($event) {
        
          let isValidItem = true
          for (let i=0; i<3; i++) {
                if ($event.target[i].value === 'default'){
                    isValidItem = false
                } else {
                    isValidItem = true
                } 
               this.isValid.splice(i, 1, isValidItem)
               
            }
            let ifTrue = this.isValid.every(elem => elem===true)
            console.log( this.isValid)
            

             if ( ifTrue===true ) {
                 console.log(ifTrue)
                 this.loading = true
                 
                 setTimeout(() => {
                    
                    this.index = this.index + 1
                 this.loading = false
                }, 1500)
                
                   
             }
             
    },
     birthDateHandler(id, $event){
            this.questions[2].birthDate.splice($event.target.id, 1, $event.target.value)
            console.log('hi', this.questions[2].birthDate)

          
    },
    async sendData() {
       const response = await fetch('https://vue-demo-deploy-aa48d-default-rtdb.firebaseio.com/data.json',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          AnswersData: this.questions
        })
       })
       const firebaseData = await response.json()
       console.log(this.questions)

       const getdata = await fetch('https://swapi.dev/api/people/1/.json',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
       })
      this.dataFromSwapi = await getdata.json()
      //this.dataFromSwapi = 
      
       console.log(this.dataFromSwapi.name)
      
    },

    stopProgress(  ) {
       this.inProgress = false
    }
    
 }
}
</script>

<style lang="scss" scope>
.blank {
   
  position: relative;
 
}
  .container {
    display: block;
  }

</style>
