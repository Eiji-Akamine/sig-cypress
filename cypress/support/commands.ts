// cypress/support/commands.ts
import { kebabCase } from "change-case";

import cypress = require("cypress");

Cypress.Commands.add("typelogin", (url, username, password) => {
  cy.visit(url);
  cy.get("#login").type(username);
  cy.get("#senha").type(password);
  cy.get(".css-cioejf-LoginForm > .MuiButton-root").click(); //Botão Acessar da página principal
});

Cypress.Commands.add(
  "restricoes",
  ({
    definirDuracaoProjetoEmMeses,
    duracaoProjetoEmMeses,
    vinculoInstitucionalObrigatorio,
    pesquisadorSubmeterVariasPropostas,
    restricaoConviteParticipantes,
    restricaoParticipante,
    funcaoMembro,
    possuiNivelAcademicoMinimoCoordenador,
    nivelAcademicoMinimoCoordenadorId,
    vinculoEmpregaticioObrigatorio,
    coordenadorPodeParticiparOutroProjeto,
    obrigatorioLinkLattesCoordenador,
    obrigatorioLinkLattesMembros,
    restricaoTipoEvento,
    tipoEvento,
  }) => {
    if (definirDuracaoProjetoEmMeses) {
      cy.get('[data-cy="definirDuracaoProjetoEmMeses"]').check();
      cy.get('[data-cy="duracaoProjetoEmMeses"]').type(
        "" + duracaoProjetoEmMeses
      );
    }
    if (vinculoInstitucionalObrigatorio) {
      cy.get('[data-cy="vinculoInstitucionalObrigatorio"]').check();
    }
    if (pesquisadorSubmeterVariasPropostas) {
      cy.get('[data-cy="pesquisadorSubmeterVariasPropostas"]').check();
    }
    if (restricaoConviteParticipantes) {
      cy.get('[data-cy="restricaoConviteParticipantes"]').check();
    }
    if (restricaoParticipante) {
      cy.get('[data-cy="restricaoParticipante"]').check();

      if (funcaoMembro) {
        cy.get('[data-cy="funcaoMembro"]').click();
        for (const funcao of funcaoMembro) {
          if (funcao == "Apoio Administrativo") {
            cy.get('[data-cy="apoio-administra"]').check();
          }
          if (funcao == "Articulador") {
            cy.get('[data-cy="articulador"]').check();
          }
          if (funcao == "Colaborador(a)") {
            cy.get('[data-cy="colaborador-a"]').check();
          }
          if (funcao == "Aluno(a) Graduação") {
            cy.get('[data-cy="aluno-a-de-gradu"]').check();
          }
          if (funcao == "Instrutor(a)") {
            cy.get('[data-cy="instrutor-a"]').check();
          }
          if (funcao == "Ministrante") {
            cy.get('[data-cy="ministrante"]').check();
          }
          if (funcao == "Parceiro(a)") {
            cy.get('[data-cy="parceiro-a"]').check();
          }
          if (funcao == "Supervisor(a)") {
            cy.get('[data-cy="supervisor-a"]').check();
          }
          if (funcao == "Moderador(a)") {
            cy.get('[data-cy="moderador-a"]').check();
          }
        }
      }
    }
    if (possuiNivelAcademicoMinimoCoordenador) {
      cy.get('[data-cy="possuiNivelAcademicoMinimoCoordenador"]').check();
      if (nivelAcademicoMinimoCoordenadorId == "Ensino Fundamental") {
        cy.get('[data-cy="nivelAcademicoMinimoCoordenadorId"]').click();
        cy.get('[data-cy="ensino-fundament"]').click();
      }
      if (nivelAcademicoMinimoCoordenadorId == "Ensino Médio") {
        cy.get('[data-cy="nivelAcademicoMinimoCoordenadorId"]').click();
        cy.get('[data-cy="ensino-medio"]').click();
      }
      if (
        nivelAcademicoMinimoCoordenadorId == "Ensino Médio/Profissionalizante"
      ) {
        cy.get('[data-cy="nivelAcademicoMinimoCoordenadorId"]').click();
        cy.get('[data-cy="ensino-medio-pro"]').click();
      }
      if (nivelAcademicoMinimoCoordenadorId == "Ensino Superior") {
        cy.get('[data-cy="nivelAcademicoMinimoCoordenadorId"]').click();
        cy.get('[data-cy="ensino-superior"]').click();
      }
      if (nivelAcademicoMinimoCoordenadorId == "Especialização") {
        cy.get('[data-cy="nivelAcademicoMinimoCoordenadorId"]').click();
        cy.get('[data-cy="especializacao"]').click();
      }
      if (nivelAcademicoMinimoCoordenadorId == "Mestrado") {
        cy.get('[data-cy="nivelAcademicoMinimoCoordenadorId"]').click();
        cy.get('[data-cy="mestrado"]').click();
      }
      if (nivelAcademicoMinimoCoordenadorId == "Doutorado") {
        cy.get('[data-cy="nivelAcademicoMinimoCoordenadorId"]').click();
        cy.get('[data-cy="doutorado"]').click();
      }
      if (nivelAcademicoMinimoCoordenadorId == "Pós-Doutorado") {
        cy.get('[data-cy="nivelAcademicoMinimoCoordenadorId"]').click();
        cy.get('[data-cy="pos-doutorado"]').click();
      }
    }
    if (vinculoEmpregaticioObrigatorio) {
      cy.get('[data-cy="vinculoEmpregaticioObrigatorio"]').check();
    }
    if (coordenadorPodeParticiparOutroProjeto) {
      cy.get('[data-cy="coordenadorPodeParticiparOutroProjeto"]').check();
    }
    if (obrigatorioLinkLattesCoordenador) {
      cy.get('[data-cy="obrigatorioLinkLattesCoordenador"]').check();
    }
    if (obrigatorioLinkLattesMembros) {
      cy.get('[data-cy="obrigatorioLinkLattesMembros"]').check();
    }
    if (restricaoTipoEvento) {
      cy.get('[data-cy="restricaoTipoEvento"]').check();
      if (tipoEvento) {
        cy.get('[data-cy="tipoEvento"]').click();
        for (const evento of tipoEvento) {
          if (evento == "Ciclo de Debates") {
            cy.get('[data-cy="ciclo-de-debates"]').check();
          }
          if (evento == "Conferência") {
            cy.get('[data-cy="conferencia"]').check();
          }
          if (evento == "Congresso") {
            cy.get('[data-cy="congresso"]').check();
          }
          if (evento == "Encontro") {
            cy.get('[data-cy="encontro"]').check();
          }
          if (evento == "Seminário") {
            cy.get('[data-cy="seminario"]').check();
          }
          if (evento == "Simpósio") {
            cy.get('[data-cy="simposio"]').check();
          }
          if (evento == "Workshop") {
            cy.get('[data-cy="workshop"]').check();
          }
          if (evento == "Mesa-redonda") {
            cy.get('[data-cy="mesa-redonda"]').check();
          }
          if (evento == "Fórum") {
            cy.get('[data-cy="forum"]').check();
          }
        }
      }
    }
  }
);

