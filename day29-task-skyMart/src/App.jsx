import { AuthProvider } from './context/AuthContext'
import AppRouter from './router/AppRouter';
import ToastHost from './components/ToastHost.jsx'
import { ProductsProvider } from './context/ProductContext.jsx';

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <AppRouter />
        <ToastHost />
      </ProductsProvider>
    </AuthProvider>
  )
}

export default App