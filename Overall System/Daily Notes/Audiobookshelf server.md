Username: amangargnepa
Password: 11311419@Audiobookshelf

[Audiobookshelf](http://localhost:13378/audiobookshelf/login)
[Second link]([Audiobookshelf](http://localhost:13378/audiobookshelf/library/3eb20403-be3a-4cb2-9069-6a08f8717202))

Docker container mapped at (use this to log in to phone along with ipv4 ip): ```http://192.168.31.108:13378```

How to check Ip?
```
ipconfig
```
in powershell.

Second user: amangarg



# Start Docker

Instead of remembering a long `docker run` command, you keep everything in one file.

Create:

```
C:\Audiobookshelf\docker-compose.yml
```

Paste this:

```
services:  audiobookshelf:    image: ghcr.io/advplyr/audiobookshelf:latest    container_name: audiobookshelf    restart: unless-stopped    ports:      - "13378:80"    volumes:      - C:\Audiobooks:/audiobooks      - C:\Audiobookshelf\config:/config      - C:\Audiobookshelf\metadata:/metadata
```

Save it.

---

## Running it

Open PowerShell:

```
cd C:\Audiobookshelf
```

Then:

```
docker compose up -d
```

To stop:

```
docker compose down
```

To update:

```
docker compose pulldocker compose up -d
```