<template>
<section class="core-section core-section_roles">
        <h1 class="ornate-core" >Our Core Features</h1>

        <div class="l-block l-block--full c-sliding-tabs">
            <div class="c-sliding-tabs__tabcontent">
                <div id="role0" class="c-sliding-tabs__panel c-role c-role--fight" data-wscitem="wsc_home_role">
                    <div class="c-sliding-tabs__background-wrapper">
                        <div class="c-sliding-tabs__background-img">
                            <picture class="c-objectfit c-objectfit--cover c-objectposition c-objectposition--center">
                                <source srcset="../assets/imgs/corefeatures/bgs/fight-bg.jpg" media="(max-width: 420px)" />
                                <img src="../assets/imgs/corefeatures/bgs/fight-bg.jpg" data-mediaslot="one" />
                            </picture>
                        </div>
                    </div>
                    <div class="c-role__character" id="character0" data-src="../assets/imgs/corefeatures/fight.png">
                         <img class="character__static" src="../assets/imgs/corefeatures/fight.png" data-mediaslot="three" />
                    </div>
                </div>
                <div id="role1" class="c-sliding-tabs__panel c-role c-role--Explore c-sliding-tabs__panel--active" data-wscitem="wsc_home_role">
                    <div class="c-sliding-tabs__background-wrapper">
                        <div class="c-sliding-tabs__background-img">
                            <picture class="c-objectfit c-objectfit--cover c-objectposition c-objectposition--center">
                                <source srcset="../assets/imgs/corefeatures/bgs/explore-bg.jpg" media="(max-width: 420px)" />
                                <img src="../assets/imgs/corefeatures/bgs/explore-bg.jpg" data-mediaslot="one" />
                            </picture>
                        </div>
                    </div>
                    <div class="c-role__character" id="character0" data-src="../assets/imgs/corefeatures/explore.png">
                         <img class="character__static" src="../assets/imgs/corefeatures/explore.png" data-mediaslot="three" />
                    </div>
                </div>
                <div id="role2" class="c-sliding-tabs__panel c-role c-role--spy" data-wscitem="wsc_home_role">
                    <div class="c-sliding-tabs__background-wrapper">
                        <div class="c-sliding-tabs__background-img">
                            <picture class="c-objectfit c-objectfit--cover c-objectposition c-objectposition--center">
                                <source srcset="../assets/imgs/corefeatures/bgs/treasure-bg.jpg" media="(max-width: 420px)" />
                                <img src="../assets/imgs/corefeatures/bgs/treasure-bg.jpg" data-mediaslot="one" />
                            </picture>
                        </div>
                    </div>
                    <div class="c-role__character" id="character0" data-src="../assets/imgs/corefeatures/treasure.png">
                         <img class="character__static" src="../assets/imgs/corefeatures/treasure.png" data-mediaslot="three" />
                    </div>
                </div>
                <div id="role3" class="c-sliding-tabs__panel c-role c-role--trade" data-wscitem="wsc_home_role">
                    <div class="c-sliding-tabs__background-wrapper">
                        <div class="c-sliding-tabs__background-img">
                            <picture class="c-objectfit c-objectfit--cover c-objectposition c-objectposition--center">
                                <source srcset="
                      ../assets/imgs/corefeatures/bgs/trade-bg.jpg
                    " media="(max-width: 420px)" />
                                <img src="../assets/imgs/corefeatures/bgs/trade-bg.jpg" data-mediaslot="one" />
                            </picture>
                        </div>
                    </div>
                    <div class="c-role__character" id="character0" data-src="../assets/imgs/corefeatures/trade.png">
                         <img class="character__static" src="../assets/imgs/corefeatures/trade.png" data-mediaslot="three" />
                    </div>
                </div>
            </div>
            <div class="c-sliding-tabs__tabs">
                <ul>
                    <li class="c-sliding-tab c-sliding-tab--fight" data-tab="#role0" data-wscitem="wsc_home_role">
                        <span class="c-sliding-tab__title--vertical">Fight</span>
                        <h4 class="c-sliding-tab__title--horizontal">Fight</h4>
                        <div class="c-sliding-tab__description">
                           BEO has traditional elements of roleplay and exploration the MMO’s we love have, combined with the play to earn mechanics of blockchain technology making it the first of its kind.
                        </div>
                        <span aria-hidden="true" class="c-sliding-tab__hover"></span>
                    </li>
                    <li class="c-sliding-tab c-sliding-tab--Explore c-sliding-tab--active" data-tab="#role1" data-wscitem="wsc_home_role">
                        <span class="c-sliding-tab__title--vertical">EXPLORE</span>
                        <h4 class="c-sliding-tab__title--horizontal">EXPLORE</h4>
                        <div class="c-sliding-tab__description">
                           BEO has traditional elements of roleplay and exploration the MMO’s we love have, combined with the play to earn mechanics of blockchain technology making it the first of its kind.
                        </div>
                        <span aria-hidden="true" class="c-sliding-tab__hover"></span>
                    </li>
                    <li class="c-sliding-tab c-sliding-tab--spy" data-tab="#role2" data-wscitem="wsc_home_role">
                        <span class="c-sliding-tab__title--vertical">TREASURE</span>
                        <h4 class="c-sliding-tab__title--horizontal">TREASURE</h4>
                        <div class="c-sliding-tab__description">
                           BEO has traditional elements of roleplay and exploration the MMO’s we love have, combined with the play to earn mechanics of blockchain technology making it the first of its kind.
                        </div>
                        <span aria-hidden="true" class="c-sliding-tab__hover"></span>
                    </li>
                    <li class="c-sliding-tab c-sliding-tab--trade" data-tab="#role3" data-wscitem="wsc_home_role">
                        <span class="c-sliding-tab__title--vertical">Trade</span>
                        <h4 class="c-sliding-tab__title--horizontal">Trade</h4>
                        <div class="c-sliding-tab__description">
                            BEO has traditional elements of roleplay and exploration the MMO’s we love have, combined with the play to earn mechanics of blockchain technology making it the first of its kind.
                        </div>
                        <span aria-hidden="true" class="c-sliding-tab__hover"></span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'CoreFeatures'
}
setTimeout(function(){
function convertAlphaMask(maskObj, dimensions) {
    var RGBA,
        convertCanvas = document.createElement("canvas"),
        convertCtx = convertCanvas.getContext("2d");
    (convertCanvas.width = dimensions.width),
    (convertCanvas.height = dimensions.height),
    convertCtx.drawImage(maskObj, 0, 0, dimensions.width, dimensions.height),
        (RGBA = convertCtx.getImageData(0, 0, dimensions.width, dimensions.height));
    for (var i = 3, len = RGBA.data.length; i < len; i += 4)(RGBA.data[i - 1] = RGBA.data[i - 2] = RGBA.data[i - 3] = RGBA.data[i]), (RGBA.data[i] = 255);
    return RGBA;
}

function unmultiply(rgb, alphaData) {
    for (var i = 3, len = rgb.data.length; i < len; i += 4)
        (rgb.data[i] = alphaData[i - 1]),
        (rgb.data[i - 3] = rgb.data[i - 3] / (alphaData[i - 1] ? alphaData[i - 1] / 255 : 1)),
        (rgb.data[i - 2] = rgb.data[i - 2] / (alphaData[i - 1] ? alphaData[i - 1] / 255 : 1)),
        (rgb.data[i - 1] = rgb.data[i - 1] / (alphaData[i - 1] ? alphaData[i - 1] / 255 : 1));
    return rgb;
}

function getRequestAnimationFrame() {
    for (var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length; x++)
        if (window[vendors[x] + "RequestAnimationFrame"]) return window[vendors[x] + "RequestAnimationFrame"];
    return function(callback) {
        var currTime = new Date().getTime(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
        return (lastTime = currTime + timeToCall), id;
    };
}

function getCancelAnimationFrame() {
    for (var vendors = ["ms", "moz", "webkit", "o"], x = 0; x < vendors.length; x++) {
        if (window[vendors[x] + "CancelAnimationFrame"]) return window[vendors[x] + "CancelAnimationFrame"];
        if (window[vendors[x] + "CancelRequestAnimationFrame"]) return window[vendors[x] + "CancelRequestAnimationFrame"];
    }
    return function(id) {
        clearTimeout(id);
    };
}

function slice(el) {
    return [].slice.call(el);
}

function toString(el) {
    return Object.prototype.toString.call(el);
}

function insertAfter(node, after) {
    after.nextSibling ? after.parentNode.insertBefore(node, after.nextSibling) : after.parentNode.appendChild(node);
}

function getNode(input) {
    return input.tagName ? input : "[object String]" === toString(input) ? document.querySelector(input) : input.length ? input[0] : null;
}

function cssObjectToString(obj) {
    var res = [];
    for (var prop in obj) obj.hasOwnProperty(prop) && res.push(prop + ": " + obj[prop] + ";");
    return res.join("");
}

function attachSelfAsPlugin($) {
    $.fn &&
        !$.fn.seeThru &&
        ($.fn.seeThru = function() {
            var args = slice(arguments);
            return this.each(function() {
                var $this = $(this);
                if (!args.length || (1 === args.length && "[object Object]" === toString(args[0]))) {
                    if ($this.data("seeThru")) return;
                    $this.data("seeThru", new SeeThru(this, args[0])._init());
                } else if (args.length && "[object String]" === toString(args[0])) {
                    if (!$this.data("seeThru")) return;
                    $this.data("seeThru").ready(function() {
                        $this.data("seeThru")[args[0]](args[1]), "revert" === args[0] && $this.data("seeThru", null);
                    });
                }
            });
        });
}

function Store() {
    var elements = [];
    (this.push = function(el) {
        return el ? (elements.push(el), el) : null;
    }),
    (this.has = function(el) {
        return elements.some(function(video) {
            return video === el;
        });
    }),
    (this.remove = function(el) {
        elements = elements.filter(function(video) {
            return video !== el;
        });
    });
}

function TransparentVideo(video, options) {
    var posterframe,
        interval,
        initialStyles = {},
        divisor = options.mask ? 1 : 2,
        dimensions = { width: parseInt(options.width, 10), height: parseInt(options.height, 10) },
        bufferCanvas = document.createElement("canvas"),
        buffer = bufferCanvas.getContext("2d"),
        displayCanvas = document.createElement("canvas"),
        display = displayCanvas.getContext("2d"),
        requestAnimationFrame = window.requestAnimationFrame || getRequestAnimationFrame(),
        cancelAnimationFrame = window.cancelAnimationFrame || getCancelAnimationFrame(),
        lastDrawnFrameTime = null,
        drawFrame = function drawFrame(recurse) {
            var image,
                alphaData,
                i,
                len,
                currentFrameTime = video.currentTime;
            if (lastDrawnFrameTime !== currentFrameTime && video.readyState > 1) {
                for (
                    lastDrawnFrameTime = currentFrameTime,
                    buffer.drawImage(video, 0, 0, dimensions.width, dimensions.height * divisor),
                    image = buffer.getImageData(0, 0, dimensions.width, dimensions.height),
                    alphaData = buffer.getImageData(0, dimensions.height, dimensions.width, dimensions.height).data,
                    options.unmult && unmultiply(image, alphaData),
                    i = 3,
                    len = image.data.length; i < len; i += 4
                )
                    image.data[i] = options.alphaMask ? alphaData[i - 1] : Math.max(alphaData[i - 1], alphaData[i - 2], alphaData[i - 3]);
                display.putImageData(image, 0, 0, 0, 0, dimensions.width, dimensions.height);
            }
            recurse &&
                (interval = requestAnimationFrame(function() {
                    drawFrame(!0);
                }));
        },
        drawStaticMask = function(node) {
            if ("IMG" !== node.tagName) throw new Error("Cannot use non-image element as mask!");
            (node.width = dimensions.width),
            (node.height = dimensions.height),
            options.alphaMask ? buffer.putImageData(convertAlphaMask(node, dimensions), 0, dimensions.height) : buffer.drawImage(node, 0, dimensions.height, dimensions.width, dimensions.height),
                (node.style.display = "none");
        };
    (this.startRendering = function() {
        return drawFrame(!0), this;
    }),
    (this.stopRendering = function() {
        return cancelAnimationFrame(interval), this;
    }),
    (this.teardown = function() {
        cancelAnimationFrame(interval), video.parentNode.removeChild(video.nextSibling), video.parentNode.removeChild(video.nextSibling);
        for (var key in initialStyles) Object.prototype.hasOwnProperty.call(initialStyles, key) && (video.style[key] = initialStyles[key]);
        return this;
    }),
    (this.updateMask = function(node) {
        return drawStaticMask(node), this;
    }),
    (this.getCanvas = function() {
        return displayCanvas;
    }),
    (this.getPoster = function() {
        return posterframe;
    });
    var elementDimensions = video.getBoundingClientRect();
    (dimensions.height && dimensions.width) ||
    (video.width || video.height ?
        video.height ?
        video.width ?
        ((dimensions.width = dimensions.width || elementDimensions.width), (dimensions.height = dimensions.height || elementDimensions.height / divisor)) :
        ((dimensions.width = dimensions.width || elementDimensions.height * (video.videoWidth / Math.floor(video.videoHeight / divisor))), (dimensions.height = dimensions.height || elementDimensions.height)) :
        ((dimensions.width = dimensions.width || elementDimensions.width), (dimensions.height = dimensions.height || elementDimensions.width / (video.videoWidth / Math.floor(video.videoHeight / divisor)))) :
        ((dimensions.width = dimensions.width || video.videoWidth), (dimensions.height = dimensions.height || video.videoHeight / divisor))),
    (bufferCanvas.width = dimensions.width),
    (bufferCanvas.height = 2 * dimensions.height),
    (bufferCanvas.style.display = "none"),
    (bufferCanvas.className = "seeThru-buffer"),
    (displayCanvas.width = dimensions.width),
    (displayCanvas.height = dimensions.height),
    (displayCanvas.className = "seeThru-display"),
    insertAfter(bufferCanvas, video),
        insertAfter(displayCanvas, video),
        options.mask && drawStaticMask(getNode(options.mask)),
        options.poster &&
        video.poster &&
        ((posterframe = document.createElement("div")),
            (posterframe.className = "seeThru-poster"),
            (posterframe.style.cssText = cssObjectToString({
                width: dimensions.width + "px",
                height: dimensions.height + "px",
                position: "absolute",
                top: 0,
                left: 0,
                "background-size": "cover",
                "background-position": "center",
                "background-image": 'url("' + video.poster + '")',
            })),
            insertAfter(posterframe, video));
    for (var key in options.videoStyles) Object.prototype.hasOwnProperty.call(options.videoStyles, key) && ((initialStyles[key] = window.getComputedStyle(video)[key]), (video.style[key] = options.videoStyles[key]));
    "autoplay" === options.start && video.play();
}

function SeeThru(DOMNode, options) {
    var self = this,
        ready = !1,
        callbacks = [],
        defaultOptions = { start: "autoplay", end: "loop", mask: !1, alphaMask: !1, width: null, height: null, poster: !1, unmult: !1, videoStyles: { display: "none" } },
        canConstructEvents = (function() {
            try {
                return !1 === new Event("submit", { bubbles: !1 }).bubbles && !0 === new Event("submit", { bubbles: !0 }).bubbles;
            } catch (e) {
                return !1;
            }
        })(),
        eventsToEcho = ["mouseenter", "mouseleave", "click", "mousedown", "mouseup", "mousemove", "mouseover", "hover", "dblclick", "contextmenu", "focus", "blur"];
    if (((options = options || {}), (this._video = getNode(DOMNode)), !this._video || "VIDEO" !== this._video.tagName)) throw new Error("Could not use specified source");
    (this._options = (function(options) {
        for (var key in defaultOptions) defaultOptions.hasOwnProperty(key) && (key in options || (options[key] = defaultOptions[key]));
        return options;
    })(options)),
    (this._init = function() {
        var runInit = function() {
            function playSelfAndUnbind() {
                self._video.play(), self._options.poster ? self._seeThru.getPoster().removeEventListener("click", playSelfAndUnbind) : self._seeThru.getCanvas().removeEventListener("click", playSelfAndUnbind);
            }
            if (elementStore.has(this._video)) throw new Error("seeThru already initialized on passed video element!");
            (this._seeThru = new TransparentVideo(this._video, this._options)),
            "clicktoplay" === this._options.start ?
                this._options.poster ?
                this._seeThru.getPoster().addEventListener("click", playSelfAndUnbind) :
                this._seeThru.getCanvas().addEventListener("click", playSelfAndUnbind) :
                "autoplay" === this._options.start && options.poster && (this._seeThru.getPoster().style.display = "none"),
                "rewind" === this._options.end ?
                this._video.addEventListener("ended", function() {
                    (self._video.currentTime = 0), self._seeThru.getCanvas().addEventListener("click", playSelfAndUnbind);
                }) :
                "stop" !== this._options.end &&
                this._video.addEventListener("ended", function() {
                    (self._video.currentTime = 0), self._video.play();
                }),
                this._options.poster &&
                this._video.poster &&
                (this._video.addEventListener("play", function() {
                        self._seeThru.getPoster().style.display = "none";
                    }),
                    this._video.addEventListener("pause", function() {
                        self._seeThru.getPoster().style.display = "block";
                    })),
                eventsToEcho.forEach(function(eventName) {
                    self._seeThru.getCanvas().addEventListener(eventName, function() {
                        var evt;
                        canConstructEvents ? (evt = new Event(eventName)) : ((evt = document.createEvent("Event")), evt.initEvent(eventName, !0, !0)), self._video.dispatchEvent(evt);
                    });
                }),
                this._seeThru.startRendering(),
                (ready = !0),
                elementStore.push(this._video),
                callbacks.forEach(function(cb) {
                    cb(self, self._video, self.getCanvas());
                });
        }.bind(this);
        return (
            this._video.readyState > 0 ?
            runInit() :
            this._video.addEventListener("loadedmetadata", function() {
                runInit();
            }),
            this
        );
    }),
    (this.getCanvas = function() {
        return this._seeThru.getCanvas();
    }),
    (this.play = function() {
        return this._video.play(), this;
    }),
    (this.pause = function() {
        return this._video.pause(), this;
    }),
    (this.revert = function() {
        this._seeThru.teardown(), elementStore.remove(this._video);
    }),
    (this.updateMask = function(mask) {
        return this._seeThru.updateMask(getNode(mask)), this;
    }),
    (this.ready = function(cb) {
        return (
            ready ?
            setTimeout(function() {
                cb(self, self._video, self.getCanvas());
            }, 0) :
            callbacks.push(cb),
            this
        );
    });
}

window.jQuery && attachSelfAsPlugin(window.jQuery);
var elementStore = new Store();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var _createClass = (function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            (descriptor.enumerable = descriptor.enumerable || !1), (descriptor.configurable = !0), "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), Constructor;
    };
})();
new((function() {
    function SlidingTabs() {
        _classCallCheck(this, SlidingTabs);
    }
    return (
        _createClass(SlidingTabs, [{
            key: "init",
            value: function() {
                function playCharacter() {
                    var curRole = document.querySelector(".c-sliding-tabs__panel--active"),
                        curRoleVid = curRole.querySelector("video");
                    curRoleVid && curRoleVid.paused && !hasPlayed && (curRoleVid.play(), (hasPlayed = !0));
                }

                function pauseCharacter() {
                    var curRole = document.querySelector(".c-sliding-tabs__panel--active"),
                        curRoleVid = curRole.querySelector("video");
                    curRoleVid && !curRoleVid.paused && (curRoleVid.pause(), (hasPlayed = !0));
                }

                function showTabContent() {
                    var isActive = this.classList.contains("c-sliding-tab--active"),
                        curTab = document.querySelector(".c-sliding-tab--active"),
                        curRole = document.querySelector(".c-sliding-tabs__panel--active"),
                        nextTab = this.getAttribute("data-tab"),
                        nextRole = document.querySelector(nextTab);
                    isActive ||
                        (curTab.classList.remove("c-sliding-tab--active"),
                            this.classList.add("c-sliding-tab--active"),
                            curRole.classList.remove("c-sliding-tabs__panel--active"),
                            nextRole.classList.add("c-sliding-tabs__panel--active"),
                            (hasPlayed = !1),
                            setTimeout(function() {
                                playCharacter();
                            }, 500));
                }
                var windowWidth = window.outerWidth;
                !(function() {
                    var deferVideos = document.querySelectorAll(".c-role__character");
                    if (windowWidth > 1023)
                        for (var i = 0, len = deferVideos.length; i < len; i += 1) {
                            var videoSrc = deferVideos[i].getAttribute("data-src");
                            if (videoSrc) {
                              let vueModified = videoSrc.replace('..', '/_nuxt')
                                var videoTag = '<video class="c-video__defer character__video" playsinline muted><source src="' + vueModified + '" type="video/mp4"></video>';
                                deferVideos[i].insertAdjacentHTML("afterbegin", videoTag);
                                var deferVideo = deferVideos[i].querySelector("video")
                                    // deferVideo.onended = function() {
                                    //     deferVideo.style.display = 'none';
                                    // }
                                    // var staticCharacter = deferVideos[i].querySelector(".character__static")
                                var staticCharacter = (new SeeThru(deferVideo, { start: "external", end: "stop" })._init(), deferVideos[i].querySelector(".character__static"));
                                staticCharacter.classList.add("character__static--hidden");
                            }
                        }
                })();
                var hasPlayed = !1,
                    roleInView = (function(func, wait, immediate) {
                        var _this = this,
                            _arguments = arguments,
                            timeout = void 0;
                        return function() {
                            var context = _this,
                                args = _arguments,
                                later = function() {
                                    (timeout = null), immediate || func.apply(context, args);
                                },
                                callNow = immediate && !timeout;
                            clearTimeout(timeout), (timeout = setTimeout(later, wait)), callNow && func.apply(context, args);
                        };
                    })(function() {
                        var roleSection = document.querySelector(".core-section_roles");
                        roleSection &&
                            (window.onscroll = function() {
                                var roleSectionRectTop = roleSection.getBoundingClientRect().top;
                                roleSectionRectTop <= 0.5 * window.innerHeight && roleSectionRectTop > -300 ? playCharacter() : pauseCharacter();
                            });
                    }, 250);
                window.addEventListener("scroll", roleInView);
                var tabs = document.querySelectorAll(".c-sliding-tab");
                [].forEach.call(tabs, function(el) {
                    el.addEventListener("click", showTabContent.bind(el), !1);
                });
                var openModalButtons = document.querySelectorAll(".js-open-hero-modal");
                [].forEach.call(openModalButtons, function(el) {
                    el.addEventListener("click", function(event) {
                        event.preventDefault();
                        var modal = event.currentTarget.nextElementSibling,
                            modalID = modal.id,
                            body = document.querySelector("body");
                        body.classList.add("hero-modal--is-open"), document.querySelector("#bodyWrapper").insertAdjacentHTML("afterbegin", modal.outerHTML);
                        var newModal = document.querySelector("#" + modalID),
                            closeButtons = newModal.querySelectorAll(".js-close-hero-modal");
                        [].forEach.call(closeButtons, function(closeBtn) {
                                closeBtn.addEventListener("click", function(event) {
                                    event.preventDefault();
                                    var modal = $(event.target).closest(".c-hero-modal");
                                    $(modal).remove(), body.classList.remove("hero-modal--is-open");
                                });
                            }),
                            newModal.classList.add("c-hero-modal--is-active");
                    });
                });
            },
        }, ]),
        SlidingTabs
    );
})())().init();
}, 3000)
</script>

