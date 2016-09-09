/***
 * Copyright 2015 RAPP
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Authors: Konstantinos Panayiotou
 * Contact: klpanagi@gmail.com
 *
 */


var client_res = function( ){
  var obj = {
    belief: 0,
    best_pose: {x: 0, y: 0, theta: 0},
    status: 0,
    error: ''
  };
  return obj;
};


var client_req = function( ){
  var obj = {
    file: [],
    pose_delta: {x: 0, y: 0, theta: 0},
    id: 0
  };
  return obj;
};


var ros_req = function( ){
  var obj = {
    image: '',
    pose_delta: {x: 0, y: 0, theta: 0},
    id: 0
  };
  return obj;
};


var ros_res = function( ){

};

exports.client_res = client_res;
exports.client_req = client_req;
exports.ros_req = ros_req;
exports.ros_res = ros_res;