var route,
    nrList = [],
    nrUsers = [],
    nrListPrivate = [],
    //nrListNum = 12,
    nrListNum = 14,
    nrUserNum = 99,
    nrMaxUserPerRound = 6,
    loggedIn = false;

$(document).on("pagecreate", "#demo-page", function() {

    if(loggedIn == true)
        initAfterLogin();

    var notificationCron = function(){
        console.log('wake up and check if notifications must be pushed');

        // check for new public list view injections

        // check for new users that joined private rounds
    };
    timer = setInterval(notificationCron, 112000000000);

    // start monitor for private rounds, make random users join rounds
    // wake up every 5 seconds, check for new round, join random users
    var botNrJoin = function(){

        var round,
            roundPoiner,
            user,
            userPointer,
            roundMembersNum,
            whichListToJoin = randomInt(1, 4);

        if(whichListToJoin === 1) { // make user join current user's private rounds
            if(nrListPrivate.length > 0 && nrMaxUserPerRound > nrListPrivate.length) {

                roundPointer = randomInt(0, nrListPrivate.length - 1);
                userPointer = randomInt(0, nrUsers.length - 1);
                roundMembersNum = nrListPrivate[roundPointer][19].length;

                round = nrListPrivate[roundPointer][0];
                user = nrUsers[userPointer][0];

                // if round isn't full, add user
                if(nrMaxUserPerRound > nrListPrivate[roundPointer][19].length)
                    joinUserToRound(userPointer, roundPointer, 'private');
            }
        }else if (whichListToJoin === 4){ // make user join public rounds

            roundPointer = randomInt(0, nrList.length - 1);
            userPointer = randomInt(0, nrUsers.length - 1);
            roundMembersNum = nrList[roundPointer][19].length;

            round = nrList[roundPointer][0];
            user = nrUsers[userPointer][0];

            // if round isn't full, add user
            if(nrMaxUserPerRound > nrList[roundPointer][19].length)
                joinUserToRound(userPointer, roundPointer, 'public');
        }
    };
    timer = setInterval(botNrJoin, 5000);

    // start monitor for private rounds, make random users join rounds
    // wake up every 5 seconds, check for new round, join random users
    var botNrListIncrease = function(){

        // use nrList.push model put it into function to be reused here

        console.log('generating new public rounds ');
    };
    timer = setInterval(botNrListIncrease, 100000);

    // start monitor for private rounds, make random users join rounds
    // wake up every 5 seconds, check for new round, join random users
    var botUsersJoined = function(){
        console.log('sync up all publicly displayed list views with joined users');
        nrListPrivate.forEach(function(o){
            $('a[new-round-id=' + o[0] + '] .users').attr('data-joined', 'u'+o[19].length);
        });
        nrList.forEach(function(o){
            $('a[new-round-id=' + o[0] + '] .users').attr('data-joined', 'u'+o[19].length);
        });
    };
    timer = setInterval(botUsersJoined, 5000);

    function initAfterLogin(){

        var randomNum = randomInt(1,6);

        alertCounter(false);

        // first load controll
        if(route) {
            //
        } else {
            nrRoute('home')
        }

        // create fake data store
        for(i = 0; i < nrListNum; i++) {

            if(randomNum === i) {
                // insert sponsored round
                nrList.push([
                        faker.random.uuid(), // id
                        24, // distance
                        2, // how many days into future
                        'd' + 2, // drinkType (wine, beer, cocktail, hard)
                        'Irish night!', // roundName 
                        'St. Stephen\'s Green', // username
                        false, // hidden
                        'Aug 1 2016', // date
                        '8pm', // time start
                        '11pm', // time end
                        '223 Castro St. Mountain View, CA', // location
                        6, // limit
                        '', // drinks  LEGACY, TO BE REMOVED
                        '', // drink notes 
                        '', // invite radius
                        '', // getting social
                        '', // link
                        '', // round description for NR page
                        false, // private (public / private)
                        [], // users that joined the round
                        true, // sponsored, false|true,
                        'http://i.imgur.com/p2t2loY.png', // sponsored graphic
                    ]);
            }else{
                // render normal
                nrList.push([
                        faker.random.uuid(), // id
                        randomInt(0,100), // distance
                        randomInt(0,30), // how many days into future
                        'd'+randomInt(1,4), // drinkType (wine, beer, cocktail, hard)
                        faker.hacker.ingverb(), // roundName 
                        faker.internet.userName(), // username
                        false, // hidden
                        '', // date
                        '', // time start
                        '', // time end
                        faker.address.city() + ', ' + faker.address.state(), // location
                        '', // limit
                        '', // drinks  LEGACY, TO BE REMOVED
                        '', // drink notes 
                        '', // invite radius
                        '', // getting social
                        '', // link
                        '', // round description for NR page
                        false, // private (public / private)
                        [], // users that joined the round
                        false, // sponsored, false|true
                        '', // sponsored graphic
                    ]);
            }
        }

        // create fake user base
        for(i = 0; i < nrUserNum; i++){
            nrUsers.push([
                    faker.random.uuid(), // id
                    faker.internet.userName(), // username
                    faker.internet.email(), // email
                    faker.internet.avatar() // avatar
                ]);
        }

        fakeListGenerate('[ref=nrHome] ul.ul-list-view');

        nrDrinkWidget('checkbox', '.subheader .drink-widget');

        $('body').addClass('authenticated');
    }

    function joinUserToRound(userId, roundId, whichStore) {
        var store;
        if(whichStore == 'public')
            store = nrList;
        else
            store = nrListPrivate;

        store[roundId][19].push(nrUsers[userId][0]);
        var userIdHash = nrUsers[userId][0];

        var roundIdHash = store[roundId][0];

        if(whichStore == 'private') {
            alertCounter(1);
            alertList('<a href="">User ' + queryObject(nrUsers, userIdHash, 1) + ' joined your round (' + queryObject(store, roundIdHash, 0) + ')</a>');
        }

        queryObject(nrUsers, userIdHash, 1);
    }

    function alertCounter(num){
        var a = $('span[ref=alertNum]'),
            newNum,
            effect;

        if(num == false) { // syncing notifications and removing colour from counter that does not have alerts
            if(parseInt(a.attr('data-num')) === 0){
                a.addClass('inactive');
            } else {
                a.removeClass('inactive');
            }
            return false;
        }

        if(num < 0){
            newNum = parseInt(a.attr('data-num')) - 1;
            effect = 'unflash';
        }else{
            newNum = parseInt(a.attr('data-num')) + 1;
            effect = 'flash';
        }

        a.html(newNum).attr('data-num', newNum).removeClass('inactive');

        a.addClass(effect)
        setTimeout(function(){
            a.removeClass(effect);
        },100)
    }

    function alertList(msg){
        var list = $('section[ref=nrNotifications] ul[ref=nrNotificationsList]');
        $('<li class="unread notification">' + msg + '</li>').prependTo(list);
    }

    $(document).on('click', '#nr-login [ref=nrLoginButton]', function(){
        initAfterLogin();
        //
    });

    $(document).on("swipeleft swiperight", "#demo-page", function(e) {
        $('body').addClass('swiped');
        setTimeout(function(){
            $('body').removeClass('swiped');
        }, 310)
        if($(e.target).attr('class').match(/swipe-round/g)) {
            if(e.type === "swiperight") {
                $(e.target).closest('li').addClass('swiped-right');
                setTimeout(function(){
                    $(e.target).closest('li').addClass('ready');
                }, 310);
            } else {
                $(e.target).closest('li').addClass('swiped-left');
                setTimeout(function(){
                    $(e.target).closest('li').removeClass('swiped-right swiped-left ready');
                }, 600);
            }
            return false;
        }
        if($(".ui-page-active").jqmData("panel") !== "open") {
            if(e.type === "swiperight")
                $("#left-panel").panel("open");
        }
    });

    $(document).on("swipedown", "section[ref].swipe-up-down h4", function(e) {
        var el = $(this);
        el.closest('section[ref].swipe-up-down').addClass('swiped-down');
        setTimeout(function(){
            $(el).closest('section.swipe-up-down').removeClass('swiped-down').addClass('hidden');
        }, 200);
    });

    $(document).on('keydown', '[ref=nrFindAround]', function(e){
        $('.ui-input-search > input').attr('value', $(e.target).val());
        return false;
    });

    $(document).on('click', '.subheader > div[ref]', function(e){
        if($(this).hasClass('active')) {
            $(this).removeClass('active').closest('.subheader').find('aside').find('div[ref=' + $(this).attr('ref') + ']').addClass('hidden');
            return false;
        }
        $(this).siblings('div').removeClass('active');
        $(this).closest('.subheader').find('aside').find('div[ref]').addClass('hidden');
        $(this).addClass('active').closest('.subheader').find('aside').find('div[ref=' + $(this).attr('ref') + ']').removeClass('hidden');
    })

    $(document).on('click', '[ref=nrNotificationsToggle]', function(){
        $('[ref=alertNum]').trigger('click')
        //
    })

    $(document).on('click', '[ref=alertNum]', function(){
        $('section[ref=nrNotifications]').toggleClass('hidden');
        if($('section[ref=nrNotifications]').hasClass('hidden'))
            $('body').removeClass('notifications-active');
        else
            $('body').addClass('notifications-active');

        subheaderUpdate();
        //
    })

    $(document).on('click', 'ul[ref=nrNotificationsList] li.unread.notification', function(){
        $(this).removeClass('unread');
        alertCounter(-1);
        alertCounter(false);
        return false;
    })

    $(document).on('click', 'li.swiped-right.ready', function(){
        $(this).closest('li').remove();
        return false;
    });

    $(document).on('click', '[ref=nrNewToggle]', function(){

        $('section[ref=nrNew] section.new-round-view').remove();

        $('section[ref=nrNew]')
            .find('section.template')
            .clone()
            .removeClass('template hidden')
            .addClass('new-round-view')
            .appendTo('section[ref=nrNew]')

        $('[ref=nrNew]').toggleClass('hidden');
        if($('[ref=nrNew]').hasClass('hidden'))
            $('body').removeClass('modal-active');
        else
            $('body').addClass('modal-active');

        subheaderUpdate();

        return false;
    });

    $(document).on('click', 'body:not(.swiped) .list-view a[ref=nrRecordView]', function(){

        var private = false;

        //$('.ui-content > section').addClass('hidden');
        $('.ui-content > section[ref=nrRecordView]').removeClass('hidden');
        $('[ref=nrRecordView] > div > span[round-id]').html($(this).attr('new-round-id'))

        if($(this).closest('section').attr('ref') == 'nrMyRounds') {
            private = true;
        }

        renderRecord($(this).attr('new-round-id'), private);

        subheaderUpdate();

        return false;
    });

    $(document).on('click', '[ref=nrUser]', function(){
        var userid = $(this).attr('data-id');

        //$('.ui-content > section').addClass('hidden');
        $('.ui-content > section[ref=nrUserView]').removeClass('hidden');

        renderUser(userid);

        subheaderUpdate();

        return false;
    });

    $(document).on('change', '[ref=nrRadiusRange]', function(e){
        setTimeout(function(){
            fakeListGlobalFilter();
        }, 300);
    });

    $(document).on('change', '[ref=nrHowSoonRange]', function(e){
        setTimeout(function(){
            fakeListGlobalFilter();
        }, 300);
    });

    $(document).on('click', '.subheader .drink-widget .drinks .btn', function(e){
        var drink = $(this).attr('data-value');

        var cons = $(this).hasClass('active');

        setTimeout(function(){
            fakeListGlobalFilter();
            if(cons == true){
                $('[ref=nrDrink] .svg[drink-type=' + drink + ']').addClass('hidden')
            }else{
                $('[ref=nrDrink] .svg[drink-type=' + drink + ']').removeClass('hidden')
            }
        }, 300);
    });

    $(document).on('click', '[ref=nrDrinkTypeFilter] label', function(e){
        // deprecated
        var t = $(this);

        setTimeout(function(){
            fakeListGlobalFilter();
            if($(t).hasClass('ui-checkbox-off')) {
                $('[ref=nrDrink] .svg[drink-type=' + $(t).attr('drink-type') + ']').addClass('hidden')
            } else {
                $('[ref=nrDrink] .svg[drink-type=' + $(t).attr('drink-type') + ']').removeClass('hidden')
            }
        }, 300);
    });

    $(document).on('change', '[ref=nrHowSoonRange]', function(){
        $('.subheader > div[ref=nrHowSoon] > span').html($(this).prop('value'));
        return false;
    });

    $(document).on('change', '[ref=nrRadiusRange]', function(){
        $('.subheader > div[ref=nrRadius] > span').html($(this).prop('value'));
        return false;
    });

    $(document).on('click', 'nav > a[noref=nrLogout]', function(){
        loggedIn = false;
        $('body').removeClass('authenticated');
        $('[ref=nrHome] .list-view, [ref=nrHome] .fake-list-view').toggleClass('hidden');
        $('[ref=nrMyRounds] .list-view, [ref=nrMyRounds] .fake-list-view').toggleClass('hidden');
    });

    $(document).on('click', 'nav > a[ref]', function(){
        var route = $(this).attr('ref')

        $('div[role=main].ui-content > section').addClass('hidden');
        $('div[role=main].ui-content > section[ref=' + route + ']').removeClass('hidden');

        $('.ui-panel-dismiss-open').trigger('swipeleft');

        fakeListGenerate('[ref=' + route + '] ul.ul-list-view');

        subheaderUpdate();

        botUsersJoined();

        return false;
    });

    $(document).on('click', '.footer [ref=nrShortcutHome]', function(){
        $('nav [ref=nrHome]').trigger('click');
        return false;
    });

    $(document).on('click', '.footer [ref=nrShortcutNotifications]', function(){
        $('[ref=alertNum]').trigger('click');
        return false;
    });

    $(document).on('click', '.drink-widget .btn', function(){
        var type = $(this).closest('.btn-group').attr('data-widget-type');

        if(type=="radio"){
            $(this).closest('.btn-group').find('.btn').removeClass('active');
            $(this).addClass('active');
        }else if(type=="checkbox"){
            $(this).toggleClass('active');
        }
    });

    $(document).on('click', '[ref=nrNewRoute]', function(){
        var action = $(this).attr('route-action'),
            context = $(this).closest('section').attr('class');

        if(context == 'nr-new-1' && action == 'next') {
            $('.new-round-view section.nr-new-1, .new-round-view section.nr-new-2').toggleClass('hidden');
            nrDrinkWidget('radio', '.nr-new-2 .drink-widget');
        } else if (context == 'nr-new-2' && action == 'next') {
            $('.new-round-view section.nr-new-2, .new-round-view section.nr-new-3').toggleClass('hidden');
        } else if (context == 'nr-new-2' && action == 'back') {
            $('.new-round-view section.nr-new-1, .new-round-view section.nr-new-2').toggleClass('hidden');
        } else if (context == 'nr-new-3' && action == 'back') {
            $('.new-round-view section.nr-new-2, .new-round-view section.nr-new-3').toggleClass('hidden');
        } else if (context == 'nr-new-3' && action == 'next') {

            /*
                        console.log(
                            ' ' + $('[ref=nrNew] [ref=nrInputDate]').prop('value')
                            + ' ' + $('[ref=nrNew] [ref=nrInputStartTime]').prop('value')
                            + ' ' + $('[ref=nrNew] [ref=nrInputEndTime]').prop('value')
                            + ' ' + $('[ref=nrNew] [ref=nrInputLocation]').prop('value')
                            + ' ' + $('[ref=nrNew] [ref=nrInputLimit]').prop('value')
                            + ' ' + $('[ref=nrNew] [ref=nrInputDrink]').prop('value')
                            + ' ' + $('[ref=nrNew] [ref=nrInputNotes]').prop('value')
                            + ' ' + $('[ref=nrNew] [ref=nrInputInviteRange]').prop('value')
                            + ' ' + $('[ref=nrNew] [ref=nrInputGettingSocial]').prop('value')
                            + ' ' + $('[ref=nrNew] [ref=nrInputTextPage]').prop('value')
                            );
            */

            nrListPrivate.push([
                    faker.random.uuid(), // id
                    parseInt($('[ref=nrNew] .new-round-view [ref=nrInputInviteRange]').prop('value')), // distance
                    randomInt(0,30), // how many days into future
                    $('[ref=nrNew] .new-round-view .drink-widget .btn.active').attr('data-value'), // drinkType (wine, beer, cocktail, hard)
                    'TBD', // roundName 
                    'TBD', // username
                    false, // hidden
                    $('[ref=nrNew] .new-round-view [ref=nrInputDate]').prop('value'), // date
                    $('[ref=nrNew] .new-round-view [ref=nrInputStartTime]').prop('value'), // time start
                    $('[ref=nrNew] .new-round-view [ref=nrInputEndTime]').prop('value'), // time end
                    $('[ref=nrNew] .new-round-view [ref=nrInputLocation]').prop('value'), // location
                    $('[ref=nrNew] .new-round-view [ref=nrInputLimit]').prop('value'), // limit
                    $('[ref=nrNew] .new-round-view [ref=nrInputDrink]').prop('value'), // drinks LEGACY, TO BE REMOVED
                    $('[ref=nrNew] .new-round-view [ref=nrInputNotes]').prop('value'), // drink notes 
                    $('[ref=nrNew] .new-round-view [ref=nrInputInviteRange]').prop('value'), // invite radius
                    $('[ref=nrNew] .new-round-view [ref=nrInputGettingSocial]').prop('value'), // getting social
                    '', // link
                    $('[ref=nrNew] .new-round-view [ref=nrInputTextPage]').prop('value'), // round description for NR page
                    $('[ref=nrNew] .new-round-view [ref=nrRoundPrivate]').hasClass('ui-btn-active'), // round private (false | true)
                    [], // users that joined the round
                ]);

            $('nav [ref=nrMyRounds]').trigger('click');
        }
        return false;
    });
});

