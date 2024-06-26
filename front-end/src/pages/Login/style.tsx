import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background:#283593; display:flex; justify-content:center; align-items:center; margin:0 auto;
    font-family: "thicccboi regular", "Sans-serif";
   
    .error-message {
        color: red;
    }

    #signin{width:40%; background:#3F51B5; margin:100px 50px; box-shadow:0 0 64px rgba(0,0,0,0.5); padding:100px; position:relative; overflow:hidden;}
    #signin .form-title{font:500 16px/1; color:#EBEBEB; text-align:center; margin:35px 0;}

    #signin .input-field{position:relative; height:50px; margin:35px 0; transition:all 300ms;}
    #signin .input-field i{position:absolute; bottom:28px; left:15px; color:#BBBBBB; height:0; visibility:hidden; font-size:100%; transition:height 250ms;}
    #signin .input-field label{width:100%; height:100%; position:absolute; margin-top:20px; left:4px; font:400 16px/1;  color:#FFF; opacity:1; transition:all 300ms;}
    #signin .input-field input{width:calc(100% - 70px); height:4px; font:500 16px/1;  padding:0 20px 0 50px; border:none; box-shadow:0 10px 10px rgba(0,0,0,0.25); color:#606060; border-radius:6px; outline:0; overflow:hidden; position:absolute; bottom:0; left:0; transition:all 300ms;}

    #signin .forgot-pw{font:600 14px/1;  color:#2E3C89; text-decoration:none; float:right; margin:0 0 25px 0; display:block;}
    #signin button.login{min-height:60px; font-weight:700; font-size: 20px; width:100%; padding:20px; display:block; background:#324192; color:#FFF; border:none; outline:0; cursor:pointer; position:absolute; left:0; bottom:0;}
    #signin .check{width:100%; height:100%; background:#324192; position:absolute; top:100%; left:0; text-align:center; visibility:hidden; transition:all 1s;}
    #signin .check.in{visibility:visible; top:0;}
    #signin .check i{color:#FFF; font-size:64px; line-height:7.4;}

    #signin .input-field input:focus{color:#333;}
    #signin .input-field input:focus, #signin .input-field input.not-empty{height:auto; padding:14px 20px 14px 50px;}
    #signin .input-field input:focus + i, #signin .input-field input.not-empty + i{font-size:24px; bottom:26px; height:10px; visibility:visible;}
    #signin .input-field input:focus + i + label, #signin .input-field input.not-empty + i + label{font-size:12px; margin-top:-15px; opacity:0.7; animation:label 300ms 1;}

    @keyframes label{
        0%{margin-top:-15px;}
        50%{margin-top:-25px;}
        100%{margin-top:-15px;}
    }

    #gif{width:50%;}
    #gif a img{max-width:100%; box-shadow:0 0 64px rgba(0,0,0,0.5);}
     
`