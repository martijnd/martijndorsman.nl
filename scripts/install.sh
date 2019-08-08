#!/bin/bash
set -x

#import the deployment key
openssl aes-256-cbc -K $encrypted_1822c372ce6f_key -iv $encrypted_1822c372ce6f_iv -in deploy-key2.enc -out deploy-key2 -d
rm deploy-key.enc
chmod 600 deploy-key2
ls ~/.ssh
mv deploy-key2 ~/.ssh/id_rsa
ls ~/.ssh

npm install uglify-es -g
npm install sass -g