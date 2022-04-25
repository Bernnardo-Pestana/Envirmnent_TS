<template> 
  <div>
      <nav  class="bd-navbar is-link navbar is-spaced" role="navigation" aria-label="main navigation">
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
       <div class="navbar-menu">
        
        <div class="navbar-start">
            <a class="navbar-item"> Home </a>
                    
            <a class="navbar-item" @click="goto()" > About Project </a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">Contact</a>

                <div class="navbar-dropdown">
                    <a class="navbar-item" target="_blank" href="https://www.linkedin.com/in/bernnardo-pestana-b696421a7/" >Linkedin</a>
                    <a class="navbar-item" target="_blank"  href="https://github.com/Bernnardo-Pestana" >GitHub</a>
                </div>
            </div>
        </div>
       
      </div>
  </nav>
  <hr>
  </div>
</template>

<script>
export default {
    methods:
    {
        goto(){

            this.$emit('goto','About')
        }
    }

}
</script>

<style>


</style>