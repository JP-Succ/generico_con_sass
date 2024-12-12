import { src, dest, watch } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

// Creamos tarea para compilar sass
export function css(done) {
  src("src/scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("build/css"));
  done(); //Para finalizar ejecución de la función
}

export function dev() {
  // No pasamos done porque no queremos q finalice la ejecucion
  //   Observa el archivo q le ponemos y cuando haya cambios ejecuta la funcion css
  watch("src/scss/**/*.scss", css);
}