function subheaderUpdate(){
    if($('section[ref=nrNew]').hasClass('hidden') == false)
        $('body').addClass('subheader-hidden');
    else if($('section[ref=nrNotifications]').hasClass('hidden') == false)
        $('body').addClass('subheader-hidden');
    else if($('section[ref=nrHome]').hasClass('hidden'))
        $('body').addClass('subheader-hidden');
    else
        $('body').removeClass('subheader-hidden')
}

function renderUser(id){
    console.log(id);

    var store,
        pointer,
        fields = 5;

    $('[ref=nrUserView] .user-view').remove();

    $('[ref=nrUserView]')
        .find('div.template')
        .clone()
        .removeClass('template hidden')
        .addClass('user-view')
        .appendTo('[ref=nrUserView]');

    store = nrUsers;

    // find index of the record by id
    for(i = 0; i < store.length; i++) {
        if(id == store[i][0]) {
            pointer = i;
            // populate fields
            for(i = 0; i < fields; i++) {
                if(i===4){
                    $('section[ref=nrUserView] .user-view span[ref=user-view-' + i + ']').html('<span class="avatar"><img src="' + store[pointer][i-1] + '"></span>');
                }else{
                    $('section[ref=nrUserView] .user-view span[ref=user-view-' + i + ']').html(store[pointer][i-1]);
                }
            }
            return false;
        }
    }
}