<style lang="scss" scoped>
h1.ornate-core {
    position: absolute;
    color: #fff;
    font-family: 'poppins';
    font-size: 60px;
    font-weight: 700;
    line-height: 4.6rem;
    letter-spacing: .02rem;
    margin: 0 auto !important;
    text-align: center;
    z-index: 1;
    white-space: nowrap;
     top: 10vh;
     left: 35vw;
    z-index: 9;
}
h1.ornate-core:after {
    top: 180%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}

h1.ornate-core:after {
  content: "";
    height: 1rem;
    position: relative;
    top: 15px;
    display: block;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(../assets/imgs/galacticraces/line.png);
}

h1.ornate-core i {
    color: hsla(0,0%,100%,.1);
    font-size: 12rem;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    position: absolute;
}

@media only screen and (max-width: 600px) {
  section {
      h1.ornate-core{
          font-size: 28px;
          top: 0px !important;
          left: 60px!important;

      }

      h1.ornate-core::after{
                content:"";
                position: relative;
                top: 10px;
                 width:100%;
                background-image: url("../assets/imgs/coreFeatures/line-mobile.png") ;
                text-align: center;

            }

    }
  }








*,
 :after,
 :before {
    box-sizing: border-box;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

body,
html {
    margin: 0;
}

body {
    background: #363535;
    color: #fff;
    font-family: univia-pro, sans-serif;
    font-size: .9375em;
    line-height: 1.3;
    min-width: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

.core-section {
    width: 100%;
    position: relative;
}

.core-section_roles {
    width: 100%;
    overflow: hidden;
}

.core-section_roles {
    // padding-top: 85px;
}

.core-section:before {
    background: #081519;
    z-index: 1;
}

.core-section:after,
.core-section:before {
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: "";
    left: 0;
    position: absolute;
    top: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 400;
    margin: 0;
}

.c-sectiontitle {
    color: #d7b577;
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 300;
    margin: 0 auto;
    max-width: 100%;
    padding: 15px 20px 15px 50px;
    position: relative;
    text-transform: uppercase;
    width: 865px;
    z-index: 5;
}

.c-sectiontitle--right {
    flex-direction: row-reverse;
    text-align: right;
}

.c-sectiontitle__number {
    width: 55px;
    line-height: 41px;
}

.c-sectiontitle strong {
    font-weight: 800;
}

.c-sectiontitle__separator {
    width: 1px;
    height: 42px;
    background: #d7b577;
    margin: 0;
    position: relative;
}

.c-sectiontitle__separator:after,
.c-sectiontitle__separator:before {
    width: 3px;
    height: 3px;
    background: #ee810b;
    content: "";
    display: block;
    left: -1px;
    position: absolute;
}

.c-sectiontitle__text {
    margin-left: 20px;
    line-height: 26px;
    letter-spacing: 1px;
}

.c-sectiontitle--right .c-sectiontitle__text {
    margin-left: 0;
    margin-right: 20px;
}

.l-block {
    position: relative;
    z-index: 5;
}

.l-block--full {
    width: 100%;
}

.c-sliding-tabs__tabcontent {
    height: 580px;
    overflow: visible;
    position: relative;
}

.c-sliding-tabs__panel {
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
}

.c-role {
    z-index: 1;
}

.c-role.c-sliding-tabs__panel--active {
    z-index: 2;
}

.c-sliding-tabs__background-wrapper {
    width: 100%;
    height: 561px;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: 1;
}

.c-sliding-tabs__background-img {
    width: calc(100% + 50px);
    opacity: 0;
    position: absolute;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    transition: all 1.5s cubic-bezier(.165, .84, .44, 1);
    -moz-transition: all 1.5s cubic-bezier(.165, .84, .44, 1);
    -webkit-transition: all 1.5s cubic-bezier(.165, .84, .44, 1);
    -o-transition: all 1.5s cubic-bezier(.165, .84, .44, 1);
    -webkit-transition-delay: .5s;
    transition-delay: .5s;
    height: auto;
}

.c-sliding-tabs__background-img {
    height: 100%;
}

img {
    display: inline-block;
    max-width: 100%;
    height: auto;
}

.c-objectfit img {
    display: block;
    width: 100%;
    height: 100%;
}

.c-objectfit--cover img {
    object-fit: cover;
}

.c-objectposition--center img {
    object-position: 50% 50%;
}

.c-role__character {
    width: 590px;
    height: 818px;
    opacity: 0;
    position: absolute;
    top: 240px;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    transform: translateX(-20px);
    transition: all .75s cubic-bezier(.165, .84, .44, 1);
    -moz-transition: all .75s cubic-bezier(.165, .84, .44, 1);
    -webkit-transition: all .75s cubic-bezier(.165, .84, .44, 1);
    -o-transition: all .75s cubic-bezier(.165, .84, .44, 1);
    z-index: 2;
}

.c-role .character__static,
.c-role .character__video {
    left: 0;
    position: absolute;
    top: 0;
}

.c-role .character__video {
    z-index: 5;
}

.c-role .character__static,
.c-role .character__video {
    left: 0;
    position: absolute;
    top: 0;
}

.c-role .character__static {
    position: relative;
    transition: all .4s cubic-bezier(.165, .84, .44, 1);
    -moz-transition: all .4s cubic-bezier(.165, .84, .44, 1);
    -webkit-transition: all .4s cubic-bezier(.165, .84, .44, 1);
    -o-transition: all .4s cubic-bezier(.165, .84, .44, 1);
}

.c-role .character__static--hidden {
    opacity: 1;
}

.c-sliding-tabs__tabs {
    position: absolute;
    right: 26px;
    text-align: right;
    top: 130px;
    width: calc(100% - 52px);
    z-index: 5;
}

.c-sliding-tabs__tabs h3 {
    font-size: 32px;
    font-weight: 100;
    line-height: 1;
    margin-bottom: 15px;
    text-transform: uppercase;
}

ul {
    list-style: none;
    padding: 0;
}

.c-sliding-tabs__tabs ul {
    margin: 0;
    padding: 0;
}

.c-sliding-tab {
    -webkit-transform: translateZ(0);
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
    overflow: hidden;
    padding: 15px 21px 15px 30px;
    position: relative;
    text-align: left;
    vertical-align: bottom;
    transition: all .4s cubic-bezier(.165, .84, .44, 1);
    -moz-transition: all .4s cubic-bezier(.165, .84, .44, 1);
    -webkit-transition: all .4s cubic-bezier(.165, .84, .44, 1);
    -o-transition: all .4s cubic-bezier(.165, .84, .44, 1);
}

.c-sliding-tab--active {
    padding-top: 15px;
    height: 260px;
}

.c-sliding-tab .c-sliding-tab__hoveroverlay,
.c-sliding-tab:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    border: 1px solid transparent;
    border-image-source: url(../assets/imgs/corefeatures/feature-bg.svg);
    border-image-slice: 50 fill;
    border-image-width: 50px;
}

.c-sliding-tab__title--horizontal,
.c-sliding-tab__title--vertical {
    color: #fbfeff;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    z-index: 1;
}

.c-sliding-tab__title--vertical {
    display: none;
    text-align: right;
    opacity: 1;
    position: absolute;
    -webkit-transform: rotate(-90deg) translateX(-298px) translateY(6px);
    -moz-transform: rotate(-90deg) translateX(-298px) translateY(6px);
    -ms-transform: rotate(-90deg) translateX(-298px) translateY(6px);
    transform: rotate(-90deg) translateX(-298px) translateY(6px);
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top;
    transition: opacity .5s cubic-bezier(.165, .84, .44, 1);
    -moz-transition: opacity .5s cubic-bezier(.165, .84, .44, 1);
    -webkit-transition: opacity .5s cubic-bezier(.165, .84, .44, 1);
    -o-transition: opacity .5s cubic-bezier(.165, .84, .44, 1);
}

.c-sliding-tab__title--horizontal {
    position: relative;
    margin-bottom: 14px;
}

.c-sliding-tab__description {
    position: relative;
    font-size: 16px!important;
    line-height: 18px;
    z-index: 1;
    color: #fff;
}

a {
    text-decoration: none;
}

.c-sliding-tab__cta {
    bottom: 10px;
    color: #fff;
    font-size: 9px;
    line-height: 15px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    text-transform: uppercase;
    width: 0;
    display: inline-flex;
    align-items: center;
    z-index: 1;
    white-space: nowrap;
    -webkit-transform: translateX(-10px);
    -moz-transform: translateX(-10px);
    -ms-transform: translateX(-10px);
    transform: translateX(-10px);
    transition: all .4s cubic-bezier(.165, .84, .44, 1);
    -moz-transition: all .4s cubic-bezier(.165, .84, .44, 1);
    -webkit-transition: all .4s cubic-bezier(.165, .84, .44, 1);
    -o-transition: all .4s cubic-bezier(.165, .84, .44, 1);
}

.c-sliding-tab__cta:before {
    content: "\E907";
    display: inline-block;
    vertical-align: middle;
    font-family: wtsc-icons;
    font-size: 22px;
    line-height: 1.4em;
    margin-right: 5px;
    text-shadow: 0 0 7px #c48100, 0 0 14px #c48100;
}

.c-sliding-tabs__panel--active .c-sliding-tabs__background-img {
    opacity: 1;
    -webkit-transform: translateX(-30px);
    -moz-transform: translateX(-30px);
    -ms-transform: translateX(-30px);
    transform: translateX(-30px);
}

.c-role.c-sliding-tabs__panel--active .c-role__character {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition-delay: .75s;
    transition-delay: .75s;
}

.c-sliding-tab--active .c-sliding-tab__cta {
    width: 170px;
    -webkit-transition-delay: .5s;
    transition-delay: .5s;
}

.c-sliding-tab--active .c-sliding-tab__cta,
.c-sliding-tab--active .c-sliding-tab__cta span,
.c-sliding-tab--active .c-sliding-tab__cta strong {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
}
span.c-sliding-tab__title--vertical, h4.c-sliding-tab__title--horizontal {
    font-family: Titillium Web;
    font-size: 24px !important;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 37px;
    letter-spacing: 0em;
}
.c-sliding-tab--active h4.c-sliding-tab__title--horizontal:after {
    content: "";
    height: 12px;
    display: block;
    width: 300px;
    background-image: url(../assets/imgs/corefeatures/Union.png);
    background-repeat: no-repeat;
}


/********** Media Queries ***********/

@media (min-width: 768px) {
    .c-sliding-tabs__tabcontent {
        height: 576px;
    }
    .c-sliding-tabs__background-wrapper {
        min-height: 100vh;
        top: 0;
    }
    .c-sliding-tabs__tabs {
        left: 50%;
        margin-left: -438px;
        right: auto;
        width: 768px;
    }
    .c-sliding-tabs__tabs h3 {
        font-size: 50px;
        letter-spacing: 9px;
    }
    .c-sliding-tabs__tabs ul {
        display: flex;
        float: right;
    }
    .c-sliding-tab {
        width: 56px;
        height: 345px;
        display: block;
        float: left;
        margin-left: 18px;
        padding: 0;
    }
    .c-sliding-tab--active {
        width: 300px;
    }
    .c-sliding-tab:before {
        border: 1px solid transparent;
        border-image-source: url(../assets/imgs/corefeatures/feature-bg.svg);
        border-image-slice: 50 fill;
        border-image-width: 50px;
    }
    .c-sliding-tab__title--horizontal,
    .c-sliding-tab__title--vertical {
        font-size: 24px;
        width: 260px;
    }
    .c-sliding-tab__title--vertical {
        display: block;
    }
    .c-sliding-tab__title--horizontal {
        margin-top: 30px;
        width: 210px;
    }
    .c-sliding-tab__description,
    .c-sliding-tab__title--horizontal {
        opacity: 0;
        margin-left: 60px;
        -webkit-transform: translateX(20px);
        -moz-transform: translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px);
        transition: all .5s cubic-bezier(.165, .84, .44, 1);
        -moz-transition: all .5s cubic-bezier(.165, .84, .44, 1);
        -webkit-transition: all .5s cubic-bezier(.165, .84, .44, 1);
        -o-transition: all .5s cubic-bezier(.165, .84, .44, 1);
    }
    .c-sliding-tab__description {
        font-size: 12px;
        line-height: 1.5;
        width: 210px;
    }
    .c-sliding-tab__cta {
        left: 10px;
        display: block;
        bottom: 18px;
        font-size: 12px;
        line-height: 22px;
        opacity: 1;
        text-transform: uppercase;
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        white-space: nowrap;
        width: auto!important;
    }
    .c-sliding-tab__cta:before {
        content: "\E905";
        font-size: 22px;
        margin-right: 24px;
        text-shadow: 0 0 7px rgb(196 129 0 / 0%), 0 0 14px rgb(196 129 0 / 0%);
        transition: all .4s cubic-bezier(.165, .84, .44, 1);
        -moz-transition: all .4s cubic-bezier(.165, .84, .44, 1);
        -webkit-transition: all .4s cubic-bezier(.165, .84, .44, 1);
        -o-transition: all .4s cubic-bezier(.165, .84, .44, 1);
    }
}

