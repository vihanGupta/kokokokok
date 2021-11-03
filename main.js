Webcam.set({
    width: 350,
    heigth:300,
    image_format:'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function snapshotImg()
{
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML = '<Img id="capture_image" src="'+pic+'">';
    });
}
console.log("ml5 version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TIlxu-PUi/model.json',modelloded);

function modelloded()
{
    console.log('modelloded');
}

function check()
{
    image = document.getElementById('capture_image');
    classifier.classify(image,gotresult)
}

  function gotresult(error,result)  
  {
      if (error) {
          console.error(error);
      }else{
          console.log(result);
          document.getElementById("result_object_name").innerHTML = result[0].label;
          document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(2);
      }
  }