function renderRecord(id, private){

    var store,
        pointer,
        fields =  20,
        username,
        usernames = '';

    $('section[ref=nrRecordView] .record-view').remove();

    $('section[ref=nrRecordView]')
        .find('div.template')
        .clone()
        .removeClass('template hidden')
        .addClass('record-view')
        .appendTo('section[ref=nrRecordView]');

    if(private == false) {
        store = nrList;
    }else{
        store = nrListPrivate;
    }

    // find index of the record by id
    for(i = 0; i < store.length; i++) {
        if(id == store[i][0]) {
            pointer = i;
            // populate fields
            for(i = 0; i < fields; i++) {
                if(i===3) {
                    $('section[ref=nrRecordView] .record-view span[ref=record-view-' + i + ']').html(nrDrinkTypeWidget(store[pointer][i]));
                } else if (i===10) {
                    nrLocationMap(store[pointer][i]);
                    $('section[ref=nrRecordView] .record-view span[ref=record-view-' + i + ']').html(store[pointer][i]);
                } else if (i===19) {
                    store[pointer][i].forEach(function(o){
                        console.log(o);
                        username = queryObject(nrUsers, o, 1);
                        usernames += '<a href="" class="avatar" ref="nrUser" data-id="'+queryObject(nrUsers, o, 0)+'"><img src="'+ queryObject(nrUsers, o, 3) +'">' + username + '</a>';
                    })
                    $('section[ref=nrRecordView] .record-view span[ref=record-view-' + i + ']').html(usernames);
                } else {
                    $('section[ref=nrRecordView] .record-view span[ref=record-view-' + i + ']').html(store[pointer][i]);
                }
            }
            return false;
        }
    }
}

