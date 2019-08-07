#!/bin/bash
set -x

mkdir -p public/js
uglifyjs js/main.js -o public/js/main.min.js -cm
sass css/styles.scss:public/css/styles.css --style compressed