/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-04 18:59:09
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-03-08 23:09:53
 * @FilePath: /50projects_js/progress_steps/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const progress=document.getElementById('progress')
const prev=document.getElementById('prev')
const next=document.getElementById('next')
const circles=document.querySelectorAll('.circle')

let curretActive=1
next.addEventListener('click',()=>{
  curretActive++;
  if (curretActive>circles.length){
    curretActive=circles.length
  }
  update()
})
prev.addEventListener('click',()=>{
  curretActive--;
  if (curretActive<1){
    curretActive=1
  }
  update()
})

function update(){
  circles.forEach((circle,idx)=>{
    if (idx<curretActive){
      circle.classList.add('active')
    }else{
      circle.classList.remove('active')
    }
  })
  const actives=document.querySelectorAll('.active')
  progress.style.width=(actives.length-1)/(circles.length-1)*100+'%'

  if (curretActive===1){
    prev.disabled=true
  }else if(curretActive===circles.length){
    next.disabled=true
  }else{
    next.disabled=false
    prev.disabled=false
    console.log(curretActive)
  }
  console.log(circles.length)
}