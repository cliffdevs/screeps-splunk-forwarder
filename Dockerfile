FROM node:12-alpine

ENV SCREEPS_EMAIL="" \
    SCREEPS_PASSWORD="" \
    SCREEPS_TOKEN="" \
    SCREEPS_PROTOCOL="https" \
    SCREEPS_HOST="screeps.com" \
    SCREEPS_PORT="443" \
    SCREEPS_PATH="/" \
    SPLUNK_TOKEN="" \
    INFO_LOGGING="false"
    
COPY src /opt/splunkforwarder

ENTRYPOINT ["node"," /opt/splunkforwarder/index.js"]
