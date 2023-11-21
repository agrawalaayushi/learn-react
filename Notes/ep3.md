# Episode 3

### Laying the foundation

1. What are scripts?

In industary we create script to start build a project. If you join a new company, you get a proeject. Go to there package.json to understand the commands. It's industry standard.
`npm start` === `npm run start`. Behind the scenes, `npm run start` executes the package parcel index.html as per our configuration in package.json

2. createElement? creates an react object. takes 3 argument. 
    1. tag | type string
    2. attributes | type object
    3. children
It is core of React. but not very user friendly


3. ReactDOM.createRoot?
ReactDOM takes this object and converts it to HTML and push it to browser. By pushing means, it will replace the children completely instead of appending.

3. root.render() what does it do?
whatever we render inside this render(), it will replace everything which in inside #root element. 

4. JSX *Myth*
 JSX is javascipt syntax. JSX is different from React; JSX is not part of React. It's fundamentally different. We can build a app without JSX using react only.  
 It makes developer's life easy. That's why we use it. It's a convention where we can merge HTML and JS togethers

 **JSX is not HTML in JS**. It's HTML- like syntax. It's a d/f syntax.

 Earlier we used to write Basic HTML, used to write skeleton. React also tries to merge this things up. HTML is related to JS. 

5. What happens when a JSX gets run? 
React convert it to react element.  that jsxHeading is also a react element which is object.
if you log JSX and createElement - it will return same. Both are objects. Facebook people created JSX to make developer life easy. helped developer to write easy  simple clean fast code. 

6. Is JSX pure valid Javascript? Does browser understands JSX?
No. JSX is not valid pure javascript. JS engine only understands pure Javascript which is Ecmascript. That's what browser understands. If you console the same line in your browser, it will throw syntax error. JSX is not pure valid Javascript

7. Then how JSX is getting display in your browser?
Parcel is doing the job. Before the code reaches to JS engine, it's getting transpiled into language which JS engine can understand. Transpile means the code is getting converted that react browser can understand.

8. How parcel transpile the code? 
Parcel does not do the job by itself. It is like a manager. It gives the job to **Babel**. Babel is JS package. As you save a file, it quickly converts the code to which react can understand. Parcel installed this Babel. Babel is not created by Facebook guys.

9. Babel 
 * Babel is Javscript compiler. It transpiles the code. 
 * When some old browser don't understand the newer ES6 code, Babel transpiles the code to a code that older browser can understand.
 * Babel reads token by token understand it and starts converting. and constructs an abstract syntax tree AST tree. There is a huge algo behind it. 