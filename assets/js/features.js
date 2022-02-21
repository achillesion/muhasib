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
                                var videoTag = '<video class="c-video__defer character__video" playsinline muted><source src="' + videoSrc + '" type="video/mp4"></video>';
                                deferVideos[i].insertAdjacentHTML("afterbegin", videoTag);
                                var deferVideo = deferVideos[i].querySelector("video")
                                    // deferVideo.onended = function() {
                                    //     deferVideo.style.display = 'none';
                                    // }
                                    // var staticCharacter = deferVideos[i].querySelector(".character__static")
                                staticCharacter = (new SeeThru(deferVideo, { start: "external", end: "stop" })._init(), deferVideos[i].querySelector(".character__static"));
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
                        var roleSection = document.querySelector(".l-section_roles");
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