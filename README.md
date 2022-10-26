# Challenge-18-Social-Network-API

## Description

A back end for a social network site to add users and thoughts, as well as attach friends to a user and reactions to a thought.  Users and thoughts  
can also be updated and deleted.  Friends can be deleted from user friend lists, and reactions can be deleted from thoughts.  Database uses MongoDB, and Mongoose is used to interface with it.

- GET routes for all users and thoughts.  
  - Ex. GET /api/users
- GET routes for one user or thought using the auto-generated ID.  
  - Ex. GET /api/thoughts/{thoughtId}  
- POST routes to add a new user, thought, friend or reaction.  
  - Ex. POST /api/users
  - Ex. POST /api/thoughts/{thoughtId}/reactions/  
- PUT routes to update users or thoughts using the ID.  
  - Ex. PUT /api/thoughts/{thoughtId}  
- DELETE routes to delete a user, thought, friend or reaction using the ID,
  - Ex. DELETE /api/users/{userId}
  - Ex. DELETE /api/users/{userId}/friends/{friendId}  

## Installation
Necessary components will be installed with  
- npm i

## Usage

- Run `npm run seeds` to add initial data.
- Run `npm run start` to start the server  
      
- body JSON for POST and PUT routes as follows:
    - /api/users:  
    {  
        username: "user name",  
        email: "email@email.com" ***must be a valid email format***  
    }  
    - /api/thoughts:  
    {  
        thoughtText: "280 character max",  
        username: "user name",  
        userId: userId ***required to attach thought to user***  
    }  
    - /api/thoughts/{thoughtId}:  
    {  
        reactionBody: "280 characters max",  
        username: "user name"  
    }



## Walkthrough video

[Demo](https://drive.google.com/file/d/1fkzrrOGECKtD_8pJU4HROdNXzrl1e98H/view)