const parseSheets = raw =>
  raw.feed.entry.map((entry, index) => {
    const facebook = entry.gsx$facebook.$t.match(
      // eslint-disable-next-line
      /([A-z0-9\.]+)\/?$/gm
    )

    const instagram = entry.gsx$instagram.$t.match(
      // eslint-disable-next-line
      /([A-z0-9\.]+)\/?$/gm
    )

    return {
      id: `company-${index}`,
      companyName: entry.gsx$empresa.$t,
      whatsapp:
        entry.gsx$whatsapp.$t && entry.gsx$whatsapp.$t.replace(/[^\d]/g, ''),
      cpfcnpj: entry.gsx$cnpjoucpf.$t,
      email: entry['gsx$e-mail'].$t,
      segment: entry.gsx$segmento.$t,
      street: entry.gsx$rua.$t,
      stNumber: entry['gsx$número'].$t,
      complement: entry['gsx$comp.'].$t,
      district: entry.gsx$bairro.$t,
      city: entry.gsx$cidade.$t && entry.gsx$cidade.$t.trim().capitalize(),
      zipCode: entry.gsx$cep.$t,
      owner: entry['gsx$nomedoproprietárioouresponsável'].$t,
      instagram: instagram ? instagram[0] : '',
      state: entry.gsx$estado.$t,
      description: entry['gsx$serviçosprodutosquevocêvende'].$t,
      facebook: facebook ? `https://www.facebook.com/${facebook[0]}` : '',
      updatedAt: entry.gsx$carimbodedatahora.$t
    }
  })

export { parseSheets }
