var show_empty_groups = false,
    show_grouped_list = false,
    nested_list_views = false;

$(document).ready(function() {

    // generate list view
    construct_fake_flexlist(null, $('[ref=mainList] .flex-list-view-content'), Math.floor((Math.random()*20)+1) + 10);

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

        if($('.extend.tabs').is(':visible') === false)
            $('[ref=filterClear]').trigger('click');
    });

    $(document).on('click', '.disabled *', function(){
        return false;
    });



    $(document).on('click', '[ref=create_chart_dashlet]', function(){

        if($('button[data-action="help"]').hasClass('active')){
            $('button[data-action="help"]').removeClass('active');
            $('#dashboard-help, #dashboard-create-chart-dashlet').toggle();

        }

    });

    $(document).on('click', '[ref=newFilterCancel], [ref=filterClose]', function(){
        $('[target=newc1]').trigger('click');
        filter_show(false);
        $('#newcontent .search-filter').find('input').val('');
        $('[ref=filterSave], [ref=filterSaveDropdown]').addClass('disabled');
        $('[ref=newFilterLabel]').html("New filter").removeClass('read-only');
        $('[ref=newFilterCancel]').addClass("hidden");
        $('[ref=filterBasicRowContainer]:not(:first-child)').remove();
        $('[ref=filterBasicRowContainer]').removeClass('grouped');
        //$('[ref=sum_type_total]').prop('checked', false);

        $('[name=show_empty_groups], [ref=create_chart_dashlet], [ref=chart_type], [ref=display_time_period_selector], [ref=sumarize_type]').closest('label').addClass('disabled');
        $('.controls.chart-type, .time-period-selector.detail').addClass('disabled');

        $('#newcontent input[type=checkbox]').attr('checked', false);
        $('.row-select2-abstract .fake-select2-multi-input').remove();
        $('.fake-select2-html-input .fake-select2-html-choice').remove();

        $('[ref=filterBasicRowContainer]').attr('class', 'row-fluid last-group initial-column-row');



    });

    $(document).on('click', '[fake-select2-abstract-ref=group_module_by]', function(){
        $('[ref=groupedListWrap]').removeClass('hidden');
        $('[ref=mainListWrap]').addClass('hidden');

        if($('[ref=groupedListWrap]').is(':visible') === true) {
            group_summation_generate_data($(this).attr('data'));
            show_grouped_list = true;
            $('.chart_dashlet_label').tooltip('disable');
            $('[ref=show_empty_groups], [ref=create_chart_dashlet]').closest('label').removeClass('disabled');
            
            setTimeout(function(){
                handle_group_module_update();
            }, 10);

            return;
        }
    });

    $(document).on('click', '[fake-select2-abstract-ref=summarize_module_by]', function(){
        $('[ref=sumarize_type]').closest('label').removeClass('disabled');
        //
        $('.summation-grouping-title .amounts').removeClass('hidden');
        $('article.summation').html($(this).attr('data'));
        $('[ref=sum_type_total]').attr('checked', true);

        handle_summation_update();
    });

    $(document).on('click', '[ref=sum_type_total]', function(){
    });

    $(document).on('click', 'input[ref=create_chart_dashlet]', function(){
        $('[ref=chart_type').closest('label').toggleClass('disabled');
        $('.chart-type').toggleClass('disabled');
        $('[ref=display_time_period_selector]').closest('label').toggleClass('disabled');
        $('[name=display_time_selector]').closest('.time-period-selector').toggleClass('disabled');
    });

    $(document).on('click', '[ref=filterAdvanced]', function(){
        filter_toggle_advanced($('.filter-option-advanced'));
        var query = filter_build_query();
        $('[ref=queryInput]').val(query).attr('data', query);
        return false;
    });

    $(document).on('click', '[ref=filterClear]', function(){
        $('[target=newc1]').attr('lbl-status', 1);
        $('#newcontent .search-filter').find('input').val('');
        $('[ref=filterSave], [ref=filterSaveDropdown]').addClass('disabled');
        $('[ref=newFilterLabel]').html("New filter").removeClass('read-only');
        $('[ref=newFilterCancel]').addClass("hidden");
        $('[ref=filterBasicRowContainer]').remove();
        $('[ref=filterBasicRowContainerModel]').clone().insertBefore('[ref=filterBasicRowContainerModel]').removeClass('model hidden').attr('ref', 'filterBasicRowContainer');
        filter_row_id_gen();
    });

    $(document).on('click', '.dropdown-toggle:not(.disabled)', function(e){
        $(this).closest('.btn-group').toggleClass('open');
        /* */
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
        $('[ref=filterRowPlusGroup]').tooltip({'placement': 'left', 'container': 'body'});
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
        $('[ref=filterRowPlusGroup]').tooltip({'placement': 'left', 'container': 'body'});
    });

    $(document).on('click', '[ref=filterRowMinus]', function(e){
        if($('[ref=filterBasicRowContainer]').length == 1){ // last row, remove filter
            $('[ref=filterClose]').trigger('click');
            $('[ref=filterBasicRowContainer]').attr('lbl-status', '1').removeClass('three-column-row three-column-row-visible-three three-column-row-visible-two last-of-group');
            var indexGroup = false;
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
        if($('div.fake-select2:not(.hidden)').length > 0) {
            $('div.fake-select2:not(.hidden)').addClass('hidden');
        }
        $(this).closest('.details').prev().toggleClass('hidden');
        return;
    });

    $(document).on('click', '[ref=fakeSelect2liClickRow1]', function(){
        $(this).closest('.fake-select2').next('.details').find('input').val($(this).attr('data')).attr('data', $(this).attr('data'));
        var context = $(this).closest('.filter-definition-container').attr('id'),
            filter_tool_obj_store = $(this).attr('objindex');
        $(this).closest('[ref=filterBasicRowContainer]').attr('filter_tool_obj_store', filter_tool_obj_store).removeClass('one-column-row initial-column-row three-column-row-visible-three three-column-row-visible-two');

        // if previously defined select value, reset it.
        //console.log($(this).closest('.variable').find('.row-three').find('input[ref=fake-select2]').length);
        $(this).closest('.variable').find('.row-three').find('input[ref=fake-select2]').removeClass('fake-select2-input-plain-text');

        // if predefined filter, it's going to be one column row only
        if(filter_tool_obj[$(this).attr('objindex')].type == 'predefined') {
            // clean row-two and row-three
            $(this).closest('.variable')
                .find('.row-two').find('input.fake-select2-input').removeClass('fake-select2-input').siblings('.fake-select2-dropdown').remove();
            $(this).closest('.variable')
                .find('.row-three').removeClass('filled').find('input.fake-select2-input').removeClass('fake-select2-input').siblings('.fake-select2-dropdown').remove();
            $(this).closest('[ref=filterBasicRowContainer]').addClass('one-column-row').removeClass('three-column-row');
            filter_labels_update_status();
            return;
        }

        $(this).closest('.variable')
            .find('.row-three').closest('.controls').attr('fake-select2-type', filter_tool_obj[$(this).attr('objindex')].type);

        filter_row_select_operator(filter_tool_obj[$(this).attr('objindex')], context);
        $(this).closest('[ref=filterBasicRowContainer]').addClass('three-column-row three-column-row-visible-two');
        filter_labels_update_status();
    });

    $(document).on('click', '[ref=fakeSelect2liClickRow2]', function(){
        $(this).closest('.fake-select2').next('.details').find('input').val($(this).attr('data')).attr('data', $(this).attr('data'));
        var context = $(this).closest('.filter-definition-container').attr('id')
            filter_tool_obj_store = $(this).closest('[ref=filterBasicRowContainer]').attr('filter_tool_obj_store');
        filter_row_select_value(filter_tool_obj[filter_tool_obj_store], context);
        $(this).closest('.variable').find('.row-three').addClass('filled');
        $(this).closest('[ref=filterBasicRowContainer]').removeClass('three-column-row-visible-two').addClass('three-column-row-visible-three');
        filter_labels_update_status();
    });

    $(document).on('click', '[ref=fakeSelect2liClickRow3]', function(){
        if($(this).closest('.controls').attr('fake-select2-type') == "select2_multi") {
            // multi select2
            var prepend = "";
            if($(this).closest('.fake-select2').next('.details').find('input').attr('data')){
                //console.log($(this).closest('.fake-select2').next('.details').find('input').attr('data'));
                prepend = $(this).closest('.fake-select2').next('.details').find('input').attr('data') + ", ";
            }
            $(this).closest('.fake-select2').next('.details').find('input').val(prepend + $(this).attr('data')).attr('data', prepend + $(this).attr('data'));            
        } else {
            // single select2
            $(this).closest('.fake-select2').next('.details').find('input').val($(this).attr('data')).attr('data', $(this).attr('data'));
        }

        var context = $(this).closest('.filter-definition-container').attr('id');
    });

    $(document).on('click', '[ref=fakeSelect2liClickRowOperator]', function(){
        $(this).closest('.fake-select2').toggleClass('hidden');
        $(this).closest('.fake-select2').next('.details')
            .find('input').val($(this).attr('data'))
            .attr({'data': $(this).attr('data'), 'index': 'null'});
        filter_row_serialize();
    });

    $(document).on('click', 'li[fake-select2-abstract-ref]', function(){
        
        //console.log($(this).attr('fake-select2-abstract-ref'));
        return;
    });

    $(document).on('click', 'section.summation-grouping .summation-grouping-title', function(){
        if(nested_list_views === true){
            return false;
        }
        // check if list view loaded, if not, load it
        if($(this).next('.summation-grouping-list-view').find('.flex-list-view-content').find('table').length === 0) {
            var num = $(this).find('span.num').attr('data-num');

            fake_loading($(this).next('.summation-grouping-list-view'), null, 2000);

            construct_fake_flexlist(null, $(this).next().find('.flex-list-view-content'), num);
        }
        $(this).closest('.summation-grouping').toggleClass('collapsed');
    });

    $(document).on('click', '.newctabs li a', function(e){
        $(this).closest('ul').find('li a').removeClass('active');
        $(this).addClass('active');

        $('.newcTab:visible:not(.filter-header-container)').toggle();
        $('.newcTab[target='+$(this).context.target+']').toggle();
        if($(this).context.target == "newc2") {
            $('[ref=mainListWrap]').addClass('hidden');
            $('[ref=groupedListWrap]').removeClass('hidden');
            group_summation_generate_data();
        } else if ($('[ref=mainListWrap]:visible').size() === 0 && $(this).context.target != "newc2") {
            $('[ref=mainListWrap]').removeClass('hidden');
            $('[ref=groupedListWrap]').addClass('hidden');
        }
        $(this).tooltip('hide');
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

    $(document).on('click', '[ref=multiselect]', function(){
        var thisNewDat = $(this).attr('data'),
            dataContainer = $(this).closest('.fake-select2').next('.details').find('.fake-select2-multi-input');
        dataContainer.append('<span class="fake-select2-choice" data-this="' + thisNewDat + '">' + thisNewDat + '<i class="fa fa-close" ref="fakeSelect2RmPill"></i></span>');
    });

    $(document).on('click', '[ref=html]', function(){
        var dataContainer = $(this).closest('.fake-select2').next('.details').find('.fake-select2-html-input');
        dataContainer.empty().append('<span class="fake-select2-html-choice">' + $(this).attr('data'));
    });

    $(document).on('click', '[ref=singleselect]', function(){
        var dataContainer = $(this).closest('.fake-select2').next('.details').find('.fake-select2-input');
        dataContainer.attr('value', $(this).attr('data')); 
    });

    $(document).on('click', '[name=show_empty_groups]', function(){
        show_empty_groups == false ? show_empty_groups = true : show_empty_groups = false;
        handle_show_empty_groups();
        //
    });

    $(document).on('click', '[ref=sumarize_type] input[type=checkbox]', function(){
        handle_summation_update();
        //
    });

    $(document).on('click', '.summation-grouping-list-view-nested .list-view-nested-header .list-view-nested-header-title', function(){
        var thisEl = $(this).closest('.list-view-nested-header');
        if(thisEl.attr('data-num') == '0')
            return false;

        thisEl.find('.list-view-nested').toggleClass('hidden');

        if(thisEl.find('.list-view-nested').is(':visible') === true) {

            // check if list view loaded, if not, load it

            if(thisEl.find('table').length === 0) {
                var num = thisEl.attr('data-num');
                fake_loading(thisEl.find('.list-view-nested'), null, 2000);
                construct_fake_flexlist(null, thisEl.find('.flex-list-view-content'), num);
            }
        }
        return;
    });

    $(document).on('click', '#backdrop', function(){
        handle_modal(false);
        //
    });

    $(document).on('click', '[ref=alertClose]', function(){
        //$(this).closest('#alert').remove();
        handle_alert(false);
        //
    });

    $(document).on('click', '[ref=filterSave]', function(){
        handle_alert(true, 'success', true, "Success", "your custom filter was successfull saved");
        $('[ref=filterClose]').trigger('click');
    });

    $(document).on('click', '[ref=filterShareClose]', function(){
        handle_modal(false);
        //
    });

    $(document).on('click', '[ref=filterShare]', function(){
        handle_modal(true);
        $('[ref=filterSaveDropdown]').trigger('click');
        setTimeout(function(){
            $(share_filter_header).appendTo('#modal .fake-headerpane');
            $('[ref=shareFilterName]').attr('value', $('[ref=newFilterName]').val());
            $(share_filter_content).appendTo('#modal .fake-content');
        },100);
        setTimeout(function(){
            var fakeSelect2Data = $("#modal .fake-content .details").attr('data-storage');
            var thisStorage = eval(fakeSelect2Data);
            construct_fake_select2_abstract(thisStorage, $("#modal .fake-content .details"), false, false, $("#modal .fake-content .details").attr('fake-select2-type'));
        },150);
    });

    $(document).on('click', '[ref=filterShareSave]', function(){
        var message = "with teams",
            l = $('#modal .fake-select2-choice').length,
            i = 0;

        if(l===0) {
            handle_alert(true, 'error', false, "Error", "you have not selected any teams to share this filter with");
            return false;
        }


        $('#modal .fake-select2-choice').each(function(e){
            i = i+1;
            message = message + ' ' + $(this).attr('data-this');
            if(i !== l) {
                message = message + ', ';
            }
        });
        handle_modal(false);
        handle_alert(true, 'success', true, "Filter successfully shared", message);
    });

    $(document).on('click', '[ref=filterDelete]', function(){
        $('[ref=filterClose]').trigger('click');
        //
    });

    $("#newcontent").on('change keyup', '[ref=newFilterName]', function(e){
        var newName = e.currentTarget.value,
            eventType = e.handleObj.type;
            $('[ref=newFilterLabel]').html(newName).addClass('read-only');
            $('[ref=newFilterCancel]').removeClass("hidden");
            if(!newName == "") {
                $('[ref=filterSave], [ref=filterSaveDropdown]').removeClass('disabled');
            } else {
                $('[ref=filterSave], [ref=filterSaveDropdown]').addClass('disabled');
                $('[ref=newFilterLabel]').html("New filter").removeClass('read-only');
                $('[ref=newFilterCancel]').addClass("hidden");
            }
    });

    function handle_modal(a){
        if(a === false) {
            $('#modal, #backdrop').remove();
        } else {
            $('<div id="modal"><div class="fake-headerpane"></div><div class="fake-content"></div></div><div id="backdrop"></div>').appendTo('#sidecar');
        }
    }

    function handle_alert(a, type, autoclose, title, message) {
        var color, icon_prefix;
        if(a === false) {
            $('#alert').remove();
            return false;   
        } else {
            if(type=="success") {
                color = "green";
                icon_prefix = "fa-check-circle";
            } else if (type=="error") {
                color = "red";
                icon_prefix = "fa-exclamation-triangle";
            } else {
                color = "blank";
            }
            $('<div id="alert" class="'+color+'"><div class="indicator"><i class="fa ' + icon_prefix + '"></i></div><div class="message"><h4>'+title+'</h4><p>'+message+'</p><div class="close"><i class="fa fa-close" ref="alertClose"></i></div></div></div>').appendTo('#sidecar');
        }
        if(autoclose === true) {
            setTimeout(function(){
                $('#alert').remove();
            }, 5000);
        }
    }

    function handle_group_module_update() {
        var selectContainer = $('[data-storage=group_module_by]'),
            selections = selectContainer.find('.fake-select2-choice').length;

        if(selections > 1) {
            //console.log('nested display mode');
            nested_list_views = true;
            $('.summation-grouping-list-view-nested').removeClass('hidden');
            $('.summation-grouping-list-view').addClass('hidden');
            $('.summation-grouping-title').addClass('nested');

            // generate nested list view
            var sections = $('section.summation-grouping'),
                thisRecordNum,
                thisIterNum;
            sections.each(function(){
                thisRecordNum = $(this).find('span.num').attr('data-num');
                thisIterNum = 0,
                thisEl = $(this);

                // generation sections for each category
                nested_list_views_categories.forEach(function(myVar) {
                    var defaultClass = '';
                    // generate random number between 0 and 10
                    // which will "cut off" num of records from total
                    thisIterNum = Math.floor((Math.random()*7)+1);
                    thisRecordNum = thisRecordNum - thisIterNum;

                    if(thisRecordNum <= 0) {
                        // the rest of records will have zero
                        thisIterNum = 0;
                        if(show_empty_groups === false)
                            defaultClass = 'hidden';
                    }
                    $(thisEl).find('.summation-grouping-list-view-nested')
                        .append('<div class="list-view-nested-header '+defaultClass+' " data-num='+thisIterNum+'><div class="list-view-nested-header-title row-fluid"><div class="span6 var-col">'+myVar+' (<span class="num" data-num="'+thisIterNum+'">'+thisIterNum+'</span>)</div><div class="span6 tright num-col hidden" ><span class="sum_lbl_variable">Sum total</span> (<span class="sum_variable">Likely</span>) $'+faker.finance.amount()+'</div></div><div class="list-view-nested flex-list-view left-actions right-actions scroll-width hidden"><div class="flex-list-view-content"></div></div></div>');
                });
            });

        } else {
            nested_list_views = false;
            $('.summation-grouping-list-view-nested').addClass('hidden');
            $('.summation-grouping-list-view').removeClass('hidden');
            $('.summation-grouping-title').removeClass('nested');

            // dispose of nested list view, return normal
            $('.summation-grouping-list-view-nested').find('.flex-list-view-content').empty();
            $('.summation-grouping-list-view-nested').find('.list-view-nested-header').remove();
        }
    }

    function handle_summation_update() {
        var summationContainer = $('.summation-grouping-title .amounts > div'),
            summationController = $('span[data-storage=summarize_module_by]');

        summationContainer.each(function(){
            if($(this).closest('.summation-grouping-title').find('.title').find('.num').attr('data-num') == 0) {
                // grouping contains zero items, skip.
            } else {

                // Summation Type
                if($('[ref=sumarize_type] input[ref=sum_type_total]:checked').length > 0 ) {
                    // generate fake data  Sum total (VAR)
                    if($(this).find('.sum-tot').length === 0)
                        $(this).append('<div class="sum-tot">Sum total (<span class="this-sum-mode">'+$(this).closest('div.clone-content').attr('data-label')+'</span>) <span class="num">$'+faker.finance.amount()+'</span></div>');
                } else {
                    // delete fake data
                    $('.ref-sum-type-tot, div.sum-tot, .nested-sum-total').remove();
                }

                if($('[ref=sumarize_type] input[ref=sum_type_average]:checked').length > 0 ) {
                    // generate fake data Average (VAR)
                    if($(this).find('.sum-ave').length === 0)
                        $(this).append('<div class="sum-ave">Average (<span class="this-sum-mode">'+$(this).closest('div.clone-content').attr('data-label')+'</span>) <span class="num">$'+faker.finance.amount()+'</span></div>');
                } else {
                    // delete fake data
                    $('.ref-sum-type-ave, div.sum-ave, .nested-sum-average').remove();
                }

                if($('[ref=sumarize_type] input[ref=sum_type_min]:checked').length > 0 ) {
                    // generate fake data Minimum (VAR)
                    if($(this).find('.sum-min').length === 0)
                        $(this).append('<div class="sum-min">Minimum (<span class="this-sum-mode">'+$(this).closest('div.clone-content').attr('data-label')+'</span>) <span class="num">$'+faker.finance.amount()+'</span></div>')
                } else {
                    // delete fake data
                    $('.ref-sum-type-min, div.sum-min, .nested-sum-min').remove();
                }

                if($('[ref=sumarize_type] input[ref=sum_type_max]:checked').length > 0 ) {
                    // generate fake data Maximum (VAR)
                    if($(this).find('.sum-max').length === 0)
                        $(this).append('<div class="sum-max">Maximum (<span class="this-sum-mode">'+$(this).closest('div.clone-content').attr('data-label')+'</span>) <span class="num">$'+faker.finance.amount()+'</span></div>')
                } else {
                    // delete fake data
                    $(".ref-sum-type-max, div.sum-max, .nested-sum-max").remove();
                }
            }
        });

        setTimeout(function(){
            handle_summation_module_by_update();
        }, 10);
    }

    function handle_summation_module_by_update(){
        // Summarize data by by-mode-likely, by-mode-best, by-mode-worst, <div class="clone-content by-mode-worst">

        var summationController = $('span[data-storage=summarize_module_by]'),
            summationIter = [];
        //summationController
        summationController.find('.fake-select2-multi-input').find('.fake-select2-choice').each(function(){
            summationIter.push($(this).attr('data-this'));
        });

        if(summationIter.indexOf("Likely") === -1) {
            $('.by-mode-likely').addClass('hidden');
        } else {
            $('.by-mode-likely').removeClass('hidden');
        }

        if(summationIter.indexOf("Best") === -1) {
            $('.by-mode-best').addClass('hidden');
        } else {
            $('.by-mode-best').removeClass('hidden');
        }

        if(summationIter.indexOf("Worst") === -1) {
            $('.by-mode-worst').addClass('hidden');
        } else {
            $('.by-mode-worst').removeClass('hidden');
        }


        // update stuff inside nested list. using last variable from both select2 and checkboxes
        if(summationIter.length === 0) {
            $('.list-view-nested-header-title .num-col').addClass('hidden');
        } else {
            $('.list-view-nested-header-title .num-col').removeClass('hidden');


            $('.sum_variable').html(summationController.find('.fake-select2-choice:last').attr('data-this'));
            $('.sum_lbl_variable').html($('[ref=sumarize_type] input[type=checkbox]:checked:last').attr('data-label'));

            // on change
        }

    }

    function handle_show_empty_groups() {
        var selector = $('.summation-grouping, .list-view-nested-header');
        $.each( selector, function() {
            if($(this).find('.num').attr('data-num') == "0") {
                if(show_empty_groups === true)
                    $(this).removeClass('hidden');
                else
                    $(this).addClass('hidden');
            }
        });
    }

    function fake_loading(selector_to_show, selector_to_hide, delay) {
        selector_to_show.toggleClass('hidden');
        selector_to_show.parent().append(fake_loading_template);
        setTimeout(function(){
            //alert('done')
            selector_to_show.toggleClass('hidden');
            $('[ref=fakeLoading]').remove();
        }, delay);
    }

    function group_summation_generate_data(data) {
        $( "[ref=groupedListWrap] > .summation-grouping" ).each(function(index) {
            $(this).find('.summation-grouping-title article.title').html(data);
            //var num = Math.floor((Math.random()*20)+1);
            var num = Math.floor( Math.random() * 20 )
            $(this).find('.title').find('.num').html(num).attr('data-num', num);
            //$(this).find('.amount').find('.num').html(faker.finance.amount());
            $(this).find('.summation-grouping-list-view').find('.flex-list-view-content').html(" ");
            if(num === 0) {
                $(this).addClass('hidden');
            }
        });
    }

    function filter_show(v){
        if(v) {
            $('.filter-header-container, .filter-rows-container.filter-basic, .extend.tabs').toggle();

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
                $('.filter-rows-container.filter-basic')
                .find('[ref=filterBasicRowContainer]')
                .attr('group', '1')
                .addClass('last-group')
                .clone()
                .insertAfter('[ref=filterBasicRowContainer]')
                .addClass('model hidden initial-column-row')
                .attr('ref', 'filterBasicRowContainerModel')
                .removeClass('last-group');
            filter_row_id_gen();
            filter_row_serialize();
            $('[ref=filterBasicRowContainer]').addClass('initial-column-row');

            // setup various dropdowns unrelated to rows
            filter_add_abstract_select2();

        } else {
            $('.newcTab:visible, .extend.tabs').hide();
        }
        filter_labels_update_status();
    }

    function filter_labels_update_status() {
        var pointer = $('.filter-rows-container.filter-basic:visible');

        pointer.attr('lbl-status', '0');

        if($('[ref=filterBasicRowContainer]:visible.initial-column-row').length > 0) {
            pointer.attr('lbl-status', '1');
        }

        if($('[ref=filterBasicRowContainer]:visible.one-column-row').length > 0) {
            pointer.attr('lbl-status', '0');
        }

        if($('[ref=filterBasicRowContainer]:visible.three-column-row.three-column-row-visible-two').length > 0) {
            pointer.attr('lbl-status', '2');
        }

        if($('[ref=filterBasicRowContainer]:visible.three-column-row.three-column-row-visible-three').length > 0) {
            pointer.attr('lbl-status', '3');
        }
    }

    function filter_toggle_advanced(v){
        $('.filter-basic, .filter-advanced').toggle();
        v.text()=="Advanced" ? v.html('Basic') : v.html('Advanced');
    }

    function construct_fake_select2(arr2, selector, open, searchListAvail){
        var menu_con = '',
            i = 0,
            id = $(selector).closest('.filter-definition-container').attr('id'),
            ref = "",
            dataStorage = "";

        if($(selector).attr('data-storage')) {
            dataStorage = $(selector).attr('data-storage');
        }

        if(selector.selector.indexOf("row-one") > 0) {
            ref = "fakeSelect2liClickRow1";
        } else if (selector.selector.indexOf("row-two") > 0) {
            ref = "fakeSelect2liClickRow2";
        } else if (selector.selector.indexOf("row-three") > 0) {
            ref = "fakeSelect2liClickRow3";
        } else if ($(selector).attr('class').indexOf("row-select2-abstract") > 0) {
            ref = "fakeSelect2Abstract";
        } else if (selector.selector.indexOf("row-operator-details") > 0) {
            ref = "fakeSelect2liClickRowOperator";
        }

        if(arr2[0] === null) {
            // no need to construct select2 going to be plain text field
            //fake-select2-plain-text-input
            $(selector).find('input').addClass('fake-select2-input-plain-text').attr('placeholder', 'Type search term');
        } else {
            arr2.forEach(function(myVar) {
                menu_con = menu_con + '<li fake-select2-abstract-ref="'+dataStorage+'" ref="' + ref + '" objindex="' + (i++) + '" data="' + myVar + '" class="select2-results-dept-0 select2-result select2-result-selectable" role="presentation"><div class="select2-result-label" id="select2-result-label-75" role="option"><span class="select2-match"></span>' + myVar + '</div></li>';
            });
            $(selector).before(filter_fake_select2_before + menu_con  + filter_fake_select2_after);
            if(open) $(selector).prev('.fake-select2').removeClass('hidden');
            $(selector).find('input').addClass('fake-select2-input').attr('placeholder', 'Select');
            if(searchListAvail)
                $(selector).prev('.fake-select2').find('.select2-search').toggleClass('hidden');
        }
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

    function filter_row_select_field(v){
        var items = [],
            target = $('.details.row-one');
        $.each(v, function(index, value) {
            items.push(value.name)
        });
        construct_fake_select2(items, target, false);
        target.find('input[ref=fake-select2]:first').after('<a class="fake-select2-dropdown" ref="fakeSelect2dropdown"><i class="fa fa-sort-down"></i>');
    }

    function filter_add_abstract_select2() {
        var items = [],
            target = $('.details.row-select2-abstract[data-storage]');

        $.each(target, function(){
            items = [];
            var fakeSelect2Data = $(this).attr('data-storage');
            var thisStorage = eval(fakeSelect2Data);
            var fakeSelect2Multi = $(this).attr('fake-select2-type');

            construct_fake_select2_abstract(thisStorage, $(this), false, false, fakeSelect2Multi);

            $(target).find('input[ref=fake-select2]:first').after('<a class="fake-select2-dropdown" ref="fakeSelect2dropdown"><i class="fa fa-sort-down"></i>');
        });
    }

    function filter_row_select_operator(v, id){
        var items=[],
            target = $('#'+id+' .details.row-two');
        $.each(v.selectOperator, function(index, value) {
            items.push(value)
        });
        $('#'+id+' .details.row-two').prev('.fake-select2').remove();
        construct_fake_select2(items, target);
        target.find('input[ref=fake-select2]:first').after('<a class="fake-select2-dropdown" ref="fakeSelect2dropdown"><i class="fa fa-sort-down"></i>')
    }

    function filter_row_select_value(v, id){
        var items=[],
            target = $('#'+id+' .details.row-three');
        $.each(v.selectValue, function(index, value) {
            items.push(value)
        });
        $('#'+id+' .details.row-three').prev('.fake-select2').remove();
        construct_fake_select2(items, target);
        target.find('input[ref=fake-select2]:first').after('<a class="fake-select2-dropdown" ref="fakeSelect2dropdown"><i class="fa fa-sort-down"></i>')
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
                $(this).find('input[ref=fake-select2]:visible')
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
        filter_labels_update_status();
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