@media (min-width: 1024px) {
    .core-section {
        padding: 71px 0 0;
    }
    .c-sliding-tabs__tabs {
        margin-left: -433px;
        width: 866px;
    }
    .c-sliding-tab {
        margin-left: 24px;
        width: 101px;
        // border-image-source: url(../assets/imgs/corefeatures/feature-bg.svg);
    border-image-slice: 50 fill;
    border-image-width: 50px;
    }
    .c-sliding-tab--active {
        width: 400px;
    }
    .c-sliding-tab__title--horizontal,
    .c-sliding-tab__title--vertical {
        width: 260px;
        margin-left: 15px;
    }
    .c-sliding-tab__title--vertical {
        -webkit-transform: rotate(-90deg) translateX(-300px) translateY(12px);
        -moz-transform: rotate(-90deg) translateX(-300px) translateY(12px);
        -ms-transform: rotate(-90deg) translateX(-300px) translateY(12px);
        transform: rotate(-90deg) translateX(-300px) translateY(12px);
    }
    .c-sliding-tab__description,
    .c-sliding-tab__title--horizontal {
        margin-left: 72px;
    }
    .c-sliding-tab__title--horizontal {
        margin-top: 44px;
        margin-bottom: 15px;
    }
    .c-sliding-tab__description {
        font-size: 13px;
        width: 290px;
        color: white;
    }
    .c-sliding-tab__cta {
        left: 20px;
    }
    .c-sliding-tab__cta:before {
        margin-right: 30px;
    }
    .c-sliding-tab--active .c-sliding-tab__title--vertical {
        opacity: 0;
    }
    .c-sliding-tab--active .c-sliding-tab__description,
    .c-sliding-tab--active .c-sliding-tab__title--horizontal {
        opacity: 1;
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
    }
    .c-sliding-tab--active .c-sliding-tab__title--horizontal {
        -webkit-transition-delay: .5s;
        transition-delay: .5s;
    }
    .c-sliding-tab--active .c-sliding-tab__description {
        -webkit-transition-delay: .65s;
        transition-delay: .65s;
    }
}

