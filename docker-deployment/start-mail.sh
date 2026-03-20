#!/bin/bash
echo "Building Mail Service..."
docker build -t mail-service ../backend/mail
echo "Running Mail Service..."
docker stop mail-container || true
docker rm mail-container || true
docker run -d -p 5001:5001 --name mail-container mail-service
