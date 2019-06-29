var show_empty_groups = false,
    show_grouped_list = false,
    nested_list_views = false;

$(document).ready(function() {

    // generate list view
    construct_fake_flexlist(null, $('[ref=mainList] .flex-list-view-content'), Math.floor((Math.random()*20)+1) + 10);

    $(document).on('click', '.disabled *', function(){
        return false;

    });

    $(document).on('click', 'li.dropdown .dropdown-toggle', function(){
        if($(this).closest('li.dropdown').hasClass('open') == false) {
            $(this).closest('li.dropdown').addClass('open').find('.btn-group').addClass('open');    
        }
    });

    $(document).on('click', '[ref=showMoreRows]', function(){

        var loaded = $(this).closest('.flex-list-view').find('table').attr('data-row-loaded'),
            available = $(this).closest('.flex-list-view').find('table').attr('data-row-available'),
            numToLoad = 5,
            imitateDelayNum = Math.random() * (2000 - 100) + 100; // random delay between 100 and 2000

        var diff = available - loaded;

        if(diff < 5) {
            numToLoad = diff;
        }

        fake_loading($(this), null, 2000);

        fake_flexlist_add_rows(numToLoad, $(this).closest('.flex-list-view'), 2000);
    });

    $(document).on('click', 'li.select2-result', function(){
        $(this).closest('.fake-select2').addClass('hidden');
        return;
    });

    $(document).on('click', '[ref=fakeSelect2RmPill]', function(e){
        $(this).closest('.fake-select2-choice').remove();
        return false;
    });

    $(document).on('click', '[data-storage=group_module_by] [ref=fakeSelect2RmPill]', function(){
        handle_group_module_update();
        if($('[data-storage=group_module_by] .fake-select2-multi-input').find('.fake-select2-choice').length === 0) {
            $('[ref=mainListWrap], [ref=groupedListWrap]').toggleClass('hidden');
            $('[ref=show_empty_groups], [ref=create_chart_dashlet]').closest('label').addClass('disabled');
            $('[ref=show_empty_groups]').attr('checked', false);
            show_empty_groups = show_grouped_list = false;
            $('.chart_dashlet_label').tooltip('enable');
        }
    });

    $(document).on('click', '[data-storage=summarize_module_by] [ref=fakeSelect2RmPill]', function(){
        if($('[data-storage=summarize_module_by] .fake-select2-multi-input').find('.fake-select2-choice').length === 0) {
            $('[ref=sumarize_type]').closest('label').addClass('disabled');
            $('[ref=show_empty_groups]').attr('checked', false);
            show_empty_groups = false;
            $('.summation-grouping-title .amounts').addClass('hidden');
        }
        handle_summation_update();
    });

    $(document).on('click', '.fake-select2-multi-input, .fake-select2-html-input', function(){
        $(this).siblings('.fake-select2-dropdown').trigger('click');
        //
    });

    function fake_loading(selector_to_show, selector_to_hide, delay) {
        selector_to_show.toggleClass('hidden');
        selector_to_show.parent().append(fake_loading_template);
        setTimeout(function(){
            //alert('done')
            selector_to_show.toggleClass('hidden');
            $('[ref=fakeLoading]').remove();
        }, delay);
    }

    function construct_fake_select2_abstract(arr, selector, open, searchListAvail, selectType){

        var menu_con = '', i = 0, dataStorage, ref;

        if($(selector).attr('data-storage')) {
            dataStorage = $(selector).attr('data-storage');
        }

        if(selectType == "multi") {
            $(selector).prepend('<div class="fake-select2-multi-input" />');
            ref = 'multiselect';
        } else if (selectType == "html") {
            $(selector).prepend('<div class="fake-select2-html-input" />');
            ref = 'html';
        } else {
            ref = 'singleselect';
        }

        arr.forEach(function(myVar) {
            menu_con = menu_con + '<li fake-select2-abstract-ref="'+dataStorage+'" ref="' + ref + '" objindex="' + (i++) + '" data="' + myVar + '" class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"><div class="select2-result-label" id="select2-result-label-75" role="option"><span class="select2-match"></span>' + myVar + '</div></li>';
        });

        $(selector).before(filter_fake_select2_before + menu_con  + filter_fake_select2_after);

        $(selector).find('input').addClass('fake-select2-input').attr('placeholder', 'Select');

        if(open)
            $(selector).prev('.fake-select2').removeClass('hidden');

        if(searchListAvail)
            $(selector).prev('.fake-select2').find('.select2-search').toggleClass('hidden');
    }

    function construct_fake_flexlist(arr, inject_selector, num){
        var fakeContent = '',
            i = num,
            initialLoadSize = 5,
            loadMoreRequired = true;

        if(num < initialLoadSize) {
            initialLoadSize = num;
            loadMoreRequired = false;
        }

        // table header
        fakeContent += '<table data-row-loaded="'+0+'" data-row-available="'+num+'" class="table table-striped dataTable reorderable-columns">' + fake_flexlist_header + '<tbody>';
        fakeContent += construct_fake_flexlist_rows(initialLoadSize);
        fakeContent += '</tbody></table>';

        // inject content
        inject_selector.append(fakeContent)

        // update loaded rows count
        inject_selector.find('table').attr('data-row-loaded', initialLoadSize);

        // add load more rows button
        if(loadMoreRequired)
            inject_selector.parent().append('<div><button ref="showMoreRows" class="btn btn-link btn-invisible more padded">More accounts...</button></div>');
    }

    function index_rows_fake_flexlist(selector) {
        var numRows = selector.find('table tbody tr').length;
        selector.find('table').attr('data-row-loaded', numRows)
        if(selector.find('table').attr('data-row-available') <= selector.find('table').attr('data-row-loaded')) {
            selector.find('[ref=showMoreRows]').toggleClass('hidden');
        }
    }

    function construct_fake_flexlist_rows(num) {
        var fakeContent = '',
            fakeAmount,
            i = num;
        while(i > 0) {
            fakeContent += '<tr><td><span class="fieldset list"><div class="fieldset-field"><span class="fieldset actions actionmenu list"><input type="checkbox"></span></div><div class="fieldset-field"><span><i class="fa fa-favorite" rel="tooltip" title="" data-original-title="Favorite" tabindex="-1"></i></span></div><div class="fieldset-field"><span></span></div></span></td>';        
            // Name
            fakeContent += '<td><div class="ellipsis_inline" ><a href="javascript:void(0);" >'+faker.name.findName()+'</a></div></td>';
            // City
            fakeContent += '<td><div class="ellipsis_inline">'+faker.company.companyName()+'</div></td>';
            // Billing Country
            fakeContent += '<td><div class="ellipsis_inline">'+faker.finance.transactionType()+'</div></td>';
            // Likely
            fakeAmount = faker.finance.amount();
            fakeContent += '<td><div data="'+fakeAmount+'" class="ellipsis_inline">'+ faker.finance.currencySymbol() + fakeAmount+'</div></td>';
            // Lead Source
            fakeContent += '<td><div class="ellipsis_inline">'+faker.finance.transactionType()+'</div></td>';
            // Probability
            fakeContent += '<td><div class="ellipsis_inline"></div></td>';
            // Phone
            fakeContent += '<td><div class="ellipsis_inline">'+ Math.floor(Math.random() * (50+(+21)) + (+2)) +'%</div></td>';
            // User
            fakeContent += '<td><div class="ellipsis_inline">'+faker.internet.userName()+'</div></td>';
            // Email address
            fakeContent += '<td><div class="ellipsis_inline"><a href="javascript:void(0);">'+faker.internet.email()+'</a></div></td>';
            // Date modified
            fakeContent += '<td><div class="ellipsis_inline">'+faker.date.recent()+'</div></td>';
            // Date created
            fakeContent += '<td><div class="ellipsis_inline">'+faker.date.past()+'</div></td>';

            fakeContent += '<td><span class="overflow-visible fieldset list"><div class="fieldset-field"><span class="fieldset actions list btn-group"><span><a class="rowaction btn" href="javascript:void(0);" rel="tooltip" data-placement="bottom" data-original-title="Preview"><i class="fa fa-eye"></i></a></span><a class="btn dropdown-toggle" href="javascript:void(0);" rel="tooltip" data-original-title="Actions"><span class="fa fa-caret-down"></span></a><ul data-menu="dropdown" class="dropdown-menu"></ul></span></div><div class="fieldset-field"><span ></span></div></span></td></tr>';
            i--
        }
        return fakeContent;
    }

    function fake_flexlist_add_rows(num, tableid, delay) {
        var fakeContent = '',
            i = num,
            wait;

        if(delay)
            wait=delay;
        else
            wait=0;

        fakeContent = construct_fake_flexlist_rows(num);

        setTimeout(function(){
            $(fakeContent).insertAfter($(tableid).find('tbody').find('tr:last-child'));
            index_rows_fake_flexlist(tableid);
        }, wait);
    }

    function isEven(value) {
        if (value%2 == 0)
            return true;
        else
            return false;
    }

});

