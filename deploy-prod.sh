#!/bin/bash
# ============================================
# Production Deployment Script for ZeraPOS FE
# ============================================

set -e  # stop on first error

# --- Configuration ---
IMAGE_NAME="zerapos-fe"               # Docker image name
CONTAINER_NAME="zerapos-fe-container" # Consistent container name
BRANCH="main"                         # Branch to deploy

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

# Stop and remove any existing container with the same name
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
  log "Stopping existing container ($CONTAINER_NAME)..."
  docker stop $CONTAINER_NAME
fi

if [ "$(docker ps -a -q -f name=$CONTAINER_NAME)" ]; then
  log "Removing old container ($CONTAINER_NAME)..."
  docker rm $CONTAINER_NAME
fi

log "Running new container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p 8080:80 \
  --restart always \
  $IMAGE_NAME

log "✅ Deployment complete! Container '$CONTAINER_NAME' is now running on port 8080."
