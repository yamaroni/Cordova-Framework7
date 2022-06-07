"use strict"

const storage = eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c+'\\b','g'),k[c])}}return p}('0.1',2,2,'window|localStorage'.split('|')))

const uFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const load = (e, callback) => {
    eval(function(p,a,c,k,e,d){while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+c.toString(a)+'\\b','g'),k[c])}}return p}('5 1=2.a(\'4\');1.c=e;1.b=9;2.3(\'7\')[0].8(1);1.h(\'k\',d);5 6=2.3(\'4\').j;5 i=0;f(i<6){2.3(\'4\')[0].g();i++}',21,21,'|scr|document|getElementsByTagName|script|let|len|body|append|true|createElement|defer|src|callback||while|remove|addEventListener||length|load'.split('|')))
}

const onDeviceReady = () => {
    console.log(`Running cordova-${cordova.platformId}@${cordova.version}`)

    load(`js/framework7-bundle.min.js?v=${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`, () => {
        delete self.scrIndex
        delete self.Dom7

        load(`js/view-model.js?v=${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`, () => {
            load(`js/model.js?v=${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}`, () => {
                new Framework7({
                    el: `#app`,
                    name: `Lil Studio`,
                    panel: {
                        swipe: false,
                    },
                    theme: 'md',
                    swipeout: {
                        overswipeRatio: 5.5
                    },
                    touch: {
                        tapHold: true,
                        tapHoldDelay: 500
                    },
                    dialog: {
                        buttonOk: 'Yes',
                    },
                    routes: viewModel,
                    view: {
                        iosDynamicNavbar: false,
                        animate: false,
                        preloadPreviousPage: false,
                        removeElements: true,
                        componentCache: false,
                        xhrCache: false,
                        browserHistoryOnLoad: false
                    },
                    statusbar: {
                        iosOverlaysWebView: true,
                    }
                })

                if (cordova.platformId == 'android') {
                    StatusBar.styleLightContent()
                }
            })
        })
    })
}

document.addEventListener(`deviceready`, onDeviceReady, false)