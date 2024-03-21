triggers {
        branch('main')
        branch('feature/*')
    }

FROM golang:1.17-alpine AS build

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o myapp

FROM alpine:latest
WORKDIR /app
COPY --from=build /app/myapp .
CMD ["./myapp"]
