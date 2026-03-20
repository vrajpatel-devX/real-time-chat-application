#!/bin/bash
echo "Building Chat Service..."
docker build -t chat-service ../backend/chat
echo "Running Chat Service..."
docker stop chat-container || true
docker rm chat-container || true
docker run -d -p 5002:5002 --name chat-container chat-service
