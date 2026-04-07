// Self-contained PDF viewer with error handling.
// Dynamically imported with ssr: false — react-pdf requires browser APIs.
import { Component } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

class PDFErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.6)',
          fontFamily: "'Nexa Bold', sans-serif",
        }}>
          Unable to preview PDF
        </div>
      );
    }
    return this.props.children;
  }
}

export default function PDFViewer({ file, width = 300 }) {
  return (
    <PDFErrorBoundary>
      <Document
        file={file}
        onLoadError={(err) => console.warn('PDF load error:', err?.message)}
      >
        <Page pageNumber={1} width={width} />
      </Document>
    </PDFErrorBoundary>
  );
}
