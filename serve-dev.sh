#!/usr/bin/env bash

# serve-dev.sh
# To serve dev webpage at yours local ip with port=8000

ip=$(hostname -I | awk '{print $1}')
port=8000

address=$ip:$port

properdocs serve -f properdocs-dev.yml -a $address
