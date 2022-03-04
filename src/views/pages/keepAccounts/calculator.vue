<template>
      <div class="calculator">
      <header class="info">
          <div class="note">
            <Icon name="#note" svg='noteIcon'/>
            <label>备注：<input type="text" placeholder="点击写备注..."></label>         
          </div>
          <div class="result">0.00</div>
      </header>
      <main class="calculate">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>今天</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>×</button>
        <button>完成</button>
      </main>
  </div>

</template>

<script>
export default {
    name:'UerCalculator'

}
</script>

<style lang='scss' scoped>
.calculator{
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 37vh;
  font-size: 1.5rem;
    background-color: #f3f3f3;
    >.info{
      height: 12%;
      border: transparent;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      >.note>label>input{
        width: 60vw;
        border: none;
        outline: none;
        font-size: 1.5rem;
      }
      >.result{
        font-size: 2.2rem;
      }
    }
    .noteIcon{
      float: left;
      margin-top:.2rem;
      margin-right:.4rem;
      width: 1.6rem;
      height: 1.6rem;
      line-height: 2rem;
      color:pink;
    }
    >.calculate{
      display: flex;
      flex-wrap: wrap;
      height: 88%;
      >button{
        border:1px solid #f3f3f3;
        border:transparent;
        outline: none;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
        width: 25vw;
        height: 25%;
        font-size: 2rem;
        background-color: #f3f3f3;
      }
      >button:last-child{
          background-color: pink;
      }
    }
}
input::placeholder{
  color: #cccc;
  background-color: #f3f3f3;
}
</style>