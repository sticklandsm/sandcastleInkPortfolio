import Header from './Header'
import Footer from './Footer'
import ClientRoutes from './ClientRoutes'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-800 dark:text-white">
      <Header />
      <ClientRoutes />
      <Footer />
    </div>
  )
}

export default App
