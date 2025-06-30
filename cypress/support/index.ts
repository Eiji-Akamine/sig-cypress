declare namespace Cypress {
  type FuncaoMembro =
    | "Apoio Administrativo"
    | "Articulador"
    | "Colaborador(a)"
    | "Aluno(a) Graduação"
    | "Instrutor(a)"
    | "Ministrante"
    | "Parceiro(a)"
    | "Supervisor(a)"
    | "Moderador(a)";
  type TipoEvento =
    | "Ciclo de Debates"
    | "Conferência"
    | "Congresso"
    | "Encontro"
    | "Seminário"
    | "Simpósio"
    | "Workshop"
    | "Mesa-redonda"
    | "Fórum";
  interface IRestricoesArgs {
    definirDuracaoProjetoEmMeses?: boolean;
    duracaoProjetoEmMeses?: number;
    vinculoInstitucionalObrigatorio?: boolean;
    pesquisadorSubmeterVariasPropostas?: boolean;
    restricaoConviteParticipantes?: boolean;
    restricaoParticipante?: boolean;
    funcaoMembro?: Array<FuncaoMembro>;
    possuiNivelAcademicoMinimoCoordenador?: boolean;
    nivelAcademicoMinimoCoordenadorId?: string;
    vinculoEmpregaticioObrigatorio?: boolean;
    coordenadorPodeParticiparOutroProjeto?: boolean;
    obrigatorioLinkLattesCoordenador?: boolean;
    obrigatorioLinkLattesMembros?: boolean;
    restricaoTipoEvento?: boolean;
    tipoEvento?: Array<TipoEvento>;
  }
  type TipoEstado =
    | "Acre"
    | "Alagoas"
    | "Amapá"
    | "Amazonas"
    | "Bahia"
    | "Ceará"
    | "Distrito Federal"
    | "Espírito Santo"
    | "Goiás"
    | "Maranhão"
    | "Mato Grosso"
    | "Mato Grosso do Sul"
    | "Minas Gerais"
    | "Pará"
    | "Paraíba"
    | "Paraná"
    | "Pernambuco"
    | "Piauí"
    | "Rio de Janeiro"
    | "Rio Grande do Norte"
    | "Rio Grande do Sul"
    | "Rondônia"
    | "Roraima"
    | "Santa Catarina"
    | "São Paulo"
    | "Sergipe"
    | "Tocantins"
    | "Todos";
  interface abrangenciasArgs {
    estados?: Array<TipoEstado>;
  }
  type TipoRubrica =
    | "Diarias"
    | "Hospedagem e Alimentação"
    | "Serviços de Terceiros"
    | "Material de Consumo"
    | "Material Permanente"
    | "Passagens"
    | "Pessoal"
    | "Encargos"
    | "Bolsa";
  type TipoNaturezaDespeza = "Custeio" | "Capital" | "Auxílio a Pesquisador";
  type TipoMoedaEstrangeira = "Dólar" | "Euro" | "Libra Esterlina" | "Iene";
  interface IRestricoesRubricasArgs {
    tipoRubrica: TipoRubrica;
    naturezaDespesa: TipoNaturezaDespeza;
    justificativaObrigatoria?: boolean;
    justificativaGlobal?: boolean;
    moedaEstrangeira?: boolean;
    tipoMoedaEstrangeira?: Array<TipoMoedaEstrangeira>;
  }

  interface IRestricoesFaixasFinanciamentoArgs {
    nomeFaixa: string;
    valorMinimo: number;
    valorMaximo: number;
    observacao?: string;
  }
  type TipoFormatoArquivo =
    | "CSV"
    | "XLSX"
    | "ODT"
    | "DOC"
    | "JPEG"
    | "JPG"
    | "PNG"
    | "PDF"
    | "Imagens (PNG, JPEG, JPG)"
    | "Documentos (ODT, DOC, DOCX)"
    | "Planilhas (XLS, XLSX, CSV)";
  interface IRestricoesDocumentosPropostaArgs {
    nomeDocumento?: string;
    descricaoDocumento?: string;
    formatoArquivo?: TipoFormatoArquivo;
    tamanhoArquivo: number;
    submissaoObrigatoria?: boolean;
    multiplosAnexos?: boolean;
  }

  type TipoPerguntaDescricaoProjeto =
    | "Informações Relevantes para Avaliação da Proposta"
    | "Experiência do Coordenador"
    | "Resumo da Proposta de Projeto"
    | "Síntese do Projeto"
    | "Objetivo Geral"
    | "Objetivos Específicos"
    | "Metodologia"
    | "Métodos e Materiais"
    | "Resultados Esperados"
    | "Impactos Esperados"
    | "Impactos Esperados - Científico"
    | "Impactos Esperados - Tecnológico"
    | "Impactos Esperados - Econômico"
    | "Impactos Esperados - Social"
    | "Impactos Esperados - Ambiental"
    | "Riscos e Atividades"
    | "O Estado da Arte da proposta e justificativa"
    | "Justificativa para a Cooperação Internacional"
    | "Obras e Instalações Novas"
    | "Palavras Chaves Indexadas"
    | "Interação e Qualificação das Parcerias"
    | "Referência Bibliográfica";
  interface IRestricoesDescricaoProjetoArgs {
    perguntasPreset: Array<TipoPerguntaDescricaoProjeto>;
  }
  type TipoIndicadorProducao =
    | "Produção Técnica ou Tecnológica"
    | "Produção Bibliográfica"
    | "Produção Cultural";
  interface IRestricoesIndicadoresProducaoArgs {
    indicadores: Array<TipoIndicadorProducao>;
  }
  interface IRestricoesBolsasArgs {
    modalidadeBolsa?: string;
    nivelBolsa?: string;
    temQtdadeBolsaPorProposta?: boolean;
    qtdadeBolsaPorProposta?: number;
  }
  interface IRestricoesCKEditorArgs {
    element: string;
    content: string;
  }
  interface Chainable {
    typelogin: (url: string, email: string, password: string) => void;
    restricoes: (args: IRestricoesArgs) => void;
    abrangencias: (args: abrangenciasArgs) => void;
    rubricas: (args: IRestricoesRubricasArgs) => void;
    faixasFinanciamento: (args: IRestricoesFaixasFinanciamentoArgs) => void;
    documentosProposta: (args: IRestricoesDocumentosPropostaArgs) => void;
    descricaoProjetoPreset: (args: IRestricoesDescricaoProjetoArgs) => void;
    indicadoresProducao: (args: IRestricoesIndicadoresProducaoArgs) => void;
    bolsasEdital: (args: IRestricoesBolsasArgs) => void;
    typeCkeditor: (args: IRestricoesCKEditorArgs) => void;
  }
}
