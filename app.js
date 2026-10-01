const pdfFiles = [
    { title: 'FOAMING ACID CLEANER', url: 'pdfs/FOAMING ACID CLEANER.pdf' },
    { title: 'FT FOAMING ACID CLEANER', url: 'pdfs/FT FOAMING ACID CLEANER.pdf' },
    { title: 'INSPECTORS CHOICE', url: 'pdfs/INSPECTORS CHOICE.pdf' },
    { title: 'FT INSPECTORS CHOICE', url: 'pdfs/FT INSPECTORS CHOICE.pdf' }
];

const pdfListContainer = document.getElementById('pdf-list');

function renderPDFList() {
    pdfListContainer.innerHTML = '';
    pdfFiles.forEach(pdf => {
        const card = document.createElement('div');
        card.className = 'pdf-card';
        card.innerHTML = `
            <h3>${pdf.title}</h3>
            <a href="${pdf.url}" target="_blank" class="btn btn-primary">Ver PDF</a>
        `;
        pdfListContainer.appendChild(card);
    });
}

renderPDFList();