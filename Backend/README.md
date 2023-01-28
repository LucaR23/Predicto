# InfoSense
Branch with backend project realized with Java Spring Boot framework.

We use spring 2.7.6 and java 11 in this project, the database is managed by springData JPA and we use a MySql database to store our data.
In this project we made a few simple REST end point, all of these use GET http method in order to produce tourism statistics chart.
The backend have also a part that comunicate with pyhon REST end point, in fact the controller is used to allow the communication between the frontEnd project and the python Flask end point 

As you can see in the picture we have implemented the open-api spring boot library to make eaesier to consume our rest end point the complete documentation is consultable at this path /swagger-ui/index.html#/
![image](https://user-images.githubusercontent.com/100279349/214060308-c62db652-530e-4e1a-8ad5-717ad886926e.png)


-------------------------------------------------------------------------------------------------------------------
Here is the schema of the DataBase, we use a relational database and this strucutre is meant for a future implemetation for the application
![dbPredicto](https://user-images.githubusercontent.com/100279349/213932433-54253425-ac32-40bd-a73b-172e27225d1b.jpg)

-------------------------------------------------------------------------------------------------------------------
Here a simple description about the project structure; my spring project have some folder but the directory for the code file is: src/main/java/app/infoSense/predicto 

- Here in the controller folder there are files with the controller end point divide by statistics and predictions
- The entity folder contains all the java class necessary for the automatic database mapping
- The exception folder contain a class that manage the exception of the rest controller
- Inside payload/response folder there are the different class that provides a customized response and customized request for the predictions
- Inside repository there are all the interfaces that take data from the database
- Inside service folder there are some implementation of the logic; simple some method map database record into response class

