import { Error } from './components/Error'
import { Main } from './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
