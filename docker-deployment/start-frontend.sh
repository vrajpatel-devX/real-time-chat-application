#!/bin/bash
echo "Building Frontend Service..."
docker build -t frontend-service ../frontend
echo "Running Frontend Service..."
docker stop frontend-container || true
docker rm frontend-container || true
docker run -d -p 3000:3000 --name frontend-container frontend-service
