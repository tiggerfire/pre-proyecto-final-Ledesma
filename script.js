let video = document.querySelector("video");

const reproducir = () => {
  video.play(); //para iniciar la reproduccion
  console.dir(video);
  let zonaTiempoReal = document.querySelector("#tiempoReal");
  muestraDurActual = setInterval(() => {
    console.log("re reproduce la actualizacion del tiempo real");
    zonaTiempoReal.textContent = transformarTiempo(video.currentTime);
  }, 1000);
};

const pausar = () => {
  video.pause(); //para pausar el video
  console.dir(video);
  clearInterval(muestraDurActual);
};

let seccionDur = document.querySelector("#duracion");

const transformarTiempo = (tiempo) => {
  //1 minuto -> 60seg
  if (tiempo < 60) {
    return `00:${tiempo.toFixed(0)}`;
    //metodo toFixed(cant. decimales)
  } else {
    console.log(tiempo / 60);
    let minutos = parseInt(tiempo / 60);
    let segundos = (tiempo / 60 - minutos) * 60;
    return `${minutos}:${segundos.toFixed(0)}`;
  }
};
