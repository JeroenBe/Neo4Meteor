/**
 * Created by Jeroen on 12/07/16.
 */

import { FlowRouter } from 'meteor/kadira:flow-router'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

import '/imports/ui/pages/home'

FlowRouter.route('/', {
    name: 'home',
    action: function(){
        BlazeLayout.render('home')
    }
})