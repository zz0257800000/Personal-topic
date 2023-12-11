<script >
import { RouterLink, } from 'vue-router'
import Header from "../components/Header.vue"
export default {
  data() {
    return {
      imageUrl: null,
      isZoomed: false,
      currentDate: new Date().toLocaleString(),
    }
  },
  components: {
    RouterLink,
    
    Header
  },
  created() {
    // 在组件创建时启动日期更新
    this.updateDate();
  },
  methods: {
    updateDate() {
      // 更新当前日期和时间
      this.currentDate = new Date().toLocaleString();
      // 每秒更新一次
      setTimeout(this.updateDate, 1000);
    },
  },

}

</script>

<template>
  <div class="showMain">
  <div class="secondtitle2">
       <h3>
       </h3>
       <h6>
         <RouterLink class="btn" to="/"> Home</RouterLink> > <a href="">登入</a>
       </h6>
 
     </div>
 <div class="mainLoginShow">
   
   
     <div class="leftShow">
       <h1> 薪資管理系統
         </h1>
     </div>
     <div class="login-box">
         <div class="lb-header">
           <h3>歡迎回來</h3>
 
         </div>
         <br>
         
         <form class="email-login">
             <div class="u-form-group">
               <i class="fa-solid fa-user"></i> &nbsp;<input type="email" placeholder="Email" />
             </div>
             <div class="u-form-group">
               <i class="fa-solid fa-lock"></i> &nbsp; <input type="password" placeholder="Password"  />
               <!-- <i class="fa-solid fa-eye"></i> <i class="fa-solid fa-eye-slash"></i> -->
             </div>
           <div class="passwordright">
             <h1></h1>
             <RouterLink class="btn" to="/forgotPasswordPage">忘記密碼</RouterLink>
           </div>
             <div class="u-form-group">
                 <RouterLink class="loginBtn" to="/">Login</RouterLink>
 
             </div>
             <div class="u-form-group">
              
                 <RouterLink class="signBtn" to="/signUp">註冊</RouterLink>
 
             </div>
         </form>
       
     </div>
     </div></div>
 </template>
   
  
   
 <style lang="scss" scoped>

 .showMain{
  background-color: #00415d;
  
 }
  .secondtitle2 {
     justify-content: space-between;
     display: flex;
     align-items: center;
     border: 0px solid rgb(255, 0, 0);
     width: 95vw;
     height: 15vh;   
     color: white;

 
     a {
 
       border-radius: 10px;
       padding: 5px;
       transition: all 0.5s ease;
       text-decoration: none;
       color: white;
 
       &:hover {
         color: red;
         background-color: rgba(118, 118, 117, 0.5);
       }
     }
 
   }
 .mainLoginShow {
  
   border: 0px solid red;
   height: 90vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #00415d;
   .secondtitle2 {
     justify-content: space-between;
     display: flex;
     border: 0px solid rgb(255, 0, 0);
     width: 90vw;
     background-color: #00415d;

     a {
 
       border-radius: 10px;
       padding: 5px;
       transition: all 0.5s ease;
       text-decoration: none;
       color: black;
 
       &:hover {
         color: red;
         background-color: rgba(118, 118, 117, 0.5);
       }
     }
 
   }
 
   .leftShow {
    
     background-color: rgb(0, 0, 0);
     height: 70vh;
     width: 30vw;
     display: flex;
     align-items: center;
     justify-content: center;
     color: white;
   }
 
   .login-box {
     position: relative;
     margin: 10px;
     width: 500px;
     height: 67vh;
     background-color: #fff;
     padding: 10px;
     border-radius: 3px;
     box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.33);
   }
 
   .lb-header {
     display: flex;
     
     position: relative;
     color: #00415d;
     margin: 5px 5px 10px 5px;
     padding-bottom: 10px;
     border-bottom: 1px solid #eee;
     text-align: center;
     height: 28px;
 
     a {
       margin: 0 25px;
       padding: 0 20px;
       text-decoration: none;
       color: #666;
       font-weight: bold;
       font-size: 15px;
       transition: all 0.1s linear;
 
       &.active {
         color: #029f5b;
         font-size: 18px;
       }
     }
   }
 

 
   .email-login,
   .email-signup {
     position: relative;
     float: left;
     width: 100%;
     height: auto;
     margin-top: 20px;
     text-align: center;
   }
 
   .u-form-group {
     width: 100%;
     margin-bottom: 10px;
 
     input[type="email"],
     input[type="password"] {
       width: 75%;
       height: 45px;
       outline: none;
       border: 1px solid #9c9c9c;
       padding: 0 10px;
       border-radius: 2px;
       color: #000000;
       font-size: 0.8rem;
       transition: all 0.1s linear;
 
       &:focus {
         border-color: #358efb;
       }
     }
   }
   .passwordright{
     display: flex;
     justify-content: space-between;
     border: 0px solid rgb(0, 0, 0);
 width: 27vw;
   }
 
   .loginBtn {
     border: 2px solid rgb(0, 0, 0);
 
     color: #000000;
     font-size: 20px;
     border-radius: 4px;
     text-decoration: none;
     width: calc(75% + 20px);  // 考慮到 padding
     display: block;
     margin: 0 auto;
     padding: 10px;
     margin-top: 20px;
   }
 
   .signBtn {
     background-color: #000000;
 
     color: #ffffff;
     font-size: 20px;
     border-radius: 4px;
     text-decoration: none;
     width: calc(75% + 20px);  // 考慮到 padding
     display: block;
     margin: 0 auto;
     padding: 10px;
     margin-top: 20px;
   }
 }
 
 
 </style>