Cypress.Commands.add("abrangencias", ({ estados }) => {
  for (const estado of estados) {
    if (estado == "Acre") {
      cy.get('[data-cy="estado-acre"]').click();
    }
    if (estado == "Alagoas") {
      cy.get('[data-cy="estado-alagoas"]').click();
    }
    if (estado == "Amapá") {
      cy.get('[data-cy="estado-amapa"]').click();
    }
    if (estado == "Amazonas") {
      cy.get('[data-cy="estado-amazonas"]').click();
    }
    if (estado == "Bahia") {
      cy.get('[data-cy="estado-bahia"]').click();
    }
    if (estado == "Ceará") {
      cy.get('[data-cy="estado-ceara"]').click();
    }
    if (estado == "Distrito Federal") {
      cy.get('[data-cy="estado-distrito-federal"]').click();
    }
    if (estado == "Espírito Santo") {
      cy.get('[data-cy="estado-espirito-santo"]').click();
    }
    if (estado == "Goiás") {
      cy.get('[data-cy="estado-goias"]').click();
    }
    if (estado == "Maranhão") {
      cy.get('[data-cy="estado-maranhao"]').click();
    }
    if (estado == "Mato Grosso") {
      cy.get('[data-cy="estado-mato-grosso"]').click();
    }
    if (estado == "Mato Grosso do Sul") {
      cy.get('[data-cy="estado-mato-grosso-do-s"]').click();
    }
    if (estado == "Minas Gerais") {
      cy.get('[data-cy="estado-minas-gerais"]').click();
    }
    if (estado == "Pará") {
      cy.get('[data-cy="estado-para"]').click();
    }
    if (estado == "Paraíba") {
      cy.get('[data-cy="estado-paraiba"]').click();
    }
    if (estado == "Paraná") {
      cy.get('[data-cy="estado-parana"]').click();
    }
    if (estado == "Pernambuco") {
      cy.get('[data-cy="estado-pernambuco"]').click();
    }
    if (estado == "Piauí") {
      cy.get('[data-cy="estado-piaui"]').click();
    }
    if (estado == "Rio de Janeiro") {
      cy.get('[data-cy="estado-rio-de-janeiro"]').click();
    }
    if (estado == "Rio Grande do Norte") {
      cy.get('[data-cy="estado-rio-grande-do-no"]').click();
    }
    if (estado == "Rio Grande do Sul") {
      cy.get('[data-cy="estado-rio-grande-do-su"]').click();
    }
    if (estado == "Rondônia") {
      cy.get('[data-cy="estado-rondonia"]').click();
    }
    if (estado == "Roraima") {
      cy.get('[data-cy="estado-roraima"]').click();
    }
    if (estado == "Santa Catarina") {
      cy.get('[data-cy="estado-santa-catarina"]').click();
    }
    if (estado == "São Paulo") {
      cy.get('[data-cy="estado-sao-paulo"]').click();
    }
    if (estado == "Sergipe") {
      cy.get('[data-cy="estado-sergipe"]').click();
    }
    if (estado == "Tocantins") {
      cy.get('[data-cy="estado-tocantins"]').click();
    }
    if (estado == "Todos") {
      cy.get('[data-cy="estado-todos"]').click();
    }
  }
});

