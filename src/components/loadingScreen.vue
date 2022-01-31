<template>
  <div :class="{ loader: true, fadeout: !isLoading }">

    <img src="@/assets/Quicloc8-logo.png" alt="Quicloc8-logo" />
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"]
};
</script>

<style>
.loader {
  display: flex;
  justify-content: space-around;
  background-color: rgb(224, 208, 208);
  bottom: 0;
  color: white;
  /* display: block; */
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  align-items: center;
  top: 0;
}

.fadeout {
  animation: fadeout 1s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
