#!/usr/bin/env bash

mvn clean install

sudo docker build -t employee-web:1.0 .

sudo docker run --name=mysql1 -d mysql/mysql-server:8.0

sudo docker run -d --name=employee-web -p 8080:8080 -t employee-web:1.0



