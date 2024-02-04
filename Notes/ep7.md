# React Routes

1. Used package - `React Router Dom`
2. 2 main functions 
    * `createBrowserRouter`
    * `RouterProvider`
    
3. There two types of Routing- 
* Client Side Routing
* Server Sider Routing (**not** Server side rendering)


## Server Side Routing
For e.g. `<a>`
When you click /about-us page, it makes a network call, fetches that html page, it reloads the whole page and renders it onto the webpage. That is called server side routing as that page is coming from server. 

## Client Side Routing 
For e.g. `<Link>` component provided by react-router-dom
Here, it doesn't making any network call. Only components are getting replaced. Page is not getting reloaded. 

4. Also provides way to provide 
    - children routes, 
    - error page easily using hook useRouteError. Check the official site for more details.
    - Outlet Component
    - useParams Hook
    - Dynamic Routing