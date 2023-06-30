prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = m15.imageClassifier("https://teachablemachine.withgoogle.com/models/9RzjadMno/",modelLoaded)


function modelLoaded() {
    console.log('Model Loaded!');
        }

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
        
function gotResult(error, results){
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = result[0].label;
        document.getElementById("resultEmotionName2").innerHTML = result[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
    }}