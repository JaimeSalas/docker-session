FROM golang:latest AS builder

WORKDIR /opt/app 

COPY . . 

RUN go env -w GO111MODULE=off; \
    CG0_ENABLED=0 GOOS=linux go build .

FROM ubuntu:latest

WORKDIR /app 

COPY --from=builder /opt/app .

EXPOSE 8080

CMD ["./app"]