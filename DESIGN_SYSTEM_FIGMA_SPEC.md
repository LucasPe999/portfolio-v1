# Design System Figma Spec

## Objetivo

Transformar o portifolio em um design system no Figma alinhado ao codigo atual, preservando a linguagem visual premium HUD, dark theme e a atmosfera imersiva do projeto.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Foundations

### Tokens globais

Fonte principal dos tokens: `src/app/globals.css`

#### Color tokens

- `background`: `#010302`
- `foreground`: `#f4fbff`
- `panel`: `rgba(4, 12, 8, 0.76)`
- `panel-strong`: `rgba(3, 16, 8, 0.9)`
- `line`: `rgba(82, 141, 84, 0.24)`
- `line-strong`: `rgba(107, 217, 107, 0.32)`
- `accent`: `#7effa3`
- `accent-soft`: `#6bd96b`
- `accent-strong`: `#4af36b`
- `muted`: `#b9b9b9`
- `warning`: `#ff9a62`
- `panel-glass`: `rgba(0, 18, 0, 0.33)`
- `panel-glass-strong`: `rgba(0, 18, 0, 0.83)`
- `panel-border`: `#224222`

#### Typography tokens

- `font-display`: `Istok Web`
- `font-body`: `Istok Web`

#### Surface patterns

- `panel`: glass dark panel with soft inner highlight and heavy external shadow
- `panel-grid`: subtle green grid overlay
- `hud-label`: uppercase label with wide tracking
- `hud-card`: compact glass card with soft blur and stroke

### Typography ramp

Mapear no Figma os estilos recorrentes:

- Display Hero: 40px a 80px, uppercase, bold
- Section Title: 32px, uppercase
- Panel Title: 20px a 24px, uppercase
- Card Title: 15px a 17px, uppercase or semibold
- Body Default: 14px a 16px
- Body Small: 12px
- Caption / Label: 10px a 12px, uppercase tracking

### Radius scale

Tokens inferidos do projeto:

- `radius/sm`: 10px
- `radius/md`: 12px
- `radius/lg`: 18px
- `radius/xl`: 22px
- `radius/2xl`: 24px
- `radius/3xl`: 28px
- `radius/full`: 999px

### Effects

- Glow green soft for active HUD states
- Shadow dark deep for floating panels
- Blur glass for overlays and cards
- Gradient overlays for section atmosphere

## Componentes

### Primitives

Arquivos base:

- `src/components/ui/card.tsx`
- `src/components/ui/tabs.tsx`

Criar no Figma:

- `Card/Base`
- `Card/Header`
- `Card/Content`
- `Tabs/List`
- `Tabs/Trigger`
- `Tabs/Content`

### Navigation

Arquivo:

- `src/components/home/top-nav.tsx`

Criar no Figma:

- `TopNav/Desktop`
- `TopNav/Mobile`
- `NavItem/Default`
- `NavItem/Active`
- `Avatar/Small`
- `MenuToggle/Closed`
- `MenuToggle/Open`
- `MobileMenu/Panel`

### Hero / Map

Arquivo:

- `src/components/home/map-preview.tsx`

Subcomponentes:

- `src/components/map/skill-node.tsx`
- `src/components/map/skill-connection.tsx`
- `src/components/map/skill-panel.tsx`

Criar no Figma:

- `HeroBadge/Welcome`
- `HeroButton/Primary`
- `HeroButton/Secondary`
- `MissionCard`
- `ProgressCard`
- `LevelCard`
- `MapHintCard`
- `SkillNode`
- `SkillConnection`
- `SkillPanel/Base`
- `SkillPanel/WithProject`
- `SkillPanel/WithoutProject`

#### Skill node variants

- State: Default, Hover, Active
- Theme: Green, Yellow, Purple, Orange, Cyan

#### Skill panel regions

- Header
- Close action
- Summary
- Progress bar
- Overview block
- Competencies list
- Featured project card
- CTA button

### Skills section

Arquivo:

- `src/components/home/skills-section.tsx`

Criar no Figma:

- `SectionHeader/Skills`
- `RadarChart`
- `ToolIconBadge`
- `SkillListCard`
- `SkillListItem`
- `CharacterFrame`

### Quests section

Arquivo:

