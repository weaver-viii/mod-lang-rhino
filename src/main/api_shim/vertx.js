/*
 * Copyright 2011-2012 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof module === 'undefined') {
  throw "Use require() to load Vert.x API modules"
}

var vertx = {};

function addProps(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      vertx[key] = obj[key];
    }
  }
}

vertx.Buffer = require('buffer.js');
vertx.eventBus = require('event_bus.js');
addProps(require('net.js'));
addProps(require('http.js'));
vertx.Pump = require('pump.js');
addProps(require('timer.js'));
addProps(require('sockjs.js'));
addProps(require('parse_tools.js'));
addProps(require('shared_data.js'));
vertx.fileSystem = require('file_system.js');

vertx.runOnContext = function(task) {
  __jvertx.runOnContext(task);
}

vertx.currentContext = function() {
  return __jvertx.currentContext();
}

module.exports = vertx;
