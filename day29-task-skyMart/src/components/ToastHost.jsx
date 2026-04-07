import { Toaster } from 'react-hot-toast'

const ToastHost = () => {
  return (
    <Toaster
      position="bottom-right"
      containerStyle={{ inset: '16px' }}
      toastOptions={{
        duration: 2200,
      }}
    />
  )
}

export default ToastHost