import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'thicccboi';
    background-color: #050924;

.container{
  display: block;
  position: relative;
  margin: 0 auto;
  height: auto;
  width: 800px;
  padding: 3rem 0rem;
}

.container .title{
    font-size: 3em;
    text-align: center;
    border: 5px solid var(--primary-color);
    padding: .3em .2em;
    border-radius: 4px;
}

.text-light {
	color: var(--light-color)
}

.container ul{
  list-style: none;
  margin: 0;
  padding: 0;
	overflow: auto;
}

.container .questions{
    padding: 3em;
}

.container .grid{
    margin-top: 3em;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.container .btn{
    padding: .7rem 3rem;
    border: none;
    border-radius: .5rem;
    font-size: 1.2em;
    font-family: 'thicccboi';
}

.container .btn:hover{
    cursor: pointer;
    background-color: #f0f0f0;
    color: #202020;
}

.next{
    background-color: var(--primary-color);
    justify-self: flex-end;
}

.prev{
    background-color: #faff5a;
    justify-self: flex-start;
    margin-left: -140px;
}

ul li{
  color: #AAAAAA;
  display: block;
  position: relative;
  float: left;
  width: 100%;
  height: 100px;
	border-bottom: 1px solid #333;
}

ul li input[type=radio]{
  position: absolute;
  visibility: hidden;
}

ul li label{
  display: block;
  position: relative;
  font-weight: 300;
  font-size: 1.35em;
  padding: 25px 25px 25px 80px;
  margin: 10px auto;
  height: 30px;
  z-index: 9;
  cursor: pointer;
  -webkit-transition: all 0.25s linear;
}

ul li:hover label{
	color: #FFFFFF;
}

ul li .check{
  display: block;
  position: absolute;
  border: 5px solid #AAAAAA;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  top: 30px;
  left: 20px;
	z-index: 5;
	transition: border .25s linear;
	-webkit-transition: border .25s linear;
}

ul li:hover .checked {
  border: 5px solid #FFFFFF;
}

ul li .check::before {
  display: block;
  position: absolute;
  content: '';
  border-radius: 100%;
  height: 11px;
  width: 11px;
  left: 2px;
  top: 2px;
  margin: auto;
  transition: background 0.25s linear;
  -webkit-transition: background 0.25s linear;
}


input[type=radio]:checked ~ .check {
  border: 5px solid var(--primary-color)
}

input[type=radio]:checked ~ .check::before{
  background: var(--primary-color)
}

input[type=radio]:checked ~ .text-primary{
  color: var(--primary-color)
} 

.checked {
  border: 5px solid var(--primary-color) !important;
}

.checked::before{
  background: var(--primary-color)
}
`