#!/bin/bash
# ============================================
# Deployment Script for Production
# ============================================

# Stop immediately if a command fails
set -e

# --- Configuration ---
IMAGE_NAME="zerapos-fe"
CONTAINER_NAME="zerapos-fe"
BRANCH="main"           

# --- Helper function ---
log() {
  echo ""
  echo "------------------------------------------"
  echo "$1"
  echo "------------------------------------------"
  echo ""
}

# --- Script start ---
log "Fetching latest code..."
git fetch --all

log "Pulling latest changes from origin/$BRANCH..."
git pull origin $BRANCH

log "Building Docker image..."
docker build -t $IMAGE_NAME .

# Optional: stop and remove old container if it exists
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
  log "Stopping existing container..."
  docker stop $CONTAINER_NAME
fi

if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
  log "Removing old container..."
  docker rm $CONTAINER_NAME
fi

log "Starting new container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p 8080:80 \             # change port if needed
  --restart always \
  $IMAGE_NAME

log "✅ Deployment complete! Container is running."
