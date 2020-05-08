/*
 * Copyright HCL Technologies Ltd. 2001, 2020
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0 
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the 
 * specific language governing permissions and limitations under the License.
 */

wcmHelper = require('./wcmHelper');
// wcmHelper.init('gsagercf05trans.rtp.raleigh.hcl.com', 10039, '/wps/mycontenthandler', 'wpsadmin', 'wpsadmin','C:/awcm1');
wcmHelper.init('gsagerwcmdesign.rtp.raleigh.hcl.com', 10039, '/wps/mycontenthandler', 'wpsadmin', 'wpsadmin', false, 'c:\awcm1').then(function(){
try{
    var libs = wcmHelper.pullLibrary('Web Content Templates 3.0').then(function(data){
            console.log('Library: ', data);
        /*
        wcmHelper.pushLibrary("TestLibrary").then (function (pushedList) {
            console.log('pushedList: ', pushedList);
        } );         
*/
    }, function(err) {
        console.log(err);
            });
      
}
catch(e){
    console.log(e);

}
    
});
// wcmHelper.init('gsagerwcmdesign.rtp.raleigh.hcl.com', 10039, '/wps/mycontenthandler', 'wpsadmin', 'wpsadmin','C:/awcm1');

/*wcmHelper.getLibraries().then(function(libs){
});*/