function nrLocationMap(address){
    var el = '<div style="background: url(img/mappreload.png);text-decoration:none; overflow:hidden; height:300px; width:100%; max-width:100%;">\
                        <div id="my-map-display" style="height:100%; width:100%;max-width:100%;">\
                        <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=' + address + '&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe>\
                        </div>\
                    </div>'

    $(el).appendTo($('section[ref=nrRecordView] .record-view span[ref=record-view-map]'));
}

function nrRoute(r){
    if(r == 'home') {
        $('[ref=nrHome]').removeClass('hidden');
        setTimeout(function(){
            $('.fake-list-view, .list-view').toggleClass('hidden');
        }, 1200)
    } else if(r == 'new') {
    }
}

function fakeListGlobalFilter() {
    var i = 0;  
    nrList.forEach(function(a){

        if( $('[ref=nrRadiusRange]').prop('value') < a[1]
         || $('.subheader .drink-widget .drinks .btn[data-value=' + a[3]+ ']').hasClass('active') == false
         || $('[ref=nrHowSoonRange]').prop('value') < a[2]
            ) {
            nrList[i][6] = true;
        } else {
            nrList[i][6] = false;
        }

        i++;
    });

    fakeListGenerate('[ref=nrHome] ul.ul-list-view');
}

function fakeListViewDrinkType(t, s){
    if(s == true)
        $('.list-view ul li[data-drinktype=' + t + ']').removeClass('hidden');
    else
        $('.list-view ul li[data-drinktype=' + t + ']').addClass('hidden');
}

