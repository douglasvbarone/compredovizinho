const parseSheets = raw =>
  raw.feed.entry.map(entry => ({
    empresa: entry.gsx$empresa.$t || null,
    whatsapp:
      (entry.gsx$whatappdddsemozero.$t &&
        entry.gsx$whatappdddsemozero.$t.replace(/[^\d]/g, '')) ||
      null,
    cnpj: entry.gsx$cnpj.$t || null,
    email: entry['gsx$e-mail'].$t || null,
    segmento: entry.gsx$segmento.$t || null,
    rua: entry.gsx$rua.$t || null,
    numero: entry['gsx$número'].$t || null,
    comp: entry['gsx$comp.'] || null,
    bairro: entry.gsx$bairro.$t || null,
    cidade: entry.gsx$cidade.$t || null,
    cep: entry.gsx$cep.$t || null
  }))

export { parseSheets }
