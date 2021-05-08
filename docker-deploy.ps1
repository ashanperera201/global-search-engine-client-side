## Powershell script to build and push Docker images

Set-Location .\global-search-engine-client-side\
docker image build -t deep-crawler/client:v3 .

# Set-Location ..

# Set-Location .\global-search-engine-server-side\
# docker image build -t deep-crawler/server:v3 .

docker login --username=dimuit86

docker tag deep-crawler/client:v3 dimuit86/deep-crawler-client:v3
# docker tag deep-crawler/server:v3 dimuit86/deep-crawler-server:v3

docker push dimuit86/deep-crawler-client:v3
# docker push dimuit86/deep-crawler-server:v3