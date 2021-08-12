const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sliderList = $$(".sliderItem")

const checkList = $$("input[type='radio']")


// click để chuyển slider
click()

function click(){
    Array.prototype.forEach.call(checkList, function(checkItem,indexs){
        checkItem.onclick = function(){
            Array.from(sliderList).forEach(function(slider, index){
                if(slider.classList.contains("ra")){
                    slider.classList.remove("ra")
                }
                if(indexs == index){
                    sliderList[index].classList.add("ra")
                }
            })
        
        }
    })   
}

const AutoSlider = function(){
    var index 
    Array.from(checkList).forEach(function(checkItem,indexs){
        if(checkItem.checked){
            index = indexs
        }
    })
    index++
    if(index == 3){
        index=0
    }
    checkList[index].onclick = function(){
        Array.from(sliderList).forEach(function(slider, indexs){
            if(slider.classList.contains("ra")){
                slider.classList.remove("ra")
            }
            if(indexs == index){
                sliderList[index].classList.add("ra")
            }
        })
    }
    checkList[index].click()
    
}

setInterval(AutoSlider, 2000)
