#!bin/bash

npm install;

docker run --name me-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=moonexchange -d postgres:18.4-alpine3.22;

docker run --name me-influx -p 8086:8086 -e DOCKER_INFLUXDB_INIT_MODE=setup -e DOCKER_INFLUXDB_INIT_USERNAME=influx -e DOCKER_INFLUXDB_INIT_PASSWORD=influx -e DOCKER_INFLUXDB_INIT_ORG=moonexchange -e DOCKER_INFLUXDB_INIT_BUCKET=me-bucket -d influxdb:1.12-alpine;







