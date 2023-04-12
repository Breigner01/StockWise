FROM amazoncorretto:11
WORKDIR /home/app
COPY ./target/classes /home/app/classes
COPY ./target/dependency/* /home/app/libs/
EXPOSE 8080
ENTRYPOINT ["java", "-cp", "/home/app/libs/*:/home/app/classes/", "com.example.Application"]
