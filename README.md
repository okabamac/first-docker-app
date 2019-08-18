# The following are simple docker compose commands to get started
# But for this particular app to build it just use the following

* docker-compose -f docker-compose.dev.yml up --build 
* docker-compose -f docker-compose.prod.yml up --build


# Start all services
# This will start all services in the docker-compose file and detach from the terminal. So your services can run in background.

1. docker-compose start

# Stop all services
# Corresponding stop command

2. docker-compose stop

# Launch a specific service
# This will only launch njs1 from the list of services in the docker-compose.yml

3. docker-compose up <servicename>

# Restart a single service

4. docker-compose restart <servicename>

# logs from specific service
# This will show logs of only njs1 and also watch for more logs

5. docker-compose logs -f <servicename>

# ssh into a particular service container

6 docker-compose exec <servicename> bash


Low on space / messed up and want to restart everything from scratch ?
Removing all images and then refreshing the entire thing.

To remove all docker containers:

* docker rm $(docker ps -a -q) -f

To remove all docker images:

* docker rmi $(docker images) -f


