# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

A Javascript framework/library that allows for "light" page reloads and dynamic UI updates based on a virtual-DOM. The browser DOM is mapped to the virtual DOM, allowing for single componenets to be updated instead of requiring an entire page fresh/redownload.


1. Describe component state.

The current status of a given component / the data that it contains.

1. Describe props.

Props are attributes passed into a component for use by the component itself.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are commonly used for data fetching, where they are updating things "on the side" as hooks or effects call them to update a given state or prop. They are synced by specific hooks and can be used for updating based on specified values (such as the useEffect array []).
