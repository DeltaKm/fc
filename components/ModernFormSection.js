import React from "react";

// Esempio di props: tutte le variabili di stato e gli handler che già usi
const ModernFormSection = ({
  comuneDiInoltro, provinciaDiInoltro, liComune, liProvincia, liData, datiRichiedente,
  nomeDec, luogoNascDec, dataDiNascDec, provinciaDiNascDec, sessoDec, codiceFiscaleDec,
  cittadinanzaDec, professioneDec, titoloDiStudioDec, conDiDec, annoMatrimonioDec,
  tipoDocumentoDec, numeroDocDec, emessoDaDocDec, comuneDiDocDec, provinciaDocDec,
  dataDecesso, oreComuneDecesso, pressoDecesso, indirizzoStrutturaDecesso, comuneDecesso, provinciaDecesso, causaDecesso,
  giornoTrasportoDec, oreTrasportoDec, sostaInChiesa, indirizzoStrutturaPartenzaTrasportoDec, comunePartenzaTrasportoDec, provinciaPartenzaTrasportoDec,
  cimiteroDestinazione, comuneDestinazioneSalma, provinciaDestinazioneSalma, statoDestinazioneSalma, distanzaDestinazioneSalma, autoFunebre,
  operatore1, operatore2, operatore3, operatore4, autista,
  handleChangecomuneDiInoltro, handleChangeprovinciaDiInoltro, handleChangeLiComune, handleChangeLiProvincia, handleChangeLiData,
  handleChangeDatiRichiedente, handleChangeNomeDec, handleChangeLuogoNascDec, handleChangeDataDiNascDec, handleChangeProvinciaDiNascDec, handleChangeSessoDec, handleChangeCodiceFiscaleDec,
  handleChangeCittadinanzaDec, handleChangeProfessioneDec, handleChangeTitoloDiStudioDec, handleChangeConDiDec, handleChangeAnnoMatrimonioDec,
  handleChangeTipoDocumentoDec, handleChangeNumeroDocDec, handleChangeEmessoDaDocDec, handleChangeComuneDiDocDec, handleChangeProvinciaDocDec,
  handleChangeDataDecesso, handleChangeOreComuneDecesso, handleChangePressoDecesso, handleChangeIndirizzoStrutturaDecesso, handleChangeComuneDecesso, handleChangeProvinciaDecesso, handleChangeCausaDecesso,
  handleChangeGiornoTrasportoDec, handleChangeOreTrasportoDec, handleChangeSostaInChiesa, handleChangeIndirizzoStrutturaPartenzaTrasportoDec, handleChangeComunePartenzaTrasportoDec, handleChangeProvinciaPartenzaTrasportoDec,
  handleChangeCimiteroDestinazione, handleChangeComuneDestinazioneSalma, handleChangeProvinciaDestinazioneSalma, handleChangeStatoDestinazioneSalma, handleChangeDistanzaDestinazioneSalma, handleChangeAutoFunebre,
  handleChangeOperatore1, handleChangeOperatore2, handleChangeOperatore3, handleChangeOperatore4, handleChangeAutista
}) => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 py-8">
      {/* Card 1: Al Comune di */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="font-bold text-lg text-purple-800 mb-4">Al Comune di</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" className="input-t" placeholder="Comune" value={comuneDiInoltro} onChange={handleChangecomuneDiInoltro} />
          <input type="text" className="input-b" placeholder="Provincia" value={provinciaDiInoltro} onChange={handleChangeprovinciaDiInoltro} />
        </div>
      </div>
      {/* Card 2: Li */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="font-bold text-lg text-purple-800 mb-4">Li</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" className="input-t" placeholder="Comune" value={liComune} onChange={handleChangeLiComune} />
          <input type="text" className="input-n" placeholder="Provincia" value={liProvincia} onChange={handleChangeLiProvincia} />
          <input type="text" className="input-b" placeholder="Data" value={liData} onChange={handleChangeLiData} />
        </div>
      </div>
      {/* Card 3: Il Sottoscritto */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="font-bold text-lg text-purple-800 mb-4">Il Sottoscritto</h2>
        <input type="text" className="input-f w-full" placeholder="Nome e Cognome, Nato a, il, Codice Fiscale" value={datiRichiedente} onChange={handleChangeDatiRichiedente} />
      </div>
      {/* Card 4: Dati Deceduto */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="font-bold text-lg text-purple-800 mb-4">Dati Deceduto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" className="input-t" placeholder="Nome e Cognome" value={nomeDec} onChange={handleChangeNomeDec} />
          <input type="text" className="input-n" placeholder="Nato/a" value={luogoNascDec} onChange={handleChangeLuogoNascDec} />
          <input type="text" className="input-b" placeholder="Data di nascita" value={dataDiNascDec} onChange={handleChangeDataDiNascDec} />
          <input type="text" className="input-b" placeholder="Provincia di nascita" value={provinciaDiNascDec} onChange={handleChangeProvinciaDiNascDec} />
          <input type="text" className="input-b" placeholder="Sesso" value={sessoDec} onChange={handleChangeSessoDec} />
          <input type="text" className="input-b" placeholder="Codice Fiscale" value={codiceFiscaleDec} onChange={handleChangeCodiceFiscaleDec} />
          <input type="text" className="input-b" placeholder="Cittadinanza" value={cittadinanzaDec} onChange={handleChangeCittadinanzaDec} />
          <input type="text" className="input-b" placeholder="Professione" value={professioneDec} onChange={handleChangeProfessioneDec} />
          <input type="text" className="input-b" placeholder="Titolo di Studio" value={titoloDiStudioDec} onChange={handleChangeTitoloDiStudioDec} />
          <input type="text" className="input-b" placeholder="Coniugata/o con/di" value={conDiDec} onChange={handleChangeConDiDec} />
          <input type="text" className="input-b" placeholder="Anno matrimonio" value={annoMatrimonioDec} onChange={handleChangeAnnoMatrimonioDec} />
        </div>
      </div>
      {/* Card 5: Documento Deceduto */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="font-bold text-lg text-purple-800 mb-4">Documento Deceduto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" className="input-b" placeholder="Tipo documento" value={tipoDocumentoDec} onChange={handleChangeTipoDocumentoDec} />
          <input type="text" className="input-b" placeholder="Numero documento" value={numeroDocDec} onChange={handleChangeNumeroDocDec} />
          <input type="text" className="input-b" placeholder="Emesso da" value={emessoDaDocDec} onChange={handleChangeEmessoDaDocDec} />
          <input type="text" className="input-b" placeholder="Comune emissione" value={comuneDiDocDec} onChange={handleChangeComuneDiDocDec} />
          <input type="text" className="input-b" placeholder="Provincia emissione" value={provinciaDocDec} onChange={handleChangeProvinciaDocDec} />
        </div>
      </div>
      {/* Card 6: Dati Decesso */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="font-bold text-lg text-purple-800 mb-4">Dati Decesso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" className="input-b" placeholder="Data decesso" value={dataDecesso} onChange={handleChangeDataDecesso} />
          <input type="text" className="input-b" placeholder="Ora decesso" value={oreComuneDecesso} onChange={handleChangeOreComuneDecesso} />
          <input type="text" className="input-b" placeholder="Presso" value={pressoDecesso} onChange={handleChangePressoDecesso} />
          <input type="text" className="input-b" placeholder="Indirizzo struttura" value={indirizzoStrutturaDecesso} onChange={handleChangeIndirizzoStrutturaDecesso} />
          <input type="text" className="input-b" placeholder="Comune decesso" value={comuneDecesso} onChange={handleChangeComuneDecesso} />
          <input type="text" className="input-b" placeholder="Provincia decesso" value={provinciaDecesso} onChange={handleChangeProvinciaDecesso} />
          <input type="text" className="input-b" placeholder="Causa decesso" value={causaDecesso} onChange={handleChangeCausaDecesso} />
        </div>
      </div>
      {/* Card 7: Trasporto Funebre */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="font-bold text-lg text-purple-800 mb-4">Trasporto Funebre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" className="input-b" placeholder="Giorno trasporto" value={giornoTrasportoDec} onChange={handleChangeGiornoTrasportoDec} />
          <input type="text" className="input-b" placeholder="Ora trasporto" value={oreTrasportoDec} onChange={handleChangeOreTrasportoDec} />
          <input type="text" className="input-b" placeholder="Sosta in chiesa" value={sostaInChiesa} onChange={handleChangeSostaInChiesa} />
          <input type="text" className="input-b" placeholder="Indirizzo partenza trasporto" value={indirizzoStrutturaPartenzaTrasportoDec} onChange={handleChangeIndirizzoStrutturaPartenzaTrasportoDec} />
          <input type="text" className="input-b" placeholder="Comune partenza" value={comunePartenzaTrasportoDec} onChange={handleChangeComunePartenzaTrasportoDec} />
          <input type="text" className="input-b" placeholder="Provincia partenza" value={provinciaPartenzaTrasportoDec} onChange={handleChangeProvinciaPartenzaTrasportoDec} />
          <input type="text" className="input-b" placeholder="Cimitero destinazione" value={cimiteroDestinazione} onChange={handleChangeCimiteroDestinazione} />
          <input type="text" className="input-b" placeholder="Comune destinazione" value={comuneDestinazioneSalma} onChange={handleChangeComuneDestinazioneSalma} />
          <input type="text" className="input-b" placeholder="Provincia destinazione" value={provinciaDestinazioneSalma} onChange={handleChangeProvinciaDestinazioneSalma} />
          <input type="text" className="input-b" placeholder="Stato destinazione" value={statoDestinazioneSalma} onChange={handleChangeStatoDestinazioneSalma} />
          <input type="text" className="input-b" placeholder="Distanza destinazione" value={distanzaDestinazioneSalma} onChange={handleChangeDistanzaDestinazioneSalma} />
          <input type="text" className="input-b" placeholder="Auto funebre" value={autoFunebre} onChange={handleChangeAutoFunebre} />
        </div>
      </div>
      {/* Card 8: Personale e Autista */}
      <div className="bg-white rounded-xl shadow-md p-6 border">
        <h2 className="font-bold text-lg text-purple-800 mb-4">Personale e Autista</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" className="input-b" placeholder="Operatore 1" value={operatore1} onChange={handleChangeOperatore1} />
          <input type="text" className="input-b" placeholder="Operatore 2" value={operatore2} onChange={handleChangeOperatore2} />
          <input type="text" className="input-b" placeholder="Operatore 3" value={operatore3} onChange={handleChangeOperatore3} />
          <input type="text" className="input-b" placeholder="Operatore 4" value={operatore4} onChange={handleChangeOperatore4} />
          <input type="text" className="input-b" placeholder="Autista" value={autista} onChange={handleChangeAutista} />
        </div>
      </div>
    </div>
  );
};

export default ModernFormSection;
