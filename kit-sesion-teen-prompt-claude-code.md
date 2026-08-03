# PROMPT DE EXECUÇÃO — PÁGINA DE VENDAS "KIT SESIÓN TEEN" (LATAM)

## 0. MISSÃO

Construir a página de vendas do **Kit Sesión Teen**, adaptação para a América Latina (espanhol neutro) do produto brasileiro **Kit Consultório Teen**.

A referência visual é a página BR em produção: `https://kitteen.vercel.app`

**Divisão de responsabilidade neste projeto:**

- **Identidade visual, layout, hierarquia, cores, tipografia, espaçamento, componentes:** replicar da página BR a partir dos prints que serão enviados junto com este prompt. Fidelidade visual alta.
- **Copy, estrutura de seções, preços, ofertas:** NÃO copiar da página BR. Usar exclusivamente o que está definido neste documento. A copy abaixo já foi adaptada culturalmente e não deve ser traduzida, reescrita ou "melhorada".

**Regra de ouro:** se houver conflito entre o print e este documento, **este documento vence** em tudo que for texto, seção, preço e oferta. O print vence em tudo que for visual.

---

## 1. CONTEXTO DO PRODUTO

- **Produto:** Kit Sesión Teen
- **O que é:** +80 recursos terapêuticos em PDF, prontos para imprimir, para psicólogas clínicas que atendem adolescentes de 12 a 18 anos
- **Público:** psicóloga clínica, mulher, 24 a 45 anos, LATAM (prioridade: México e Colômbia)
- **Idioma:** espanhol neutro latino-americano
- **Canal:** Meta Ads, tráfego frio, mobile em esmagadora maioria
- **Preços:** Kit Esencial USD 9 / Kit Completo USD 17
- **Mecanismo único:** Método Vía Lateral
- **Posicionamento:** anti-infantil. O adolescente percebe quando o material foi adaptado de criança.

---

## 2. REGRAS NÃO NEGOCIÁVEIS

### Copy

1. **Espanhol neutro LATAM.** Nada de Espanha.
2. **Tratamento sempre `tú`.** Nunca `usted`, nunca `vos`, nunca `vosotros`.
3. **Proibido:** `vosotros`, `os`, `vuestro`, `chaval`, `guay`, `coger`, `peques`, `vale`.
4. **Proibido regionalismo:** `chavos`, `pibes`, `pelados`, `cabros`, `che`.
5. **Zero em-dash (—) em toda a página.** Usar dois pontos, ponto ou vírgula.
6. **Zero emoji** em qualquer lugar da página.
7. Não inventar prova social, número de vendas, depoimento ou validação.
8. Não prometer cura, resultado clínico garantido ou substituição da condução profissional.
9. Não usar `juegos divertidos`, `actividades lúdicas`, `material para niños` em tom positivo. Mata o posicionamento.
10. Usar **`motivo de consulta`**, nunca `demanda clínica` (soa traduzido do português).

### Técnico / Visual

11. **Mobile-first.** O tráfego é quase todo mobile. Testar tudo em 380px antes de qualquer coisa.
12. **Lucide Icons** para todos os ícones.
13. Tipografia sans-serif limpa, conforme os prints.
14. **Estética anti-infantil:** sem pastel, sem cartoon, sem carinha feliz, sem Comic Sans. Isso vale também para a UI da página, não só para o material.
15. Stack: Next.js + Tailwind (mesma base da página BR).

---

## 3. DIFF CONTRA A PÁGINA BR (LEIA ANTES DE CONSTRUIR)

A página LATAM **não é** a página BR traduzida. Diferenças obrigatórias:

