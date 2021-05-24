import React from 'react';

import { Container, Content } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Governance: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo className="logo" />
        <h1 className="subtitle">
          Estudo do potencial hídrico da região Oeste da Bahia: quantificação e
          monitoramento da disponibilidade dos recursos do Aquífero Urucuia e
          Superficiais nas bacias dos Rios Grande, Corrente e Carinhanha
        </h1>

        <p className="section">Resumo</p>
        <p>
          Apesar dos muitos estudos e de um arcabouço legal robusto, o debate
          sobre os recursos hídricos e sua gestão ainda é conduzido com grandes
          lacunas de informações, principalmente em nível estadual. A análise da
          disponibilidade hídrica e a sua utilização para a produção de
          alimentos, fibras e agroenergia exige um diálogo amplo e com
          participação efetiva de todos os setores, uma vez que este assunto é
          de grande interesse da coletividade.
        </p>
        <p>
          Se por um lado existe a preocupação com a disponibilidade da água, por
          outro existe a necessidade de produzir alimentos em maior quantidade e
          qualidade. Na agricultura tropical, os ciclos de produção são
          definidos pela disponibilidade hídrica, dependente das chuvas, que nem
          sempre ocorrem no momento e na quantidade certa. Nesse cenário, a nova
          agricultura irrigada, conectada com a sustentabilidade se coloca como
          uma opção importante para intensificar a produção e ampliar a
          produtividade com menor exigência de abertura de novas áreas. Assim,
          estudos e ações envolvendo informações integradas, monitoramento,
          governança e capacitação são importantes para dar suporte à gestão dos
          recursos hídricos.
        </p>
        <p>
          Com base nessa estratégia, foi proposto, estruturado e financiado
          (PRODEAGRO-BA) pelos produtores organizados na Associação dos
          Agricultores e Irrigantes da Bahia (AIBA), o projeto de estudo dos
          recursos hídricos da região Oeste da Bahia, com execução técnica sob
          responsabilidade da Universidade Federal de Viçosa (UFV).
        </p>
        <p>
          A região Oeste da Bahia é uma das mais ativas fronteiras agrícolas do
          mundo e segue um padrão de extensificação e intensificação, com cerca
          de 2,3 milhões de ha com agricultura e área irrigada estimada de
          200.000 ha (8,0% da área plantada). A região tem potencial de aumento
          da produção agrícola irrigada, tanto na agricultura empresarial quanto
          na de pequena escala, sendo necessário que o crescimento ocorra em
          bases sustentáveis, garantindo à sociedade em geral e aos produtores
          que investem no sistema que este crescimento seja seguro do ponto de
          vista da disponibilidade e do uso compartilhado dos recursos hídricos.
        </p>
        <p>
          No projeto “Estudo do potencial hídrico da região Oeste da Bahia:
          quantificação e monitoramento da disponibilidade dos recursos do
          aquífero Urucuia e superficiais nas bacias dos rios Grande, Corrente e
          Carinhanha” desenvolveu-se um estudo integrado da disponibilidade
          hídrica superficial e subterrânea e sua modelagem, bem como análise da
          evolução do clima, do uso do solo e da irrigação no período de 30 anos
          na região e o desenvolvimento de sistemas para dar suporte à
          organização, processamento e visualização dos dados na web.
          Complementam todo o processo as açõesdesenvolvidas de forma integrada
          na análise e desenvolvimento de processos de governanças dos recursos
          hídricos, envolvendo todos os principais setores, ou seja: produtores,
          gestores públicos regionais, estaduais e federais, comitês das bacias,
          associações, universidades e centros de pesquisas, entre outros.
        </p>

        <br />
        <p className="section">Objetivo Geral</p>
        <p>
          Contribuir com o desenvolvimento sustentável da agricultura irrigada
          do Oeste da Bahia propondo um estudo para gerar informações técnicas e
          científicas integradas da disponibilidade dos recursos hídricos
          superficiais e subterrâneos em base temporal e regional. Os dados
          provenientes desse estudo são de grande relevância para a AIBA na
          discussão com os gestores e parceiros do governo municipal, estadual e
          federal, dos comitês de bacia, das universidades e faculdades,
          organizações não governamentais e outros na definição de estratégias e
          ações para o desenvolvimento da agricultura irrigada com segurança
          hídrica.
        </p>

        <p className="subsection">Objetivos específicos</p>
        <ol>
          <li>
            Estabelecer um diálogo constante com a AIBA e seus produtores,
            garantindo que o estudo atenda às necessidades reais da região por
            meio de informações técnicas e precisas nas medições, coletas de
            dados e legislação vigente.
          </li>
          <li>
            Desenvolver as atividades propostas no protocolo de trabalho
            apresentado, ou seja:
            <ul>
              <li>
                Realizar a regionalização das vazões Qmld, Q90 e Q95 e gerar um
                modelo computacional para automatizar a obtenção dessas vazões
                em qualquer seção da hidrografia das bacias dos rios Grande,
                Corrente e Carinhanha;
              </li>
              <li>
                Levantar, através de pesquisa científica (levantamento de dados
                e caracterização hidrodinâmica e hidro química das águas
                subterrâneas nas áreas do estudo), os elementos necessários à
                elaboração e execução de um modelo hidrogeológico numérico
                regional de fluxo do aquífero Urucuia (SAU) na sua porção
                baiana, que permitisse quantificar sua contribuição para o fluxo
                superficial das drenagens sob sua influência, estimar a recarga
                ao aquífero, determinar sua potenciometria e sua variação
                sazonal, contribuir para uma melhoria da estimativa das reservas
                renováveis e permanentes do sistema e, por fim, servir de base
                para a simulação de cenários futuros de uso da água subterrânea.
                Realizou-se, também, um levantamento das características
                hidroquímicas das águas subterrâneas, com base nos dados
                existentes no SIAGAS e na RIMAS.
              </li>
              <li>
                Estudo hidroclimático, mapeamento histórico do uso e cobertura
                do solo e análise integrada da oferta e demanda de recursos
                hídricos, levantamentos de biomassa viva e de carbono do solo na
                região, modelagem da taxa de recarga do aquífero;
              </li>
              <li>
                Avaliação da capacidade de infiltração dos solos da região Oeste
                da Bahia localizados nas áreas de recarga efetiva do SAU, sob
                diferentes condições de uso e manejo, como suporte a modelagem
                da recarga do aquífero;
              </li>
              <li>
                Estudo para aperfeiçoar a governança dos recursos hídricos e
                desenvolvimento sustentável do Estado da Bahia, seguindo o
                modelo feito no estado de Nebraska, nos Estados Unidos.
              </li>
            </ul>
          </li>
        </ol>

        <br />
        <p className="section">Metodologia</p>
        <p>
          A caracterização da hidrografia envolveu as bacias dos rios Grande,
          Corrente e Carinhanha, cujas vazões foram regionalizadas usando as
          regressões regionais (regiões homogêneas) em função de variáveis
          geográfica e climática. Usou-se séries históricas de 91 estações
          fluviométricas e 427 estações pluviométricas (HidroWeb-ANA) e Base
          Hidrográfica Ottocodificada (ANA). Analisou-se a vazão média de longa
          duração (Qmld) e as vazões mínimas Q90 e Q95, tendo a área de drenagem
          e a precipitação total anual média como variáveis independentes.
        </p>
        <p>
          O estudo do Sistema Aquífero Urucuia (SAL), envolvendo recarga,
          circulação de água, respostas ao stress (bombeamentos, uso do solo,
          seca e outros), desenvolvendo-se e calibrando um modelo matemático de
          fluxo da água (Visual Modflow), que permite definir estratégias de
          planejamento e é fonte integrada de informações.
        </p>
        <p>
          Para modelagem dividiu-se o SAL em subáreas, com levantamento de dados
          em campo e existentes, sendo organizados em banco de dados (ArcGis)
          com informações da cartografia, caracterização geológica e
          hidrogeológica, geomorfologia, vegetação, uso do solo e pedologia. A
          taxa de recarga do aquífero foi obtida através de balanço hídrico
          simulando a interação dos processos (sistema solo- planta-atmosfera e
          hidrológico) com os modelos INLAND e THMB (calibração e experimento
          numérico).
        </p>
        <p>
          A determinação de parâmetros hidrogeológicos envolveu testes de
          bombeamento em campo (projeto) e dados existentes (outorgas),
          determinando o rebaixamento e recuperação no poço bombeado e
          nosvizinhos.
        </p>
        <p>
          Para análise hidroclimática usou-se base de dados de precipitação
          (INMET e ANA) com controle de qualidade e interpolação pelo Método de
          Ponderação. No estudo complementar da hidrologia usou-se os dados
          diários de vazão de 25 estações fluviométricas com poucas falhas
          (ANA), definindo a disponibilidade de água pelas curvas de permanência
          da vazão com 80% da Q90 (critério outorga estadual). A mudança da
          série temporal de chuva foi analisada utilizando-se quatro diferentes
          métodos.
        </p>
        <p>
          O uso e cobertura do solo foram caracterizados com uso de
          sensoriamento remoto (LANDSAT e MODIS) para o período 1990-2018 e a
          área irrigada por pivôs centrais por procedimento em etapas e
          processamento o Google Earth Engine, associada a processos de
          filtragem e analise, com mapas de vegetação do projeto RadamBrasil e
          INEMA.
        </p>
        <p>
          A caracterização das propriedades físicas e de teor de carbono no solo
          realizou-se com amostras obtidas em duas campanhas (2017) em áreas de
          Cerrado, Floresta, Agricultura de sequeiro e Irrigada e Pastagem. A
          divulgação dos resultados foi através de atlas impresso e uma website
          (Obahia) incluindo os mapas (produzidos e de terceiros) que permite
          visualização integrada, além de publicações técnicas e científicas.
        </p>
        <p>
          Na área de governança dos recursos hídricos e desenvolvimento
          sustentável desenvolveu-se intenso processo de discussão e visitas
          técnicas, subsidiando as ações em base técnica e experiências de
          outras regiões (exemplo a do Nebraska-EUA).
        </p>
        <br />
        <p className="section">Justificativa</p>
        <p>
          A agricultura brasileira passa por grandes transformações, otimizando
          a produção e a produtividade e aumentando sua competitividade e
          importância na matriz econômica do país. A caracterização destas
          transformações não considera, muitas vezes, a importante participação
          dos produtores, organizados em associações regionais que atuam
          efetivamente na solução de problemas de infraestrutura e recursos
          hídricos. A Associação de Produtores e Irrigantes da Bahia (AIBA)
          desenvolve, desde 2017, um programa amplo e efetivo em prol do meio
          ambiente, saúde pública, educação e sociedade, trazendo soluções de
          sustentabilidade para a região.
        </p>
        <p>
          Sob a coordenação estratégica da AIBA, o projeto teve seus estudos e
          resultados amplamente discutidos em eventos, reuniões, publicações e
          reportagens, utilizando sua estrutura e representatividade para
          envolver os associados, o governo estadual e federal, universidades
          (federais, estaduais e particulares), Comitês de Bacia, Ministério
          Público. Sua grande relevância vai além dos resultados e dados
          coletados. O diálogo entre diferentes regiões.
        </p>
        <p>
          Na região Oeste da Bahia, sede e maior área de atuação da AIBA, a
          produção irrigada ocupa cerca de 200 mil ha (8% da área plantada),
          gera resultados significativos de produção, produtividade e
          rentabilidade e, por isto tem demanda de crescimento por parte dos
          produtores. Por outro lado, a seca que assolou a região nos últimos
          anos associada ao crescimento expressivo da área irrigada em várias
          bacias, tem trazido incertezas e crises que afetam e trazem
          dificuldades para a região, exigindo ações mitigadoras.
        </p>
        <p>
          Neste sentido, buscando soluções para a situação, a AIBA buscou apoio
          da UFV para um estudo que pudesse trazer informações integradas e
          auxiliar na gestão sustentável dos recursos hídricos. O financiamento,
          a administração e gestão dos recursos foram de responsabilidade da
          AIBA, que acompanhou o desenvolvimento e evolução dos trabalhos
          produzidos pela equipe técnica da UFV.
        </p>
        <p>
          Foi importante também a parceria internacional com o Instituto Água e
          Alimentos da Universidade de Nebraska Lincoln, através de reuniões,
          visitas técnicas e troca de informações no Brasil e nos EUA em pelo
          menos 10 ocasiões.
        </p>
        <p>
          Os principais resultados podem ser resumidos em: análise climática
          identificando mudanças relacionadas à diminuição das precipitações
          pluviométricas, caracterização do solo da região por suas
          características químicas, físicas, físico- hídricas e de carbono em
          função do uso, evolução da área irrigada nos últimos 30 anos, atlas da
          região, sistema informático de disponibilidade hídrica superficial
          (SIHBA-Oeste), modelagem do aquífero Urucuia (Visual Modflow), sistema
          informático na web de livre acesso com todas as principais informações
          do projeto (Sistema OBahia), ampla compilação de publicações técnicas
          em revista, jornais e informativos impressos e na web, publicações em
          periódicos de alto impacto científico mundial e uma ampla discussão
          sobre recursos hídricos entre produtores, governo, gestores, escolas e
          população em geral.
        </p>
        <br />
        <p className="section">Inovação</p>
        <p>
          O estudo procurou trazer um enfoque inovador para a análises dos
          recursos hídricos e, em especial, para a estratégia de envolvimento
          dos participantes do sistema de gestão dos recursos hídricos do Oeste
          da Bahia. Sob a liderança da AIBA o projeto envolveu diversos setores
          relacionados a questão hídrica, ou seja, produtores, órgão gestor
          (INEMA), órgãos estaduais (SEMA, SEAGRI e SIHS), órgãos federais (ANA,
          CPRM, EMBRAPA), comitês de bacia, universidades, instituições
          internacionais (DWFI-UNL).
        </p>
        <p>
          Do ponto de vista técnico, as análises dos recursos hídricos
          superficiais e subterrâneas foram realizadas considerando a dinâmica
          do uso do solo e aspectos climáticos. Além da intensa troca de
          informações entre os grupos, os resultados foram integrados em um
          sistema de inteligência territorial, Os estudos consideraram as
          demandas e expectativas de grupos de usuários, entre eles produtores
          rurais empresariais e da agricultura familiar, sociedade civil
          organizada, empresas privadas e órgãos públicos. Foi implementado um
          conjunto de ações para a criação de uma rede de confiança baseada em
          intensa troca de informações sobre os objetivos e andamento dos
          estudos. Estes canais estão permitindo a proposição e discussão de
          modificações e aperfeiçoamento de normas, além da disponibilização e
          capacitação de agentes públicos no uso de modelos desenvolvidos pelo
          estudo, como modelos hidrogeológicos.
        </p>
        <p>
          Todas as ações basearam-se na implementação prática e estruturada dos
          três pilares para o sucesso de um sistema de gestão dos recursos
          hídricos, ou seja: estudos da disponibilidade hídrica e das suas
          demandas,implantação de sistemas de monitoramento que permitam
          acompanhar a evolução da disponibilidade e a governança, que é o
          processo que estrutura, organiza e prioriza o uso compartilhado dos
          recursos disponíveis. A interação entre modelos de análises gerados em
          estudos e dados confiáveis de monitoramento, permitiu a avaliação
          correta da situação do sistema.
        </p>
        <p>
          Estudos em conjunto com ações de governança, incluindo a criação de
          uma rede de confiança e a interação entre os principais envolvidos,
          estão viabilizando a discussão e estruturação de planos de uso
          eficiente e equitativo dos recursos hídricos, envolvendo ações de
          governança que destaca um sistema de monitoramento integrado dos
          recursos hídricos, que possa garantir a segurança hídrica e contribuir
          para a minimização de conflitos pelo uso da água. Para que todos estes
          pilares e suas interações ocorram, estão em andamento iniciativas de
          capacitação envolvendo diversos técnicos e profissionais que atuam no
          setor, bem como os usuários dos recursos hídricos, de que possam
          conhecer e utilizar informações para adequado entendimento da situação
          e também gerar projetos que permitam o uso eficientes e sustentável
          das água da região Oeste da Bahia.
        </p>
        <br />
        <p className="section">Impacto Social e Ambiental</p>
        <p>
          Em geral o projeto trouxe imediato impacto social e ambiental quando
          desenvolveu diversas ações de debates sobre o projeto em iniciação
          junto aos produtores, gestores estaduais e federais, docentes e
          discentes das universidades locais, comitês de bacia, envolvimento
          internacional e outros. Este debate trouxe expectativa positiva de
          desenvolvimento dos conhecimentos técnicos e científicos relacionados
          a disponibilidade hídrica e a sua gestão. Contribuiu neste processo a
          representatividade da AIBA no âmbito regional, estadual e federal, a
          ampla experiência e tradição da UFV na pesquisa e desenvolvimento da
          área de irrigação e recursos hídricos, a capacitação e experiência da
          equipe coordenadora nos temas propostos e a sua isenção
          técnico-científica.
        </p>
        <p>
          Os impactos socioeconômicos do estudo serão concretizados através da
          implementação de mudanças sugeridas em normas e modelos de gestão que,
          baseados em informações técnicas e sistemas de monitoramento,
          viabilizando o uso múltiplo dos recursos hídricos e a expansão
          sustentável da agricultura irrigada.
        </p>
        <p>
          Importante também destacar no projeto a divulgação e implementação de
          ações para disseminação e fortalecimento da agricultura irrigada de
          pequena escala, como capacitações e instalação de sistemas pilotos de
          irrigação em áreas estratégicas, complementam as ações de políticas
          públicas de inserção de mercado e aumento da eficiência técnica na
          agricultura familiar. Como resultado do estudo, está em andamento a
          implantação de um projeto piloto de um pivô compartilhado a ser
          implantado em um assentamento do Programa Nacional de Crédito
          Fundiário (PNCF).
        </p>
        <p>
          No aspecto ambiental, os estudos sobre disponibilidade hídricas
          confirmaram a estreita interação entre águas superficiais e
          subterrâneas com consequências importantes em relação a estratégia de
          outorga de uso da água, o histórico de ocupação da área e efeitos no
          solo, na capacidade das áreas de produção em condições irrigadas de
          mitigar o efeito estufa através do aumento do nível de carbono no solo
          e disponibilizaram informações para o planejamento adequado do uso dos
          recursos hídricos. O estudo teve como foco aspectos quantitativos, mas
          a rede de monitoramento proposta, integrada à rede existente, poderá
          incorporar procedimentos estruturados sobre a qualidade da água.
        </p>

        <br />
        <p className="section">Potencial e Difusão</p>
        <p>
          Os resultados gerados dentro de um modelo de integração das
          informações permitiram difusão e potencial transformador com vistas a
          segurança hídrica para a região. Envolveu os aspectos climáticos, do
          solo (características e uso), irrigação, demanda hídrica,
          disponibilidade e modelagem de águas superficiais e subterrâneas. A
          ampla parceria com secretarias estaduais (SEMA, SEAGRI, SIHS) e em
          especial com o INEMA (órgão gestor), tem possibilitado frequentes
          reuniões para análise metodológica e dos resultados, com relatórios
          quadrimestrais encaminhados pela AIBA e que geram notas técnicas do
          INEMA. Uma publicação completa do estudo foi disponibilizada em versão
          impressa e digital e o sistema OBahia (obahia.dea.ufv.br) tem sido uma
          fonte de consulta permanente e é de acesso livre.
        </p>
        <p>
          Diversas reuniões foram realizadas para avaliação de bancos de dados
          (em especial das outorgas disponibilizadas), treinamento do uso dos
          sistemas informáticos Obahia, Visual ModFlow e SIHBA. Destaque também
          para reunião organizada pela AIBA e o INEMA em outubro de 2019 com o
          consórcio Águas do Oeste (Hydros e Engeplus) responsável pelo plano de
          recursos hídricos (rios Grande e Corrente e riachos do Ramalho, Serra
          Dourada e Brejo Velho). Foram repassadas informações detalhadas do
          estudo (metodologia, dados e informações, modelos e resultados),
          caracterizando uma importante estratégia de potencializar o estudo
          oficial dos planos de bacias.
        </p>
        <p>
          O projeto teve grande difusão e interesse, com proposta, metodologia,
          resultados amplamente divulgados em eventos nacionais e
          internacionais, publicados em relatórios, artigos técnicos e
          científicos, atingindo além da região Oeste da Bahia outras
          importantes regiões agrícolas do país.
        </p>
        <p>
          Importante também foi a parceria com outras associações como a
          IRRIGANOR (Noroeste de Minas Gerais) e a Aprofir (Mato Grosso) que
          acompanharam os trabalhos desenvolvidos no estudo através de
          frequentes reuniões e com demanda de proposta para realização de
          estudo similar.
        </p>
        <p>
          Informações sobre o projeto e sua articulação em prol da agricultura
          irrigada sustentável foram destaques nas reuniões de criação e
          estruturação dos Polos de Irrigação do Oeste da Bahia e do Polo
          Irrigação do Sul da Mato Grosso sob a coordenação do Ministério de
          Desenvolvimento Regional (MDR), trazendo subsídios das informações
          necessárias para uma o sucesso da implantação dos respectivos polos de
          agricultura irrigada.
        </p>
        <p>
          Em diversas LIVES com as promovidas pela AIBA, Instituto Inovagri e
          por empresas de irrigação o tema foi amplamente abordado e divulgado
          trazendo a importante mensagem que o crescimento e evolução da
          agricultura irrigada em determinada região passa por informações
          integradas dos recursos hídricos.
        </p>

        <br />
        <p className="section">Sustentabilidade</p>
        <p>
          O projeto envolve um amplo programa de trabalho participativo e
          transferência de tecnologia. Durante o período técnicos da AIBA
          participaram de inúmeras visitas, reuniões e treinamentos na região
          Oeste e na Universidade Federal de Viçosa. Várias estâncias técnicas
          de curta duração na UFV foram frequentes e envolviam treinamentos
          continuadas nas técnicas utilizadas e modelos gerados. Envolveu
          inclusive um pós-doutorado da diretora de meio ambiente, recursos
          hídricos e irrigação junto a equipe do projeto na UFV.
        </p>
        <p>
          O sistema OBahia desenvolvido caracteriza um importante sistema aberto
          em linguagem Web que além de reunir informações completas do projeto,
          permite ações de planejamento, de conexão com outros sistemas de
          gestão e de atualização.
        </p>
        <p>
          O estudo foi desenvolvido com recursos do PRODEAGRO, que é um programa
          de desenvolvimento instituído como uma Entidade Civil autorizada como
          fundo privado, sem fins lucrativos, habilitado por órgãos do Governo
          do Estado da Bahia. O programa é gerenciado por um conselho, do qual
          participam todas as instituições ligadas ao setor produtivo agrícola,
          composto por representantes da Associação de Agricultores e Irrigantes
          da Bahia (AIBA), da Associação Baiana dos Produtores de Algodão
          (ABAPA), da Fundação de Apoio à Pesquisa e Desenvolvimento do Oeste
          Baiano (FUNDAÇÃO BA), da Secretaria da Agricultura, Pecuária,
          Irrigação, Pesca e Aquicultura (SEAGRI),e da Secretaria de
          Infraestrutura (SEINFRA). Os recursos do PRODEAGRO provêm de crédito
          fiscal nas aquisições dos produtores rurais.
        </p>
        <p>
          O estudo, além da avaliação conjunto de instituições e atores sociais
          envolvidos e o crivo da comunidade científica através da publicação de
          mais dezenas de artigos científicos em revistas de alto impacto, foi
          monitorado e referendado pelo conselho gestor do PRODEAGRO. Os
          impactos potenciais da implementação de ações e a disponibilidade de
          recursos no futuro deste fundo indicam que os resultados do projeto
          têm impacto de longo prazo.
        </p>
        <p>
          Importante destacar a proposta da AIBA de continuidade do projeto
          (2019- 2021), onde diversas ações de sustentabilidade estão em
          andamento como treinamento no uso das ferramentas desenvolvidas,
          propostas de atualização de normativas, apoio no desenvolvimento do
          projeto de sistema de monitoramento, testes pilotos de uso do sistema
          Visual ModFlow em diversas áreas para caracterizar o importante uso do
          modelo para análises específicas de suporte as demandas de outorgas
          subterrâneas, caracterização da evolução do uso de água em bacias
          (quinto nível) para avaliar a relação demanda hídrica da irrigação,
          outorgas, disponibilidade hídricas nos corpos d’água e possibilidade
          de expansão da agricultura irrigada. Também envolve o desenvolvimento
          de novas ferramentas no sistema OBahia para possibilitar e facilitar o
          uso do sistema para planejamento e ações de sustentabilidade.
        </p>

        <br />
        <p className="section">Adesão Social</p>
        <p>
          As ações do projeto envolveram diretamente mais de 100 organizações de
          diversos setores, as quais participaram diretamente de seminários,
          reuniões e visitas técnicas. O projeto implementou ações estruturadas
          buscando a criação e o fortalecimento de canais de comunicação e
          confiança entre organizações dos mais diversos setores. As principais
          instituições envolvidas são:
        </p>
        <p>
          <strong>
            Organizações de Representação de Produtores Rurais, Agroindústrias e
            Profissionais:{' '}
          </strong>
          ABAPA: Associação de Produtores de Algodão da Bahia, APROBAN:
          Associação do Produtores do Barreiras Norte, CREA-BA, FAEB: Federação
          da Agricultura do Estado da BA, FUNDEAGRO: Fundo para o
          Desenvolvimento do Agronegócio do Algodão, SINDIFIBRAS-BA, SPRB e
          SPRLEM: Sindicato dos Produtores Rurais de Barreiras e LEM.
        </p>
        <p>
          <strong>Organizações de Governança de Recursos Hídricos: </strong>
          CBHC, CBHG e CBHSF: Comitê da Bacia Hidrográfica dos Rio Corrente,
          Grande e São Francisco (respectivamente), CCRMSF: Câmara Consultiva
          Regional do Médio São Francisco, CODETER: Colegiado de Desenvolvimento
          Territorial da Bacia do Rio Grande, CODEVASF: Cia de Desenvolvimento
          do Vale do Rio São Francisco e Parnaíba, CONERH: Conselho Estadual dos
          Recursos Hídricos – BA, CPRM: Companhia de Pesquisas de Recursos
          Minerais.
        </p>
        <p>
          <strong>Instituições de Ensino, Pesquisa e Extensão: </strong>
          CETEP-OESTE: Centro Territorial de Educação Profissional da Bacia do
          Rio Grande, FASB: Faculdade São Francisco, FUNDAÇÃO BAHIA, UCSAL:
          Universidade Católica de Salvador, UFBA e UFOB: Universidade Federal
          da Bahia e do Oeste da Bahia, UNEB: Universidade Estadual da Bahia,
          UNOPAR: Universidade do Oeste do Paraná: Núcleo Luís Eduardo
          Magalhães.
        </p>
        <p>
          <strong>Empresas Agrícolas e Florestais: </strong> AGRI BRASIL,
          COLOMOTIN, KANSAS, VALE, VALE DO URSO Agrícola, Empresa VIDA MANSA,
          ZUTTION, BUSATO, DECISÃO, FLORYL, NORDESTE FLORESTAL E AGRÍCOLA, SANTA
          COLOMBA, SANTA RITA DE CASSIA, SCHMIDT AGRÍCOLA, SEMENTES OLEIMA, SLC,
          TRIFLORA.
        </p>
        <p>
          <strong>
            Empresas de Insumos, Processamento e Serviços e Veículos de
            Comunicação:{' '}
          </strong>
          ADM: Empresa de Comercialização e processamento, CETREL: Empresa de
          Tratamento de Efluente, IRRIGER: Empresa de irrigação, KALLIANDRA:
          Empresa de Transporte, PIVODRIP/VALMONT.
        </p>
        <p>
          <strong>Instituições Financeiras e de Agências de Fomento: </strong>
          Banco do Brasil, Banco do Nordeste do Brasil, DESENBAHIA.
        </p>
        <p>
          <strong>
            Organizações Não Governamentais , Fundações e Institutos:{' '}
          </strong>
          10-ENVOLVIMENTO: Organização Ambiental, AMINA: A. Amigos da Natureza,
          CABER: Cooperativa dos Catadores de Produtos Recicláveis de Barreiras,
          CORRENTE VERDE: A. Ambientalista Corrente Verde, FAMA: Fórum
          Alternativo Mundial da Água, FUNDACAO ADM: Fundação de Empresa de
          Comercialização e Processamento Agrícola, IAIBA: Instituto AIBA,
          PARQUE VIDA CERRADO: Área de Conservação, PRODEAGRO: Programa de
          Desenvolvimento do Agronegócio.
        </p>
        <p>
          <strong>Instituições do Estado do Nebraska, USA: </strong>Departamento
          de Recursos Naturais, Instituto Water for Food da UNL, Associação de
          Distritos de Recursos Naturais, STAHR FARM, Universidade de Nebraska,
          Distrito de Recursos Naturais Upper Republican.
        </p>
        <br />
      </Content>
    </Container>
  );
};

export default Governance;
