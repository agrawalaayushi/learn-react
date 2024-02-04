## How to Optimize your app


* Create single responsibility functions
* breakdown your code into small pieces.
* It's easy to test the small component and functionality.
* Code becomes more usable, maintainable & testable.
* keep your functions/components light.
* code should be readeable. 
* Make custom hooks. Hooks are only utlity functions. they are nothing but a helper function.


### Make custom hooks

- make a separate file for a single hook.
- always think of th einput and output of that function while jumping into the code.
- keep your filename and hook name same. 
- use - `use` before the function name. It lets developers knows that it's a custom react hook. i.e. created using react functions only. 

## Dynamic Loading

Same concept - different name 

- chunking
- on demand loading
- dynamic loading
- code spliting
- dynamic import
- lazy loading

### What's the issue? 
When we use bundler, for e.g. parcel, it bundles all the js file of your project, minimise the code, changes the name of the functions, variable, do the transformatino and create a single .js file.

But there is a issue, if your project is big for.eg. MMT, if you have one single file contained all the code, your file size will get increase. And it will take loads of time to get load up on the webpage. 

To solve this issue, we use - **lazy loading** provided by React Guys. 
i.e. We'll not load everything at once from the start. Only when we need it we'll load it. On Demand we'll load the component. 

For.e.g Swiggy. - Food Deliver Code & Instamart Groceray code

Instamart code doesn't need to reloaded when we are on food delivery code/section. We'll load when we go to the instamart section. 

* We can use lazy loading to distribute the code into different chunk.
* When bundle size increases, we do code spliting.


### How to use? 

import {lazy, Suspense} from "react"

const Grocery = lazy(() => import("./component/Grocery/pathname))

const App() {


    <Grocery/>  // will throw error 

    <Suspense fallback={<h1>Loading...</h1>}><Grocery/><Suspense> // needs to be wrapped inside a Suspense component
}

Why we need Suspense Component? 

When we try to access the Grocery compoennt, it takes a bit time for e.g. 12ms to load the file. And React tries to access the compoenent while it's not loaded yet. So, it throws the error. 
To avoid, we should wrapped the component inside <Suspense/> component and provide a fallback prop. 
`fallback` - takes JSX. So, we can show anything till the file contained that compoennt get loads up onto the page. 

Info -

React = starts with captial `R` this means it a component
{lazy} = starts with small letter => normal function. 
{Suspense} = starts with captial -> component