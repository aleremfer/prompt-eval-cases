# 🧪 Estudio de caso QA y desambiguación: cuando “Huracán de Balazote” no es un fenómeno meteorológico

### Un ejemplo real de fallo de desambiguación contextual y alucinación plausible

---

## Resumen

Este estudio de caso documenta una interacción real con un modelo de lenguaje en la que un prompt ambiguo dio lugar a una explicación fluida, coherente y técnicamente plausible que, sin embargo, era incorrecta.

El error no se debió a la invención de datos, sino a un fallo en la desambiguación de un nombre propio local con varios significados culturalmente plausibles. El caso ilustra un modo de fallo común en los LLMs: resolver la ambigüedad por plausibilidad en lugar de solicitar aclaración.

---

## El prompt

El usuario formuló la siguiente pregunta (en español):

> **«¿Qué sabes del huracán de Balazote?»**

No se proporcionó ningún contexto adicional.

---

*La transcripción completa de la conversación original (en español) está disponible en `full-dialogue.es.md`.*

---

## Respuesta del modelo

El modelo interpretó el prompt como una referencia a un fenómeno meteorológico.

Generó una explicación larga y detallada que describía:

- un episodio de meteorología violenta en Balazote (Albacete, España),
- vientos fuertes y daños materiales,
- comparaciones con reventones descendentes o tornados débiles,
- y una reflexión sobre el uso coloquial, pero no técnico, del término “huracán”.

La respuesta era:

- fluida y segura,
- técnicamente informada,
- culturalmente plausible,
- e internamente coherente.

Sin embargo, era incorrecta respecto al referente al que se refería el usuario.

---

## Realidad factual

En realidad:

- **Huracán de Balazote** es el nombre de un equipo de fútbol local de Balazote (Albacete, España).
- Es un club modesto, de ámbito regional, bien conocido a nivel local.
- Nunca ha existido en la zona un huracán ni ningún fenómeno tropical comparable.

El término “Huracán de Balazote” es **polisémico**:

- puede referirse a un nombre propio (club de fútbol),
- y también evocar una referencia coloquial o mitificada a un episodio de meteorología extrema.

El modelo eligió una de las interpretaciones sin confirmar el contexto.

---

## Por qué este ejemplo es relevante

Este caso combina varios factores de alto riesgo para fallos semánticos:

### 1. Ambigüedad en nombres propios

El prompt contiene un nombre que puede referirse de forma plausible a más de un concepto real.

### 2. Conocimiento cultural local

La interpretación correcta depende de conocimiento local y no global, representado de forma desigual en los datos de entrenamiento.

### 3. Sesgo de plausibilidad

La interpretación meteorológica es globalmente plausible y explicable, aunque incorrecta en este contexto concreto.

### 4. Ausencia deliberada de contexto

El prompt omite cualquier referencia explícita a fútbol, deporte o ámbito geográfico más allá del topónimo.

---

## El problema central: inferencia frente a aclaración

En lugar de solicitar aclaración (por ejemplo, *«¿Te refieres al equipo de fútbol o a un fenómeno meteorológico?»*), el modelo:

- infirió un significado basándose en la plausibilidad,
- se comprometió con esa interpretación,
- y la desarrolló en una explicación extensa.

Esto pone de manifiesto un problema estructural recurrente en los LLMs:

> **Ante nombres propios ambiguos, los modelos tienden a preferir inferencias plausibles frente a la cautela epistémica.**

---

## Cómo habría sido una respuesta más segura

Una respuesta más robusta habría sido, por ejemplo:

> «¿Te refieres al equipo de fútbol Huracán de Balazote o a un fenómeno meteorológico?  
> El término puede tener distintos significados según el contexto.»

Esta respuesta es menos “brillante”, pero mucho más fiable.

---

## Relevancia para QA y evaluación de IA

Este caso resulta útil para evaluar:

- desambiguación contextual,
- resolución de nombres propios,
- sesgo de saliencia cultural,
- alucinaciones por sobreinterpretación,
- QA semántico en prompts con poco contexto.

Muestra cómo los errores pueden surgir no por invención de hechos, sino por una desalineación confiada entre lenguaje y referente.

---

## Conclusión

El fallo documentado aquí no es trivial ni aleatorio.

Surge de una tendencia estructural a resolver la ambigüedad internamente en lugar de pedir aclaraciones, especialmente cuando una de las interpretaciones permite construir una explicación coherente y técnicamente rica.

Este tipo de fallos es difícil de detectar automáticamente, pero crítico en otros usos reales.

---

## Licencia

Este estudio de caso se basa en una interacción real y puede reutilizarse con fines educativos y de investigación.

**Licencia sugerida:**  
Creative Commons Attribution 4.0 International (CC BY 4.0)

https://creativecommons.org/licenses/by/4.0/

**Etiquetas:**  
LLM, QA semántico, desambiguación, alucinaciones, contexto cultural, nombres propios
