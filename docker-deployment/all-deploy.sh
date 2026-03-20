#!/bin/bash
echo "Deploying all 4 microservices..."
docker-compose up --build -d
echo "All services are running in background."
docker ps
