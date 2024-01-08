# React Class Component


Major Lifecycle

1. constructor() -> always gets called first.
2. render()
3. componentDidMount() -> render() // use it to make API call and update the states
4. componentDidUpdate() -> render() // gets called when new props, setState(), forceUpdate()
5. componentDidUnmount() -> when you leave the page/component.

### What we do it componentDidUnmount()? 
- we use it to clear intervals(), setTimeOut(), clear refs or event listeners if created. 
