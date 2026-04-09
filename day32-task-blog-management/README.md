
Blog/ Task Management Frontend (React + Context API)
Due: 4/10/2026 Kodex Batch
Total: 20 pts
Software Requirements Specification (SRS)
Project: Blog / Task Management Frontend (React + Context API)
Live link of the Project - https://blogs-task-kodex.vercel.app/ Deadline of submitting the task is 9/04/2026 till 12:00 am in the night
1. Introduction
1.1 Purpose
The purpose of this document is to define the requirements for a frontend-only Blog/Task Management Web Application. The application allows users to create, read, update, and delete (CRUD) blog posts or tasks using React and Context API for state management.
1.2 Scope
This project is a client-side application that simulates a blog/task system without a backend. All data is stored locally (using LocalStorage or in-memory state).
The application provides:
• Blog/task creation
Blog/task listing
• Editing and deletion
• State persistence (LocalStorage)
2. Overall Description
2.1 Product Perspective
Standalone frontend application
• No backend or database
• Uses browser storage for persistence • Built with modern React architecture
2.2 Product Features
Add new blog/task
• Edit existing blog/task
• Delete blog/task

• Persist data using LocalStorage Responsive UI
2.3 User Classes
• General User
• Can perform all CRUD operations
• No authentication required
2.4 Operating Environment
• Browser (Chrome, Edge, Firefox) • React (Vite or CRA)
• Node.js (for development)
3. Functional Requirements
3.1 Blog/Task Creation
User can create a new blog/task
Required fields:
• Title
• Description/Content
On submit:
• Data is stored in Context API
• Also saved in LocalStorage
3.2 Blog/Task Listing
• Display all blogs/tasks in a list/grid
• Each item shows:
。 Title
• Short description
• Actions (Edit/Delete)
3.3 Blog/Task Editing
User can edit an existing item
Form should be pre-filled with existing data

On update:
• Context state updates
• LocalStorage updates
3.4 Blog/Task Deletion
• User can delete a blog/task
• Confirmation may be shown
• Updates:
• Remove from Context
• Remove from LocalStorage
3.5 State Management (Context API)
• Global state using React Context
• Store:
• Blog list array
• CRUD functions
Example structure:
{
blogs: [],
}
addBlog: fn,
updateBlog: fn,
deleteBlog: fn
3.6 Local Storage Integration
4.
On app load:
• Fetch data from LocalStorage
On changes:
• Sync state to LocalStorage
Non-Functional Requirements
4.1 Performance

• Fast rendering using React
• Efficient state updates
4.2 Usability
• Clean UI/UX
• Easy navigation
Minimal clicks
4.3 Responsiveness
•
Mobile-friendly design
• Works on all screen sizes
4.4 Maintainability
• Modular component structure
• Clean folder organization
5. System Design
5.1 Folder Structure
src/
components/
Navbar.jsx
BlogCard.jsx
BlogList.jsx
BlogForm.jsx
context/
BlogContext.jsx
pages/
|
Home.jsx
Create.jsx
Edit.jsx
Futils/
I
localStorage.js

5.2 Component Breakdown
Navbar
• Navigation links (Home, Create)
BlogForm
Input fields for title & content
Handles create & edit
BlogList
• Displays all blogs
BlogCard
• Single blog UI
• Edit/Delete buttons
5.3 Context Flow
User Action Component → Context Function State Update UI Re-render
6. Data Flow
1. User inputs data in form
2. Form calls Context function
3. Context updates state
4. State saved to LocalStorage
5. Ul re-renders
7. Data Model
Blog = {
}
id: string,
title: string,
content: string,
createdAt: date

8. UI Requirements • Clean card-based layout
• Buttons:
• Add
• Edit
• Delete
• Forms:
• Input fields
• Submit button
• Optional:
• Toast notifications