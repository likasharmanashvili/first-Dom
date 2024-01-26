const main = document.querySelector(".main")
function mainContainer  (width,backgroundColor,display,justifycontent,ElignItems,height,flexDirection) {
    main.style.width = width;
    main.style.backgroundColor = backgroundColor;
    main.style.display = display;
    main.style.justifyContent = justifycontent ; 
    main.style.ElignItems = ElignItems;
    main.style.height = height
main.style.flexDirection = flexDirection
   
}
mainContainer("100%",  "#252B42" , "flex","center","center","1110px", "column")

document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.display = 'flex';
document.body.style.flexDirection= 'column';
document.body.style.justifyContent = 'center';
document.body.style.ElignItems = 'center';
document.body.style.fontFamily = "Montserrat"




const content = document.querySelector(".content")
function MainsContent (display,justifycontent,ElignItems,flexDirection,textAlign,) {
             content.style.display = display;
             content.style.justifycontent = justifycontent;
             content.style.ElignItems = ElignItems;
             content.style.flexDirection = flexDirection
             content.style.textAlign = textAlign
}
MainsContent("flex","center","center" ,"column", "center" ,)


const heading = document.querySelector (".heading")
function headings  (fontSize,color) {
    heading.style.fontSize = fontSize;
    heading.style.color = color
}
headings ( "16px", "#23A6F0")

const headingA = document.querySelector (".headingA") 
function headingB (fontSize,color) {
    headingA.style.fontSize = fontSize;
    headingA.style.color = color
 
}

headingB ("58px","white",)


window.document.querySelector (".para").style.color = 'white'


const buttons = document.querySelector (".buttons")
function button (backgroundColor,width,height,color,border) {
    buttons.style.backgroundColor = backgroundColor;
    buttons.style.width = width;
    buttons.style.height = height;
    buttons.style.color = color
    buttons.style.border = border

} 
button ( "#23A6F0", "193px", "50px", "white","none");


const buttonA = document.querySelector (".buttonA")

function buttonStyle  (width,height,backgroundColor,color,borderRadius,borderRadiusColor,border) {
    buttonA.style.width = width;
    buttonA.style.height = height;
    buttonA.style.backgroundColor = backgroundColor;
    buttonA.style.color = color;
    buttonA.style.borderRadius = borderRadius
    buttonA.style.borderRadiusColor = borderRadiusColor;
    buttonA.style.border = border;
}
buttonStyle ("162px","50px","#252B42","#23A6F0","5px","#23A6F0","none")


const cardA = document.querySelector(".cardA")

function CardStyle  (width,height,backgroundColor,display,justifyContent,ElignItems,textAlign,flexDirection,margin,padding) {

cardA.style.width = width;
cardA.style.height = height;
cardA.style.backgroundColor = backgroundColor;
cardA.style.display = display;
cardA.style.justifyContent = justifyContent;
cardA.style.ElignItems = ElignItems;
cardA.style.textAlign = textAlign;
cardA.style.flexDirection =flexDirection
cardA.style.margin = margin
cardA.style.padding = padding
}

CardStyle ("328px","292px","white","flex","center","center","left","column","10px","20px")





const cardB = document.querySelector(".cardB")

function CardStyleB  (width,height,backgroundColor,display,justifyContent,ElignItems,textAlign,flexDirection,margin,padding) {

cardB.style.width = width;
cardB.style.height = height;
cardB.style.backgroundColor = backgroundColor;
cardB.style.display = display;
cardB.style.justifyContent = justifyContent;
cardB.style.ElignItems = ElignItems;
cardB.style.textAlign = textAlign;
cardB.style.flexDirection =flexDirection
cardB.style.margin = margin
cardB.style.padding = padding
}
CardStyleB ("328px","292px","white","flex","center","center","left","column","10px","20px")


const cardC = document.querySelector(".cardC")

function CardStyleC  (width,height,backgroundColor,display,justifyContent,ElignItems,textAlign,flexDirection,margin,padding) {

cardC.style.width = width;
cardC.style.height = height;
cardC.style.backgroundColor = backgroundColor;
cardC.style.display = display;
cardC.style.justifyContent = justifyContent;
cardC.style.ElignItems = ElignItems;
cardC.style.textAlign = textAlign;
cardC.style.flexDirection =flexDirection
cardC.style.margin = margin
cardC.style.padding = padding
}
CardStyleC ("328px","292px","#23A6F0","flex","center","center","left","column","10px","20px")



const cards = document.querySelector (".cards")

function allCardStyle (display,justifyContent,ElignItems,width,height,flexDirection,gap,marginTop) {
    cards.style.display = display; 
    cards.style.justifyContent = justifyContent;
    cards.style.ElignItems = ElignItems;
    cards.style.width = width;
    cards.style.height = height;
    cards.style.flexDirection = flexDirection
    cards.style.gap = gap
    cards.style.marginTop = marginTop
}


allCardStyle ("flex","center","center","100%","500px","row","30px","70px")

const ptag = document.querySelector ( ".ptag")

function paragparhStyle (color,fontSize,width) { 
    ptag.style.color = color;
    ptag.style.fontSize = fontSize;
    ptag.style.width = width
}

paragparhStyle ("gray", "15px","230px")
const ptagA = document.querySelector ( ".ptagA")

