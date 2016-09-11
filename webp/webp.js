var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "./img",            // Output folder
  PNGImages = "./img/*.png",         // PNG images
  JPEGImages = "./img/*.jpg";        // JPEG images

new imagemin().src(PNGImages).dest(outputFolder).use(webp({
  lossless: true // Losslessly encode images
})).run();

new imagemin().src(JPEGImages).dest(outputFolder).use(webp({
  quality: 65 // Quality setting from 0 to 100
})).run();
