# Personal Monorepo Microservice


# Overview
Contain 3 services:
  ms-user: User service
    2 node
  ms-note: Note service
    2 node
  ms-category: Category service
    2 node

Databases: 
  Postgres: sharding by time
    1 master
    1 slave
  Redis cache:
    1 cluster

Full text Search:
  Elastic or Postgres

Logging & mornitoring:
  Jeager or Loki
  Prometheus

Deployment:
  pm2
  docker-compose

API:
  graphQL
  gRPC

Message Queue:
  Kafka

Service Registry / Discovery
  nginx











  
