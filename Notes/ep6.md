MonoLith Architecture
Traditionally,  when we built webapps, they were developed using Monolith architure
It was used to be huge project.
We have developed  API, UI code, sending SMS, Notification, Auth, handling DB connectivity everything in the same project. We used have everything in the same JAVA project. Even if had to make single change, let's a button's color, we used compile build and deploy the whole bulky project.

MicroService Architecture
In this, we have different service for differnt jobs. We have separate UI project, Backend service, Auth service, DB service, SMS sending,  separate handling. All the combined together service make a big app. Uber follows microservice architecture.So, these microservices used to talk to each other  depending on the usecases.
This is known as separation of concerns. Single Responsibility principle, nobody is interfering with it. where each All the services tak to each other.