
const datebox = document.querySelectorAll('.time')
const date = document.querySelector('.date')

const curentdate = new Date()
const year=curentdate.getFullYear()     
const month=curentdate.getMonth()
const day=curentdate.getDate()
const futerdate= new Date(year,month,day+1,2,29,1,0)
const futerdateinsec = futerdate.getTime()


function getnewtim(){
const datnaw = new Date().getTime()
const timeleft = futerdateinsec - datnaw

const dayms=24*60*60*1000
const onehour=60*60*1000
const onemins=60*1000
let dayleft = timeleft/dayms
dayleft=Math.floor(dayleft)


let hourleft= (timeleft%dayms)/onehour
hourleft=Math.floor(hourleft)
     

let minleft =(timeleft%onehour)/onemins
minleft=Math.floor(minleft)
   

let secleft =Math.floor((timeleft%onemins)/1000) 

const values=[dayleft,hourleft,minleft,secleft]

function format(item){
    if(item<10){ 
        
        return `0${item}`
    

    }
    return item
}
 datebox.forEach((box,index)=>{
    return box.textContent=format(values[index])
} )


  if(dayleft<0){
      clearInterval(countdawn)
   date.innerHTML=`<h4  class="end_date">ends of giveaway</h4>`
  }


}
  let countdawn=setInterval(getnewtim,1000)
getnewtim()
