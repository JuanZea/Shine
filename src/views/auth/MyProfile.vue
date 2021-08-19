<style>
.header {
  background: cornflowerblue;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:0px auto;
  height: 300px;
  width: 500px;
  padding: 12px;
  border-width: 8px;
  border-style: solid;
  border-color: black;

}
.avatar {
  text-align: center;
  width: 200px;
  height: 200px;
  justify-content: center;
  border-radius: 50%;
}
.username {
  font-size: 18px;
  margin-top: 10px;
}

</style>

<template>
  <div class="h-screen bg-poco center">
    <div class="header" >
      <img
           class="avatar"
           src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dewey-malcolm-fotogramas-1626112299.jpg">
      <h1 class="username">Alejandro Yarce</h1>
      <h1 class="username">E-mail: </h1>

    </div>
  </div>

</template>

<script>
export default {
  name: "MyProfile"
}
</script>