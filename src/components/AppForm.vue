<template>
    
        <select 
                :id="id" 
                required 
                :class="{'invalid': !validation}"
                v-model="name" 
                >
                <option  disabled value="default">{{ title }}</option>
                <option  :value="item" v-for="item in items" :key="item">{{ item }}</option>
            </select>
    
</template>

<script>
export default {
    data() {
        return {
            name: "default",
           
           
        }
    },
    
    props: {
        id: Number,
        isValid: Array,
        validation: Boolean,
        birthDate: Array,
        years: Array,
        items: Array,
        title: String,
        invalid: Boolean,
        index: Number,
        questions: Array,
        months: Array
    },
    methods: {
       
    }
     
}
</script>

<style>

</style>