# Contributing Quick Start

Area uses the npm script to run the different parts of the whole project.

To learn more about how things works, take a look at our [./architecture.md](./architecture.md) document. It will help you better to visualize how we designed the repos and the main idea behind each part.
Feel free to reread that document whenever you need to understand some specific parts.
#### Table Of Contents

[Launching Area project](#Launching-Area-project)
  * [Prerequisites with Docker](#Prerequisites-with-Docker)
  * [Prerequisites without Docker](#Prerequisites-without-Docker)

[Running the program](#Running-the-program)
  * [With Docker](#With-Docker)
  * [Without Docker](#Without-Docker)

[Getting in Touch](#Getting-in-Touch)

[Styleguides](#Coding-Style)


# Launching Area project

## Prerequisites with Docker
First, you need to install docker, you can see the instruction to install it here: https://docs.docker.com/engine/install/ in the case of fedora you need to use this command
```
$ sudo dnf -y install dnf-plugins-core
```
Then you add the docker repo to the config manager.
```
$ sudo dnf config-manager \
    --add-repo \
    https://download.docker.com/linux/fedora/docker-ce.repo
```
When you the repo is added to your config-manager you can install docker now.
```
$ sudo dnf install docker-ce docker-ce-cli containerd.io
```
To run docker you have to use the systemctl command before.
```
$ sudo systemctl start docker
```

## Prerequisites without Docker
In case you don't want to use Docker you have to install react native, vue.js and node.js.

* React native: https://reactnative.dev/docs/environment-setup.
* Node.js : https://nodejs.org/en/docs/
* React.js: https://Reactjs.org/
* You also have to run ```npm install```to install all of the necessary packages into the folder **App_Server** and **Web_Client**

# Running the program 

## With Docker
To run the project with docker it's super straight-forward you have to build and execute the **docker-compose**
```
$ sudo docker-compose up --build
```
Note that **sudo** isn't always necessary.

The **build** flag is here to tell docker to rebuild the image from scratch it may take more times but it's useful if you want to update an image that is already built.

## Without Docker
* First you need to run the server, go to [../App_Server](../App_Server) folder and then you run the npm scripts ```$ npm run server```.
* Now that the server is listening to a specific port you have to run the Web part, go to [../Web_Client](../Web_Client) folder and run the npm scripts for the web part ```$ npm run serve```.
* And lastly it's time for the mobile application. Make sure that you have an android device connected to your computer with USB or that you have an emulator running in the background. Go to [../Mobile_Client](../Mobile_Client) and run ```$ react-native start``` and then in another terminal ```$ react-native android```. 

# Getting in Touch

If you want to contact the main contributor of this project you can just send a pm through our github profile or via emails.

# Coding Style

Do see [./style.md](./style.md)