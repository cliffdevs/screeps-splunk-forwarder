FROM node:12-alpine

ENV SCREEPS_EMAIL="" \
    SCREEPS_PASSWORD="" \
    SCREEPS_TOKEN="" \
    SCREEPS_PROTOCOL="https" \
    SCREEPS_HOST="screeps.com" \
    SCREEPS_PORT="443" \
    SCREEPS_PATH="/" \
    SPLUNK_TOKEN="" \
    SPLUNK_PROTOCOL="https" \
    SPLUNK_HOST="" \
    SPLUNK_PORT="443" \
    SPLUNK_PATH="/services/collector/event" \
    INFO_LOGGING="false"
    
COPY src /opt/splunkforwarder/src
COPY node_modules /opt/splunkforwarder/node_modules
WORKDIR "/opt/splunkforwarder"

ENTRYPOINT ["node", "src/index.js"]
