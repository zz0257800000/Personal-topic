<script>
import{ RouterLink,RouterView } from 'vue-router'

export default{
data(){
return{
showDialog: false,
username: "",
password: "",
loginFailed: false,
  
  }
},
methods:{
ShowDialog() {
this.showDialog = true;
},

closeDialog() {
this.showDialog = false;
},
login() {
const enteredUsername = this.enteredUsername;
const enteredPassword = this.enteredPassword;


const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
const user = registeredUsers.find((user) => user.username === enteredUsername && user.password === enteredPassword);
// 检查输入是否为空



if (user) {
alert("登录成功");

return this.$router.push({ name: 'Vfor' });




}  else   {
alert("登录失败，请检查用户名和密码");

this.loginFailed = true;
this.enteredUsername = "";
this.enteredPassword = "";

setTimeout(() => {
this.loginFailed = false;
}, 2000);
return;

}
},
},
components:{
RouterLink
  }
}
    

</script>
<template>
  <img src="../views/askAllPage/askHome.vue" alt="">
   <div class="askUserPage">
 <div class="askHeader">
    <h1><b>問</b></h1>
<div>
    <RouterLink class="btn" to="/">登出</RouterLink>

  
</div>
 </div>
 <div class="askMainPage">
    <div class="search">
<input class="searchText" type="text"  placeholder="請輸入搜尋內容……" > 
<i class="fa-solid fa-magnifying-glass icon"></i>


 </div>
 <div class="daysearch">
<h1>開始</h1>
<h1>/</h1>
<h1>結束</h1>
<input type="date" name="bday" />
<input type="date" name="bday" />
<button>搜尋</button>
 </div>






</div>

 <div class="otherPage">

 </div>
</div>

</template>
<style lang="scss" scoped>
.btn{
    font-size: 16pt;
    margin: 10px;
    border-radius: 10px;
    padding: 10px;
    width: 5vw;
    background-color: rgb(255, 255, 255);
}
.icon{
    font-size: 28pt;

}

.askUserPage{
  background-color: #00415d;
border: 0px solid rgb(214, 255, 68);
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
.askHeader{
    justify-content: space-around;
    align-items: center;
    display: flex;
    font-size: 16pt;
    padding: 5px;
  

    } 
.askMainPage{
display: flex;
    border: 0px solid rgb(203, 255, 59);
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;


.search{
  width: 40vw;
  display: flex;
  justify-content: space-around;
height: 5vh;  
  border: 0px solid rgb(0, 0, 0);
  z-index: 2;
  
    .searchText{
        width: 50vw;
        font-size: 18pt;
    } 
}

.daysearch{
  display: flex;
}


        }
        .otherPage{
            border: 0px solid black;
            height: 10vh;
            width: 100vw;


        }
}

</style>