Cypress.Commands.add(
  "rubricas",
  ({
    tipoRubrica,
    naturezaDespesa,
    justificativaObrigatoria,
    justificativaGlobal,
    moedaEstrangeira,
    tipoMoedaEstrangeira,
  }) => {
    cy.get('[data-cy="add-button"]').click();

    if (moedaEstrangeira) {
      cy.get('[data-cy="editalRubricaUnsaved.temMoedaEstrangeira"]').check();
      cy.get('[data-cy="editalRubricaUnsaved.moedaEstrangeira"]').click();
      for (const moeda of tipoMoedaEstrangeira) {
        if (moeda == "Dólar") {
          cy.get('[data-cy="dolar"]').check();
        }
        if (moeda == "Euro") {
          cy.get('[data-cy="euro"]').check();
        }
        if (moeda == "Libra Esterlina") {
          cy.get('[data-cy="libra-esterlina"]').check();
        }
        if (moeda == "Iene") {
          cy.get('[data-cy="iene"]').check();
        }
      }
    }

    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    if (tipoRubrica == "Diarias") {
      cy.get('[data-cy="diarias"]').click();
    } else if (tipoRubrica == "Hospedagem e Alimentação") {
      cy.get('[data-cy="hospedagem-e-ali"]').click();
    } else if (tipoRubrica == "Serviços de Terceiros") {
      cy.get('[data-cy="servicos-de-terc"]').click();
    } else if (tipoRubrica == "Material de Consumo") {
      cy.get('[data-cy="material-de-cons"]').click();
    } else if (tipoRubrica == "Material Permanente") {
      cy.get('[data-cy="material-permane"]').click();
    } else if (tipoRubrica == "Passagens") {
      cy.get('[data-cy="passagens"]').click();
    } else if (tipoRubrica == "Pessoal") {
      cy.get('[data-cy="pessoal"]').click();
    } else if (tipoRubrica == "Encargos") {
      cy.get('[data-cy="encargos"]').click();
    } else if (tipoRubrica == "Bolsa") {
      cy.get('[data-cy="bolsa"]').click();
    }

    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    if (naturezaDespesa == "Custeio") {
      cy.get('[data-cy="custeio"]').click();
    } else if (naturezaDespesa == "Capital") {
      cy.get('[data-cy="capital"]').click();
    } else if (naturezaDespesa == "Auxílio a Pesquisador") {
      //Avisar: Falta acentuação no sistema
      cy.get('[data-cy="auxilio-a-pesqui"]').click();
    }

    if (justificativaObrigatoria) {
      cy.get(
        '[data-cy="editalRubricaUnsaved.temJustificativaObrigatoria"]'
      ).check();
    }

    if (justificativaGlobal) {
      cy.get('[data-cy="editalRubricaUnsaved.temJustificativaGlobal"]').check();
    }

    cy.get('[data-cy="editalRubrica-confirmar"]').click();
  }
);

