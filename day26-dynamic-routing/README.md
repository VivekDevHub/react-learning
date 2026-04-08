
## 1. Fetching Products using FakeStore API (Axios)

Axios was used to get product data from the FakeStore API.

Axios helps us make API requests easily.
We used it inside useEffect() to fetch data when the component loads.

Basic idea:

```
useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
    .then(res => setProducts(res.data));
}, []);
```

This loads all products and stores them in state.

## 2. Products Page

Displays all products from API.
Each product is shown using .map().
Every product has a link to its detail page.

Concept:

Use Link to navigate to a specific product.

```
<Link to={`/product/${product.id}`}>
  View Details
</Link>
```

## 3. Dynamic Routing (Single Product Page)

Dynamic routing is used to show data based on product ID.

We used:
useParams() from React Router

Example:

```
const { id } = useParams();
```

id comes from URL like /product/5
Then we fetch that specific product:

```
useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProduct(res.data));
}, [id]);
```

This shows only one product's details.

## 4. useNavigate() Hook

useNavigate() is used for programmatic navigation (without clicking a Link).

Example:

```
const navigate = useNavigate();

<button onClick={() => navigate("/")}>
  Go Home
</button>
```

Use cases:

- Redirect after login
- Go back to previous page
- Navigate on button click

## 5. Nested Routing using <Outlet />

<Outlet /> is used to render child routes inside a parent component.

Concept:
Parent route has layout (like navbar, sidebar)
Child routes render inside <Outlet />

Example Structure:

```
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Parent Component:

```
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

<Outlet /> shows:

- /dashboard/profile: Profile component
- /dashboard/settings: Settings component

👉 This loads all products and stores them in state.

🔹 2. Products Page
Displays all products from API.
Each product is shown using .map().
Every product has a link to its detail page.

Concept:

Use Link to navigate to a specific product.
<Link to={`/product/${product.id}`}>
  View Details
</Link>
🔹 3. Dynamic Routing (Single Product Page)

Dynamic routing is used to show data based on product ID.

We used:
👉 useParams() from React Router

Example:

const { id } = useParams();
id comes from URL like /product/5
Then we fetch that specific product:
useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProduct(res.data));
}, [id]);

👉 This shows only one product’s details.

🔹 4. useNavigate() Hook

useNavigate() is used for programmatic navigation (without clicking a Link).

Example:

const navigate = useNavigate();

<button onClick={() => navigate("/")}>
  Go Home
</button>

👉 Use cases:

Redirect after login
Go back to previous page
Navigate on button click
🔹 5. Nested Routing using <Outlet />

<Outlet /> is used to render child routes inside a parent component.

📌 Concept:
Parent route has layout (like navbar, sidebar)
Child routes render inside <Outlet />
Example Structure:
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
Parent Component:
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

👉 <Outlet /> shows:

/dashboard/profile → Profile component
/dashboard/settings → Settings component


