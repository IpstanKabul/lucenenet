/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(function () {

    renderAlerts();

    function renderAlerts() {
        $('.lucene-block').addClass('alert alert-info');
    }

    // //docfx has a hard coded value of 60px in height check for the nav bar
    // //but our nav bar is taller so we need to work around this
    // function fixAutoCollapseBug() {
    //     autoCollapse();
    //     $(window).on('resize', autoCollapse);
    //     $(document).on('click', '.navbar-collapse.in', function (e) {
    //         if ($(e.target).is('a')) {
    //             $(this).collapse('hide');
    //         }
    //     });

    //     function autoCollapse() {
    //         var navbar = $('#autocollapse');
    //         if (navbar.height() === null) {
    //             setTimeout(autoCollapse, 310);
    //         }
    //         navbar.removeClass(collapsed);
    //         if (navbar.height() > 60) {
    //             navbar.addClass(collapsed);
    //         }
    //     }
    // }

})