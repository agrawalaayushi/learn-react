## Episode 5

### Best Practices

- Read File Structure https://legacy.reactjs.org/docs/faq-structure.html to learn more.
- Make separate file for separate components.
- Make src folder and put all the source code there. It's a industry stnd.
- Follow common naming structure. Naming should make sense to the readers
- Never keep hardcoded data/ url/ string in your components file. Make a separate file utils/constants.js
- Two types 2 Export/Import . Named and Default. 
    - Named : When exporting multiple items from same file.
    - Default : Single Export from a file 

 Default Export/Import 
    export default Component;
    import Component from "path";

Named Export/Import 
    export const Component;
    import { Component } from "path";

### Let's get Hooked

What's hook?
A hook is normal JS utility function given by React, written by Facebook Developers.

- useState() - Superpowerful State variables in react
- useEffect()


React is fast, as 3 things are involved - 

- Reconciliation Algorithm (React Fiber) came out in Reactv16
React uses this ALgo.   For. e.g we create 7 cards in a container. After applying a filter function. We have data results to 3 cards to show in the same container. Whenever react creats a virtual DOM of it. 

    - Virtual DOM? 
    what's actual of dom - the div structure you in the HTML. Virtual DOM is representation of the actual DOM. Representation means, if you print a component let's say <Body/>, it console an object. React treats component as an object. like React.createElement is type object. This react keeps it withit. So, this object is a virtual representation of the actual dom. React keeps track of these Virtual DOM(object)

    - Diff ALgo?
    Basically finds out difference b/w old and new virtual dom. For e.g. earlier you have 7 cards (7 nodes will get created, right) after you click a button, 3 cards remained. So, it will find out the difference of 4 nodes. It'll calculate the difference and updates the actual DOM. This whole prcess is known as **React Fiber**. So, finding out a difference between 2 HTML tree is difficult. Where finding difference in object is fast. It's Javascript.

It is fast because - 
React is doing efficient DOM manipulation. How? because React has virtual DOM. Virtual DOM just JS representation of Actual DOM.React used it and got popular. Virtual DOM is not react thing. It came way long back.  It can find out the diff and updates the DOM.