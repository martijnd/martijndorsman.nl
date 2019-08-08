#!/bin/bash
set -x

#import the deployment key
openssl aes-256-cbc -K $encrypted_1822c372ce6f_key -iv $encrypted_1822c372ce6f_iv -in deploy-key.enc -out deploy-key -d
rm deploy-key.enc
chmod 600 deploy-key
mv deploy-key ~/.ssh/id_rsa

npm install uglify-es -g
npm install sass -g