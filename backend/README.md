## ## Docker build image

```bash
docker build --platform linux/amd64 -t ethan778899/neton:0.0.1 -f Dockerfile .
```

## Docker pull image

```bash
docker pull ethan778899/neton:0.0.1
```

## Docker run image

### local

```bash
docker rm -f neton; \
docker run -itd \
    --restart=always \
    --add-host="host.docker.internal:host-gateway" \
    --name=neton \
    --platform linux/amd64 \
    -p 3004:3000 \
    ethan778899/neton:0.0.1
```

### remote

```bash
docker rm -f neton; \
docker run -itd \
    --restart=always \
    --add-host="host.docker.internal:host-gateway" \
    --name=neton \
    --platform linux/amd64 \
    -p 3004:3000 \
    ethan778899/neton:0.0.1
```
