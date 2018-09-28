# Easily create and run hidden services
[![Docker Pulls](https://img.shields.io/docker/pulls/crappyrules/turtletor.svg?style=plastic)](https://hub.docker.com/r/crappyrules/turtletor/)
![License](https://img.shields.io/badge/License-GPL-blue.svg?style=plastic)


Easily run a hidden service inside the Tor network with this container


Generate the skeleton configuration for you hidden service, replace <pattern> for your hidden service pattern name.
Example, if you want to your hidden service contain the word 'boss', just use this word as argument. You can use regular expressions, like ```^boss```, will generate an address wich will start with 'boss'. Be aware that bigger the pattern, more time it will take to generate it.

```sh
docker run -it --rm -v $(pwd)/web:/web \
       crappyrules/turtletor generate <pattern>
```


Create an container named 'turtletor' to serve your generated hidden service

```sh
docker run -d --restart=always --name turtletor -v $(pwd)/web:/web \
       crappyrules/turtletor
```

## Example

Let's create a hidden service with the name beginning with trtl.

```sh
docker pull crappyrules/turtletor
```

Wait to the container image be downloaded. And them we can generate our site skeleton:

```sh
$docker run -it --rm -v $(pwd)/web:/web crappyrules/turtletor generate ^trtl
[+] Generating the address with mask: ^trtl
[+] Found matching domain after 137072 tries: trtlfyygjp5st54g.onion
[+] Generating nginx configuration for site  trtlfyygjp5st54g.onion
[+] Creating www folder
[+] Generating index.html template
```

Now we have our skeleton generated, we can run the container with:

```sh
docker run -d --restart=always --name turtletor \
       -v $(pwd)/web:/web crappyrules/turtletor
```

And you have the service running ! :)

<p align="center">
  <img src="https://github.com/crappyrules/turtletor/raw/master/print.png" alt="print"/>
  </p>

## Troubleshoot

 - 403 error on nginx, check your directory permissions and folder permissions. Nginx run as "hidden" user, his UID is 666, just check if you give this user access to the /web/www folder (in the case the folder mapped to it).

## Build

docker build -t crappyrules/turtletor .

## Run

docker run -d --restart=always --name hiddensite \
       -v $(pwd)/web:/web crappyrules/turtletor

## Shell

docker run -it --rm -v $(pwd)/web:/web \
       --entrypoint /bin/bash crappyrules/turtletor
