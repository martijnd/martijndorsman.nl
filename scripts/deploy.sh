#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    rsync -az -e "ssh -o StrictHostKeyChecking=no" ./public/ deploy@167.71.73.126:/var/www/martijnd/
else
    echo "Not deploying, since this branch isn't master"
fi