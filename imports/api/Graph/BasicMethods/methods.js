/**
 * Created by Jeroen on 12/07/16.
 */

import { Meteor } from 'meteor/meteor'
import { driver } from '/imports/api/Graph/graph'

Meteor.methods({
    getActor(name){
        const session = driver.session()

        session
            .run("MATCH (a:Person {name: nameParam})-[:ACTED_IN]->(:Movie) RETURN a", {nameParam: name})
            .subscribe({
                onNext(record){
                    console.log(record)
                },
                onCompleted(){
                    session.close()
                },
                onError(error){
                    console.log(error)
                }
            })
    }

})
