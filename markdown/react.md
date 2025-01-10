<p align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="64" height="64" alt="header-image"></p>
<h2 align="center">React Cheat Sheet</h2>

# Ultimate React.js Cheat Sheet

This cheat sheet provides a comprehensive overview of React.js, including key concepts, common patterns, and useful code snippets. Each section includes code examples, explanations, and links to further documentation.

## Table of Contents

1. [**Basics**](#basics)
   - [Creating a Functional Component](#creating-a-functional-component)
   - [State Management with useState](#state-management-with-usestate)
   - [Effects with useEffect](#effects-with-useeffect)

2. [**Props and State**](#props-and-state)
   - [Passing Props to Components](#passing-props-to-components)
   - [Default Props and Prop Types](#default-props-and-prop-types)

3. [**Context API**](#context-api)
   - [Creating a Context](#creating-a-context)
   - [Consuming a Context](#consuming-a-context)

4. [**Routing**](#routing)
   - [Setting Up React Router](#setting-up-react-router)
   - [Route Parameters and Nested Routes](#route-parameters-and-nested-routes)

5. [**Conditional Rendering**](#conditional-rendering)
   - [Conditional Operators in JSX](#conditional-operators-in-jsx)
   - [Ternary Operator in JSX](#ternary-operator-in-jsx)

6. [**Lists and Keys**](#lists-and-keys)
   - [Rendering Lists with map()](#rendering-lists-with-map)
   - [Using Keys in Lists](#using-keys-in-lists)

7. [**Forms**](#forms)
   - [ Controlled Components](#controlled-components)
   - [Uncontrolled Components with useRef](#uncontrolled-components-with-useref)

8. [**Higher-Order Components (HOCs)**](#higher-order-components-hocs)
   - [Creating a Higher-Order Component](#creating-a-higher-order-component)

9. [**Render Props**](#render-props)
   - [Using Render Props to Share Logic](#using-render-props-to-share-logic)

10. [**Lifecycle Methods**](#lifecycle-methods)
    - [ComponentDidMount and ComponentWillUnmount](#componentdidmount-and-componentwillunmount)

11. [**Error Boundaries**](#error-boundaries)
    - [Creating an Error Boundary](#creating-an-error-boundary)

12. [**Performance Optimization**](#performance-optimization)
    - [Memoization with React.memo and useMemo](#memoization-with-reactmemo-and-usememo)

13. [**Testing React Components**](#testing-react-components)
    - [Writing Tests with React Testing Library](#writing-tests-with-react-testing-library)

14. [**Custom Hooks**](#custom-hooks)
    - [Creating a Custom Hook](#creating-a-custom-hook)

15. [**Handling API Calls**](#handling-api-calls)
    - [Fetching Data with useEffect and useState](#fetching-data-with-useeffect-and-usestate)

16. [**Styling in React**](#styling-in-react)
    - [CSS Modules](#css-modules)
    - [Styled-Components](#styled-components)

17. [**Additional Resources**](#additional-resources)

---

## Basics

### Creating a Functional Component

Functional components are the preferred way to create components in React.

```jsx
import React from 'react';

const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

export default Greeting;
```

**Explanation:**  
A functional component is a simple function that returns JSX. It doesn't have access to the class component lifecycle methods but can use Hooks.

### State Management with useState

Manage local state within a functional component.

```jsx
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

**Explanation:**  
`useState` is a Hook that allows you to add state to functional components. It returns an array containing the current state and a function to update it.

### Effects with useEffect

Perform side effects in a functional component.

```jsx
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []);

  return <h1>Time: {time} seconds</h1>;
};

export default Timer;
```

**Explanation:**  
`useEffect` is used to perform side effects like data fetching, subscriptions, or DOM manipulations. The cleanup function is optional and runs when the component unmounts or before re-rendering if dependencies change.

---

## Props and State

### Passing Props to Components

Pass data from a parent component to a child component.

```jsx
import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return <Greeting name="Alice" />;
};

export default App;
```

**Explanation:**  
Props are how data is passed to components. They are read-only and should not be modified within the component.

### Default Props and Prop Types

Define default props and validate prop types.

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

Greeting.defaultProps = {
  name: 'Guest',
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
```

**Explanation:**  
`defaultProps` sets default values for props. `propTypes` is used to specify the types of props and can help catch errors during development.

---

## Context API

### Creating a Context

Create a context to share data globally.

```jsx
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
```

**Explanation:**  
`createContext` creates a context object. The `Provider` component allows components to subscribe to context changes.

### Consuming a Context

Use context data in a component.

```jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{ background: theme === 'dark' ? 'black' : 'white' }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Toggle Theme
    </button>
  );
};

export default ThemedButton;
```

**Explanation:**  
`useContext` Hook allows you to subscribe to a context directly without wrapping your component with a provider.

---

## Routing

### Setting Up React Router

Set up basic routing in your application.

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
```

**Explanation:**  
`BrowserRouter` (or `Router`) wraps your application, and `Routes` contains `Route` elements that define paths and components.

### Route Parameters and Nested Routes

Handle dynamic routes and nested routing.

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './User';
import Repos from './Repos';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/:username" element={<User />}>
          <Route path="repos" element={<Repos />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
```

**Explanation:**  
Route parameters are denoted by `:paramName`. Nested routes are defined inside parent routes using the `Route` component.

---

## Conditional Rendering

### Conditional Operators in JSX

Render components based on conditions.

```jsx
import React from 'react';

const LoginButton = ({ isLoggedIn }) => {
  return isLoggedIn ? <button>Logout</button> : <button>Login</button>;
};

export default LoginButton;
```

**Explanation:**  
Use the ternary operator or logical `&&` operator to conditionally render elements.

### Ternary Operator in JSX

Use the ternary operator for conditional rendering.

```jsx
import React from 'react';

const Greeting = ({ user }) => {
  return (
    <div>
      {user ? <p>Welcome back, {user}!</p> : <p>Please sign up.</p>}
    </div>
  );
};

export default Greeting;
```

**Explanation:**  
The ternary operator allows you to render different elements based on a condition.

---

## Lists and Keys

### Rendering Lists with `map()`

Render a list of items from an array.

```jsx
import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ItemList;
```

**Explanation:**  
Use the `map()` function to render lists. Each item should have a unique `key` prop.

### Using Keys in Lists

Ensure each list item has a unique key.

```jsx
import React from 'react';

const BlogPosts = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
```

**Explanation:**  
The `key` prop helps React identify which items have changed, are added, or are removed.

---

## Forms

### Controlled Components

Manage form input state with controlled components.

```jsx
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Logging in as ${username}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
```

**Explanation:**  
Controlled components have their values controlled by React state. They are useful for form validation and keeping track of input changes.

### Uncontrolled Components with `useRef`

Use `useRef` for uncontrolled components.

```jsx
import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const usernameRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Username: ${usernameRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
```

**Explanation:**  
Uncontrolled components are managed by the DOM. Use `useRef` to access the DOM element directly.

---

## Higher-Order Components (HOCs)

### Creating a Higher-Order Component

Create a HOC to enhance component functionality.

```jsx
import React from 'react';

const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        console.log('Props updated:', this.props);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogger;
```

**Explanation:**  
HOCs are functions that take a component and return a new component. They are used to reuse component logic.

---

## Render Props

### Using Render Props to Share Logic

Share logic between components using render props.

```jsx
import React from 'react';

const UserLoader = ({ loader, render }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    loader().then(user => setUser(user));
  }, [loader]);

  return render(user);
};

export default UserLoader;
```

**Explanation:**  
Render props are a technique for sharing code between components using a prop whose value is a function.

---

## Lifecycle Methods

### ComponentDidMount and ComponentWillUnmount

Manage side effects in class components.

```jsx
import React, { Component } from 'react';

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  componentWillUnmount() {
    // Clean up any resources or subscriptions
  }

  render() {
    return (
      <div>
        {this.state.data ? <pre>{JSON.stringify(this.state.data, null, 2)}</pre> : <p>Loading...</p>}
      </div>
    );
  }
}

export default DataFetcher;
```

**Explanation:**  
`componentDidMount` is called after the component is rendered. It's used to perform side effects like data fetching. `componentWillUnmount` is called before the component is removed from the DOM.

---

## Error Boundaries

### Creating an Error Boundary

Catch JavaScript errors anywhere in the child component tree.

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

**Explanation:**  
Error boundaries are class components that catch errors in their child components. They render an error message or fallback UI when an error occurs.

---

## Performance Optimization

### Memoization with React.memo and useMemo

Optimize performance by memoizing components and values.

```jsx
import React, { memo, useMemo } from 'react';

const PureComponent = memo(({ value }) => {
  console.log('PureComponent rendered');
  return <p>PureComponent: {value}</p>;
});

const MemoizationExample = ({ initialValue }) => {
  const [count, setCount] = React.useState(initialValue);

  const squared = useMemo(() => {
    console.log('Calculating square...');
    return count * count;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Squared: {squared}</p>
      <PureComponent value={count} />
    </div>
  );
};

export default MemoizationExample;
```

**Explanation:**  
`React.memo` prevents a component from re-rendering if its props haven't changed. `useMemo` memoizes a value between re-renders.

---

## Testing React Components

### Writing Tests with React Testing Library

Write tests for React components using `@testing-library/react`.

```jsx
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="Alice" />);
  const greetingElement = screen.getByText(/hello, alice!/i);
  expect(greetingElement).toBeInTheDocument();
});
```

**Explanation:**  
React Testing Library provides utilities to test React components in a way that simulates user interactions.

---

## Custom Hooks

### Creating a Custom Hook

Create a custom Hook to reuse state logic.

```jsx
import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(prev => !prev);

  return [value, toggle];
};

export default useToggle;
```

**Explanation:**  
Custom Hooks start with `use` and allow you to reuse stateful logic across multiple components.

---

## Handling API Calls

### Fetching Data with `useEffect` and `useState`

Fetch data from an API in a functional component.

```jsx
import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchData;
```

**Explanation:**  
Use `useEffect` to fetch data when the component mounts. Use `useState` to store the fetched data.

---

## Styling in React

### CSS Modules

Use CSS Modules for scoped styling.

**styles.module.css**
```css
.container {
  background-color: #f0f0f0;
  padding: 20px;
}
```

**Component.js**
```jsx
import React from 'react';
import styles from './styles.module.css';

const StyledComponent = () => {
  return <div className={styles.container}>Styling with CSS Modules</div>;
};

export default StyledComponent;
```

**Explanation:**  
CSS Modules automatically scope CSS classes to the component, preventing style collisions.

### Styled-Components

Use styled-components for styled JSX elements.

```jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const StyledComponent = () => {
  return (
    <StyledButton>
      Click Me
    </StyledButton>
  );
};

export default StyledComponent;
```

**Explanation:**  
Styled-components allow you to write CSS in JavaScript, enabling component-level styling and theming.

---

## Additional Resources

- [React.js Official Documentation](https://reactjs.org/docs/getting-started.html)
- [React Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [React Router Documentation](https://reactrouter.com/en/main)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [styled-components Documentation](https://styled-components.com/docs)
- [React Performance Optimization](https://reactjs.org/docs/optimizing-performance.html)

---

This cheat sheet covers a wide range of React.js concepts and techniques. Use it as a quick reference guide while building your React applications. Happy coding!