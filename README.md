# text-summarizer
Resumidor de Texto
- Visão Geral
Resumidor de Texto é uma extensão do Google Chrome que permite aos usuários resumir automaticamente o conteúdo de uma página web, como um blog, artigo ou página de notícias. A extensão captura o conteúdo textual da página ativa e gera um resumo dos principais pontos, facilitando a leitura e compreensão.

# Funcionalidades
- Captura de texto da página web atual.
- Geração automática de resumos.
- Exibição do resumo no popup da extensão.
- Opção para gerar novos resumos com um clique.
- Configurações personalizadas para ajustar o tamanho do resumo.
- Suporte a múltiplos idiomas (planejado para versões futuras).
# Passos para instalar a extensão localmente:
git clone https://github.com/seu-usuario/resumidor-de-texto.git

- Abra o Google Chrome e navegue até as Extensões:
Digite chrome://extensions/ na barra de endereços e pressione Enter.
- Ative o modo de desenvolvedor:
No canto superior direito, ative o Modo de Desenvolvedor.
- Carregar extensão não empacotada:
Clique em "Carregar sem compactação" e selecione a pasta do projeto clonado.
- Usar a extensão:
Agora você verá o ícone da extensão ao lado da barra de endereços do Chrome. Clique nele para abrir o popup e começar a resumir textos das páginas web.
# Como Usar:
- Acesse uma página web com conteúdo textual.
- Clique no ícone da extensão na barra de ferramentas do Chrome.
No popup da extensão, clique em "Gerar Resumo".
- O resumo será gerado e exibido diretamente no popup.
Caso queira gerar outro resumo, clique novamente no botão para processar o novo conteúdo.
- Desenvolvimento
Se você deseja contribuir para o desenvolvimento da extensão ou rodá-la localmente para fins de desenvolvimento, siga as instruções abaixo.
# Estrutura do Projeto:
- popup.html: Interface da extensão exibida no popup.
- popup.js: Lógica de frontend para interação com o usuário.
- background.js: Script de segundo plano que gerencia as tarefas da extensão.
- content.js: Script injetado nas páginas web para capturar o conteúdo textual.
- manifest.json: Arquivo de configuração da extensão, descrevendo permissões e funcionalidades.
# Planejamento Futuro:
- Suporte a múltiplos idiomas.
- Integração com APIs avançadas de processamento de linguagem natural (NLP).
- Melhorias na interface do usuário.
- Otimização de desempenho para grandes volumes de texto.
# Licença:
- Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
