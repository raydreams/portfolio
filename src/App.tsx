import { BrowserRouter, Routes, Route } from 'react-router-dom'

/** Components */
import Layout from '~components/Layout'

/** Modals */
import ImageView from '~components/Shared/ImageView'
import ProjectView from '~components/Shared/ProjectView'

/** Routes */
import Home from '~routes/Home'
import NotFound from '~routes/404'

export default function App() {
    return (
        <BrowserRouter>
            <ProjectView />
            <ImageView />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}