| # | Página BR | Página LATAM | Motivo |
|---|---|---|---|
| 1 | Sem seção de mecanismo | **Seção "Vía Lateral" NOVA, logo abaixo do hero** | Paga o loop aberto pela H1 |
| 2 | Bloco de depoimento com print | **Bloco de depoimento REMOVIDO** | Não existe depoimento em espanhol ainda. Print em português é pior que nenhum. |
| 3 | Timer "Oferta válida até 10:00" | **Timer REMOVIDO.** Substituído por escassez de preço de lançamento | Contador falso queima credibilidade em público profissional |
| 4 | Âncora "De R$345,00 / Economiza R$307,10" | **Âncora nova: "Solo en bonos: USD 40. Hoy: USD 17"** | Multiplicador de 9x aumenta suspeita em mercado saturado de mega pack |
| 5 | "92% escolhem o Completo" | **REMOVIDO.** Substituído por "Por USD 8 más te llevas los 4 bonos" | Dado do Brasil, não pode ser afirmado em LATAM no dia 1 |
| 6 | Bônus 3: "60 perguntas" | **Bônus 3: "60 consignas"** | "Perguntas" contradiz a H1 ("sin preguntarle nada"). Ver seção 5, item BLOQUEIO. |
| 7 | Preços dos bônus R$47/R$37/R$27/R$37 | **USD 10 cada, os quatro** | Modelagem cultural, não conversão cambial |
| 8 | "12x de R$3,16" | **REMOVIDO.** Parcelamento BR não existe igual em LATAM | Ver seção 7 |
| 9 | H1 de volume | **H1 de paradoxo** | Ver seção 4 |
| 10 | FAQ com 7 itens | **FAQ com 9 itens** (3 novos, 1 substituído) | Objeções específicas LATAM |

---

## 4. COPY COMPLETA — COLAR EXATAMENTE COMO ESTÁ

### 4.1 META TAGS

```
title: Kit Sesión Teen — Recursos visuales para psicólogas que atienden adolescentes
meta-description: +80 recursos terapéuticos listos, organizados por motivo de consulta, hechos para adolescentes. Sin cara de material para niños.
og:title: Kit Sesión Teen — Recursos visuales para psicólogas que atienden adolescentes
og:description: +80 recursos terapéuticos listos, organizados por motivo de consulta, hechos para adolescentes.
og:image: /og-image.png  (1200x630, PRECISA SER REGERADA EM ESPANHOL)
```

Nota: o title acima usa um em-dash porque é padrão de meta tag e não é copy visível no corpo. Se preferir consistência total, trocar por `|`.

---

### 4.2 HERO

**Eyebrow:**
```
Sin improvisar la entrada. Sin adaptar material de niños.
```

**H1:**
```
80 recursos que hacen hablar al adolescente sin preguntarle nada.
```

**Sub:**
```
Habla del material primero. Después habla de él. Visuales, maduros, organizados por motivo de consulta y listos para imprimir.
```

**Imagem:** mockup do kit (PRECISA SER REGERADO EM ESPANHOL)

**CTA:**
```
Quiero mi kit ahora
```
(âncora `#precio`)

**Linha de prova social (CONDICIONAL, ver seção 5):**
```
+2.000 psicólogas ya usan los Kits Consultorio.
```

---

### 4.3 BARRA DE CONFIANÇA

```
Acceso inmediato después de la compra
Imprimes y lo usas en la misma sesión
Organizado por motivo de consulta
+80 recursos listos para aplicar
Funciona online y presencial
```

---

### 4.4 VÍA LATERAL (SEÇÃO NOVA)

Posição: imediatamente abaixo da barra de confiança, antes de "Míralo por dentro".

Peso visual: seção de destaque. É a seção mais importante da página depois do hero. Merece bloco próprio, respiro, e a última linha em destaque tipográfico.

**Título:**
```
Se llama Vía Lateral.
```

**Corpo:**
```
El adulto lo pone en palabras. El niño lo saca jugando. El adolescente quedó en el medio.

Si le llevas algo de niños, se siente tratado como niño. Si le haces la pregunta directa, se protege.

La Vía Lateral es la tercera entrada. Él opina sobre una carta, una escena, un feed, una decisión que no es suya. Y mientras habla del material, se está hablando a él.
```

**Linha de destaque (peso visual alto, é o pagamento da promessa do hero):**
```
Ninguno de los 80 recursos empieza por "¿cómo te sientes?".
```

---

### 4.5 MÍRALO POR DENTRO

**Título:**
```
Míralo por dentro. Con calma.
```

**Subtítulo:**
```
Ninguno de estos recursos era de niños antes. No hay nada adaptado.
```

**Galeria:** mesma mecânica de carrossel da página BR, 6 exemplos.

> **ATENÇÃO CRÍTICA:** as 6 imagens de exemplo PRECISAM ser regeradas em espanhol. Este é o bloco de maior conversão da página neste mercado. A psicóloga vai dar zoom. Um único exemplo com texto em português destrói a autoridade da página inteira. Não usar as imagens BR nem como placeholder em deploy público.

---

