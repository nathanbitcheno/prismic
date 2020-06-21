<template>
    <div class="header">
        <div class="header-content">
            <nav>
                <router-link to="/games" class="main-menu">Games</router-link>
                <router-link to="/development" class="main-menu">Development</router-link>
            </nav>
            <h1><router-link to="/">Prismic</router-link></h1>
            <p>Playing with Headless CMS</p>
            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    border: 0px 0px 1px 0px solid;
    padding: 10px;
    box-shadow: 0px 5px 20px #e6e6e6;
    clear: both;
}
.header-content {
    max-width: 1000px;
    margin: auto;
    padding: 20px 0px;
    }
nav {
    float: right;
    margin-top: 10px;
    font-weight: bold;
}
.main-menu {
    margin-left: 20px;
}
</style>