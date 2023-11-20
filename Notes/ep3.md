# Episode 3

### Laying the foundation

1. What are scripts?

In industary we create script to start build a project. If you join a new company, you get a proeject. Go to there package.json to understand the commands. It's industry standard.
`npm start` === `npm run start`. Behind the scenes, `npm run start` executes the package parcel index.html as per our configuration in package.json

2. createElement? creates an react object. takes 3 argument. 
    1. tag | type string
    2. attributes | type object
    3. children

3. ReactDOM.createRoot?
ReactDOM takes this object and converts it to HTML and push it to browser. By pushing means, it will replace the children completely instead of appending.

3. root.render() what does it do?
whatever we render inside this render(), it will replace everything which in inside #root element. 