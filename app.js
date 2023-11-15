/**
 * <div id="parent">
    <div id="child1">
        <h1>I'm child1 h1 tag</h1>
        <h2>I'm child1 h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm child2 h1 tag</h1>
        <h2>I'm child2 h2 tag</h2>
    </div>
</div>
 */

const parent = React.createElement(
  "div",
  {
    id: "parent",
    className: "heading",
  },
  [
    React.createElement(
        "div",
        {
          id: "child1",
          className: "heading",
        },
        [
          React.createElement(
            "h1",
            {
              id: "child1h1",
              className: "heading",
            },
            "I'm child1 h1 tag"
          ),
          React.createElement(
            "h2",
            {
              id: "child1h2",
              className: "heading",
            },
            "I'm child1 h2 tag"
          ),
        ]
      ),
      React.createElement(
        "div",
        {
          id: "child2",
          className: "heading2",
        },
        [
          React.createElement(
            "h1",
            {
              id: "child2h1",
              className: "heading2",
            },
            "I'm child2 h1 tag"
          ),
          React.createElement(
            "h2",
            {
              id: "child2h2",
              className: "heading2",
            },
            "I'm child2 h2 tag"
          ),
        ]
      )
  ]
 
);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);

console.log(parent);