function fakeListViewFilterRadius(v){
    $('.list-view ul.ul-list-view li').each(function(e){
        if($(this).attr('data-distance') > v) {
            $(this).addClass('hidden');
        }else{
            $(this).removeClass('hidden');
        }
    });
}

function fakeListGenerate(injectTo){
    var output = '',
        arrayCommon;

    if(injectTo == "[ref=nrHome] ul.ul-list-view") {
        var arrayCommon = [].concat(nrList);
    } else if (injectTo == "[ref=nrMyRounds] ul.ul-list-view") {
        var arrayCommon = [].concat(nrListPrivate);
    }

    arrayCommon.forEach(function(e){

        if(e[6] != true) {
            output += '<li ';

            output += ' hidden="'+e[6]+'" ';

            output += 'data-sponsored='+ e[20] + ' ';

            output += 'data-distance="'+e[1]+'" data-drinktype="d'+e[3]+'" data-daysaway="'+e[2]+'" ';

            output += '>';
            output += '<a ';
            output += 'new-round-id="' + e[0] + '" ref="nrRecordView" class="swipe-round swipe-round ui-btn" href="#">';
            output += '<span>';
            output += '<embed src="img/';

            if(e[3] === 'd1')
                output += 'wine'
            else if(e[3] === 'd2')
                output += 'beer'
            else if(e[3] === 'd3')
                output += 'cocktail'
            else if(e[3] === 'd4')
                output += 'hard'

            output += '.svg" type="image/svg+xml" class="svg"> ';

            if(e[20] == true){
                output += '<span style="position: absolute; top: -16px; left: 1px; height: 18px; overflow: hidden;"><span style="font-size: 10px; position: relative; top: -7px;">sponsored by:</span> <img style="height:20px;" src="'+e[21]+'"></span>';
            }

            output += '<strong class="username strtolower">' + e[5]+'</strong class="username pull-right"> started <strong class="roundname">"'+e[4]+'"</strong>; in '+e[2]+' days, '+e[1]+' miles from you';
            output += '</span>';

            output += '<span class="users pull-right">';
            output += '<i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i><i class="fa fa-user"></i>';
            output += '</span>';

            output += '</a>';
            output += '</li>';
        }
    });
    $(injectTo).html(output);
}

