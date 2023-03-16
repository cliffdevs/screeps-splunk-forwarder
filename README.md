# Screeps Splunk Forwarder
This project monitors your screeps logging console and forwards the events to your Splunk instance via Splunk HEC API.

## Configuration
Configuration is done through the following environment variables:
- ENV SCREEPS_EMAIL=""
- SCREEPS_PASSWORD=""
- SCREEPS_TOKEN=""
- SCREEPS_PROTOCOL="https"
- SCREEPS_HOST="screeps.com"
- SCREEPS_PORT="443"
- SCREEPS_PATH="/"
- SPLUNK_TOKEN=""
- SPLUNK_PROTOCOL="https"
- SPLUNK_HOST=""
- SPLUNK_PORT="443"
- SPLUNK_PATH="/services/collector/event"
- INFO_LOGGING="false"

### Screeps Config
The above environment variables related to Screeps are not all required. You should set your SCREEPS_TOKEN if you are on the public server, or override the SCREEPS_HOST and username/password for private servers. If you are playing on seasonal servers, make sure to override the SCREEPS_PATH.

### Splunk Config
Create a Splunk HEC configuration in your splunk instance / cluster / service. Use the auth token from that configuration for SPLUNK_TOKEN. 
Your Splunk Host is the prefix to your Splunk URL, ex: https://<splunk_host>/someplace/in/splunk
Your protocol is most likely https, and defaults to this value, unless you explicitly have a private HTTP endpoint.
The splunk port depends on your instance, but cloud subscriptions usually use port 443 while free trials use 8088.

### Logging to Console
You can have the docker container log to console any screeps log events, in addition to forwarding these same logs to splunk, by setting INFO_LOGGING=true.
