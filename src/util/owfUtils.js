/*
 * Copyright 2014 Next Century Corporation
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
 *
 */

/**
 * Utility methods for working with OWF
 * @class neon.util.owfUtils
 * @static
 */
neon.util.owfUtils = (function() {
    /**
     * Indicates if neon is running within an OWF environment
     * @return {boolean} true if running in OWF, false if not
     * @method isRunningInOWF
     */
    function isRunningInOWF() {
        return typeof(OWF) !== "undefined" && OWF.Util.isRunningInOWF();
    }

    return {
        isRunningInOWF: isRunningInOWF
    };
})();
