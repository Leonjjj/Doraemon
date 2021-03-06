const string = `
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  .outside {
    color: white;
    min-height: 50vh;
  }
  .tou {
    border: 3px solid black;
    height: 600px;
    width: 600px;
    left: 50%;
    margin-left: -300px;
    position: relative;
    border-radius: 50%;
    background-color: RGB(60, 157, 202);
  }
  
  .face {
    border: 1px solid black;
    height: 462px;
    width: 524px;
    position: absolute;
    left: 50%;
    margin-left: -262px;
    top: 132px;
    border-radius: 100%;
    background: white;
  }
  
  .eyeLeft {
    border: 1px solid red;
    position: absolute;
    left: 50%;
    width: 125px;
    height: 152px;
    margin-left: -125px;
    border-radius: 100%;
    top: 80px;
    border: 1px solid black;
    background: white;
    z-index: 10;
  }
  .eyeRight {
    background: white;
    border: 1px solid black;
    position: absolute;
    left: 50%;
    width: 125px;
    height: 152px;
    border-radius: 100%;
    top: 80px;
    z-index: 10;
  }
  
  
  .eyeRight::before {
    content: "";
    width: 25px;
    height: 45px;
    border-radius: 100%;
    position: relative;
    background: black;
    display: block;
    top: 90px;
    left: 20px;
    animation: move 4s ease infinite;
  }
  .eyeRight::after {
    content: "";
    width: 10px;
    height: 15px;
    border-radius: 100%;
    position: relative;
    background: white;
    display: block;
    top: 70px;
    left: 25px;
    animation: move 4s ease infinite;
  }
  .eyeLeft::before {
    content: "";
    width: 25px;
    height: 45px;
    border-radius: 100%;
    position: relative;
    background: black;
    display: block;
    top: 90px;
    left: 20px;
    animation: move 4s ease infinite;
  }
  .eyeLeft::after {
    content: "";
    width: 10px;
    height: 15px;
    border-radius: 100%;
    position: relative;
    background: white;
    display: block;
    top: 70px;
    left: 25px;
    animation: move 4s ease infinite;
  }
  
  .nose {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background: #b90319;
    left: 50%;
    position: absolute;
    margin-left: -22.5px;
    top: 205px;
    z-index: 10;
  }
  .nose::before {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: white;
    top: 20px;
    left: 10px;
    position: relative;
  }
  
  .mouse {
    position: absolute;
    border: 2px solid;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    left: 50%;
    margin-left: -200px;
    top: 150px;
    border-color: black;
    z-index: 1;
  }
  .mouse::before {
    content: "";
    display: block;
    width: 410px;
    height: 402px;
    margin-left: -5px;
    position: absolute;
    background: white;
    border-radius: 100%;
    top: -20px;
    margin-left: -8px;
  }
  
  .beardLeft1 {
    z-index: 10;
    position: absolute;
    width: 2.5px;
    height: 200px;
    background: black;
    transform: rotate(120deg) translate(20px, -120px);
  }
  .beardLeft2 {
    z-index: 10;
    position: absolute;
    width: 2.5px;
    height: 200px;
    background: black;
    transform: rotate(90deg);
    top: 150px;
    left: 80px;
  }
  
  .beardLeft3 {
    z-index: 10;
    position: absolute;
    width: 2.5px;
    height: 200px;
    background: black;
    transform: rotate(60deg);
    top: 230px;
    left: 80px;
  }
  .beardRight1 {
    z-index: 10;
    position: absolute;
    width: 2.5px;
    height: 200px;
    background: black;
    transform: rotate(90deg);
    right: 80px;
    top: 150px;
  }
  .beardRight2 {
    z-index: 10;
    position: absolute;
    width: 2.5px;
    height: 200px;
    background: black;
    transform: rotate(240deg);
    right: 100px;
    top: 80px;
  }
  
  .beardRight3 {
    z-index: 10;
    position: absolute;
    width: 2.5px;
    height: 200px;
    background: black;
    transform: rotate(120deg);
    right: 100px;
    top: 230px;
  }
  
  .shu {
    position: absolute;
    width: 1.5px;
    height: 340px;
    background: black;
    left: 50%;
    top: 210px;
    z-index: 9;
  }

  @keyframes move {
    25% {
      transform: translate(20px, 0px);
    }
    50% {
      transform: translate(40px, -20px);
    }
    75% {
      transform: translate(20px, 0px);
    }
  }
`

export default string;