@media (min-width: 1260px) {
    .core-section {
        
    }
    .core-section_roles {
        padding-bottom: 144px;
    }
    .c-sectiontitle {
        padding-right: 25px;
        padding-left: 50px;
        width: 1224px;
    }
    .c-sliding-tabs__background-wrapper {
        height: 100vh;
    }
    .c-role__character {
        left: 10%;
    }
    .c-sliding-tabs__tabs {
        margin-left: -612px;
        top: 200px;
        width: 1224px;
    }
    .c-sliding-tabs__tabs h3 {
        font-size: 65px;
        letter-spacing: 14px;
        margin-bottom: 50px;
    }
    .c-sliding-tabs__tabs ul {
        float: right;
    }
}

@media (max-width: 1259px) {
    .core-section--light:before,
    .core-section:before {
        width: calc(100vw + 132px);
        left: -31px;
    }
}

@media (max-width: 1023px) {
    .core-section:before {
        background-size: 54px 54px;
        width: calc(100vw + 108px);
        left: -27px;
    }
    .c-sectiontitle {
        font-size: 15px;
        margin: 0;
        padding: 12px 60px 12px 90px;
    }
    .core-section_roles {
        padding-bottom: 85px;
    }
    .c-role__character {
        left: -140px;
    }
}

@media (max-width: 767px) {
    .core-section_roles {
        margin-top: -54px;
    }
    .c-role__character {
        left: -210px;
        width: 760px;
    }
    .c-role .character__static,
    .c-role .character__video {
        display: none;
    }
    .c-sectiontitle {
        padding-left: 25px;
        padding-right: 20px;
    }
    .c-sectiontitle--right {
        padding-left: 20px;
        padding-right: 25px;
    }
}


</style>
