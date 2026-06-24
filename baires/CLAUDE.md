@AGENTS.md

# Instrucciones para Claude Code

Este proyecto está hecho con Next.js, React, Tailwind CSS y Framer Motion.

Quiero que trabajes como desarrollador front-end senior, replicando diseños de Figma lo más pixel perfect posible a partir de screenshots desktop y mobile.

## Reglas generales

- Usar React + Next.js.
- Usar Tailwind CSS para estilos.
- Usar Framer Motion para animaciones sutiles.
- No agregar librerías externas salvo que yo lo pida explícitamente.
- No modificar estilos globales si no es necesario.
- No modificar otros componentes que no te pedí.
- No cambiar nombres de archivos, rutas, assets o componentes si no hace falta.
- Mandar siempre el código completo del componente final.
- El código debe estar limpio, ordenado y listo para pegar.

## Diseño

Cuando te mande screenshots de Figma, quiero que repliques exactamente:

- Espaciados.
- Márgenes.
- Tamaños de textos.
- Line-height.
- Font-weight.
- Colores.
- Bordes.
- Border-radius.
- Posiciones.
- Tamaños de imágenes/videos.
- Jerarquía visual.
- Proporciones entre elementos.

No inventes otro diseño. No simplifiques. No cambies la estética.

## Responsive

- Desktop debe quedar igual a la captura desktop.
- Mobile debe quedar igual a la captura mobile.
- No romper desktop cuando ajustes mobile.
- Usar clases responsive de Tailwind.
- Evitar que textos, imágenes o videos se corten.
- Mantener buen espaciado vertical en mobile.

## Animaciones

Usar Framer Motion de forma sutil:

- Fade in.
- TranslateY suave.
- Stagger en grupos de elementos.
- Hover sutil en botones/cards si corresponde.
- No exagerar las animaciones.

## Assets

- Las imágenes están dentro de `/public/img`.
- Los videos están dentro de `/public/video/baires`.
- Mantener los `src` locales.
- Si falta un asset, dejar el `src` preparado y avisar cuál debería reemplazarse.

## Forma de responder

Cuando te pida modificar un componente:

1. Analizá bien las screenshots.
2. Compará desktop y mobile.
3. Usá mi código actual como base si te lo paso.
4. No cambies estructura innecesariamente.
5. Devolveme únicamente el código completo final.
