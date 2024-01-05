## Episode 4
### Build a Food Ordering App like swiggy.

1. First get pen and paper make plan. WHat things will be there in the Home page. What container, components you'll be making like header body footer. What and where you'll put those components.  
If you plan like this it'll easier for you build the code.

For e.g. 

* Header
- Logo
- Nav Items

* Body 
- Search 
- Restaurant Container 
    - Restaurant Card

* Footer 
- copyright
- links 
- Address
- Contacts     

#### Best Practices

1. Destructure nested objects
- Destructure the big data instead of using object.name.name blah blah. It's JS not React.

2. Using Keys 
- Each child should have unique key property whenever you are looping. why?
    Ans - When you have children, React tries to render
    for e.g. when a new item comes, react will re-render all the 15 items. Because it doesn't know which item is new. It will treat all items same. But when you give id the items. React would know about it's items and when a new item comes, it will render only that new item. It helps in optimising the app. Makes it fast.

- Index as a key is an anti-pattern. Passing key as index is not recommended by React. Use Index as a last resort

3. Use map reduce filter functions instead of for loop.

4. Make a plan before jumping into the code. Take pen paper and design it.


#### Do you know? 

Swiggy is build based on - Config driven UPI. This is latest way to build API. UI is powered by data.
Display content carouser are based on location locality.

Frontend Developer should be good both at UI layer and data layer engineer. They should knowa what should be sent by backend. 

When you build large application - images are put in cloudinary. Cloudinary is again a CDN. 

Large scale applications needs to dynamix these days. So that they can work in Different country, different city. This is called config driven API. 