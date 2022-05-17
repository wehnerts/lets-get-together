FROM openjdk:17

ENV ENVIRONMENT=prod

ADD backend/target/lets-get-together.jar lets-get-together.jar

EXPOSE 8080

CMD [ "sh", "-c", "java -Dserver.port=$PORT -jar /lets-get-together.jar" ]