#!/usr/bin/env bash

# serve-dev.sh
# To serve dev webpage at yours local ip with port=8000

ip=$(hostname -I | awk '{print $1}')
port=8000

address=$ip:$port

mkdocs serve -f mkdocs-dev.yml -a $address
