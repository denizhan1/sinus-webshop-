<template>
    <div class="Nav">
        <div class="nav-bar">
            <img src="~@/assets/sinus-logo.svg">
            <div class="right-side">
                <div class=div>

                    <router-link to="/Products">Products</router-link>
                <router-link href="/">Register</router-link>
                <button>hello</button>
                <button>hello</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Nav"
}
</script>

<style lang="scss" scoped>
img {
    height: 50px;
    width: 50px;
}
.nav-bar {
    display: flex;
    justify-content: space-around;
}
.div{
    display: flex;
    justify-content: space-around;
}

</style>