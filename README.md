# Missing Cleanup in useEffect Hook

This example demonstrates a common mistake in React's `useEffect` hook: omitting the cleanup function (return statement) when dealing with asynchronous operations or subscriptions.

## Problem
The provided `MyComponent` fetches data from an API inside `useEffect`. However, it lacks a return statement, preventing cleanup (e.g., canceling the fetch request) when the component unmounts. This can lead to memory leaks and unexpected behavior.

## Solution
The solution adds a return statement to the `useEffect` function, which cancels the fetch request using an AbortController. This ensures that unnecessary network requests are prevented when the component is unmounted.

## How to reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console for any errors or warnings.