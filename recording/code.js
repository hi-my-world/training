click.addEventListener('click',function(){
var speach=true
window.SpeechRecognition=window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();
recognition.interimResults=true;
recognition.lang = 'ar_SA'
recognition.addEventListener('result',e=>{
    const transcript=Array.from(e.results)
     .map(result=>result[0])
     .map(result=>result.transcript)
    convert_text.innerHTML =transcript
   })


if (speach== true ){
    recognition.start()
}


}
)
