<template>
  <div class="tcy_404 container">
    <img src="https://memeprod.ap-south-1.linodeobjects.com/user-template/154cca5cf23717d60cf8cd656f77b329.png">
    <h2>你走錯地方了喔～</h2>
    <a class="btn btn-primary btn_blue" @click="$router.push('/')">返回首頁</a>
  </div>
</template>

<script></script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.container {
  width: 1170px;
}

.tcy_404 img {
  display: block;
  height: 300px;
  margin: auto;
}

.tcy_404 h2 {
  font-size: 32px;
  color: #333333;
  text-align: center;
  letter-spacing: 5px;
  padding-top: 33px;
  padding-bottom: 25px;
}

.tcy_404 p {
  font-size: 14px;
  color: #666666;
  letter-spacing: 1px;
  text-align: center;
  padding-bottom: 35px;
}

.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

.btn_blue {
  display: inline-block;
  height: 56px;
  line-height: 56px;
  text-align: center;
  border-radius: 3px;
  background: #7caced;
  color: #fff;
  letter-spacing: 5px;
  border: 0;
  font-size: 18px;
  padding: 0;
  text-decoration: none;
}

.tcy_404 a {
  display: block;
  margin: auto;
  width: 220px;
  height: 56px;
}</style>