Cypress.Commands.add(
  "faixasFinanciamento",
  ({ nomeFaixa, valorMinimo, valorMaximo, observacao }) => {
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type(nomeFaixa);
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMinimo"]').type(
      "" + valorMinimo
    );
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMaximo"]').type(
      "" + valorMaximo
    );
    if (observacao) {
      cy.get('[data-cy="faixaFinanciamentoUnsaved.observacao"]').type(
        observacao
      );
    }
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click();
  }
);

Cypress.Commands.add(
  "documentosProposta",
  ({
    nomeDocumento,
    descricaoDocumento,
    formatoArquivo,
    tamanhoArquivo,
    submissaoObrigatoria,
    multiplosAnexos,
  }) => {
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="documentoPropostaEditalUnsaved.nome"]').type(
      nomeDocumento
    );
    cy.get('[data-cy="documentoPropostaEditalUnsaved.descricao"]').type(
      descricaoDocumento,
      { delay: 0 }
    );
    if (formatoArquivo) {
      cy.get(
        '[data-cy="documentoPropostaEditalUnsaved.formatoArquivo"]'
      ).click();
      if (formatoArquivo == "CSV") {
        cy.get('[data-cy="csv"]').click();
      } else if (formatoArquivo == "XLSX") {
        cy.get('[data-cy="xlsx"]').click();
      } else if (formatoArquivo == "ODT") {
        cy.get('[data-cy="odt"]').click();
      } else if (formatoArquivo == "DOC") {
        cy.get('[data-cy="doc"]').click();
      } else if (formatoArquivo == "JPEG") {
        cy.get('[data-cy="jpeg"]').click();
      } else if (formatoArquivo == "JPG") {
        cy.get('[data-cy="jpg"]').click();
      } else if (formatoArquivo == "PNG") {
        cy.get('[data-cy="png"]').click();
      } else if (formatoArquivo == "PDF") {
        cy.get('[data-cy="pdf"]').click();
      } else if (formatoArquivo == "Imagens (PNG, JPEG, JPG)") {
        cy.get('[data-cy="imagens-png-jpeg"]').click();
      } else if (formatoArquivo == "Documentos (ODT, DOC, DOCX)") {
        cy.get('[data-cy="documentos-odt-d"]').click();
      } else if (formatoArquivo == "Planilhas (XLS, XLSX, CSV)") {
        cy.get('[data-cy="planilhas-xls-xl"]').click();
      }
    }
    cy.get('[data-cy="documentoPropostaEditalUnsaved.tamanhoArquivo"]').type(
      "" + tamanhoArquivo
    );

    if (submissaoObrigatoria) {
      cy.get(
        '[data-cy="documentoPropostaEditalUnsaved.arquivoSubmissaoObrigatoria"]'
      ).check();
    }

    if (multiplosAnexos) {
      cy.get(
        '[data-cy="documentoPropostaEditalUnsaved.permiteSubmeterMultiplosArquivos"]'
      ).check();
    }

    cy.get('[data-cy="documentoPropostaEdital-confirmar"]').click();
  }
);