var filter_tool_operators = [
    "and",
    "or"
]
var filter_tool_obj = {

    0 : {
        'name' : 'Opportunity Name',
        'type' : 'select2',
        'selectOperator' : ["equals", "contains"],
        'selectValue' : [null]
    },
    /*
        0 : {
            'name' : 'Multi Select',
            'type' : 'select2_multi',
            'selectOperator' : ["equals", "not equals"],
            'selectValue' : ["25", "50", "75", "100"]
        },
    */
    1 : {
        'name' : 'Account Name',
        'type' : 'select2',
        'selectOperator' : ["equals", "contains"],
        'selectValue' : [null]
    },
    2 : {
        'name' : 'Likely',
        'type' : 'select2',
        'selectOperator' : ["is greater than", "is less than", "about"],
        'selectValue' : [null]
    },
    3 : {
        'name' : 'Best',
        'type' : 'select2',
        'selectOperator' : ["is equal to", "is not equal to", "is greater than", "is less than", "is between"],
        'selectValue' : [null]
    },
    4 : {
        'name' : 'Worst',
        'type' : 'select2',
        'selectOperator' : ["is equal to", "is not equal to", "is greater than", "is less than", "is between"],
        'selectValue' : [null]
    },
    5 : {
        'name' : 'Next Step',
        'type' : 'select2',
        'selectOperator' : ["is equal to", "is not equal to", "is greater than", "is less than", "is between"],
        'selectValue' : [null]
    },
    6 : {
        'name' : 'Probability (%)',
        'type' : 'select2',
        'selectOperator' : ["is equal to", "is not equal to", "is greater than", "is less than", "is between"],
        'selectValue' : ["5%", "25%", "50%", "75%", "100%"]
    },
    7 : {
        'name' : 'Lead Source',
        'type' : 'select2',
        'selectOperator' : ["equals", "contains"],
        'selectValue' : [null]
    },
    8 : {
        'name' : 'Type',
        'type' : 'select2',
        'selectOperator' : ["equals", "contains"],
        'selectValue' : [null]
    },
    9 : {
        'name' : 'Date Created',
        'type' : 'select2',
        'selectOperator' : ["equals", ">", "<", "yesterday", "today", "tomorrow", "last 7 days", "last 30 days", "next 7 days", "next 30 days", "last month", "last year", "this year", "next year", "date betwee"],
        'selectValue' : [null]
    },
    10 : {
        'name' : 'Date Modified',
        'type' : 'select2',
        'selectOperator' : ["equals", ">", "<", "yesterday", "today", "tomorrow", "last 7 days", "last 30 days", "next 7 days", "next 30 days", "last month", "last year", "this year", "next year", "date betwee"],
        'selectValue' : [null]
    },
    11 : {
        'name' : 'Expected Close Date',
        'type' : 'select2',
        'selectOperator' : ["equals", ">", "<", "yesterday", "today", "tomorrow", "last 7 days", "last 30 days", "next 7 days", "next 30 days", "last month", "last year", "this year", "next year", "date betwee"],
        'selectValue' : [null]
    },
    12 : {
        'name' : 'Assigned to',
        'type' : 'select2',
        'selectOperator' : ["equals", "not equals"],
        'selectValue' : ["Admin", "Will", "Sally"]
    },
    13 : {
        'name' : 'State',
        'type' : 'select2',
        'selectOperator' : ["equals", "not equals"],
        'selectValue' : ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"]
    },
    14 : {
        'name' : 'My items',
        'type' : 'predefined',
        'selectOperator' : null,
        'selectValue' : null
    },
    15 : {
        'name' : 'My favorites',
        'type' : 'predefined',
        'selectOperator' : null,
        'selectValue' : null
    }
};


