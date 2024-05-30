1. Crea una imagen a partir del Dockerfile
2. Instancia un contenedor a partir de la imagen y que escuche en el puerto 5050 local
3. ¿Cuantas capas tiene tu imagen?

1. Build
docker build -t fuckingimage .
 
2. Contenedor 5050
docker run -d --rm -p 5050:80 --name fucking-server fuckingimage
 
3. ¿Nº Capas?
docker history fucking-server
20 capas


[4:24 PM] Elola Mañeru, Carlos
1. Crea una imagen a partir del Dockerfile

2. Instancia un contenedor a partir de la imagen y que escuche en el puerto 5050 local.

docker run --name mynginx -d -p 5050:80 mynginx:latest

3. ¿Cuántas capas tiene tu imagen?