function paragparhStyleS (color,fontSize,width) { 
    ptagA.style.color = color;
    ptagA.style.fontSize = fontSize;
    ptagA.style.width = width
}

paragparhStyleS ("gray", "15px","230px")


const ptagB = document.querySelector ( ".ptagB")

function paragparhStyleB (color,fontSize,width) { 
    ptagB.style.color = color;
    ptagB.style.fontSize = fontSize;
    ptagB.style.width = width
}

paragparhStyleB ("white", "15px","230px")



const icon1 = document.querySelector (".icon1")
function IconStyle (width,color,backgroundColor,height,borderRadius,display,justifyContent,ElignItems) {
     icon1.style.width = width;
     icon1.style.color = color;
     icon1.style.backgroundColor = backgroundColor;

     icon1.style.height = height;
     icon1.style.borderRadius = borderRadius;
     icon1.style.display  = display;
     icon1.style.justifyContent = justifyContent
     icon1.style.ElignItems = ElignItems
}

IconStyle ("70px","red","#FFDCD1","67px", "10px" ,  "center","center","center","center")




const icon2 = document.querySelector (".icon2")
function IconStyleA (width,color,backgroundColor,height,borderRadius,display,justifyContent,ElignItems) {
     icon2.style.width = width;
     icon2.style.color = color;
     icon2.style.backgroundColor = backgroundColor;
   
     icon2.style.height = height;
     icon2.style.borderRadius = borderRadius;
     icon2.style.display  = display;
     icon2.style.justifyContent = justifyContent
     icon2.style.ElignItems = ElignItems
}

IconStyleA ("70px","Green","#B9EAA8","67px", "10px" ,  "center","center","center","center")




const icon3 = document.querySelector (".icon3")
function IconStyleB (width,color,backgroundColor,height,borderRadius,display,justifyContent,ElignItems) {
     icon3.style.width = width;
     icon3.style.color = color;
     icon3.style.backgroundColor = backgroundColor;

     icon3.style.height = height;
     icon3.style.borderRadius = borderRadius;
     icon3.style.display  = display;
     icon3.style.justifyContent = justifyContent
     icon3.style.ElignItems = ElignItems
}

IconStyleB ("70px","#23A6F0","white","67px", "10px" ,  "center","center","center","center")


const line = document.querySelector (".line") 
function lineStyle  (width,backgroundColor,height,marginLeft) {
  line.style.width = width; 
  line.style.backgroundColor = backgroundColor;
  line.style.height = height
  line.style.marginLeft = marginLeft;
}
lineStyle ("80px" ,"red", "2px", "5px")


const lineA = document.querySelector (".lineA") 
function lineStyleA  (width,backgroundColor,height,marginLeft) {
  lineA.style.width = width; 
  lineA.style.backgroundColor = backgroundColor;
  lineA.style.height = height
  lineA.style.marginLeft = marginLeft;
}
lineStyleA ("80px" ,"red", "2px", "5px")


const lineC = document.querySelector (".lineC") 
function lineStyleC  (width,backgroundColor,height,marginLeft) {
  lineC.style.width = width; 
  lineC.style.backgroundColor = backgroundColor;
  lineC.style.height = height
  lineC.style.marginLeft = marginLeft;
}
lineStyleC ("80px" ,"white", "2px", "5px")



window.document.querySelector (".headA").style.fontSize= '20px'
window.document.querySelector (".headB").style.fontSize= '20px'
window.document.querySelector (".headC").style.fontSize= '20px'
window.document.querySelector (".headC").style.color= 'white'



const textcontainer = document.querySelector (".textcontainer")
function textContainerStyle (display,justifyContent,ElignItems,textAlign) {
    
     textcontainer.style.display = display ;
    textcontainer.style.justifyContent = justifyContent ;
    textcontainer.style.ElignItems = ElignItems

    textcontainer.style.textAlign = textAlign
}

textContainerStyle ("center","center","center" , "center")


window.document.querySelector (".h3heading").style.color = "#23A6F0"
window.document.querySelector (".h3heading").style.fontSize = "15px"


const container = document.querySelector ( ".container")
 function Containerstyle (width,height,display,justifyContent,ElignItems,textAlign,marginTop) {

  container.style.display = display ;
  container.style.justifyContent = justifyContent ;
  container.style.ElignItems = ElignItems
  container.style.width = width
  container.style.textAlign = textAlign
  container.style.height  =height
  container.style.marginTop = marginTop
 }
Containerstyle ("100%","500px","center","center","center","center","100px")

const input = document.querySelector ( "input")
function inputStyle (width,height,backgroundColor,border) { 
     input.style.width  = width
     input.style.height = height
     input.style.backgroundColor = backgroundColor
     input.style.border = border
}

inputStyle ("370px", "40px","#E6E6E6","none")




const inputbutton = document.querySelector ( ".inputbutton")
function inputbuttonStyle (width,height,backgroundColor,border,color) { 
     inputbutton.style.width  = width
     inputbutton.style.height = height
     inputbutton.style.backgroundColor = backgroundColor
     inputbutton.style.border = border
     inputbutton.style.color = color
     
}

inputbuttonStyle ("80px", "40px","#23A6F0","none","white")


window.document.querySelector(".inputcontainer").style.marginTop = "50px"


window.document.querySelector(".containersp").style.fontSize = "13px"

window.document.querySelector(".containersp").style.color = "grey"







