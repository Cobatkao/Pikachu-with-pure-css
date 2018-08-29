function loadCode(prefix, code, fn) {
  let container = document.querySelector('#code')
  let styleTag = document.querySelector('#styleTag')
  let n, timeout
  n = 0
  timeout = setTimeout( function run() {
    n += 1
    container.innerHTML = code.substring(0, n)
    styleTag.innerHTML = code.substring(0, n)
    container.scrollTop = container.scrollHeight
    if (n < code.length) {
      timeout = setTimeout(run, 6)
    } else {
      fn && fn.call()
    }
  }, 10);
}

  let code =  `
  .nose {
    width: 0px;
    height: 0px;
    border: 12px solid #000000;
    border-color: #000000 transparent transparent transparent;
    border-radius: 50%;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 27px;
  }
  .eye {
    width: 50px;
    height: 50px;
    background-color: #2e2e2e;
    border: 2px solid #000000;
    border-radius: 50%;
    position: absolute;
  }
  .eye.left {
    right: 50%;
    margin-right: 67px;
  }
  .eye.right {
    left: 50%;
    margin-left: 67px;
  }
  .eye::before {
    content: '';
    display: block;
    position: absolute;
    left: 6px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: white;
    border: 2px solid #000000;
  }
  .cheek {
    width: 69px;
    height: 69px;
    border-radius: 50%;
    background-color: #eb3324;
    border: 2px solid #000000;
    position: absolute;
    top: 84px;
  }
  .cheek.left {
    right: 50%;
    margin-right: 119px;
  }
  .cheek.right {
    left: 50%;
    margin-left: 119px;
  }
  .upperLip {
    width: 80px;
    height: 30px;
    border: 3px solid #000000;
    position:absolute;
    background-color: #fee433;
  }
  .upperLip.left {
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 40px 25px;
    right: 50%;
    top: 55px;
    transform: rotate(-25deg);
  }
  .upperLip.right {
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 40px 25px;
    left: 50%;
    top: 56px;
    transform: rotate(25deg);
  }
  .lowerLip-wrapper {
    height: 135px;
    width: 300px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }
  .lowerLip {
    height: 3500px;
    width: 300px;
    border: 3px solid #000000;
    background-color: #8e1b17;
    border-radius: 200px / 2000px;
    position: absolute;
    bottom: 0px;
    overflow: hidden;
  }
  .lowerLip::after {
    content: '';
    width: 100px;
    height: 100px;
    background-color: #ec5763;
    position: absolute;
    bottom: 0px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  /*
   * 我的皮卡丘画好了，你喜欢吗~
   * /
`
loadCode('', code).call()


