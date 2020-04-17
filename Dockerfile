# Use an existing docker image as base
FROM alpine

#Down load and install all dependency
RUN apk add --update redis
RUN apk add --update gcc

# Tell the image what to do when it start
# as a container
CMD [ "redis-server" ]