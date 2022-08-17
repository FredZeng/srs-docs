#!/bin/bash

pwd
du -sh *

if [[ -d /usr/local/srs-docs-cache/srs-docs ]]; then
  cp -R /usr/local/srs-docs-cache/srs-docs/node_modules .
fi

yarn &&
yarn cross-env REGION='zh-cn' BASE_URL='/lts/zh-cn/' \
  SEARCH_HTTPS_HOST=ossrs.net SEARCH_HTTPS_PORT=443 \
  SEARCH_HTTP_HOST=ossrs.net SEARCH_HTTP_PORT=80 \
  SEARCH_APIKEY=$SEARCH_APIKEY \
  docusaurus build --locale zh-cn --out-dir build/zh-cn

(cd build && tar zcf zh-cn.tar.gz zh-cn)
du -sh build/*

