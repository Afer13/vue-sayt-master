<style scoped>

.spinner-container{
    width: 100vw;
    height: 100vh;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lds-ripple,
.lds-ripple div {
    box-sizing: border-box;
}

.lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ripple div {
    position: absolute;
    border: 4px solid blue;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 8px;
        height: 8px;
        opacity: 0;
    }

    4.9% {
        top: 36px;
        left: 36px;
        width: 8px;
        height: 8px;
        opacity: 0;
    }

    5% {
        top: 36px;
        left: 36px;
        width: 8px;
        height: 8px;
        opacity: 1;
    }

    100% {
        top: 0;
        left: 0;
        width: 80px;
        height: 80px;
        opacity: 0;
    }
}
</style>
<template>
    <!-- <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div> -->
    <div class="spinner-container">
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
</template>