FROM ubuntu:20.04

USER root

RUN ["apt", "update"]
RUN ["apt", "install", "-y", "software-properties-common"]
RUN ["add-apt-repository", "ppa:deadsnakes/ppa"]
RUN ["apt", "install", "-y", "python3.7"]

# CMD ["/bin/echo", "Hello World CMD"]
CMD ["Hello World"]
ENTRYPOINT ["echo"]
# ENV name Jane Doe

# ENTRYPOINT ["/bin/bash", "-c", "echo Hello, ${name}"]
   
# /bin/sh -c <>