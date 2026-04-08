# AGENTS.md

## Projeto
Este projeto é um portfólio pessoal interativo inspirado em interfaces de jogos.

Stack:
- Next.js (App Router)
- Tailwind CSS
- TypeScript

Objetivo:
Criar uma experiência visual premium que apresenta skills e projetos
como se fossem elementos de um jogo.

---

## Direção visual

Estilo geral:
- Dark theme
- Premium HUD style
- Glow sutil
- Painéis com bordas arredondadas
- Gradientes suaves
- Interface limpa e elegante

Evitar:
- visual infantil
- excesso de elementos visuais
- poluição visual

Priorizar:
- legibilidade
- hierarquia visual clara
- atmosfera imersiva

---

## Referência visual

Usar a imagem:

public/reference/home-ui.png

como referência para:

- layout
- posicionamento
- atmosfera visual
- hierarquia
- estilo dos painéis
- mapa central

Não copiar pixel a pixel.
Usar como direção visual.

---

## Estrutura do projeto

Componentes principais:

src/components/home/
- hero-panel.tsx
- systems-preview.tsx
- map-preview.tsx

Novos componentes esperados:

src/components/map/
- skill-node.tsx
- skill-connection.tsx
- skill-panel.tsx

---

## Mapa interativo (objetivo principal)

Criar um mapa interativo com nodes clicáveis.

Skills iniciais:

- UI Design
- UX Research
- Product Thinking
- Frontend
- Design Systems
- Prototyping

Cada skill deve:

- ser clicável
- ter hover com glow
- ter animação suave
- abrir painel lateral com descrição

---

## Regras de implementação

Sempre:

1. analisar arquivos existentes antes de modificar
2. criar componentes reutilizáveis
3. evitar duplicação de código
4. manter consistência visual
5. preservar performance
6. usar Tailwind para estilização
7. usar animações suaves (framer-motion se necessário)

---

## Responsividade

Interface deve funcionar bem em:

- Desktop (principal)
- Tablet
- Mobile

Mapa deve:

- manter proporção
- adaptar nodes
- evitar sobreposição

---

## Comportamento esperado

Interações devem:

- ter feedback visual
- usar transições suaves
- parecer fluidas
- ter sensação premium

Evitar:

- animações bruscas
- delays excessivos
- comportamento inconsistente

---

## Ao receber tarefas

Sempre:

1. ler AGENTS.md
2. analisar arquivos existentes
3. propor mudanças antes de implementar
4. implementar incrementalmente
5. manter consistência visual