#!/bin/bash
docker build -t websocket-server .
docker run -p 8080:8080 websocket-server
