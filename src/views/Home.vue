<template>
    <div class="father">
        <div class="box">
            <div>
                <a href="#"><img src="../assets/sao1.jpg" alt=""/></a>
            </div>
            <div>
                <a href="#"><img src="../assets/sao2.jpg" alt=""/></a>
            </div>
            <div>
                <a href="#"><img src="../assets/sao3.jpg" alt=""/></a>
            </div>
            <div>
                <a href="#"><img src="../assets/sao4.jpg" alt=""/></a>
            </div>
            <div>
                <a href="#"><img src="../assets/sao5.jpg" alt=""/></a>
            </div>
            <div>
                <a href="#"><img src="../assets/sao6.jpg" alt=""/></a>
            </div>
            <div>
                <a href="#"><img src="../assets/sao1.jpg" alt=""/></a>
            </div>
            <div>
                <a href="#"><img src="../assets/sao2.jpg" alt=""/></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {}
}
</script>

<style scoped>
.father {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    perspective: 1200px;
    height: 100vh;
}
img {
    width: 300px;
    height: 200px;
}
.box {
    width: 300px;
    height: 200px;
    position: relative;
    /* margin: 200px auto; */
    transform-style: preserve-3d;
    transition: all 1s;
    animation: move 10s infinite linear;
}
.box:hover {
    animation-play-state: paused;
}
@keyframes move {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
}
.box div {
    position: absolute;
}
.box div:nth-child(1) {
    transform: translateZ(450px);
}
.box div:nth-child(2) {
    transform: rotateY(45deg) translateZ(450px);
}
.box div:nth-child(3) {
    transform: rotateY(90deg) translatez(450px);
}
.box div:nth-child(4) {
    transform: rotateY(135deg) translateZ(450px);
}
.box div:nth-child(5) {
    transform: rotateY(180deg) translateZ(450px);
}
.box div:nth-child(6) {
    transform: rotateY(225deg) translateZ(450px);
}
.box div:nth-child(7) {
    transform: rotateY(270deg) translateZ(450px);
}
.box div:nth-child(8) {
    transform: rotateY(315deg) translateZ(450px);
}
</style>
