<template xmlns:div="http://www.w3.org/1999/html">
  <div>


    <el-container>
      <el-aside width="330px">通话
        <el-input class="search"
                  placeholder="请输入关键字"
                  prefix-icon="el-icon-search"
                  v-model="search" clearable>
        </el-input>

      </el-aside>
      <el-container>
        <el-header height="109px" >
          <el-container>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url1"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url2"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url3"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url4"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url5"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url6"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url7"
                  :fit="fit"></el-image>
              </div>
            </div>
            <div class="demo-image">
              <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <el-image
                  style="width: 109px; height: 109px"
                  :src="url8"
                  :fit="fit"></el-image>
              </div>
            </div>
          </el-container>
        </el-header>
        <el-main>
          <span style="color: #FFFFFF;font-size: 30px">正在呼叫...</span>
          <div class="demo-image">
            <div class="block" v-for="fit in fits" :key="fit">
              <span class="demonstration">{{ fit }}</span>
              <el-image
                style="width: 300px; height: 150px;l"
                :src="url10"
                :fit="fit"></el-image>
            </div>
          </div>
          <div class="demo-image">
            <div class="block" v-for="fit in fits" :key="fit">
              <span class="demonstration">{{ fit }}</span>
              <el-image
                style="width: 71px; height: 33px;d"
                :src="url9"
                :fit="fit"></el-image>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>


  </div>
</template>

<script>
    export default {
        name: "Dial",
        data() {
          return {
            fits: [''],
            url1:require('../../assets/fooc_xiaotu/1.png'),
            url2:require('../../assets/fooc_xiaotu/2.png'),
            url3:require('../../assets/fooc_xiaotu/3.png'),
            url4:require('../../assets/fooc_xiaotu/4.png'),
            url5:require('../../assets/fooc_xiaotu/5.png'),
            url6:require('../../assets/fooc_xiaotu/6.png'),
            url7:require('../../assets/fooc_xiaotu/7.png'),
            url8:require('../../assets/fooc_xiaotu/8.png'),
            url9:require('../../assets/fooc_xiaotu/calling.png'),
            url10:require('../../assets/fooc_xiaotu/10.png')
          }
        }
    }
</script>

<style scoped>
  .el-header {
    background-color: #000000;
    color: #333;
    text-align: left;
    line-height: 35px;
    height: 109px;
    width:931px ;
  }
  .el-aside {
    background-color: #FFFFFF;
    color: #333;
    /*text-align: -webkit-match-parent;*/
    line-height: 24px;
    height: 800px;
  }
  
  .el-main {
    background-color: #151515;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 683px;
    width:931px ;
  }
  .el-input{
    margin-top: 82px;
    width: 290px;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  body > .el-container {
    margin-bottom: 40px;
  }


</style>