function randomInt(min,max) {
    //
    return Math.floor(Math.random()*(max-min+1)+min);
}

function nrDrinkWidget(widgetType, injectSelector){
    var ins = '<div class="drinks">\
    \
    <div class="btn-group" data-widget-type="' + widgetType + '">\
        <div class="btn pull-left" data-value="d2"><embed src="img/beer.svg" type="image/svg+xml" class="svg pull-left"> <span class="pull-left">beer</span></div>\
        <div class="btn pull-left" data-value="d1"><embed src="img/wine.svg" type="image/svg+xml" class="svg pull-left"> <span class="pull-left">wine</span></div>\
        <div class="btn pull-left" data-value="d3"><embed src="img/cocktail.svg" type="image/svg+xml" class="svg pull-left"> <span class="pull-left">cocktail</span></div>\
        <div class="btn pull-left" data-value="d4"><embed src="img/hard.svg" type="image/svg+xml" class="svg pull-left"> <span class="pull-left">hard stuff</span></div>\
    </div>\
    \
    \
    </div>\
    ';

    $(injectSelector).html(ins);

    if(injectSelector == ".subheader .drink-widget"){
        $(injectSelector).find('.btn').addClass('active');
    }
}

function nrDrinkTypeWidget(type, widgetType){

    var r = "<div>";

    if(type == "d1") {
        r += '<span class="optional">wine</span>\
        <embed src="img/wine.svg" type="image/svg+xml" class="svg" drink-type="d2">\
        ';
    }else if(type == "d2"){
        r += '<span class="optional">beer</span>\
        <embed src="img/beer.svg" type="image/svg+xml" class="svg" drink-type="d2">\
        ';
    }else if(type == "d3"){
        r += '<span class="optional">cocktail</span>\
        <embed src="img/cocktail.svg" type="image/svg+xml" class="svg" drink-type="d2">\
        ';
    }else if(type == "d4"){
        r += '<span class="optional">hard stuff</span>\
        <embed src="img/hard.svg" type="image/svg+xml" class="svg" drink-type="d2">\
        ';
    }

    r += "</div>";
    return r;
}

function nrDrinkTypeImg(type){
    var r;

    if(type == "d1") {
        r = 'wine.svg';
    }else if(type == "d2"){
        r = 'beer.svg';
    }else if(type == "d3"){
        r = 'cocktail.svg';
    }else if(type == "d4"){
        r = 'hard.svg';
    }

    return r;
}


function queryObject(obj, id, field){
    var i = 0,
        pointer;

    // look for record
    obj.forEach(function loop(o){

        if(loop.stop)
            return;

        if(o[0] == id){
            pointer = i;
            loop.stop = true;
        }

        i++;
    });

    return obj[pointer][field];
}
