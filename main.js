Webcam.set({ width: 350, height: 300, image_format: 'png', png_quality: 90 });

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    //data uri para mostrar la imagen almacena la ruta de la imagen.
    });
}
console.log('ml5 version:', ml5.version);
// Código JS para importar el modelo define variable "classifier"

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aGrH76ykF/model.json',modelLoaded);
function modelLoaded() { //Si no pasamos esta función, entonces la clasificación de imágenes ml5 no se iniciará.
    console.log('Model Loaded!'); //carga el modelo 
} // HASTA AQUI LLEGA CLASE 104

function check() {//INICIA CLASE 105  
    //define la función captura la imagen capturada y la almacena en una variable. 
    img = document.getElementById('captured_image'); //variable= classifier //
    //modelo= classify
    classifier.classify(img, gotResult); 
}

//El propósito de esta función es mostrar el resultado que se logra después de identificar la imagen con el modelo en la función check(). 
function gotResult(error, results) { 
    //tiene dos parámetros: uno para errores y otro para resultados. 
    if (error) { console.error(error); } 
    else {
        console.log(results);
        //nombre del objeto se le asigna una variable de tipo arrays 
        document.getElementById("result_object_name").innerHTML = results[0].label;
        //contiene una etiqueta de confianza (confidence) = precisión. 
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
        //Aquí solo queremos 3 dígitos después del decimal. Es por eso por lo que colocamos el número 3 dentro de toFixed().
        //Tú puedes colocar el número que prefieras.
    }
}