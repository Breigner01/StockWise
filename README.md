# SOEN487-Project3

Final project for SOEN 487, the goal is to have a webapp with at least 3 web services.

## Run

To run the project, you need to have [docker](https://docs.docker.com/engine/install/) and 
[docker compose](https://docs.docker.com/compose/install/) installed on your machine. 

First you will need to copy the `.env.example` file to `.env` and fill in the values.

```bash
cp .env.example .env
```

Then you can run the project with the following commands:

```bash
docker-compose build
docker-compose up -d
```