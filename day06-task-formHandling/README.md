# 📘 Assignment: Login & Register Toggle (useState)

## 📝 Questions

### Q1.
Create a React application that toggles between **Login** and **Register** forms using the `useState` hook.  
Explain how `useState` is used to manage the toggle state.

### Q2.
Set up the following component structure inside the `src/` folder:
- `App.jsx`
- `components/Login.jsx`
- `components/Register.jsx`  

Describe the role of each component.


### Q3.
In `App.jsx`, create a boolean state using `useState`.  
- Initialize it so that the **Register form appears by default**.  
- Write the code logic for conditional rendering of Login and Register components.


### Q4.
Pass the state toggle function (`setToggle`) as a prop to both `Login` and `Register` components.  
Explain why props are used instead of defining state inside child components.


### Q5.
In the **Login component**, create a form that includes:
- Email field  
- Password field  
- "Sign in" button  
- A "Sign up" link  

Write the logic to toggle to the Register form when the link is clicked.


### Q6.
In the **Register component**, create a form that includes:
- Full Name field  
- Email field  
- Password field  
- "Sign up" button  
- A "Sign in" link  

Write the logic to toggle to the Login form when the link is clicked.

---

### Q7.
Use the following toggle function inside both components:
```js
setToggle(prev => !prev)