- `src/components/home/quests-section.tsx`

Criar no Figma:

- `SectionHeader/Quests`
- `QuestTabs`
- `QuestTab/Default`
- `QuestTab/Active`
- `QuestCard/Desktop`
- `QuestCard/Mobile`
- `QuestInfoDivider`
- `QuestPreviewModal`
- `StatCard`
- `ComplexityBar`
- `PlatformButton`

### Highlights section

Arquivo:

- `src/components/home/highlights-section.tsx`

Criar no Figma:

- `SectionHeader/Highlights`
- `ClientBoard`
- `ClientTile/Default`
- `ClientTile/Active`
- `ShotTile`
- `ImagePreviewModal`

### Background section

Arquivo:

- `src/components/home/background-section.tsx`

Criar no Figma:

- `SectionHeader/Background`
- `PanelFrame`
- `CharacterSummaryList`
- `BadgeListItem`
- `TimelineCard/Desktop`
- `TimelineCard/Mobile`
- `TimelineNode`

### Contact section

Arquivo:

- `src/components/home/contact-section.tsx`

Criar no Figma:

- `SectionHeader/Contato`
- `ContactPanel`
- `InputField`
- `TextareaField`
- `ActionButton/Default`
- `ActionButton/Disabled`
- `StatusMessage`
- `FooterAvailabilityTag`

## Layout system

### Page structure recomendada no Figma

1. `Cover`
2. `Foundations / Colors`
3. `Foundations / Typography`
4. `Foundations / Effects`
5. `Foundations / Radius & Spacing`
6. `Components / Navigation`
7. `Components / Hero & Map`
8. `Components / Skills`
9. `Components / Quests`
10. `Components / Highlights`
11. `Components / Background`
12. `Components / Contact`
13. `Patterns / Section Layouts`
14. `Templates / Home Desktop`
15. `Templates / Home Tablet`
16. `Templates / Home Mobile`

### Breakpoints para documentacao

- Desktop: 1920, 1440, 1280
- Tablet: 1024, 768
- Mobile: 430, 390, 360

## Assets

### Background references

- `public/reference/home-ui.png`
- `public/hero-map.png`
- `public/quests-background.png`
- `public/skills-bg.png`

### Icons

Pasta base:

- `public/icons`

Padrao atual:

- SVG e PNG locais
- nomenclatura descritiva por feature ou tema

## Tokens recomendados no Figma

### Collections

- `Primitives`
- `Color`
- `Spacing`
- `Radius`
- `Effects`
- `Typography`

### Semantic tokens

- `color/bg/base`
- `color/bg/panel`
- `color/bg/panel-strong`
- `color/bg/glass`
- `color/text/primary`
- `color/text/secondary`
- `color/text/muted`
- `color/border/default`
- `color/border/strong`
- `color/accent/primary`
- `color/accent/soft`
- `color/accent/strong`
- `color/status/warning`

## Interacao e motion

Baseado no codigo:

- hover com glow e aumento sutil
- fade e slide lateral para paines
- blur e dim no mapa quando painel esta ativo
- modais com backdrop escuro e blur

Documentar no Figma:

- duracao curta: 200ms a 280ms
- duracao media: 320ms a 340ms
- easing premium suave

## Mapeamento inicial codigo -> Figma

- `TopNav` -> componente navegacao
- `MapPreview` -> template hero principal
- `SkillNode` -> atom interativo
- `SkillConnection` -> decorator utilitario
- `SkillPanel` -> organismo lateral
- `Tabs` -> primitive de navegacao de conteudo
- `Card` -> primitive de container

## Limitacao atual desta sessao

Nesta sessao eu consegui:

- analisar o codigo
- validar acesso da conta Figma
- estruturar a especificacao do design system

Nesta sessao eu nao consegui escrever diretamente no arquivo Figma porque o ambiente atual nao expoe a ferramenta de escrita do canvas necessaria para construir paginas, variaveis e componentes dentro do arquivo.

## Proximo passo recomendado

Quando a ferramenta de escrita no Figma estiver disponivel, seguir esta ordem:

1. criar arquivo de design system
2. criar collections e variables
3. montar foundations
4. construir componentes por secao
5. validar desktop, tablet e mobile
6. opcionalmente adicionar Code Connect
