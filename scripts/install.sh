#!/bin/bash
set -x

#import the deployment key
openssl aes-256-cbc -K $encrypted_67d9941d7096_key -iv $encrypted_67d9941d7096_iv -in deploy-key.enc -out deploy-key -d
rm deploy-key.enc
chmod 600 deploy-key
mv deploy-key ~/.ssh/id_rsa

npm install uglify-es -g
npm install sass -g