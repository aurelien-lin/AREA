# Architecture

This document is going to describes the architecture of the area.

If you want an in depth guide about how every parts works and interact with each other please see [guide](./Areas.md).
![images](./img/)
The app is divided in *three* parts in which we distinguish **two** levels.


## First level
### The "back"
### The services.
The services represent all of the different API supported by the application server and available from clients so the Area can work.
The services do not have a specific location in our code it's just all of the API.

### The server
The server is where we make all the calls toward the services.

The [Oauth](../App_Server/src/controller/authenticate) is the folder for the authentication with different services.

The [Area](../App_Server/src/actions) happens here too, like the oauth we made a single file for every action related to it's service, for exemple the Youtube file contains the 2 request that we made.

[Router](../App_Server/index.js) is where we stock all of the different routes that the mobile and web parts use to make all of their requests.


## Second level
### The "front"
The front is divided into two parts, the mobile and the web. Although the mobile and the web part are relatively similar.

#### Mobile part
 - [Navigation](../Mobile_Client/src/components/root/StackNavigator.js) its does the navigation.
 - [Authentication](../Mobile_Client/src/components/Auth/index.js) in the mobile the oauth is made with some webView and not directly by asking the server about it like in the web.
 - [Profile](../Mobile_Client/src/components/profile) that the application will use most of the time, it permit us to navigate freely after we logged in.

 - [Api](../Mobile_Client/src/components/api) is the main place to be. It is divided in two different **folder** the **area** one and the **auth** one.
    * The **area** is where all of the different area are located, it's where we call the server to get all of the information and to make the different action needed. If you want to link your action that you made in the back it's definetely the place where you want to add it.

    * The **auth** one, this folder is only in the mobile part because in the mobile the oauth is made with some webView and not directly by asking the server about it like in the web.

 - [Pages](../Mobile_Client/src/components/pages) is the place where we add all the front.

 - [Profile](../Mobile_Client/src/components/profile/Profile.js) shows all of the different **Services** available and then they launch the **area**.
 - [Login](../Mobile_Client/src/components/login)
 The **Login** screen doesnt call anything in the mobile part, they ask directly the server if the users is authenticated or not.
 - [Register](../Mobile_Client/src/components/register)
 The **Register** screen also interacts directly with the server.

[Style](../Mobile_Client/src/style.js) is where we try to add all of our style that we might use again in the future, like fonts, colors, stylesheet...

#### Web part
The Web part will be pretty short because we already described most of the concept in the previous part.

 - [Assets](../Web_Client/src/assets) folder is where all of the different logo that we use are.

 - [Components](../Web_Client/src/components) is where we add our function the **login** or **logout**, it also have an **area** folder that we use to call all of the different **action** in the server part.

 - [Pages](../Web_Client/src/pages) contain only the **front**, all of the different webpage that we use in this project.

 - [Router](../Web_Client/src/App.js) is where you add all of the navigation for the web.
