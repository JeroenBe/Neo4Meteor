/**
 * Created by Jeroen on 12/07/16.
 */

import neo4j from 'neo4j-driver'

export const driver = neo4j.driver("bolt://0.0.0.0:7473", neo4j.auth.basic("neo4j", "neo4j"))