### 4.6 CÓMO SE VE TU SEMANA

**Título:**
```
Cómo se ve tu semana con el kit adentro.
```

**Bullets:**
```
Abres una carpeta organizada por motivo de consulta y en 30 segundos sabes qué aplicar.

Le pones algo adelante y lo ves pensar "esto no es para nenes".

Lo escuchas hablar por la vía lateral, sin sentir que está siendo interrogado.

Cuando los padres preguntan "¿está sirviendo?", tienes con qué responder.

Dejas de improvisar la entrada. Empiezas a aplicar.
```

---

### 4.7 ÉL NO ES UN NIÑO GRANDE

**Título:**
```
Él no es un niño grande.
```

**Corpo:**
```
No atiendes a un adulto con una ficha de niños. No atiendes a un niño con una técnica de adultos. El adolescente también necesita material pensado para él.

Y se da cuenta cuando no lo es.
```

**CTA:**
```
Quiero mi kit ahora
```

**Selos abaixo do CTA:**
```
Acceso inmediato · Garantía de 15 días · Compra 100% segura
```

---

### 4.8 TODO LO QUE TE LLEVAS

**Título:**
```
Todo lo que te llevas
```

**Imagem:** mockup (regerado em espanhol)

**Nome:**
```
Kit Sesión Teen
+80 recursos terapéuticos
```

**Bullets:**
```
Organizados por 8 motivos de consulta
Material visual e indirecto: habla del recurso y termina hablando de él
Listo para imprimir o para usar en pantalla
Con el lenguaje que él respeta
Funciona presencial y online
```

**Ponte para os bônus:**
```
Y no termina ahí. En el kit completo te llevas 4 bonos que resuelven lo que más pesa en el día a día clínico:
```

---

### 4.9 LOS 4 BONOS

**Título:**
```
4 Bonos Exclusivos
```

```
01 · Guía de Primera Sesión con Adolescente
Ruta de 8 pasos para que el primer encuentro no termine en "no sé".
Antes USD 10 → GRATIS

02 · Hablando con los Padres
Cómo hacer la devolución familiar sin exponer al adolescente.
Antes USD 10 → GRATIS

03 · Banco de Consignas para Destrabar la Sesión
60 consignas listas para cuando contesta con monosílabos.
Antes USD 10 → GRATIS

04 · Fichas de Anamnesis y Devoluciones
Listas para tomar historia y devolver a los padres con claridad.
Antes USD 10 → GRATIS
```

**Âncora (colocar abaixo dos 4 bônus):**
```
Solo en bonos: USD 40. Hoy, con el kit completo: USD 17.
```

**CTA:**
```
Quiero el kit completo
```

---

### 4.10 ESCASSEZ (SUBSTITUI O TIMER)

Sem contador. Sem countdown. Sem JavaScript de tempo.

```
Este precio es de lanzamiento en México y Colombia. Cuando abramos el resto de la región, sube.
```

**CTA:**
```
Ver la oferta
```

---

### 4.11 ELIGE TU KIT

Âncora: `#precio`

**Título:**
```
Elige tu kit
```

**Subtítulo:**
```
Los dos dan acceso inmediato. La diferencia es cuánto quieres resolver de una vez.
```

**PLANO 1:**
```
Kit Esencial
USD 9
Pago único

[Quiero el Kit Esencial]

+80 recursos visuales terapéuticos
Organizado por motivo de consulta
Acceso inmediato en PDF
```

**Faixa divisória entre os planos:**
```
Por USD 8 más te llevas los 4 bonos.
```

**PLANO 2 (destaque):**
```
Más vendido

Kit Completo
+80 recursos + 4 bonos exclusivos

USD 17
Pago único · Acceso inmediato

[Quiero el Kit Completo]

Todo lo del Esencial
Acceso de por vida
Garantía de 15 días
Bono 1: Guía de Primera Sesión
Bono 2: Hablando con los Padres
Bono 3: Banco de Consignas
Bono 4: Fichas de Anamnesis y Devoluciones
```

---

### 4.12 GARANTÍA

**Título:**
```
Garantía incondicional de 15 días
```

**Corpo:**
```
Compra, descarga, úsalo 15 días. Si no es para ti, te devolvemos el dinero. Sin preguntas, sin trámite.

El riesgo es todo nuestro.
```

---

### 4.13 FAQ

**Título:**
```
Respondemos lo que estás pensando ahora.
```

