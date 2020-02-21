#!/usr/bin/env bash

mvn clean install
sudo docker build -t employee-web:1.0 .

sudo docker run -d -p 8080:8080 -t employee-web:1.0

