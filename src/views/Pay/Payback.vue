<script setup>
import { getOrderAPI } from '@/apis/pay'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const orderInfo = ref({})

const getOrderInfo = async () => {
  const res = await getOrderAPI(route.params.orderId)
  orderInfo.value = res.result
}

onMounted(() => getOrderInfo())
</script>


<template>
  <div class="xtx-pay-page">
    <div class="container">
      <!-- 支付结果 -->
      <div class="pay-result">
        <span class="iconfont icon-queren2 green"></span>
        <p class="tit">支付成功</p>
        <p class="tip">我們會盡快出貨，請不要一直來問什麼時候出貨好嗎</p>
        <p>支付方式：<span>媽媽十元</span></p>
        <p>支付金額：<span>{{ orderInfo.payMoney }}</span></p>
        <div class="btn">
          <el-button type="primary" style="margin-right:20px">查看訂單</el-button>
          <el-button>進入首頁</el-button>
        </div>
        <p class="alert">
          <span class="iconfont icon-tip"></span>
          齁齁齁齁齁
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pay-result {
  padding: 100px 0;
  background: #fff;
  text-align: center;
  margin-top: 20px;

  >.iconfont {
    font-size: 100px;
  }

  .green {
    color: #1dc779;
  }

  .red {
    color: $priceColor;
  }

  .tit {
    font-size: 24px;
  }

  .tip {
    color: #999;
  }

  p {
    line-height: 40px;
    font-size: 16px;
  }

  .btn {
    margin-top: 50px;
  }

  .alert {
    font-size: 12px;
    color: #999;
    margin-top: 50px;
  }
}
</style>