**Itens (9, em ordem):**

```
1. ¿Sirve para adolescentes de cualquier edad?
2. Ya tengo el Kit Sesión Lista. ¿Tiene sentido este también?
3. ¿Funciona en sesión online?
4. ¿Puedo imprimirlo para varios pacientes?     [NOVO]
5. ¿Los materiales son editables?
6. ¿Cuánto tiempo tengo de acceso?
7. ¿Cómo puedo pagar?                            [SUBSTITUI "posso parcelar"]
8. ¿Esto reemplaza mi criterio clínico?          [NOVO]
9. ¿Y si no me gusta?
```

**Resposta obrigatória do item 8 (usar exatamente esta frase, é o antídoto para o mercado argentino/uruguaio):**
```
No. El recurso no reemplaza tu escucha. Crea una entrada.
```

Demais respostas: escrever seguindo o tom da página, curtas, diretas, sem defensividade.

---

### 4.14 CTA FINAL E RODAPÉ

```
Quiero mi kit ahora
```

```
Kit Sesión Teen © 2026
Política de Privacidad · Términos · Contacto
```

---

## 5. BLOQUEIOS — NÃO RESOLVER SOZINHO, PERGUNTAR

Estes três pontos dependem de decisão do Cauã. Se não estiverem resolvidos, deixar marcado e avisar:

**BLOQUEIO 1 — Prova social "+2.000":**
A linha `+2.000 psicólogas ya usan los Kits Consultorio` só pode entrar se o número for agregado real **incluindo compradoras hispanas**. Se for número exclusivo do Brasil, a linha sai da página. Perguntar antes de incluir.

**BLOQUEIO 2 — Bônus 3:**
A H1 promete `sin preguntarle nada`. O bônus 3 no Brasil é "60 perguntas". Renomeamos para "60 consignas". Isso só é honesto se o material realmente for de consignas (propostas/instruções) e não de perguntas diretas. Se o material for mesmo 60 perguntas, ele precisa ser reconstruído ou a H1 mente. Confirmar com o Cauã antes de publicar.

**BLOQUEIO 3 — Link de checkout:**
A página BR usa `pay.wiapy.com`. A LATAM precisa de links próprios em USD, com meios de pagamento locais (OXXO e SPEI no México, PSE e Nequi na Colômbia). Usar placeholder `#checkout-esencial` e `#checkout-completo` até receber os links reais.

---

## 6. ASSETS QUE PRECISAM SER REGERADOS EM ESPANHOL

Nenhum destes pode ser reaproveitado da página BR:

- [ ] `og-image.png` (1200x630)
- [ ] `mockupteen.png` (mockup do kit completo)
- [ ] `mockupcru.png` (mockup do kit básico)
- [ ] `exemplo1.png` a `exemplo6.png` (6 prints de recurso interno) — **prioridade máxima**

Enquanto não existirem, usar placeholder cinza com label indicando o que falta. Não fazer deploy público com imagem em português.

---

## 7. NOTA SOBRE PAGAMENTO

Não replicar o bloco de parcelamento brasileiro ("12x de R$3,16"). Não existe equivalente direto em LATAM.

- México: MSI (meses sin intereses) depende do processador e do banco
- Colômbia: cuotas via PSE
- Preço na página em USD. A conversão para moeda local acontece no checkout.

Não exibir preço em peso na página. Em campanha multi-país, preço em moeda local na landing gera inconsistência com o checkout.

O item 7 do FAQ (`¿Cómo puedo pagar?`) é onde essa informação mora. Escrever a resposta só depois que os meios de pagamento estiverem confirmados.

---

## 8. CRITÉRIO DE ACEITE

Antes de considerar pronto, verificar:

- [ ] Zero em-dash no corpo da página
- [ ] Zero emoji
- [ ] Zero `usted`, `vos`, `vosotros` em qualquer texto
- [ ] Zero ocorrência de `demanda clínica` (deve ser `motivo de consulta`)
- [ ] Nenhuma imagem com texto em português em produção
- [ ] Seção Vía Lateral existe e está acima de "Míralo por dentro"
- [ ] Bloco de depoimento NÃO existe
- [ ] Timer/countdown NÃO existe
- [ ] Fidelidade visual aos prints em mobile 380px
- [ ] Os 3 BLOQUEIOS da seção 5 estão resolvidos ou explicitamente sinalizados