Cypress.Commands.add("descricaoProjetoPreset", ({ perguntasPreset }) => {
  for (const perguntaPreset of perguntasPreset) {
    cy.get('[data-cy="perguntaDescId"]').click();
    if (perguntaPreset == "Informações Relevantes para Avaliação da Proposta") {
      cy.get('[data-cy="informacoes-rele"]').click();
    } else if (perguntaPreset == "Experiência do Coordenador") {
      cy.get('[data-cy="experiencia-do-c"]').click();
    } else if (perguntaPreset == "Resumo da Proposta de Projeto") {
      cy.get('[data-cy="resumo-da-propos"]').click();
    } else if (perguntaPreset == "Síntese do Projeto") {
      cy.get('[data-cy="sintese-do-proje"]').click();
    } else if (perguntaPreset == "Objetivo Geral") {
      cy.get('[data-cy="objetivo-geral"]').click();
    } else if (perguntaPreset == "Objetivos Específicos") {
      cy.get('[data-cy="objetivos-especi"]').click();
    } else if (perguntaPreset == "Metodologia") {
      cy.get('[data-cy="metodologia"]').click();
    } else if (perguntaPreset == "Métodos e Materiais") {
      cy.get('[data-cy="metodos-e-materi"]').click();
    } else if (perguntaPreset == "Resultados Esperados") {
      cy.get('[data-cy="resultados-esper"]').click();
    } else if (perguntaPreset == "Impactos Esperados") {
      cy.get('[data-cy="impactos-esperad"]').click();
    } else if (perguntaPreset == "Impactos Esperados - Científico") {
      cy.get('[data-cy="impactos-esperad"]').click();
    } else if (perguntaPreset == "Impactos Esperados - Tecnológico") {
      cy.get('[data-cy="impactos-esperad"]').click();
    } else if (perguntaPreset == "Impactos Esperados - Econômico") {
      cy.get('[data-cy="impactos-esperad"]').click();
    } else if (perguntaPreset == "Impactos Esperados - Social") {
      cy.get('[data-cy="impactos-esperad"]').click();
    } else if (perguntaPreset == "Impactos Esperados - Ambiental") {
      cy.get('[data-cy="impactos-esperad"]').click();
    } else if (perguntaPreset == "Riscos e Atividades") {
      cy.get('[data-cy="riscos-e-ativida"]').click();
    } else if (
      perguntaPreset == "O Estado da Arte da proposta e justificativa"
    ) {
      cy.get('[data-cy="estado-da-arte-d"]').click();
    } else if (
      perguntaPreset == "Justificativa para a Cooperação Internacional"
    ) {
      cy.get('[data-cy="justificativa-pa"]').click();
    } else if (perguntaPreset == "Obras e Instalações Novas") {
      cy.get('[data-cy="obras-e-instalac"]').click();
    } else if (perguntaPreset == "Palavras Chaves Indexadas") {
      cy.get('[data-cy="palavras-chaves"]').click();
    } else if (perguntaPreset == "Interação e Qualificação das Parcerias") {
      cy.get('[data-cy="interacao-e-qua"]').click();
    } else if (perguntaPreset == "Referência Bibliográfica") {
      cy.get('[data-cy="referencia-bibli"]').click();
    }
  }
});

Cypress.Commands.add("indicadoresProducao", ({ indicadores }) => {
  for (const indicador of indicadores) {
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click();
    if (indicador == "Produção Técnica ou Tecnológica") {
      cy.get('[data-cy="producao-bibliog"]').click();
    } else if (indicador == "Produção Bibliográfica") {
      cy.get('[data-cy="producao-cultura"]').click();
    } else if (indicador == "Produção Cultural") {
      cy.get('[data-cy="producao-tecnica"]').click();
    }
    cy.get('[data-cy="indicadorProducao-confirmar"]').click();
  }
});

Cypress.Commands.add(
  "bolsasEdital",
  ({
    modalidadeBolsa,
    nivelBolsa,
    temQtdadeBolsaPorProposta,
    qtdadeBolsaPorProposta,
  }) => {
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="' + kebabCase(modalidadeBolsa) + '"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="' + kebabCase(nivelBolsa) + '"]').click();
    if (temQtdadeBolsaPorProposta) {
      cy.get(
        '[data-cy="bolsaEditalUnsaved.possuiQuantidadeBolsaPorProposta"]'
      ).check();
      cy.get('[data-cy="bolsaEditalUnsaved.quantidadeBolsaPorProposta"]').type(
        "" + qtdadeBolsaPorProposta
      );
    }
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();
  }
);
