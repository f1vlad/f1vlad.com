$(document).ready(function() {

    $('#newcontent').find('.search-filter.filter-dropdown-h').after(filter_dropdown);

    $('.select2.search-filter').click(function(){
        $('.filter-dropdown-container')
        .toggle();
    });

    $('[ref=newFilter]').click(function(){
        $('.filter-dropdown-container').toggle();
        filter_show(true);
    });


    $('[ref=newFilterLabel]').click(function(){
        if($(this).hasClass('read-only') == true)
            return;
        filter_show(true);
    });

    $(document).on('click', '[ref=newFilterCancel], [ref=filterClose]', function(){
        filter_show(false);
        $('#newcontent .search-filter').find('input').val('');
        $('[ref=filterSave]').addClass('disabled');
        $('[ref=newFilterLabel]').html("New filter").removeClass('read-only');
        $('[ref=newFilterCancel]').addClass("hidden");
        $('[ref=filterBasicRowContainer]:not(:first-child)').remove();
        $('[ref=filterBasicRowContainer]').removeClass('grouped');
    });

    $(document).on('click', '[ref=filterAdvanced]', function(){
        filter_toggle_advanced($('.filter-option-advanced'));
        var query = filter_build_query();
        $('[ref=queryInput]').val(query).attr('data', query);
        return false;
    })

    $(document).on('click', '[ref=filterClear]', function(){
        $('#newcontent .search-filter').find('input').val('');
        $('[ref=filterSave]').addClass('disabled');
        $('[ref=newFilterLabel]').html("New filter").removeClass('read-only');
        $('[ref=newFilterCancel]').addClass("hidden");
        $('[ref=filterBasicRowContainer]').remove();
        $('[ref=filterBasicRowContainerModel]').clone().insertBefore('[ref=filterBasicRowContainerModel]').removeClass('model hidden').attr('ref', 'filterBasicRowContainer');
        filter_row_id_gen();
    });

    $(document).on('click', '[ref=filterRowPlusGroup]', function(e){
        group = parseInt($(e.currentTarget).closest('[ref=filterBasicRowContainer]').attr('group')) + 1;
        $('[ref=filterBasicRowContainerModel]').clone().insertAfter($(e.currentTarget).closest('[ref=filterBasicRowContainer]').closest('[ref=filterBasicRowContainer]')).removeClass('hidden model')
            .attr({'ref': 'filterBasicRowContainer', 'group': group});
        filter_row_id_gen();
        filter_row_serialize();
        filter_row_index();
        filter_group_index();
        filter_row_construct_operator(false);
    });

    $(document).on('click', '[ref=filterRowPlus]', function(e){
        group = $(e.currentTarget).closest('[ref=filterBasicRowContainer]').attr('group');
        $('[ref=filterBasicRowContainerModel]')
            .clone()
            .insertAfter($(e.currentTarget).closest('[ref=filterBasicRowContainer]'))
            .removeClass('hidden model')
            .addClass('grouped')
            .attr({'ref': 'filterBasicRowContainer', 'group': group})
            .prev('[ref=filterBasicRowContainer]')
            .addClass('grouped');
        filter_row_id_gen();
        filter_row_serialize();
        filter_row_index();
        filter_group_index();
        filter_row_construct_operator();
    });

    $(document).on('click', '[ref=filterRowMinus]', function(e){
        if($('[ref=filterBasicRowContainer]').length == 1){ // last row, remove filter
            $('[ref=filterClose]').trigger('click')
        } else {
            group = $(e.currentTarget).closest('[ref=filterBasicRowContainer]').attr('group');
            groupedCount = $('[ref=filterBasicRowContainer][group=' + group + ']').length;
            if(groupedCount === 2) {
                $('[ref=filterBasicRowContainer][group=' + group + ']').removeClass('grouped');
            }
            $(this).closest('[ref=filterBasicRowContainer]').remove();
        }
        filter_row_serialize();
        filter_row_index();
        filter_group_index();
    });

    $(document).on('click', '[ref=fakeSelect2dropdown], .fake-select2-input', function(){
        $(this).closest('.details').prev().toggleClass('hidden');
        return;
    });

    $(document).on('click', '[ref=fakeSelect2liClickRow1]', function(){
        $(this).closest('.fake-select2').toggleClass('hidden');
        $(this).closest('.fake-select2').next('.details').find('input').val($(this).attr('data')).attr('data', $(this).attr('data'));
        var context = $(this).closest('.filter-definition-container').attr('id'),
            filter_tool_obj_store = $(this).attr('objindex');
        $(this).closest('[ref=filterBasicRowContainer]').attr('filter_tool_obj_store', filter_tool_obj_store);
        filter_row_select_operator(filter_tool_obj[$(this).attr('objindex')], context);
    });

    $(document).on('click', '[ref=fakeSelect2liClickRow2]', function(){
        $(this).closest('.fake-select2').toggleClass('hidden');
        $(this).closest('.fake-select2').next('.details').find('input').val($(this).attr('data')).attr('data', $(this).attr('data'));
        var context = $(this).closest('.filter-definition-container').attr('id')
            filter_tool_obj_store = $(this).closest('[ref=filterBasicRowContainer]').attr('filter_tool_obj_store');
        filter_row_select_value(filter_tool_obj[filter_tool_obj_store], context);
    });

    $(document).on('click', '[ref=fakeSelect2liClickRow3]', function(){
        $(this).closest('.fake-select2').toggleClass('hidden');
        $(this).closest('.fake-select2').next('.details').find('input').val($(this).attr('data')).attr('data', $(this).attr('data'));
        var context = $(this).closest('.filter-definition-container').attr('id');
    });

    $(document).on('click', '[ref=fakeSelect2liClickRowOperator]', function(){
        $(this).closest('.fake-select2').toggleClass('hidden');
        $(this).closest('.fake-select2').next('.details')
            .find('input').val($(this).attr('data'))
            .attr({'data': $(this).attr('data'), 'index': 'null'});
        filter_row_serialize();
    });

    $("#newcontent").on('change keyup', '[ref=newFilterName]', function(e){
        var newName = e.currentTarget.value,
            eventType = e.handleObj.type;
            $('[ref=newFilterLabel]').html(newName).addClass('read-only');
            $('[ref=newFilterCancel]').removeClass("hidden");
            if(!newName == "") {
                $('[ref=filterSave]').removeClass('disabled');
            } else {
                $('[ref=filterSave]').addClass('disabled');
                $('[ref=newFilterLabel]').html("New filter").removeClass('read-only');
                $('[ref=newFilterCancel]').addClass("hidden");
            }
    });

    function filter_show(v){
        if(v) {
            $('.filter-header-container, .filter-rows-container.filter-basic').toggle();
            $('.filter-rows-container.filter-basic .filter-definition-container')
                .attr("id", "id"+Math.floor((Math.random() * 110) + 1))
                .empty()
                .html(filter_controls_advanced_labels + filter_controls_advanced_row);
                filter_row_select_field(filter_tool_obj);
            $('.filter-rows-container.filter-advanced').html(filter_controls_advanced_query);
            $('.header-components')
                .empty()
                .html(filter_header_components);
            // setup model to be cloned
            if($('[ref=filterBasicRowContainerModel]').length === 0)
                $('.filter-rows-container.filter-basic').find('[ref=filterBasicRowContainer]').attr('group', '1').addClass('last-group').clone().insertAfter('[ref=filterBasicRowContainer]').addClass('model hidden').attr('ref', 'filterBasicRowContainerModel').removeClass('last-group');
            filter_row_id_gen();
            filter_row_serialize();
        } else {
            $('.filter-header-container, .filter-rows-container').hide();
        }
    }

    function filter_toggle_advanced(v){
        $('.filter-basic, .filter-advanced').toggle();
        v.text()=="Advanced" ? v.html('Basic') : v.html('Advanced');
    }

    function construct_fake_select2(arr2, selector, open){
        var menu_con = '',
            i = 0,
            id = $(selector).closest('.filter-definition-container').attr('id'),
            ref = "";
        if(selector.selector.indexOf("row-one") > 0) {
            ref = "fakeSelect2liClickRow1";
        } else if (selector.selector.indexOf("row-two") > 0) {
            ref = "fakeSelect2liClickRow2";
        } else if (selector.selector.indexOf("row-three") > 0) {
            ref = "fakeSelect2liClickRow3";
        } else if (selector.selector.indexOf("row-operator-details") > 0) {
            ref = "fakeSelect2liClickRowOperator";
        }
        arr2.forEach(function(myVar) {
            menu_con = menu_con + '<li ref="' + ref + '" objindex="' + (i++) + '" data="' + myVar + '" class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"><div class="select2-result-label" id="select2-result-label-75" role="option"><span class="select2-match"></span>' + myVar + '</div></li>';
        });

        if($(selector).after().siblings().hasClass('fake-select2')){
            console.log('duplicate fake select2 menu found');
        }

        $(selector).before(filter_fake_select2_before + menu_con  + filter_fake_select2_after);

        if(open) $(selector).prev('.fake-select2').removeClass('hidden');
        $(selector).find('input').addClass('fake-select2-input');
    }

    function filter_row_select_field(v){
        var items = [],
            target = $('.details.row-one');
        $.each(v, function(index, value) {
            items.push(value.name)
        });
        construct_fake_select2(items, target, false);
        target.find('input:first').after('<a class="fake-select2-dropdown" ref="fakeSelect2dropdown"><i class="fa fa-sort-down"></i>')
    }

    function filter_row_select_operator(v, id){
        var items=[],
            target = $('#'+id+' .details.row-two');
        $.each(v.selectOperator, function(index, value) {
            items.push(value)
        });
        $('#'+id+' .details.row-two').prev('.fake-select2').remove();
        construct_fake_select2(items, target);
        target.find('input:first').after('<a class="fake-select2-dropdown" ref="fakeSelect2dropdown"><i class="fa fa-sort-down"></i>')
    }

    function filter_row_select_value(v, id){
        var items=[],
            target = $('#'+id+' .details.row-three');
        $.each(v.selectValue, function(index, value) {
            items.push(value)
        });
        $('#'+id+' .details.row-three').prev('.fake-select2').remove();
        construct_fake_select2(items, target);
        target.find('input:first').after('<a class="fake-select2-dropdown" ref="fakeSelect2dropdown"><i class="fa fa-sort-down"></i>')
    }

    function filter_row_id_gen(){
        $.each( $($('.filter-definition-container')), function() {
            $(this).attr("id", "id"+Math.floor((Math.random() * 110) + 1));
        });
    }

    function filter_row_serialize(){
        var i = 0;
        $.each( $($('[ref=filterBasicRowContainer] input[index]')), function(key, value) {
            $(this).attr('index', i++);
        });
    }

    function filter_row_index(){
        var i = 1;
        $.each($($('[ref=filterBasicRowContainer]')), function() {
            $(this).attr('rowIndex', i++);
        });
    }

    function filter_build_query(){
        var query = 'SELECT * FROM myTable WHERE ',
            i = 0,
            ii = 0
            indexNum = $('[ref=filterBasicRowContainer] input[index]').length,
            queryGroupUnion = "";
        $.each( $($('[ref=filterBasicRowContainer] input[index]')), function(key, value) {

            if($(this).hasClass('query-group-union')===true) {
                queryGroupUnion = $(this).attr('data');
            }

            if($(this).hasClass('query-group-union')===false) {
                query = query + " " + $(this).attr('data');
            }

            i++;
            ii++;
            if(i === 3 && indexNum!=ii) {
                // reset three row column
                i = 0;
            }

            // last iteration
            if(ii === indexNum) {
                // Add group operator
                //query = query.replace(")", ") " + queryGroupUnion);
                query = query.replace(/\)/g, ") " + queryGroupUnion);

                // remove white spaces inside parentheses, double space before parentheses open
                query = query.replace(/\( /g, "(").replace(/ \)/g, ")").replace(/  \(/g, " (").slice(0,-queryGroupUnion.length);
            }
        });
        return query;
    }

    function filter_row_construct_operator(autoIndex){
        // autoIndex false excludes operator from automatic (advanced) query buildup
        $.each($('.operator:visible'), function() {
            //NOTE: this might cause problems
            if($(this).find('.details.row-operator-details').prev('.fake-select2').length === 0) {
                construct_fake_select2(filter_tool_operators, $(this).find('.details.row-operator-details'), false);
                var thisClass = "";
                autoIndex == false ? thisClass="query-group-union" : thisClass="rows-group";
                $(this).find('input:visible')
                    .val('AND').attr({'data': 'AND', 'index': 0}) // default operator
                    .addClass(thisClass).after('<a class="fake-select2-dropdown" ref="fakeSelect2dropdown"><i class="fa fa-sort-down"></i>');
            }
        });


console.log('not done yet');
// needs index to serialize? for default operators
//filter_row_serialize();
    // index must be added above to inputs


    }

    function filter_group_index(){
        var lastGroup = $('[ref=filterBasicRowContainer]').last().attr('group'),
            groupSize,
            numGroups = $('[ref=filterBasicRowContainer]').last().attr('group');
        for (i = 0; i < lastGroup; i++) {
            $('[ref=filterBasicRowContainer][group=' + (i+1) + ']')
                .removeClass('last-of-group last-child-of-group')
                .last()
                .addClass('last-of-group');
            $('[ref=filterBasicRowContainer][group=' + (i+1) + ']')
                .removeClass('first-of-group')
                .first()
                .addClass('first-of-group');

                if(parseInt(lastGroup) === i + 1) {
                    $('[ref=filterBasicRowContainer][group=' + (i+1) + ']').last().addClass('last-child-of-group');
                }

            $('[ref=filterBasicRowContainer][group=' + (i+1) + ']').first().attr('group-size', + $('[ref=filterBasicRowContainer][group=' + (i+1) + ']').length);
            // based on above, calculate group union operator
            groupSize = $('[ref=filterBasicRowContainer][group=' + (i+1) + ']').length;

            // calculate height of rows operator container
            $('[ref=filterBasicRowContainer][group=' + (i+1) + ']')
                .first()
                .find('.operator.row-operator')
                .find('.row-operator-details')
                .css({'height': ((groupSize * 38) + 4) + 'px'})
                .find('.fake-select2-input')
                .toggleClass('translatez');
        }
        if(lastGroup > 1) {// Display grouped
            $('[ref=filterBasicRowContainer]').addClass('insert-group-union');
            // calculate group union container height
            $('[ref=filterBasicRowContainer]')
                .first()
                .find('.filter-group-union.operator')
                .css({'height': (($('[ref=filterBasicRowContainer]').length * 38) + 16 + (numGroups * 20)) + 'px'});

            // if grouped rows exist, wrap them in parenthesis for advanced query build
            $('.group-wrap').remove();
            for(i=1; i <= lastGroup; i++){
                $('<input class="group-wrap" data="(" type="hidden" index/>').prependTo($('[ref=filterBasicRowContainer][group='+i+']').first().find('.filter-definition-container'));
                $('<input class="group-wrap" data=")" type="hidden" index/>').appendTo($('[ref=filterBasicRowContainer][group='+i+']').last().find('.filter-definition-container'));
                filter_row_serialize();
            }
        } else {// Single group
            $('[ref=filterBasicRowContainer]').removeClass('insert-group-union');
        }
        $('[ref=filterBasicRowContainer]').removeClass('last-group');
        $('[group='+lastGroup+']').addClass('last-group');
    }

    function isEven(value) {
        if (value%2 == 0)
            return true;
        else
            return false;
    }

});


