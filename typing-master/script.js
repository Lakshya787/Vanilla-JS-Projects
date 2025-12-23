function isEmpty(value) {
  return !value || value.trim().length === 0;
}
let og_text="The quick brown fox jumps over the lazy dog. Practice makes progress."
let wow=JSON.parse(localStorage.getItem("TypePara"))|| og_text
let paste_text = document.getElementsByClassName("paste-btn")[0];
let start_test=document.getElementsByClassName("start-btn")[0]
let testText = document.getElementsByClassName("text-display")[0];
let time=document.getElementById("time")
let type_area=document.getElementsByTagName("textarea")[0]
let time_left=document.getElementById("time_left")
let wpm=document.getElementById("wpm")
let acc=document.getElementById("acc")
let timerId = null;
testText.textContent=wow
  paste_text.addEventListener("click", () => {
    let a=prompt("Paste text");
    if (isEmpty(a)) return;
    testText.textContent=a
    localStorage.setItem("TypePara",JSON.stringify(a))
  });
start_test.addEventListener("click",()=>{
if (isEmpty(time.value)) return;
acc.innerText=`${0}%`
wpm.innerText=`${0}`
type_area.value=""
type_area.disabled = false;
if (timerId) clearInterval(timerId);
let g = Number(time.value);
let t=Number(time.value)
time_left.innerText = `${g}s`;
const endTime = Date.now() + g * 1000;
 timerId = setInterval(() => {
  const remaining = Math.ceil((endTime - Date.now()) / 1000);
  if (remaining <= 0) {
    clearInterval(timerId);
    time_left.innerText = "0s";
    alert("Time's up");
    return;
  }
  time_left.innerText = `${remaining}s`;
}, 1000);
//sahi hai
setTimeout(()=>{
  let trimTypeArea=type_area.value.trim()
  let TestTextValue=testText.textContent.trim()
  let hh=evaluation(trimTypeArea)
  let ll = trimTypeArea.length
  acc.innerText = ll === 0 ? "0%" : `${((hh * 100) / ll).toFixed(2)}%`;
  wpm.innerText=`${((trimTypeArea.length * 60) / (5 * t)).toFixed(2)}`
  type_area.disabled=true
},t*1000)
})
function evaluation(str){
  let testAreaText=testText.innerText.trim()
  let Str=str.trim()
  let u=0;
  let y=0;
  for  (let i = 0; i < Math.min(Str.length, testAreaText.length); i++) {
    if (Str[i]===testAreaText[i]){
      u++;
    }
    y++;
  }
  return u;
}