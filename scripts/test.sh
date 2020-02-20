#!/bin/bash
set -x

timeout 30s bundle exec htmlproofer public --only-4xx --external_only --check-html --check-favicon --allow-hash-href --http-status-ignore "429,403"
