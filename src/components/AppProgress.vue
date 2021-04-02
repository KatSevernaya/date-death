<template>
    <div class="container">
      <div class="app-progress__image">
        <img src="./../img/microphone.svg" alt="">
      </div>
      <img src="" alt="">
       <k-progress
        :percent="count"
        color="#F6C866"
        
       ></k-progress>
       <p>Запись сообщения</p>
    </div>
</template>

<script>

 

export default {
data() {
  return {
    count: 0
  }
},
emits: ['stop-progress'],
mounted() {
  const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}
  this.$nextTick(async () => {
    for (let i = 0; i<101; i++) {
    setTimeout( () => {
      this.count = i
      }, i*20)  
    }
    await delay(2000)
    await this.$router.push('/listen') 
    await this.$emit('stop-progress', this)
  })
  
}

}


</script>

<style lang="scss" scope>
.container {
        height: 100vh;
        margin: 0 auto;
        max-width: 1000px;
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
    margin: 0;
  }
}
.k-progress {
  margin: 40px 0 0 0 !important;
  display: flex !important;
  flex-direction: column;
  .k-progress-outer {
    width: 350px;
    display: block;
  }
  .k-progress-text {
    display: block;
    margin: 20px;
  }
 
  
}

</style>