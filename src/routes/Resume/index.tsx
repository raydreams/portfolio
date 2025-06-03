import { useState } from 'react'
import styled from 'styled-components'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

// Set up the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
    min-height: calc(100vh - 200px);
    background: rgba(255, 255, 255, 0.02);
    border-radius: 24px;
    margin: 20px;
`

const PDFContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    max-width: 100%;
    overflow-x: auto;

    .react-pdf__Document {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .react-pdf__Page {
        margin-bottom: 20px;
    }

    .react-pdf__Page canvas {
        max-width: 100%;
        height: auto !important;
    }
`

const Controls = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    align-items: center;
`

const Button = styled.button`
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-1px);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
`

const PageInfo = styled.span`
    color: var(--ui-lightgray);
    font-size: 14px;
`

export default function Resume() {
    const [numPages, setNumPages] = useState<number | null>(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [error, setError] = useState<string | null>(null)

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages)
        setError(null)
    }

    function onDocumentLoadError(error: Error) {
        console.error('Error loading PDF:', error)
        setError(error.message)
    }

    return (
        <ResumeContainer>
            <PDFContainer>
                <Controls>
                    <Button
                        onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                        disabled={pageNumber <= 1}
                    >
                        Previous
                    </Button>
                    <PageInfo>
                        Page {pageNumber} of {numPages || '--'}
                    </PageInfo>
                    <Button
                        onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages || prev))}
                        disabled={pageNumber >= (numPages || 1)}
                    >
                        Next
                    </Button>
                </Controls>
                {error && (
                    <div style={{ color: 'red', marginBottom: '20px' }}>
                        Error: {error}
                    </div>
                )}
                <Document
                    file="/resume/Resume.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={<div>Loading PDF...</div>}
                    error={<div>Error loading PDF. Please make sure the file exists.</div>}
                >
                    <Page
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        scale={1.2}
                    />
                </Document>
            </PDFContainer>
        </ResumeContainer>
    )
} 