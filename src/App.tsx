import { BrowserRouter, Routes, Route } from 'react-router-dom'

/** Components */
import Layout from '~components/Layout'

/** Modals */
import ImageView from '~components/Shared/ImageView'

/** Routes */
import Home from '~routes/Home'
import About from '~routes/About'
import Career from '~routes/Career'
import Resume from '~routes/Resume'
import NotFound from '~routes/404'

/** Context */
import { ThemeProvider } from '~context/ThemeContext'
import { GlobalStyles } from '~styles/global'

export default function App() {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <BrowserRouter>
                <ImageView />
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}
