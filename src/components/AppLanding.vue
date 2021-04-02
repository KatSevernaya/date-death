<template>
    <div class="app-landing">
         <section class="intro">
       
       <div class="intro__wrap">
          <p style="margin-top: 0px"><small>Лучшие астрологи и экстрасенсы Румынии</small></p> 
          <div class="intro__line">
               <p>Точность прогноза: 97%</p>
          </div>
          <div class="intro__images">
              <div class="intro__images-bg">
                  <img src="./../img/icon1.svg" alt="">
              </div>
              <div class="intro__images-photo">
                  <img src="./../img/woman1.png" alt="">
              </div>

              
          </div>
          <div class="intro__question">
              <p>Вас беспокоит вопрос о том,<br> <span>когда Вы покинете этот Мир и при каких обстоятельствах?</span></p>
              <button class="btn" @click="scrollTo">Да</button>
              <button class="btn">Нет</button>
              
          </div>
          <p class="intro__last-text"><small>Онлайн предсказание</small></p>
          </div>
</section>

 <section class="offer">

        <div class="offer__text">
            <img src="./../img/hands.png" alt="">
          
            <p>Позвольте нам раскрыть эту волнующую тайну и <br>
                <span>с точностью определить дату и время вашей смерти, </span> 
                а также предшествующую этому событию причину</p>
        </div>
       
        <div class="offer__image">
            <img src="./../img/intro__bg-image.jpg" alt="">
            <p>Многие не верят предсказаниям и мы решили доказать каждому,<br><span>
что прогноз может изменить жизнь любого человека!</span></p>
        </div>
            
        
    </section>

   

    <section class="quiz">
        <h1 class="primary">{{ questions[index].question }}</h1>
         <div class="quiz-blank__buttons">
            <button class="btn" @click="$emit('go-test', idx)" v-for="(answer, idx) in questions[index].answers" :key="answer">{{ questions[index].answers[idx]  }}</button>
            
        </div>
        <p>Вопрос {{ index+1 }}-5</p>
        
        <div class="quiz-blank__elements">
            <img src="./../img/quiz-symbol1.svg" alt="">
            <img src="./../img/quiz-symbol2.svg" alt="">
            <img src="./../img/quiz-symbol3.svg" alt="">
            <img src="./../img/quiz-symbol4.svg" alt="">
        </div>
        <p class="quiz-blank__script-text" style="white-space: pre-line;">{{ questions[index].text }}</p>
            <div class="quiz-blank__elements">
            <img src="./../img/quiz-symbol5.svg" alt="">
            <img src="./../img/quiz-symbol6.svg" alt="">
            <img src="./../img/quiz-symbol7.svg" alt="">
            <img src="./../img/quiz-symbol8.svg" alt="">
        </div>
        <div class="quiz__img-eye1">
            <img src="./../img/eye.svg" alt="">
        </div>
        <div class="quiz__img-eye2">
            <img src="./../img/eye-1.svg" alt="">
        </div>
        
    </section>
    <app-footer></app-footer>
    </div>
  
</template>

<script>
import AppFooter from './AppFooter'
export default {
components: { AppFooter },
emits: {
    'go-test'(idx) {}
},
props: {
    index: Number,
    questions: Array,
 },
methods: {
    scrollTo(){
		const el = document.querySelector('.offer')	
        el.scrollIntoView({block: "start", behavior: "smooth"});
	}
}

}
</script>

<style scope lang="scss">
.app-landing {
    position: relative;
    overflow: hidden;
}

</style>