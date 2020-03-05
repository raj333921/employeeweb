FROM adoptopenjdk/openjdk11:alpine-jre

FROM mysql/mysql-server:latest

# Refer to Maven build -> finalName
ARG JAR_FILE=target/employeeweb-1.0-SNAPSHOT.jar

# cd /opt/app
WORKDIR /opt/app

# cp target/employeeweb-1.0-SNAPSHOT.jar /opt/app/app.jar
COPY ${JAR_FILE} app.jar

EXPOSE 8080

# java -jar /opt/app/app.jar
ENTRYPOINT ["java","-jar","app.jar"]