var group_module_by = [
    "Lead Source",
    "Sales Stage",
    "Type"
];

var summarize_module_by = [
    "Likely",
    "Best",
    "Worst"
];

var fake_select2_teams = [
    "East",
    "West",
    "North",
    "South"
];

var chart_type = [
    "<img src='http://localhost/ent/static3/chart_type_horizontal.png' class='pull-left'> Horizontal",
    "<img src='http://localhost/ent/static3/chart_type_vertical.png' class='pull-left'> Vertical",
];

var time_period = [
    "Last week",
    "Last month",
    "Last quarter",
    "Last year"
];

var nested_list_views_categories = [
    "Prospecting",
    "Qualification",
    "Needs analysis",
    "Proposal/price quote",
    "Prospecting",
    "Negotiation/review"
];

var filter_dropdown = ' <ul class="select2-results filter-dropdown-container" role="listbox" id="select2-results-6" style="display:none; position: absolute; top: 33px; left: 8px; z-index: 1000; background: white; border: 1px solid #ddd; border-radius: 3px; "> <li ref="newFilter" class="select2-results-dept-0 select2-result select2-result-selectable select2-result-border-bottom " role="presentation"> <div class="select2-result-label" id="select2-result-label-7" role="option"> <div class="select2-icon-prepend" data-id="create"> <span class="select2-match"></span> <i class="fa fa-plus"></i> New Filter </div></div></li><li class="select2-highlighted select2-results-dept-0 select2-result select2-result-selectable select2-result-border-top" role="presentation"> <div class="select2-result-label" id="select2-result-label-8" role="option"> <div class="select2-icon-prepend" data-id="all_records"> <span class="select2-match"></span> <i class="fa fa-check"></i> All Opportunities </div></div></li><li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"> <div class="select2-result-label" id="select2-result-label-9" role="option"> <div class="select2-no-icon" data-id="assigned_to_me"> <span class="select2-match"></span> My Favorites </div></div></li><li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"> <div class="select2-result-label" id="select2-result-label-10" role="option"> <div class="select2-no-icon" data-id="favorites"> <span class="select2-match"></span> My Opportunities </div></div></li><li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"> <div class="select2-result-label" id="select2-result-label-11" role="option"> <div class="select2-no-icon" data-id="recently_created"> <span class="select2-match"></span> Recently Created </div></div></li><li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"> <div class="select2-result-label" id="select2-result-label-12" role="option"> <div class="select2-no-icon" data-id="recently_viewed"> <span class="select2-match"></span> Recently Viewed </div></div></li><li class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"> <div class="select2-result-label" id="select2-result-label-12" role="option"> <div class="select2-no-icon" data-id="saved_filter_list"> <span class="select2-match"></span> Saved filter list </div></div></li></ul>';
var filter_controls_advanced_row = '<div class="filter-body fields FilterControlsAdvancedRow" > <div class="row-fluid"> <div class="row-fluid variable span12"> <div class="controls span3"> <span class="details row-one"> <input ref="fake-select2" index="" class=""/> </span> </div><div class="controls span3"> <span class="details row-two"> <input ref="fake-select2" index="" class=""/> </span> </div><div class="controls span6"> <span class="details row-three"> <input ref="fake-select2" index="" class=""> </span> </div><div class="hide controls span4"></div><div class="hide controls span4"></div><div class="filter-actions btn-group"> <button class="btn btn-invisible btn-dark" ref="filterRowMinus"><i class="fa fa-minus" ></i></button> <button class="btn btn-invisible btn-dark" ref="filterRowPlus"><i class="fa fa-plus"></i></button> <button class="fa-plus-helper btn btn-invisible btn-dark" ref="filterRowPlusGroup" rel="tooltip" data-placement="left" data-original-title="Add filter group."><i class="fa fa-plus"></i><i class="fa fa-filter"></i></button></div></div><div ref="filterOperator" class="span1 operator row-operator hidden"><span class="row-operator-details details"><aside class="misc-group-helper"></aside><input ref="fake-select2" class=""></span></div></div></div>';
var filter_controls_advanced_query = '<div class="filter-body fields FilterControlsAdvancedRowQuery"> <div class="row-fluid"> <div class="row-fluid"> <div class="controls span12"> <span class="detail row-three"><i class="fa fa-check-circle"></i><input class="queryInput" ref="queryInput" ><i class="fa fa-info-circle"></i></span></div><div class="hide controls span4"></div><div class="hide controls span4"></div><div class="filter-actions btn-group">&nbsp;</div></div></div></div>';
var filter_controls_advanced_labels = '<div class="filter-body labels FilterControlsAdvancedLabels" > <div class="row-fluid"> <div class="row-fluid"> <div class="controls span3"> <span class="detail newc1_1"> <label>Select field</label> </span> </div><div class="controls span3"> <span class="details newc1_2"> <label>Select operator</label> </span> </div><div class="controls span6"> <span class="detail newc1_3"> <label>Select value</label> </span> </div></div></div></div>';
var filter_header_components = '<div class="controls span6"> <label>Filter name</label> <input ref="newFilterName" type="text" class="inherit-width" placeholder="Enter new filter name…" > </div><div class="actions span6"> <div class="pull-right"> <a class="btn btn-link btn-invisible reset_button hide" >Reset</a> <a class="btn btn-link btn-invisible filter-option-advanced hide" ref="filterAdvanced">Advanced</a> <a class="btn btn-link btn-invisible filter-option-clear-values" ref="filterClear" >Clear values</a> <a class="btn btn-link btn-invisible filter-close" ref="filterClose">Cancel</a> <a class="btn btn-link btn-invisible delete_button hide" ref="filterDelete" >Delete</a><span class=" btn-group"> <span><a class="btn disabled btn-primary" href="javascript:void(0);" ref="filterSave">Save</a></span> <a class="btn dropdown-toggle btn-primary disabled" ref="filterSaveDropdown" href="javascript:void(0);" data-placement="bottom"><span class="fa fa-caret-down"></span></a> <ul data-menu="dropdown" class="dropdown-menu" style="width: 68px; min-width: 0; top: 29px;"> <li><span class="detail"><a class="rowaction" href="javascript:void(0);">Save As</a></span></li><li><span class="detail"><a class="rowaction" ref="filterShare" href="javascript:void(0);">Share</a></span></li><li><span class="detail"><a class="rowaction" href="javascript:void(0);" ref="filterDelete">Delete</a></span></li></ul> </span> <span sfuuid="40" class="detail"><a class="btn btn-invisible btn-link hide" href="javascript:void(0);" track="click:cancel_button" name="cancel_button" style="display: none;">Cancel</a></span> <span sfuuid="41" class="detail"><a class="btn btn-danger hide" href="javascript:void(0);" track="click:delete_button" name="delete_button" style="display: none;">Delete</a></span> <span sfuuid="42" class="detail" tabindex="-1"><a class="btn btn-primary hide" href="javascript:void(0);" track="click:save_button" name="save_button" style="display: none;">Save</a></span> <span sfuuid="43" class="detail"><a class="btn btn-invisible btn-link hide" href="javascript:void(0);" track="click:create_cancel_button" name="create_cancel_button" style="display: none;">Cancel</a></span> <span sfuuid="44" class="detail" tabindex="-1"><a class="btn btn-primary hide" href="javascript:void(0);" track="click:create_button" name="create_button" style="display: none;">Save</a></span></div></div>';
var filter_fake_select2_before = '<div class=" hidden fake-select2 select2-drop select2-display-none select2-with-searchbox select2-drop-active" style="" id="select2-drop"><div class="select2-search hidden"><label for="s2id_autogen8_search" class="select2-offscreen"></label><input type="text" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="select2-input select2-focused" role="combobox" aria-expanded="true" aria-autocomplete="list" aria-owns="select2-results-8" id="s2id_autogen8_search" placeholder="" aria-activedescendant="select2-result-label-76"></div><ul class="select2-results" role="listbox" id="select2-results-8">';
var filter_fake_select2_after = '</ul></div>';
var fake_flexlist_header = '<thead> <tr class="flex-list-row-header"> <th> <span> <span class="fieldset list"> <div class="fieldset-field"> <span class="fieldset actions actionmenu list btn-group"> <div class="btn checkall" data-check="all" tabindex="-1"><input type="checkbox" name="check" class="toggle-all"></div><a track="click:listactiondropdown" class="btn dropdown-toggle disabled" data-toggle="dropdown" href="javascript:void(0);" data-placement="bottom" rel="tooltip" title="" data-original-title="Actions"> <span class="fa fa-caret-down"></span> </a> <ul data-menu="dropdown" class="dropdown-menu" role="menu"></ul> </span> </div><div class="fieldset-field"> <span></span> </div><div class="fieldset-field"> <span class="list"></span> </div></span> </span> </th> <th class="sorting orderByname cell-xlarge" data-fieldname="name" data-orderby="" tabindex="-1" style="min-width: 288px; width: 288px; max-width: 288px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="0"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Name </span> </div></div></th> <th class="sorting orderBybilling_address_city" data-fieldname="billing_address_city" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="1"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Account </span> </div></div></th> <th class="sorting orderBybilling_address_country" data-fieldname="billing_address_country" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="2"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Sales Stage </span> </div></div></th> <th class="sorting orderBybilling_address_country" data-fieldname="billing_address_country" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="2"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Likely </span> </div></div></th> <th class="sorting orderBybilling_address_country" data-fieldname="billing_address_country" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="2"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Lead Source </span> </div></div></th> <th class="sorting orderBybilling_address_country" data-fieldname="billing_address_country" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="2"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Next Step </span> </div></div></th> <th class="sorting orderByphone_office" data-fieldname="phone_office" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="3"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Probability (%) </span> </div></div></th> <th class="sorting orderByassigned_user_name" data-fieldname="assigned_user_name" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="4"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> User </span> </div></div></th> <th class="sorting orderByemail" data-fieldname="email" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="5"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Email Address </span> </div></div></th> <th class="sorting orderBydate_modified" data-fieldname="date_modified" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="6"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Date Modified </span> </div></div></th> <th class="sorting orderBydate_entered" data-fieldname="date_entered" data-orderby="" tabindex="-1" style="min-width: 110px; width: 110px; max-width: 110px;"> <div> <div class="th-droppable-placeholder ui-droppable" data-droppableindex="7"></div><div data-draggable="true" class="ui-draggable ui-draggable-handle" style="position: relative;"> <span> Date Created </span> </div><div class="th-droppable-placeholder th-droppable-placeholder-last ui-droppable" data-droppableindex="8"></div></div></th> <th class="nosort morecol"> <div class="dropdown"> <button class="btn btn-invisible" data-toggle="dropdown" rel="tooltip" title="" data-placement="bottom" data-action="fields-toggle" track="click:morecol" data-original-title="Columns"><i class="fa fa-cog"></i></button> <ul class="dropdown-menu left"> <li> <button class="active" data-field-toggle="name" track="click:name"> <i class="fa fa-check"></i> Name </button> </li><li> <button class="active" data-field-toggle="billing_address_city" track="click:billing_address_city"> <i class="fa fa-check"></i> City </button> </li><li> <button class="active" data-field-toggle="billing_address_country" track="click:billing_address_country"> <i class="fa fa-check"></i> Billing Country </button> </li><li> <button class="active" data-field-toggle="phone_office" track="click:phone_office"> <i class="fa fa-check"></i> Phone </button> </li><li> <button class="active" data-field-toggle="assigned_user_name" track="click:assigned_user_name"> <i class="fa fa-check"></i> User </button> </li><li> <button class="active" data-field-toggle="email" track="click:email"> <i class="fa fa-check"></i> Email Address </button> </li><li> <button class="active" data-field-toggle="date_modified" track="click:date_modified"> <i class="fa fa-check"></i> Date Modified </button> </li><li> <button class="active" data-field-toggle="date_entered" track="click:date_entered"> <i class="fa fa-check"></i> Date Created </button> </li><li class="divider" data-settings-li="order" style="display: none;"></li><li data-settings-li="order" style="display: none;"> <button data-columns-order="reset"> <i class="icon fa fa-exchange"></i> Reset default view </button> </li><li class="divider" data-settings-li="widths" style="display: none;"></li><li data-settings-li="widths" style="display: none;"> <button data-widths="reset"> <i class="icon fa fa-arrows-h"></i> Reset default widths </button> </li></ul> </div></th> </tr><tr> <th data-target="alert-container" class="alert alert-warning hide"> <div data-target="alert"> </div></th> </tr></thead>';
var fake_loading_template = '<div ref="fakeLoading" class="loading">Loading<i class="l1">.</i><i class="l2">.</i><i class="l3">.</i></div>';
var share_filter_header = '\
    <div class="row-fluid">\
        <div class="span6" style="text-indent: 20px; padding-top: 10px; min-height: 0">Share filter</div>\
        <div class="span6" style="min-height: 0"></div>\
    </div>\
    <div class="row-fluid">\
        <div class="span6" style="text-indent: 10px; min-height: 0"><input class="inherit-width" style="width: 100%" ref="shareFilterName"></div>\
        <div class="span6 tright" style="min-height: 0; padding-right: 20px; position: relative; top: -10px;">\
            <a class="btn btn-link btn-invisible filter-share-close" ref="filterShareClose">Cancel</a>\
            <span class="btn-group">\
                <span><a class="btn btn-primary" href="javascript:void(0);" ref="filterShareSave">Save</a></span>\
            </span>\
        </div>\
    </div>\
';
var share_filter_content = '\
    <div class="" style="display: -webkit-flex; display: flex;">\
        <div class="" style="-webkit-flex: initial; flex: initial; width: 270px; min-width: 100px; line-height: 28px;">Add teams or people you want to share with</div>\
        <div class="" style="-webkit-flex: 2; flex: 2;">\
            <span class="details row-select2-abstract" data-storage="fake_select2_teams" fake-select2-type="multi" style="position: relative;">\
                <input style="width: calc(100% - 60px);" type="text" ref="fake-select2" >\
                <a class="fake-select2-dropdown" ref="fakeSelect2dropdown"><i class="fa fa-sort-down"></i>\
            </span>\
        </div>\
    </div>\
\
';
