// Percorso file: src/components/CVComponent.js

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDownload } from 'react-icons/fa'; // Icone alternative
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Per creare tabelle nel PDF

const CVComponent = () => {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Aggiungi intestazione
    doc.setFontSize(22);
    doc.text('Fabio Cerundolo', 20, 20);
    doc.setFontSize(16);
    doc.text('Tecnico Informatico', 20, 30);

    // Aggiungi dettagli di contatto
    doc.setFontSize(10);
    doc.text('Telefono: (+39) 3348399328', 20, 40);
    doc.text('Email: cerundolo.fabio@gmail.com', 20, 45);
    doc.text('Località: Torino, Italia', 20, 50);

    // Profilo - Usa splitTextToSize per gestire il testo lungo
    doc.setFontSize(14);
    doc.text('Profilo', 20, 60);
    doc.setFontSize(10);
    const profileText = 'Tecnico informatico appassionato e curioso, con un forte interesse per la programmazione e l\'apprendimento continuo. Amante della cultura in tutte le sue forme, dalla letteratura alla divulgazione scientifica.';
    const profileLines = doc.splitTextToSize(profileText, 180);  // Imposta la larghezza massima
    doc.text(profileLines, 20, 65);  // Posiziona il testo

    // Competenze tecniche
    doc.setFontSize(14);
    doc.text('Competenze Tecniche', 20, 80);
    doc.setFontSize(10);
    const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'HTML', 'CSS'];
    const skillsLines = doc.splitTextToSize(skills.join(', '), 180);
    let yPos = 85;
    doc.text(skillsLines, 20, yPos);

    // Nuova sezione: Software
    yPos += 10;
    doc.setFontSize(14);
    doc.text('Software', 20, yPos);
    doc.setFontSize(10);
    const software = ['Visual Studio Code', 'PyCharm', 'Linux', 'Windows', 'Git', 'Docker', 'Selenium', 'JUnit'];
    const softwareLines = doc.splitTextToSize(software.join(', '), 180);
    yPos += 5;
    doc.text(softwareLines, 20, yPos);

    // Competenze Linguistiche
    yPos += 10;
    doc.setFontSize(14);
    doc.text('Competenze Linguistiche', 20, yPos);
    doc.setFontSize(10);
    yPos += 5;
    doc.text('• Inglese: Livello B1', 25, yPos);

    // Soft Skills
    yPos += 10;
    doc.setFontSize(14);
    doc.text('Soft Skills', 20, yPos);
    doc.setFontSize(10);
    const softSkills = ['Lavoro di squadra', 'Ascolto attivo', 'Pensiero analitico', 'Adattabilità', 'Autonomia operativa'];
    yPos += 5;
    softSkills.forEach((skill, index) => {
      doc.text(`• ${skill}`, 25, yPos + (index * 5));
    });

    // Aggiorna yPos per le sezioni successive
    yPos += softSkills.length * 5 + 10;

    // Aumenta lo spazio prima della sezione Istruzione e Formazione
    yPos += 15;

    // Istruzione e Formazione
    doc.setFontSize(14);
    doc.text('Istruzione e Formazione', 20, yPos);
    const education = [
      ['Attestato Social Marketing e Integrazione con l\'AI', 'Assocam Camerana (2024)'],
      ['Attestato Test Automation JUnit', 'Formazione Lavoro - ISCS (2023)'],
      ['Attestato PPDB', 'Assocam Camerana (2023)'],
      ['Diploma Tecnico Informatico delle Telecomunicazioni', 'ITIS Amedeo Avogadro (2017 - 2020)']
    ];
    doc.autoTable({
      head: [['Titolo', 'Istituzione']],
      body: education,
      startY: yPos + 5
    });

    // Progetti
    doc.setFontSize(14);
    doc.text('Progetti', 20, doc.autoTable.previous.finalY + 10);
    doc.setFontSize(10);
    doc.text('HRWorkFlow - Un\'applicazione per la gestione del flusso di lavoro delle risorse umane.', 20, doc.autoTable.previous.finalY + 20);
    doc.text('NegozioSpringBoot - Un\'applicazione e-commerce sviluppata con Spring Boot.', 20, doc.autoTable.previous.finalY + 25);

    // Scarica il PDF
    doc.save('CV_Fabio_Cerundolo.pdf');
  };

  return (
    <div className="w-[210mm] h-[297mm] mx-auto bg-white shadow-lg p-12 text-sm font-sans relative" style={{ fontSize: '9pt' }}>
      <button 
        onClick={handleDownload}
        className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center text-xs"
      >
        <FaDownload size={14} className="mr-2" />
        Scarica CV
      </button>
  
      <header className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-light text-gray-800 mb-1">Fabio Cerundolo</h1>
        <h2 className="text-lg text-gray-500 mb-3">Tecnico Informatico</h2>
        <div className="flex text-gray-500 text-xs space-x-4">
          <span className="flex items-center">
            <FaPhone size={12} className="mr-1" /> (+39) 3348399328
          </span>
          <span className="flex items-center">
            <FaEnvelope size={12} className="mr-1" /> cerundolo.fabio@gmail.com
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt size={12} className="mr-1" /> Torino, Italia
          </span>
        </div>
      </header>
  
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Profilo</h3>
        <p>Tecnico informatico appassionato e curioso, con un forte interesse per la programmazione e l'apprendimento continuo. Amante della cultura in tutte le sue forme, dalla letteratura alla divulgazione scientifica.</p>
      </section>
  
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Competenze Tecniche</h3>
        <p>JavaScript, React, Node.js, Python, SQL, HTML, CSS</p>
      </section>
  
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Software</h3>
        <p>Visual Studio Code, PyCharm, Linux, Windows, Git, Docker, Selenium, JUnit</p>
      </section>
  
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Competenze Linguistiche</h3>
        <ul className="list-disc list-inside">
          <li>Inglese: Livello B1</li>
        </ul>
      </section>
  
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
        <ul className="list-disc list-inside">
          <li>Lavoro di squadra</li>
          <li>Ascolto attivo</li>
          <li>Pensiero analitico</li>
          <li>Adattabilità</li>
          <li>Autonomia operativa</li>
        </ul>
      </section>
  
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Istruzione e Formazione</h3>
        <ul className="list-disc list-inside">
          <li>Attestato Social Marketing e Integrazione con l'AI - Assocam Camerana (2024)</li>
          <li>Attestato Test Automation JUnit - Formazione Lavoro - ISCS (2023)</li>
          <li>Attestato PPDB - Assocam Camerana (2023)</li>
          <li>Diploma Tecnico Informatico delle Telecomunicazioni - ITIS Amedeo Avogadro (2017 - 2020)</li>
        </ul>
      </section>
  
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Progetti</h3>
        <ul className="list-disc list-inside">
          <li>HRWorkFlow - Un'applicazione per la gestione del flusso di lavoro delle risorse umane.</li>
          <li>NegozioSpringBoot - Un'applicazione e-commerce sviluppata con Spring Boot.</li>
        </ul>
      </section>
    </div>
  );
};

export default CVComponent;
