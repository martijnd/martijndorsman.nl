#!/bin/bash
set -x

uglifyjs js/main.js -o public/js/main.min.js -cm
sass css/styles.scss:public/css/styles.css --style compressed