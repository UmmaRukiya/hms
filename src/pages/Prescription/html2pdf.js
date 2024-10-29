import html2pdf from './html2pdf.js';
import PrescriptionContent from './PrescriptionContent';

const generatePDF = (prescription) => {
    const element = document.createElement('div');
    ReactDOM.render(<PrescriptionContent prescription={prescription} />, element);

    const opt = {
        margin:       1,
        filename:     `prescription_${prescription.id}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
};
