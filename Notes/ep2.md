## Episode 2

### Igniting our App

1. What is npm? Read
   Ans - npm does not stands for node package manager. It is anything but not node pacakge manager. Though it does manage the packages. It doesn't have any exact fullform.
   It is a std. repository for all the packages. Biggest package manager All the packages libraries are hosted in npm. Whatever package, utility or library you want to use in your project? it is there in npm.Create-React project has already builtin npm inside it. But you can add it externally in your project.And it manages pacakges in your projects. Let's add npm in your project.

2. Why we need package.json?
   Ans- It's a configuration file for npm. It keeps track of what version of that package installed in your project.
   NPM is a package manager, ie. it will manage all the packages and sometimes packges also known as dependencies that you will install in your system. Our project is dependent on a lot of packages and npm will manage those packages. npm will take care of what's the version of the package. It will take care of it inside package.json.

3. Most important package in your project?
   Ans - Bundler. Why we need Bundler? See, our whole code needs to be bundled together, minified, cached, compressed, cleaned before it goes to production. Bundler helps you do that. Have you heard - webpack, parcel, babel these bundler tools which helps you bundle the code. We'll use parcel.

4. what is Parcel?
   Ans - It's a bundler. So, chunking minification is to be done in developement phase. Should install as devdependency.

5. Types of Dependency?
   Ans - 2 kinds - Devdependency and normal dependency. Devdependency - when a package is required in development phase. Normal dependency are required in production phase also.

6. package version "^ vs ~" ?
   Ans - ~ will upgrade the major dependency on upgrading the packages.
   ^ - updagrades minor dependency

7. What os package-lock.json?
   Ans - It keeps the track of the exact version that's being installed in your project. It locks the version and keep the record of the exact verison.

8. Difference b/w package.json & package-lock.json?
   package.json keeps the approx version of the package and paackge-lock.json has the exact version.
   package-lock.json also keeps a integrity - a sha hash \. We have always faced a issue like - this working in my local but brreaking in the production. So, basically to avoid that package-lock.json keeps a hash to verify that whatever is in my dev machine, it is same version which is being deploying the production. That's why package-lock.json is really important. It keeps track of the all exact versions of all the dependencies.

9. Node modules?
   Collection of all dependencies.

10. Transitive Dependencies?
    Ans - When we install in package, it installs all other dependencies as well. When Npm installs a package, it install that package and package's own dependencies and their own dependencies also. those dependencies called Transitive Dependencies.

11. should you send node_modules to production / github?
    Ans. If you have package.json & package-lock.json, you can recreate your node_modules. No need to send the heavy file folder to github. Even if you delete you node_modules you can recreate it. As package-lock.json has th exact version of your deps needed for your project.

12. npx?
    Ans - Just like npm similary we have npx.
    npm - to install a pacakge.
    npx - to execute the package.

13. What does parcel do?
    Ans - npx parcel file_name means - Parcel goes to the source index.html and build a developemnt build for our app. Then host our build to localhost:1234.
    It uses other libraries to make functionality work.

14. Note: CDN links are not preferred way to bring react and reactDOM to our project. Why?
    Ans - Reasons -
15. bringing react to our project via CDN links is one way. There is another way is via npm. Install the package in node_modules. Accessing react functions via npm is faster. Via CDN, if you check there is "unpkg", it will access unpkg first then get react functions.
16. Upgrading react would be easier. Otherwise will have update mannually in the srcipt tag.
17. Easy to manage react as npm under package.json.

18. What does app makes fast? What makes development expierence beter?
    ans -  following things - 

React, parcel(bundler)

- Dev build
- local Server
- Hot Module Replacement (HMR)
- File Watching Algorithm - written in C++
- Caching - faster build
- Image optimisation
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browser
- Diagnostic
- Error handling
- Support https
- Tree shaking - remove used code
- transpilation
- lazy mode
- Different dev and prod bundles

16. Read Parcel

17. what is dist?
Ans - when we execute Parcel, it creates a build put build files in the dist. The production ready code 
present in dist folder. dist contains the code that's minified with tree shaking and all the functionality of the parcel.

18. browserslist?
Ans - if you want to add old browsers support. You can use browserslist. When you add "last 10 Chrome browsers", it means it may or may not run in other browser but it will definitely work those specified browsers. It is such a powerful tool, you can also specify country wise. Checkout browserslist.dev for more info.   