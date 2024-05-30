1. Introduccion a los contenedores
2. Images Management 
3. Building Images
4. Containers Management
5. Networking
6. Volumes
7. Distributing Images
8. Docker Compose
9. Docker Registry
10. Monitoring
11. Logging

Bonus

1. Jenkins
2. K8s 

- Lenguajes interpretados X NO compilan Runtime
- Lenguajes precompilados -> Codigo pre compile / VM Java y C#
- Lenguajes compilados -> Código máquina, GO, C y C++ 

## Single Container

Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /
Document Length:        12 bytes

Concurrency Level:      100
Time taken for tests:   0.636 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      211000 bytes
HTML transferred:       12000 bytes
Requests per second:    1571.26 [#/sec] (mean)
Time per request:       63.643 [ms] (mean)
Time per request:       0.636 [ms] (mean, across all concurrent requests)
Transfer rate:          323.76 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.7      0       3
Processing:     5   60   8.0     61      91
Waiting:        3   60   8.6     61      91
Total:          5   61   8.0     61      94

Percentage of the requests served within a certain time (ms)
  50%     61
  66%     62
  75%     63
  80%     64
  90%     67
  95%     74
  98%     83
  99%     89
 100%     94 (longest request)

|                            |       No ENTRYPOINT        | ENTRYPOINT exec_entry p1_entry | ENTRYPOINT ["exec_entry", "p1_entry"]          |
| :------------------------: | :------------------------: | ------------------------------ | ---------------------------------------------- |
|           No CMD           |     error, not allowed     | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry                            |
| CMD ["exec_cmd", "p1_cmd"] |      exec_cmd p1_cmd       | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry exec_cmd p1_cmd            |
|  CMD ["p1_cmd", "p2_cmd"]  |       p1_cmd p2_cmd        | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry p1_cmd p2_cmd              |
|    CMD exec_cmd p1_cmd     | /bin/sh -c exec_cmd p1_cmd | /bin/sh -c exec_entry p1_entry | exec_entry p1_entry /bin/sh -c exec_cmd p1_cmd |


`docker run -it --entrypoint /bin/bash [docker_image]`

## Exercise

1. Crear una red de tio bridge que se llame `purple`

```bash
docker network create purple
```

2. Comprobar que se ha creado

```bash
docker network ls
```

3. Crear dos contenedores dentro de la red, uno de ellos con la imagen nginx y otro con ubuntu

```bash
docker run -dit --name ubuntu --netork purple ubuntu bash 
```

```bash
docker run -d --name nginx --netork purple nginx 
```

4. Desde el contenedor de ubuntu hacer petición al contenedor de Nginx

```bash
docker attach ubuntu
curl http://nginx
exit
```

> `docker exec -it ubuntu bash`

docker volume rm nginx-vol \
     todo-app-api_dbdata \
     todo-app_todoapp_db \
     todos_db

docker run --rm -p 80:80 \ 
 -v `pwd`/www:/www \
 -v `pwd`/conf:/etc/nginx/conf.d \