Carpeta donde se contienen todos los ficheros gráficos de la aplicación.

Para convertir imágenes .svg a .pdf (probado en Mac):
$ brew install librsvg
$ rsvg-convert -f pdf -o file.pdf file.svg
