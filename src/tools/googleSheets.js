const parseSheets = raw =>
  raw.feed.entry.map(entry => ({
    empresa: entry.gsx$empresa.$t,
    whatsapp:
      entry.gsx$whatsappdddsemozeroapenasnúmeros.$t &&
      entry.gsx$whatsappdddsemozeroapenasnúmeros.$t.replace(/[^\d]/g, ''),
    cpf: entry.gsx$cnpjoucpf.$t,
    email: entry['gsx$e-mail'].$t,
    segmento: entry.gsx$segmento.$t,
    rua: entry.gsx$rua.$t,
    numero: entry['gsx$número'].$t,
    comp: entry['gsx$comp.'].$t,
    bairro: entry.gsx$bairro.$t,
    cidade: entry.gsx$cidade.$t,
    cep: entry.gsx$cep.$t,
    updatedAt: entry.gsx$carimbodedatahora.$t
  }))

export { parseSheets }
