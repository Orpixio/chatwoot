-- jika mau reset db
docker compose run --rm rails bundle exec rails db:reset

-- db migrate
docker compose run --rm rails bundle exec rails db:migrate

-- jika ada update image
docker compose run --rm rails bundle exec rails db:chatwoot_prepare

-- compose up down
docker compose up -d --remove-orphans
docker compose down

-- build image
docker buildx build --platform linux/amd64 -t devopsorpix/cep:v1.0.0 -f ./docker/Dockerfile .

-- push image (after login to hub)
docker push devopsorpix/cep:v1.0.0

-- masuk ke container postgres
docker exec -it chatwoot-postgres-1 bash