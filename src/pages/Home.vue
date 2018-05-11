<template>
     <div>
        Name: <input v-model="name" type="text" class="border-black">
        <h1>Hello Component</h1>
        <hello-comp :name="name" :initialEnthusiasm="5" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator :name="name" :initialEnthusiasm="5" />
    </div>
</template>


<script lang="ts">
import Vue from "vue";

import HelloComp from '../components/Hello.vue'
import HelloDecorator from '../components/HelloDecorator.vue'

export default Vue.extend({
    props: [name],

    components: {
        HelloComp,
        HelloDecorator
    }
});
</script>
<style lang="scss" scoped>

.border-black {
    border: 1px solid indigo    
}
</style>

