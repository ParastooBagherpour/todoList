<template class="head-fingers">
  <div class="earL">
    <svg viewBox="0 0 100 100">
      <path
        fill="#212121"
        stroke="black"
        stroke-width="8px"
        d="M20 95,
             C20 95,0 50,20 5,
             C20 5,70 10,95 80"
      />
      <path
        fill="#fab1a0"
        stroke="black"
        stroke-width="4px"
        d="M20 95,
             C20 95,0 50,20 5,
             C20 5,70 10,95 80"
        transform="translate(20,25)scale(0.5)"
      />
    </svg>
  </div>
  <div class="earR">
    <svg viewBox="0 0 100 100">
      <path
        fill="#212121"
        stroke="black"
        stroke-width="8px"
        d="M20 95,
             C20 95,0 50,20 5,
             C20 5,70 10,95 80"
      />
      <path
        fill="#fab1a0"
        stroke="black"
        stroke-width="4px"
        d="M20 95,
             C20 95,0 50,20 5,
             C20 5,70 10,95 80"
        transform="translate(20,25)scale(0.5)"
      />
    </svg>
  </div>
  <div class="head">
    <div class="mouth">
      <svg viewBox="0 0 100 100">
        <path
          fill="#fab1a0"
          stroke="black"
          stroke-width="2px"
          d="M15 5,
           C15 5,50 75,85 5,
           C85 5,70 20,50 5,
           C50 5,30 20,15 5"
        />
        <path
          fill="white"
          stroke="black"
          stroke-width="2px"
          d="M27 11.5,
           L32 20,
           L37 11"
        />
        <path
          fill="white"
          stroke="black"
          stroke-width="2px"
          d="M73 11.5,
           L68 20,
           L63 11"
        />
      </svg>
    </div>
    <div class="nose"></div>
    <div id="eL" class="eyeL"></div>
    <div id="heL" class="heyeL">
      <svg viewBox="0 0 100 100">
        <path
          fill="none"
          stroke="black"
          stroke-width="8px"
          d="M 15 100,
             C 15 100, 50 15 , 85 100"
        />
      </svg>
    </div>
    <div id="aeL" class="AeyeL">
      <svg viewBox="0 0 100 100">
        <path
          fill="none"
          stroke="black"
          stroke-width="8px"
          d="M 15 85,
             L 85 50,
             L 15 15"
        />
      </svg>
    </div>
    <div id="eR" class="eyeR"></div>
    <div id="heR" class="heyeR">
      <svg viewBox="0 0 100 100">
        <path
          fill="none"
          stroke="black"
          stroke-width="8px"
          d="M 15 100,
             C 15 100, 50 15 , 85 100"
        />
      </svg>
    </div>
    <div id="aeR" class="AeyeR">
      <svg viewBox="0 0 100 100">
        <path
          fill="none"
          stroke="black"
          stroke-width="8px"
          d="M 85 85,
             L 15 50,
             L 85 15"
        />
      </svg>
    </div>
  </div>

  <div class="faceL"></div>
  <div class="faceR"></div>
  <div class="Larm"></div>
  <div class="Rarm"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HeadFingers",
  components: {},
};
</script>
<style scoped>
.head-fingers {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  height: 57%;
  width: 100%;
  background-color: blue;
}
.head {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 270px;
  border-radius: 50%;
  background: #212121;
  border: 12px solid black;
}
.heyeL {
  position: absolute;
  top: 25%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 100px;
  opacity: 0;
}
.AeyeL {
  position: absolute;
  top: 35%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: 100px;
  opacity: 0;
}
.eyeL {
  position: absolute;
  top: 35%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 75px;
  background: white;
  border-radius: 50%;
  border: 4px solid black;
  opacity: 1;
}
.eyeL:after {
  content: "";
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translate(-50%, 50%) scale(0.45);
  width: 60px;
  height: 75px;
  background: black;
  border-radius: 50%;
}
.eyeR {
  position: absolute;
  top: 35%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 75px;
  background: white;
  border-radius: 50%;
  border: 4px solid black;
  opacity: 1;
}
.heyeR {
  position: absolute;
  top: 25%;
  left: 70%;
  transform: translate(-50%, -50%);
  width: 100px;
  opacity: 0;
}
.AeyeR {
  position: absolute;
  top: 35%;
  left: 65%;
  transform: translate(-50%, -50%);
  width: 100px;
  opacity: 0;
}
.eyeR:after {
  content: "";
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translate(-50%, 50%) scale(0.45);
  width: 60px;
  height: 75px;
  background: black;
  border-radius: 50%;
}
.mouth {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8, 0.9);
  width: 200px;
}
.nose {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f78fb3;
  width: 32px;
  height: 22px;
  border-radius: 50%;
  border: 4px solid black;
}
.earL {
  position: absolute;
  width: 170px;
  top: 32%;
  left: 25%;
  transform: translate(-50%, -50%) rotate(-15deg) scale(1.1, 1);
}
.earR {
  position: absolute;
  width: 170px;
  top: 32%;
  left: 75%;
  transform: translate(-50%, -50%) rotate(15deg) scale(-1.1, 1);
}
.faceL {
  position: absolute;
  top: 65%;
  left: -5%;
  width: 75px;
  height: 5px;
  transform: translate(-50%, -50%);
  background: black;
  border: 4px solid black;
  border-radius: 12px;
}
.faceL:before {
  content: "";
  position: absolute;
  top: -30px;
  left: 55%;
  width: 75px;
  height: 5px;
  transform: translate(-50%, -50%) rotate(15deg);
  background: black;
  border: 4px solid black;
  border-radius: 12px;
}
.faceL:after {
  content: "";
  position: absolute;
  top: 30px;
  left: 55%;
  width: 75px;
  height: 5px;
  transform: translate(-50%, -50%) rotate(-15deg);
  background: black;
  border: 4px solid black;
  border-radius: 12px;
}
.faceR {
  position: absolute;
  top: 65%;
  left: 105%;
  width: 75px;
  height: 5px;
  transform: translate(-50%, -50%);
  background: black;
  border: 4px solid black;
  border-radius: 12px;
}
.faceR:before {
  content: "";
  position: absolute;
  top: -30px;
  left: 50%;
  width: 75px;
  height: 5px;
  transform: translate(-50%, -50%) rotate(-15deg);
  background: black;
  border: 4px solid black;
  border-radius: 12px;
}
.faceR:after {
  content: "";
  position: absolute;
  top: 30px;
  left: 50%;
  width: 75px;
  height: 5px;
  transform: translate(-50%, -50%) rotate(15deg);
  background: black;
  border: 4px solid black;
  border-radius: 12px;
}
.Larm {
  position: absolute;
  top: 100%;
  left: 15%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 60px;
  background: #212121;
  border-radius: 50%;
  border: 6px solid black;
}
.Larm:before {
  content: "";
  position: absolute;
  top: 51%;
  left: 125%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 60px;
  background: #212121;
  border-radius: 50%;
  border: 6px solid black;
}
.Larm:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 215%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 60px;
  background: #212121;
  border-radius: 50%;
  border: 6px solid black;
}
.Rarm {
  position: absolute;
  top: 100%;
  left: 85%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 60px;
  background: #212121;
  border-radius: 50%;
  border: 6px solid black;
}
.Rarm:before {
  content: "";
  position: absolute;
  top: 51%;
  left: -25%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 60px;
  background: #212121;
  border-radius: 50%;
  border: 6px solid black;
}
.Rarm:after {
  content: "";
  position: absolute;
  top: 50%;
  left: -125%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 60px;
  background: #212121;
  border-radius: 50%;
  border: 6px solid black;
}
</style>
