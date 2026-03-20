#!/bin/bash
echo "Building User Service..."
docker build -t user-service ../backend/user
echo "Running User Service..."
docker stop user-container || true
docker rm user-container || true
docker run -d -p 5000:5000 --name user-container user-service
