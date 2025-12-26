# 🧪 Caso de estudio QA y Factualidad: cuando “Pepino” no es un pepino

### Un ejemplo real de ambigüedad semántica y alucinación en modelos de lenguaje

---

## Resumen

Este breve caso de estudio documenta una interacción real con un modelo de lenguaje de gran tamaño que produjo una respuesta coherente, pero factualmente incorrecta, debido a una ambigüedad semántica y a la ausencia de contexto explícito.

El ejemplo muestra cómo los LLM pueden generar explicaciones plausibles en lugar de solicitar aclaraciones, y por qué este comportamiento es relevante en tareas de factualidad, QA semántico y evaluación de sistemas de IA.

---

## El prompt

El usuario formuló la siguiente pregunta (en español):

> **«¿El Torpedo-66 es de pepino o de cebolla?»**

No se proporcionó ningún contexto adicional.

---
*La transcripción de mi pregunta y su respuesta está disponible aquí en `full-dialogue.es.md`.*

---

## La respuesta del modelo

El modelo interpretó la pregunta como si se refiriera a un bocadillo, asumiendo que:

- **pepino** = ingrediente (pepino / pepinillo)  
- **cebolla** = ingrediente  
- **Torpedo-66** = un bar o restaurante

Respondió con seguridad que *el Torpedo-66 llevaba pepinillo*, construyendo una interpretación culinaria coherente, pero inexistente.

La respuesta era:

- rápida
- fluida,  
- segura,  
- muy verosímil desde un punto de vista cultural,  
- pero... completamente falsa.

---

## La verdad sin matices (ground truth)

En realidad:

- **Torpedo 66** es el nombre de un club de fútbol.
- Dicho club es de **Pepino**, un municipio real de la provincia de Toledo (España).
- **Cebolla** es otro municipio muy cercano, también en la provincia de Toledo.
- Tanto **Pepino** como **Cebolla** son *topónimos*, no ingredientes.

La pregunta era ambigua de forma intencionada, pero resoluble desde el punto de vista factual con la interpretación semántica correcta.

La pregunta se formuló de manera verbal y sin pistas adicionales. El modelo resolvió la ambigüedad interpretando “pepino” y “cebolla” como ingredientes, a pesar de que ambas palabras tienen también un uso geográfico válido.

---

## Por qué este ejemplo es relevante

Este caso resulta especialmente interesante porque combina varios factores de riesgo habituales en alucinaciones de modelos de lenguaje:

### 1. Ambigüedad léxica

Palabras como *pepino* y *cebolla* son:

- sustantivos comunes, y  
- nombres propios de lugares reales.

### 2. Entidad real de baja frecuencia

*Torpedo 66* no es una entidad conocida a nivel global, pero existe y es verificable.

### 3. Ausencia de contexto explícito

El prompt no mencionaba:

- fútbol,  
- deporte,  
- geografía, ni  
- España.

Esto obligó al modelo a elegir una interpretación en lugar de pedir aclaración.

---

## El problema de fondo: alucinación frente a aclaración

En lugar de solicitar una aclaración (por ejemplo: *«¿Te refieres al club de fútbol?»*), el modelo:

- resolvió internamente la ambigüedad,  
- optimizó la respuesta para que resultara plausible, y  
- generó una alucinación culturalmente creíble.

Esto pone de manifiesto un rasgo estructural de los LLM:

> **Los modelos de lenguaje optimizan la coherencia del texto, no la cautela epistemológica.**

---

## Cómo habría sido una respuesta más segura

Una respuesta orientada a factualidad podría haber sido:

> «Si te refieres al club de fútbol Torpedo 66, es de Pepino (Toledo).  
> Si te refieres a otra cosa, por favor, proporciona más contexto.»

Esta respuesta es menos “fluida”, pero mucho más robusta desde el punto de vista factual.

---

## Relevancia para QA y evaluación de IA

Este ejemplo es útil para:

- detección de alucinaciones,  
- desambiguación de entidades,  
- pruebas de ambigüedad semántica,  
- evaluación de factualidad,  
- diseño de procesos de QA con intervención humana.

Demuestra cómo prompts cotidianos y no adversariales pueden revelar limitaciones profundas en el comportamiento de los modelos.

---

## Conclusión

No se trataba de una pregunta trampa, sino de una ambigüedad natural que los humanos resolvemos mediante conocimiento del mundo y contexto implícito.

El fallo del modelo no fue aleatorio ni malicioso, sino sistémico.

Comprender y auditar este tipo de errores es esencial para desarrollar sistemas de lenguaje más fiables y seguros.

---

## Licencia

Este caso de estudio se basa en una interacción real y puede reutilizarse con fines educativos y de investigación.

**Licencia sugerida:**  
Creative Commons Attribution 4.0 International (CC BY 4.0)  
https://creativecommons.org/licenses/by/4.0/

**Etiquetas:**  
LLM, factualidad, alucinaciones, QA de IA, ambigüedad semántica
