# assignment_Aexonic

## Installation Setps
    - git clone https://github.com/bhosale05/assignment_Aexonic.git
    - npm Install

## Executation setps
    - node index.js

## List Of API hit on Postman For Add new User 
    1.Login Api
        Method : Post
        URL : localhost:3000/users/login
        Payload : {
                    "email":"joy@gmail.com",
                    "password": "joyyy!@#"
        }

    2.Registration API
        Method : Post
        URl :  localhost:3000/users/registration
        Payload : {
                    "first_name" : "joy",
                    "last_name" : "lie",
                    "mobile" : "9665275196",
                    "email":"joy@gmail.com",
                    "password": "joylie@05#",
                    "address": "MG road pune"
                }

        Note :  create JWT Token with expair time 5sec.
    
    2. Update User By Id: 
        Method : put
        URL :  localhost:3000/users/id like localhost:3000/users/60b3d237e14b632cbc4ca20a
        Payload : {
                    "email":"Joy05@gamil.com",
                    "mobile": "9665225076"
                }

    4. Get All users : 
        Method : Get
        URL : localhost:3000/users/
        Headers : Key : Authorization
                  Value : enter token 
                        like bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsicmVzdWx0Ijp7Im4iOjEsIm9wVGltZSI6eyJ0cyI6IjY5NjgzNDA5NDc0NzQwNTUxNjkiLCJ0IjoxM30sImVsZWN0aW9uSWQiOiI3ZmZmZmZmZjAwMDAwMDAwMDAwMDAwMGQiLCJvayI6MSwiJGNsdXN0ZXJUaW1lIjp7ImNsdXN0ZXJUaW1lIjoiNjk2ODM0MDk0NzQ3NDA1NTE2OSIsInNpZ25hdHVyZSI6eyJoYXNoIjoibjQvR2VwWFl0dTBDQlZYMnc3NnN0MVJxVUk4PSIsImtleUlkIjoiNjk0MDc0ODM5MzkzNzM3MTEzOSJ9fSwib3BlcmF0aW9uVGltZSI6IjY5NjgzNDA5NDc0NzQwNTUxNjkifSwiY29ubmVjdGlvbiI6eyJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50Ijo0LCJpZCI6MSwiYWRkcmVzcyI6IjU0Ljg3Ljk2LjIxODoyNzAxNyIsImJzb24iOnt9LCJzb2NrZXRUaW1lb3V0IjowLCJob3N0IjoiYWItc2hhcmQtMDAtMDIuZW94cGkubW9uZ29kYi5uZXQiLCJwb3J0IjoyNzAxNywibW9uaXRvckNvbW1hbmRzIjpmYWxzZSwiY2xvc2VkIjpmYWxzZSwiZGVzdHJveWVkIjpmYWxzZSwibGFzdElzTWFzdGVyTVMiOjQ0MX0sIm9wcyI6W3sibmFtZSI6ImpveSIsIm1vYmlsZSI6Ijk2NjUyNzUxOTYiLCJlbWFpbCI6ImpveUBnbWFpbC5jb20iLCJhZGRyZXNzIjp7InN0cmVldCI6ImJhcnNoaSIsImxvY2FsaXR5IjoiaGluZGkiLCJjaXR5IjoiYmFyc2hpIiwic3RhdGUiOiJtaCIsInBpbmNvZGUiOiI0MTM0MDEiLCJnZW9tZXRyeSI6eyJ0eXBlIjoiUG9pbnQiLCJjb29yZGluYXRlcyI6Wy04MC45LDI0LjJdfX0sImNyZWF0ZWRBdCI6IjIwMjEtMDUtMzFUMDY6NDE6NDkuNzgyWiIsIl9pZCI6IjYwYjQ4NTJkM2MzZjZmMmE1NGUzZjRlOSJ9XSwiaW5zZXJ0ZWRDb3VudCI6MSwiaW5zZXJ0ZWRJZCI6IjYwYjQ4NTJkM2MzZjZmMmE1NGUzZjRlOSIsIm4iOjEsIm9wVGltZSI6eyJ0cyI6IjY5NjgzNDA5NDc0NzQwNTUxNjkiLCJ0IjoxM30sImVsZWN0aW9uSWQiOiI3ZmZmZmZmZjAwMDAwMDAwMDAwMDAwMGQiLCJvayI6MSwiJGNsdXN0ZXJUaW1lIjp7ImNsdXN0ZXJUaW1lIjoiNjk2ODM0MDk0NzQ3NDA1NTE2OSIsInNpZ25hdHVyZSI6eyJoYXNoIjoibjQvR2VwWFl0dTBDQlZYMnc3NnN0MVJxVUk4PSIsImtleUlkIjoiNjk0MDc0ODM5MzkzNzM3MTEzOSJ9fSwib3BlcmF0aW9uVGltZSI6IjY5NjgzNDA5NDc0NzQwNTUxNjkifSwiaWF0IjoxNjIyNDQzMzEwLCJleHAiOjE2MjI0NDM4MTB9.FfKbweJMb-jkYzLV6S0ZITvfMkO_aTJpQJN8vVf-kLQ

        Note : - if token is expair or invalid then gives error use jwt token auth
               - if do not have authontication then remove middeware function i.e. tokenVerify in get all user api 


    5. Search users :
        Method : Get
        URl :  localhost:3000/users/search/joy
        Headers : Key : Authorization
                  Value : enter token 
                        like bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsicmVzdWx0Ijp7Im4iOjEsIm9wVGltZSI6eyJ0cyI6IjY5NjgzNDA5NDc0NzQwNTUxNjkiLCJ0IjoxM30sImVsZWN0aW9uSWQiOiI3ZmZmZmZmZjAwMDAwMDAwMDAwMDAwMGQiLCJvayI6MSwiJGNsdXN0ZXJUaW1lIjp7ImNsdXN0ZXJUaW1lIjoiNjk2ODM0MDk0NzQ3NDA1NTE2OSIsInNpZ25hdHVyZSI6eyJoYXNoIjoibjQvR2VwWFl0dTBDQlZYMnc3NnN0MVJxVUk4PSIsImtleUlkIjoiNjk0MDc0ODM5MzkzNzM3MTEzOSJ9fSwib3BlcmF0aW9uVGltZSI6IjY5NjgzNDA5NDc0NzQwNTUxNjkifSwiY29ubmVjdGlvbiI6eyJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50Ijo0LCJpZCI6MSwiYWRkcmVzcyI6IjU0Ljg3Ljk2LjIxODoyNzAxNyIsImJzb24iOnt9LCJzb2NrZXRUaW1lb3V0IjowLCJob3N0IjoiYWItc2hhcmQtMDAtMDIuZW94cGkubW9uZ29kYi5uZXQiLCJwb3J0IjoyNzAxNywibW9uaXRvckNvbW1hbmRzIjpmYWxzZSwiY2xvc2VkIjpmYWxzZSwiZGVzdHJveWVkIjpmYWxzZSwibGFzdElzTWFzdGVyTVMiOjQ0MX0sIm9wcyI6W3sibmFtZSI6ImpveSIsIm1vYmlsZSI6Ijk2NjUyNzUxOTYiLCJlbWFpbCI6ImpveUBnbWFpbC5jb20iLCJhZGRyZXNzIjp7InN0cmVldCI6ImJhcnNoaSIsImxvY2FsaXR5IjoiaGluZGkiLCJjaXR5IjoiYmFyc2hpIiwic3RhdGUiOiJtaCIsInBpbmNvZGUiOiI0MTM0MDEiLCJnZW9tZXRyeSI6eyJ0eXBlIjoiUG9pbnQiLCJjb29yZGluYXRlcyI6Wy04MC45LDI0LjJdfX0sImNyZWF0ZWRBdCI6IjIwMjEtMDUtMzFUMDY6NDE6NDkuNzgyWiIsIl9pZCI6IjYwYjQ4NTJkM2MzZjZmMmE1NGUzZjRlOSJ9XSwiaW5zZXJ0ZWRDb3VudCI6MSwiaW5zZXJ0ZWRJZCI6IjYwYjQ4NTJkM2MzZjZmMmE1NGUzZjRlOSIsIm4iOjEsIm9wVGltZSI6eyJ0cyI6IjY5NjgzNDA5NDc0NzQwNTUxNjkiLCJ0IjoxM30sImVsZWN0aW9uSWQiOiI3ZmZmZmZmZjAwMDAwMDAwMDAwMDAwMGQiLCJvayI6MSwiJGNsdXN0ZXJUaW1lIjp7ImNsdXN0ZXJUaW1lIjoiNjk2ODM0MDk0NzQ3NDA1NTE2OSIsInNpZ25hdHVyZSI6eyJoYXNoIjoibjQvR2VwWFl0dTBDQlZYMnc3NnN0MVJxVUk4PSIsImtleUlkIjoiNjk0MDc0ODM5MzkzNzM3MTEzOSJ9fSwib3BlcmF0aW9uVGltZSI6IjY5NjgzNDA5NDc0NzQwNTUxNjkifSwiaWF0IjoxNjIyNDQzMzEwLCJleHAiOjE2MjI0NDM4MTB9.FfKbweJMb-jkYzLV6S0ZITvfMkO_aTJpQJN8vVf-kLQ

        Note : - if token is expair or invalid then gives error use jwt token auth
  