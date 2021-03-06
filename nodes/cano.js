/*
 * Copyright 2014 Gregory Prisament
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
function CanoNode() {
    var $me;

    this.render = function($container) {
        $container.html(this.get$());
        this.onLive();
        return this;
    }

    this.appendTo = function($container) {
        $container.append(this.get$());
        this.onLive();
        return this;
    }

    this.hide = function() {
        if (this.onHide) {
            this.onHide();
        }
        else {
            this.get$().hide();
        }
    }

    this.prependTo = function($container) {
        $container.append(this.get$());
        this.onLive();
        return this;
    }

    this.show = function() {
        if (this.onPreShow) {
            this.onPreShow();
        }
        if (this.onShow) {
            this.onShow();
        }
        else {
            this.get$().show();
        }
    }
}
