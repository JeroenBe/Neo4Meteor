# Neo4Meteor

A Repo to test a Meteor connection to Neo4j

### Possible ways of integration
* Using the `neo4j-driver` npm package
* Building a meteor microservice pushing the Graph to a MongoDB, connecting the actual app via a websocket. (This could result in a generic Meteor package)

### Nice to know
This Neo4J instance is ran in a Docker container. It is possible to encounter hardcoded IP-addresses during development which should be ignored/replaced.

When building these types of applications, we better use a configuration file.