var filter_tool_operators = [
    "AND",
    "OR"
]
var filter_tool_obj = {
    0 : {
        'name' : 'State',
        'type' : 'select2',
        'selectOperator' : ["is", "is not"],
        'selectValue' : ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"]
    },
    1 : {
        'name' : 'Assigned to',
        'type' : 'select2',
        'selectOperator' : ["is", "is not"],
        'selectValue' : ["Admin", "Will", "Sally"]
    },
    2 : {
        'name' : 'Probability',
        'type' : 'select2',
        'selectOperator' : ["equals to", "doesn't equal to", "near"],
        'selectValue' : ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    },
    3 : {
        'name' : 'Likelihood',
        'type' : 'select2',
        'selectOperator' : ["is greater than", "is less than", "about"],
        'selectValue' : ["25%", "50%", "75%", "100"]
    },
    4 : {
        'name' : 'Name',
        'type' : 'select2',
        'selectOperator' : ["exactly matches", "starts with", "contains"],
        'selectValue' : [null]
    },
    5 : {
        'name' : 'Type',
        'type' : 'select2',
        'selectOperator' : ["is any of", "is not any of", "is empty", "is not empty"],
        'selectValue' : [null]
    },
    6 : {
        'name' : 'Type',
        'type' : 'select2',
        'selectOperator' : ["is any of", "is not any of", "is empty", "is not empty"],
        'selectValue' : [null]
    },
    7 : {
        'name' : 'Industry',
        'type' : 'select2',
        'selectOperator' : ["is any of", "is not any of", "is empty", "is not empty"],
        'selectValue' : [null]
    },
    8 : {
        'name' : 'Annual Revenue',
        'type' : 'select2',
        'selectOperator' : ["exactly matches", "starts with"],
        'selectValue' : [null]
    },
    9 : {
        'name' : 'Street',
        'type' : 'select2',
        'selectOperator' : ["exactly matches", "starts with"],
        'selectValue' : [null]
    },
    10 : {
        'name' : 'City',
        'type' : 'select2',
        'selectOperator' : ["exactly matches", "starts with"],
        'selectValue' : [null]
    },
    11 : {
        'name' : 'Postal Code',
        'type' : 'select2',
        'selectOperator' : ["exactly matches", "starts with"],
        'selectValue' : [null]
    },
    12 : {
        'name' : 'Country',
        'type' : 'select2',
        'selectOperator' : ["exactly matches", "starts with"],
        'selectValue' : [null]
    },
    13 : {
        'name' : 'Rating',
        'type' : 'select2',
        'selectOperator' : ["exactly matches", "starts with"],
        'selectValue' : [null]
    },
    12 : {
        'name' : 'My Favirites',
        'type' : 'select2',
        'selectOperator' : [null],
        'selectValue' : [null]
    }
};
var filter_dropdown = ' <ul class="select2-results filter-dropdown-container" role="listbox" id="select2-results-6" style="display:none; position: absolute; top: 33px; left: 8px; z-index: 1000; background: white; border: 1px solid #ddd; border-radius: 3px; "> <li ref="newFilter" class="select2-results-dept-0 select2-result select2-result-selectable select2-result-border-bottom " role="presentation"> <div class="select2-result-label" id="select2-result-label-7" role="option"> <div class="select2-icon-prepend" data-id="create"> <span class="select2-match"></span> <i class="fa fa-plus"></i> New Filter </div></div></li><li class="select2-highlighted select2-results-dept-0 select2-result select2-result-selectable select2-result-border-top" role="presentation"> <div class="select2-result-label" id="select2-result-label-8" role="option"> <div class="select2-icon-prepend" data-id="all_records"> <span class="select2-match"></span> <i class="fa fa-check"></i> All Opportunities </div></div></li><li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"> <div class="select2-result-label" id="select2-result-label-9" role="option"> <div class="select2-no-icon" data-id="assigned_to_me"> <span class="select2-match"></span> My Favorites </div></div></li><li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"> <div class="select2-result-label" id="select2-result-label-10" role="option"> <div class="select2-no-icon" data-id="favorites"> <span class="select2-match"></span> My Opportunities </div></div></li><li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"> <div class="select2-result-label" id="select2-result-label-11" role="option"> <div class="select2-no-icon" data-id="recently_created"> <span class="select2-match"></span> Recently Created </div></div></li><li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"> <div class="select2-result-label" id="select2-result-label-12" role="option"> <div class="select2-no-icon" data-id="recently_viewed"> <span class="select2-match"></span> Recently Viewed </div></div></li></ul>';
var filter_controls_advanced_row = '<div class="filter-body fields FilterControlsAdvancedRow" > <div class="row-fluid"> <div class="row-fluid variable span12"> <div class="controls span3"> <span class="details row-one"> <input index="" data-type="" class=""/> </span> </div><div class="controls span3"> <span class="details row-two"> <input index="" class=""/> </span> </div><div class="controls span6"> <span class="details row-three"> <input index="" class=""> </span> </div><div class="hide controls span4"></div><div class="hide controls span4"></div><div class="filter-actions btn-group"> <button class="btn btn-invisible btn-dark" ref="filterRowMinus"><i class="fa fa-minus" ></i></button> <button class="btn btn-invisible btn-dark" ref="filterRowPlus"><i class="fa fa-plus"></i></button> <button class="fa-plus-helper btn btn-invisible btn-dark" ref="filterRowPlusGroup"><i class="fa fa-sign-out"></i></button></div></div><div ref="filterOperator" class="span1 operator row-operator hidden"><span class="row-operator-details details"><aside class="misc-group-helper"></aside><input class=""></span></div></div></div>';
var filter_controls_advanced_query = '<div class="filter-body fields FilterControlsAdvancedRowQuery"> <div class="row-fluid"> <div class="row-fluid"> <div class="controls span12"> <span class="detail row-three"><i class="fa fa-check-circle"></i><input class="queryInput" ref="queryInput" ><i class="fa fa-info-circle"></i></span></div><div class="hide controls span4"></div><div class="hide controls span4"></div><div class="filter-actions btn-group">&nbsp;</div></div></div></div>';
var filter_controls_advanced_labels = '<div class="filter-body labels FilterControlsAdvancedLabels" > <div class="row-fluid"> <div class="row-fluid"> <div class="controls span3"> <span class="detail"> <label>Select field</label> </span> </div><div class="controls span3"> <span class="details"> <label>Select operator</label> </span> </div><div class="controls span6"> <span class="detail"> <label>Select value</label> </span> </div></div></div></div>';
var filter_header_components = '<div class="controls span6"> <label>Filter name</label> <input ref="newFilterName" type="text" class="inherit-width" placeholder="Enter new filter name…" > </div><div class="actions span6"> <div class="pull-right"> <a class="btn btn-link btn-invisible reset_button hide" >Reset</a> <a class="btn btn-link btn-invisible filter-option-advanced" ref="filterAdvanced">Advanced</a> <a class="btn btn-link btn-invisible filter-option-clear-values" ref="filterClear" >Clear values</a> <a class="btn btn-link btn-invisible filter-close" ref="filterClose">Cancel</a> <a class="btn btn-link btn-invisible delete_button hide" ref="filterDelete" >Delete</a> <a class="btn btn-primary disabled save_button" ref="filterSave">Save</a> </div></div>';
var filter_fake_select2_before = '<div class=" hidden fake-select2 select2-drop select2-display-none select2-with-searchbox select2-drop-active" style="" id="select2-drop"><div class="select2-search"><label for="s2id_autogen8_search" class="select2-offscreen"></label><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-focused" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-8" id="s2id_autogen8_search" placeholder="" aria-activedescendant="select2-result-label-76"></div><ul class="select2-results" role="listbox" id="select2-results-8">';
var filter_fake_select2_after = '</ul></div>';

