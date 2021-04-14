## `How to use angular library locally with Hot Module Reload without publishing it`

### Steps to create angular library

1. Use below Angular CLI commands to generate Angular library project.
ng new ngx-shared-lib --create-application=false
cd my-workspace
ng generate library ngx-shared-lib

2. Navigate to library workspace and use below commands to build library project.
cd 
ng build --watch

We are building the library project in "watch" mode so that any code changes will reflect in target application instantly.

3. Use below Angular CLI commands to generate Angular Application.
ng new ngx-sample-app

4. Navigate to angular application created above and install the library using below commands.
npm install file://C://angular-local-lib-example//ngx-shared-lib//dist//ngx-shared-lib"

Replace library path with physical path of your local system where library is created.

5. Run below commands to serve your application.
ng serve

That's all...

Now try making code changes in your library and save it.
It will automatically reflect in your application as we have run the library in "watch" mode.



