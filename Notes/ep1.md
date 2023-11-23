## Episode 1

📖 Here is the Summary of what i had learnt.

👉 How to use react into project?
-> Browser does not understand react so, the first way to add react into project is via CDN Links. After this browser has superpower in it and it understand react.

👉 What is CDN?
 -> CDN is content delivery network where react library is hosted and we are using that via CDN links.

👉 When we use react via CDN link there are two CDN link?
->  1.react.development.js -> it is the file where core react is written inside it.
    2.react-dom.development.js -> it is the file which is used for DOM operations or modified the DOM(Document Object Model).

👉 Why is there are two CDN link?
-> Because react does not only works on browser it also works on mobile as react native. so there are different methods on browser and mobile that's why there are two files.
     
first file(react.development.js) is the core react and second(react-dom.development.js) is like the bridge b/w react and react-dom.

👉 How to create html tag inside react?
-> we can create it by using React.createElement()
-> It takes three arguments
       1. name of the tag.
       2. object (inside it we write attributes of tag).
       3. What we want to put inside that tag as children.
    -> for example :
        const heading = React.createElement(
            "h3",
            { id: "heading" },
            "Hello world using react"
        );
   
👉 What is React.createElement?
-> React.createElement is an JavaScript object.

👉 What is render?
-> render method converts React.createElement into an html tag and put it on dom.

👉 How to create Nested elements?
-> for example :
        const parent = React.createElement("div",{ id: "parent" },
            React.createElement("div",{ id: "child" },
            React.createElement("h1", {}, "This is an heading"))
        );

👉 How to create siblings inside React.createElement?
-> For that we have to create an array of childrens
-> for example :
        const parent2 = React.createElement("div",{ id: "parent2" },
            React.createElement("div", { id: "child2" },
            [
                React.createElement("h1", {}, "I am an h1 tag"),
                React.createElement("h2", {}, "I am an h2 tag"),
            ])
        );


👉 What happen we do root.render?
-> It replaces the code which is written inside root html.