# <MongoSocialMediaAPI>

## Description

My motivation for this project was to be able to to create an API for a social network web application. This aplication will allow you too share thoughts, reaction and add friends. I will use express.js for routing, mongoDB as my database, and mongoose and my ODM. I better learned how to use models with mongoose and thier interactions with the mongoDB database.

## Installation

`Clone the git hub Repo from the repository`

    https://github.com/shadowfre4k/mongoSocialNetworkAPI

`Go into the root folder and use`

    npm i  for all of the dependenceies

`then you will be able to run server using`

    node index.js

## Usage

The following screenshots detail and show the routes and what is executed when you hit the endpoints

`/api` is the main route with no functionallity that will just display the text Wrong route!

![/api](/assets/images/Screenshot%201.png)

`api/user` will be the root for all of our user routes. it will contain two main endpoints for our getfunction `getUsers` and postFunction `createUser`

![getUsers](/assets/images/Screenshot%202.png)

![createUser](/assets/images/Screenshot%203.png)

`api/user/:userId` will be the all the user routes for id specific functions. it will contain three endpoints for our getfunction `getsingleUser`, postFunction `updateUser` and deleteFucntion `deleteUser`

![getsingleUser](/assets/images/Screenshot%204.png)

![updateUser](/assets/images/Screenshot%205.png)

![deleteUser](/assets/images/Screenshot%206.png)

`api/user/:userId/friends/:friendId` will be the all the user routes for friend functions. it will contain two endpoints for our postfunction `addFriend` and deleteFunction `removeFriend`

![addFriend](/assets/images/Screenshot%207.png)
![addfriendResult](/assets/images/Screenshot%207a.png)

---

![removeFriend](/assets/images/Screenshot%208.png)
![removeFriendResult](/assets/images/Screenshot%208b.png)

`api/thought` will be the root for all of our thought routes. it will contain two main endpoints for our getfunction `getThoughts` and postFunction `createThought`

![getThoguht](/assets/images/Screenshot%209.png)

![createThoguht](/assets/images/Screenshot%2010.png)

`api/thought/:thoughtId"` will be the all the thought routes for id specific functions. it will contain three endpoints for our getfunction `getsingleThoguht`, postFunction `updateThought` and deleteFucntion `deleteThoguht`

![getsingleThoguht](/assets/images/Screenshot%2011.png)

![updateThoguht](/assets/images/Screenshot%2012.png)
![updateThoguhtResult](/assets/images/Screenshot%2012b.png)

![deleteThought](/assets/images/Screenshot%2013.png)
![deleteThoughtResult](/assets/images/Screenshot%2013b.png)

`api/thought/:thoughtId/reactions` will be the all the reaction routes for friend functions. it will contain one functional endpoints for our postfunction `addReaction`

![addReaction](/assets/images/Screenshot%2014b.png)
![addReaction](/assets/images/Screenshot%2014.png)

## test

Please watch the video linked to see how it works !

- https://drive.google.com/file/d/18M48moPzQvKv9igahd7eT-ewcSBxqknE/view

## Question

For any questions please feel free to reach out to me

`contacts`

- Vincent Jacobs
- Email : vincentj095@gmail.com
- github : github.com/shadowfre4k
